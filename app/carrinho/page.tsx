import Link from "next/link";

export default function CarrinhoPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Carrinho</h1>
        <p className="mt-2 text-zinc-600">Seu carrinho está vazio.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Voltar para restaurantes
        </Link>
      </div>
    </div>
  );
}