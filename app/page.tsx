import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";

export default async function Home() {
  const restaurants = [
    {
      title: "Hioki Sushi",
      description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.",
      category: "Japonesa",
      slug: "hioki-sushi",
      imageSrc: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      rating: 4.9,
      featured: true,
    },
    ...Array.from({ length: 5 }).map(() => ({
      title: "La Dolce Vita Trattoria",
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis.",
      category: "Italiana",
      slug: "la-dolce-vita-trattoria",
      imageSrc:
        "https://images.unsplash.com/photo-1505980773458-2e97b3d0bf3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      rating: 4.6,
    })),
  ];

  return (
    <div className="min-h-screen bg-[#FFEBD9] text-zinc-900">
      <Header />

      <section className="mx-auto max-w-6xl px-4">
        <div className="mt-6 rounded-2xl bg-[#FFE0D3] hero-pattern border border-[#f5c8c0] px-6 py-10 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-white text-lg font-bold">efood</div>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-primary">Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {restaurants.map((r, i) => (
            <RestaurantCard
              key={`${r.slug}-${i}`}
              title={r.title}
              description={r.description}
              category={r.category}
              imageSrc={r.imageSrc}
              slug={r.slug}
              rating={r.rating}
              featured={r.featured}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
