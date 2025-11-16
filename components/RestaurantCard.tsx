import CoverImage from "@/components/CoverImage";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  category?: string;
  imageSrc?: string;
  slug?: string;
  rating?: number;
  featured?: boolean;
};

export default function RestaurantCard({ title, description, category, imageSrc, slug, rating, featured }: Props) {
  return (
    <Link href={slug ? `/restaurante/${slug}` : "#"} className="rounded-lg overflow-hidden border border-primary/40 bg-white shadow">
      <div className="relative aspect-[4/3] w-full">
        {(() => {
          const seed = encodeURIComponent(slug ?? title.toLowerCase().replace(/\s+/g, "-"));
          const fallbackSrc = `https://picsum.photos/seed/${seed}/1200/900`;
          return (
            <CoverImage
              src={imageSrc ?? fallbackSrc}
              fallbackSrc={fallbackSrc}
              alt={title}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          );
        })()}
        <div className="absolute inset-x-0 top-0 flex justify-between p-3">
          {featured && (
            <span className="rounded bg-primary px-2 py-1 text-xs font-semibold text-white">Destaque da semana</span>
          )}
          {category && (
            <span className="ml-auto rounded bg-black/60 px-2 py-1 text-xs font-medium text-white capitalize">{category}</span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
          {typeof rating === "number" && (
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-800" aria-label={`Avaliação ${rating.toFixed(1)} de 5`}>
              {rating.toFixed(1)} <span aria-hidden>★</span>
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-zinc-600 line-clamp-3">{description}</p>
        <span className="mt-4 inline-flex items-center justify-center rounded border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white">
          Saiba mais
        </span>
      </div>
    </Link>
  );
}