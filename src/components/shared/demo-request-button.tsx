"use client";
import { useId, useState, type ComponentProps } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/toast";
import { useDemoState } from "@/hooks/use-demo-state";

const schema = z.record(z.string(), z.object({ subject: z.string().trim().min(1).max(120), details: z.string().trim().min(10).max(2000) }));
const initial: z.infer<typeof schema> = {};
/** Preview a service-backed request without claiming to send it. */
export function DemoRequestButton({ requestKey, title, ...props }: ComponentProps<typeof Button> & { requestKey: string; title: string }) {
  const [open, setOpen] = useState(false);
  const [requests, saveRequests] = useDemoState("requests", initial, schema);
  const saved = requests[requestKey];
  const [subject, setSubject] = useState(title);
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const { addToast } = useToast();
  const id = useId();
  return <>
    <Button {...props} onClick={() => { setSubject(saved?.subject ?? title); setDetails(saved?.details ?? ""); setError(""); setOpen(true); }} />
    <Modal open={open} onClose={() => setOpen(false)} title={title}>
      <p className="mb-4 text-sm text-slate-600">Prepare a demo request. It stays in this browser tab and is not sent to anyone.</p>
      {saved && <p className="mb-4 text-sm text-green-800">A draft is saved. You can update it below.</p>}
      <form className="space-y-4" onSubmit={(event) => {
        event.preventDefault();
        const result = schema.safeParse({ ...requests, [requestKey]: { subject, details } });
        if (!result.success) { setError("Enter a subject and 10–2,000 characters of details."); return; }
        try { saveRequests(result.data); addToast("success", "Demo request saved. Nothing has been sent."); setOpen(false); } catch { setError("Could not save. Allow session storage and try again."); }
      }}>
        <Input label="Subject" value={subject} onChange={(event) => setSubject(event.target.value)} maxLength={120} />
        <label htmlFor={id} className="block text-sm font-medium">Details</label>
        <textarea id={id} rows={4} value={details} onChange={(event) => setDetails(event.target.value)} className="w-full rounded-lg border border-slate-300 p-3" maxLength={2000} aria-describedby={error ? `${id}-error` : undefined} />
        {error && <p role="alert" id={`${id}-error`} className="text-sm text-red-700">{error}</p>}
        <div className="flex justify-end gap-3"><Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button type="submit">Save demo request</Button></div>
      </form>
    </Modal>
  </>;
}
