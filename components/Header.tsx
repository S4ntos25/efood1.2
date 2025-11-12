import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight">efood</div>
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:opacity-90">Restaurantes</Link>
          <Link href="/carrinho" className="hover:opacity-90">Carrinho</Link>
        </nav>
      </div>
    </header>
  );
}