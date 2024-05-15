import Image from "next/image";
import Link from "next/link";

export default function Intercept() {
  const PHOTOS = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];

  return (
    <div className="flex gap-4">
      {PHOTOS.map((p) => (
        <Link href={`/trick/intercept/photo/${p.id}`} key={p.id}>
          <Image
            src={`/InterceptRouterImage/${p.id}.png`}
            alt={"image.alt_description"}
            priority
            width={200}
            height={200}
            style={{ borderRadius: "10px" }}
          />
        </Link>
      ))}
    </div>
  );
}
