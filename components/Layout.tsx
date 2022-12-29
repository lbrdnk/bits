import React from "react";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        gridTemplateColumns: "auto 65ch auto"
      }}
      className="grid gap-4"
    >
      <header className="p-2">
        <h1 className="text-right text-4xl">bits</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}