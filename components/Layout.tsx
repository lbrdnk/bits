import React from "react";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main><div>cicmbbrusko</div>{children}</main>
    </>
  )
}