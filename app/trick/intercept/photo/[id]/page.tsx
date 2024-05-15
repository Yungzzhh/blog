import Image from "next/image";

export const PHOTOS = [
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

export default async function PhotoPage({ params }: any) {
  const photo = PHOTOS.find((p: any) => p.id === params.id)!;

  const path = `/InterceptRouterImage/${photo.id}.png`;
  return (
    <div>
      <div>this is detail page</div>
      image:
      <Image src={path} alt={`Cat `} width={500} height={300} />
    </div>
  );
}
