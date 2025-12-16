"use client"

import { useState } from "react"

export default function DetailsPdf({ pdfUrl }: { pdfUrl?: string }) {
  const [open, setOpen] = useState(false)
  const url = pdfUrl ?? "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"

  return (
    <div>
      <button
        onClick={() => {
          window.open(url, "_blank")
          setOpen(true)
        }}
        className="mt-4 inline-flex items-center rounded-md bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent hover:bg-accent/20"
      >
        + de détails
      </button>

      {open && (
        <div className="mt-6">
          <iframe
            src={url}
            className="w-full h-[600px] border"
            title="Détails PDF"
          />
        </div>
      )}
    </div>
  )
}
