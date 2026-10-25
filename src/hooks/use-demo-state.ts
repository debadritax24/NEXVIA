"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { z } from "zod";

const cache = new Map<string, unknown>();
const listeners = new Set<() => void>();

/** Tab-scoped demonstration data. Never use this store for permissions or server records. */
export function useDemoState<T>(key: string, initial: T, schema: z.ZodType<T>) {
  const storageKey = `nexvia-demo:${key}`;
  const subscribe = useCallback((notify: () => void) => {
    listeners.add(notify);
    if (!cache.has(storageKey)) {
      try {
        const raw = sessionStorage.getItem(storageKey);
        const result = raw ? schema.safeParse(JSON.parse(raw)) : null;
        cache.set(storageKey, result?.success ? result.data : initial);
      } catch { cache.set(storageKey, initial); }
      notify();
    }
    return () => { listeners.delete(notify); };
  }, [storageKey, initial, schema]);
  const value = useSyncExternalStore(subscribe, () => (cache.get(storageKey) as T | undefined) ?? initial, () => initial);
  const setValue = (next: T) => {
    const parsed = schema.parse(next);
    // Write first: storage failures must not appear as successful saves.
    sessionStorage.setItem(storageKey, JSON.stringify(parsed));
    cache.set(storageKey, parsed);
    listeners.forEach((notify) => notify());
  };
  return [value, setValue] as const;
}
