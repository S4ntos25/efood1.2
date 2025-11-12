import Link from "next/link";
import CoverImage from "@/components/CoverImage";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function RestaurantePage({ params }: Props) {
  const { slug } = await params;
  const covers: Record<string, { local?: string; remote?: string }> = {
    "restaurante-japones": { remote: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop" },
    pizzaria: {
      local: "/images/pizzaria.jpg",
      remote: "https://images.unsplash.com/photo-1593562332386-3e3a4a6aff91?q=80&w=1600&auto=format&fit=crop",
    },
    hamburgueria: { remote: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop" },
    "comida-brasileira": { remote: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop" },
    doceria: { remote: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop" },
    veggie: { remote: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop" },
  };
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(slug)}/1600/900`;
  const cover = covers[slug] ?? { remote: fallback };
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <nav className="text-sm text-zinc-600">
          <Link href="/" className="hover:underline">← Voltar</Link>
        </nav>
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight capitalize">{slug.replace(/-/g, " ")}</h1>
          <p className="mt-2 text-zinc-600">Detalhes do restaurante</p>
        </header>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <CoverImage
                src={cover.local ?? cover.remote ?? fallback}
                fallbackSrc={fallback}
                alt={`Foto de capa do restaurante ${slug}`}
                sizes="(min-width:1024px) 66vw, 100vw"
                priority
              />
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-zinc-200 bg-white p-4">
              <p className="text-sm text-zinc-700">Cardápio e informações em breve.</p>
              <Link
                href="/carrinho"
                className="mt-4 inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Ir para o carrinho
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}