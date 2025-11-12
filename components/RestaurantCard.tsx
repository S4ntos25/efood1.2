import CoverImage from "@/components/CoverImage";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  category?: string;
  imageSrc?: string;
  slug?: string;
};

export default function RestaurantCard({ title, description, category, imageSrc, slug }: Props) {
  return (
    <Link href={slug ? `/restaurante/${slug}` : "#"} className="rounded-lg overflow-hidden border border-zinc-200 bg-white shadow-sm">
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
      </div>
      <div className="p-4">
        {category && (
          <span className="text-xs font-medium text-primary uppercase">{category}</span>
        )}
        <h3 className="mt-1 text-lg font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600 line-clamp-3">{description}</p>
        <span className="mt-4 inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90">
          Saiba mais
        </span>
      </div>
    </Link>
  );
}