// src/app/page.tsx
import Image from "next/image";
import StoreTester from "@/components/StoreTester";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      {/* ──────────────────────────────────────────────────────────── */}
      {/*  Main content                                               */}
      {/* ──────────────────────────────────────────────────────────── */}
      <main className="row-start-2 flex flex-col items-center gap-12 sm:items-start">
        {/* App logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Our quick Zustand test widget */}
        <StoreTester />
      </main>

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  Footer                                                     */}
      {/* ──────────────────────────────────────────────────────────── */}
      <footer className="row-start-3 text-sm text-muted-foreground">
        © 2025 Vibe Vinci
      </footer>
    </div>
  );
}

