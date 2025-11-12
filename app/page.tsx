import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";

export default async function Home() {
  const restaurants = [
    {
      title: "Restaurante Japonês",
      description: "Sushis e sashimis frescos com ingredientes selecionados.",
      category: "japonês",
      slug: "restaurante-japones",
      imageSrc:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Pizzaria",
      description: "Pizzas artesanais com massa de longa fermentação.",
      category: "italiano",
      slug: "pizzaria",
      imageSrc: "/images/pizzaria.jpg",
    },
    {
      title: "Hamburgueria",
      description: "Smash burgers suculentos e acompanhamentos crocantes.",
      category: "american",
      slug: "hamburgueria",
      imageSrc:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Comida Brasileira",
      description: "Pratos típicos com sabor caseiro e ingredientes locais.",
      category: "brasileiro",
      slug: "comida-brasileira",
      imageSrc:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Doceria",
      description: "Sobremesas artesanais e cafés especiais.",
      category: "doces",
      slug: "doceria",
      imageSrc:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Veggie",
      description: "Opções veganas e vegetarianas equilibradas e saborosas.",
      category: "vegano",
      slug: "veggie",
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header />
      <section className="bg-primary/5">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-bold tracking-tight">Restaurantes</h1>
          <p className="mt-2 text-zinc-600">Escolha por categoria e explore os cardápios.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((r) => (
              <RestaurantCard
                key={r.title}
                title={r.title}
                description={r.description}
                category={r.category}
                imageSrc={r.imageSrc}
                slug={r.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
