import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

type ConfirmationVariant = "danger" | "warning" | "info";

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: ConfirmationVariant;
}

const iconPaths: Record<ConfirmationVariant, string> = {
  danger:
    "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  warning:
    "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  info:
    "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
};

const iconColors: Record<ConfirmationVariant, string> = {
  danger: "text-red-500",
  warning: "text-amber-500",
  info: "text-blue-500",
};

const confirmVariant: Record<ConfirmationVariant, "primary" | "secondary"> = {
  danger: "primary",
  warning: "primary",
  info: "primary",
};

export function ConfirmationDialog({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "danger",
}: ConfirmationDialogProps) {
  return (
    <Modal open={open} onClose={onClose} title={title} size="sm">
      <div className="flex flex-col items-center text-center">
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-${variant === "danger" ? "red" : variant === "warning" ? "amber" : "blue"}-100`}
        >
          <svg
            className={`h-6 w-6 ${iconColors[variant]}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={iconPaths[variant]}
            />
          </svg>
        </div>
        <p className="text-sm text-slate-600 mb-6">{message}</p>
        <div className="flex w-full gap-3">
          <Button
            variant="secondary"
            size="md"
            className="flex-1"
            onClick={onClose}
          >
            {cancelLabel}
          </Button>
          <Button
            variant={confirmVariant[variant]}
            size="md"
            className="flex-1"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
