import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  open: boolean;
  title: string;
  children: React.ReactNode;
  confirmLabel?: string;
  danger?: boolean;
  onConfirm: () => void | Promise<void>;
  onClose: () => void;
}

export default function ConfirmDialog({ open, title, children, confirmLabel = "Confirm", danger, onConfirm, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    dialog.showModal();
    return () => dialog.close();
  }, [open]);

  if (!open) return null;
  return createPortal(
    <dialog ref={dialogRef} aria-modal="true" aria-labelledby="confirm-title" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} className="m-auto w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/10 bg-[#141414] p-0 text-white shadow-2xl backdrop:bg-black/65 backdrop:backdrop-blur-sm">
      <div className="p-5" onClick={(event) => event.stopPropagation()}>
        <h2 id="confirm-title" className="text-base font-semibold">{title}</h2>
        <div className="mt-2 text-sm text-white/50">{children}</div>
        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="rounded-lg px-3 py-2 text-sm text-white/50 hover:bg-white/5">Cancel</button>
          <button type="button" onClick={() => void onConfirm()} className={`rounded-lg px-3 py-2 text-sm font-medium ${danger ? "bg-red-500 text-white" : "bg-white text-black"}`}>{confirmLabel}</button>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
