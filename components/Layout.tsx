import React from "react";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  // todo md vs lg
  return (
    <div
      className="p-1 md:max-w-prose md:mx-auto lg:max-w-none md:grid lg:gap-4 md:grid-cols-[minmax(0,1fr)_65ch_minmax(0,1fr)]"
    >
      <header className="flex flex-col items-end px-1 pb-2 border-b-2 mb-2 lg:px-0 lg:pb-0 lg:border-b-0 lg:mb-0">
        <h1 className="font-mono text-4xl">bits</h1>
        <h2 className="font-mono text-right text-sm md:text-xs">notes to further reiterate</h2>
      </header>
      <main>{children}</main>
    </div>
  )
}
