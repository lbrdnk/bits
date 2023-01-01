import React from "react";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        // 65ch = tailwind's prose class container max-width
        // gridTemplateColumns: "minmax(0, 1fr) 65ch minmax(0, 1fr)"
      }}
      className="p-1"
    >
      <header className="flex flex-col items-end px-1 pb-2 border-b-2 mb-2">
        <h1 className="font-mono text-4xl">bits</h1>
        <h2 className="font-mono">memos to further reiterate</h2>
      </header>
      <main className="">{children}</main>
    </div>
  )
}
// grid md:grid-cols-[minmax(0,1fr)_65ch_minmax(0,1fr)] md:gap-4 p-1