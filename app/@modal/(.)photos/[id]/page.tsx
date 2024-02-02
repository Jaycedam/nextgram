import { Modal } from "./modal";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const { id } = params;
  return <Modal>{id}</Modal>;
}

export async function generateStaticParams() {
  const photos = Array.from({ length: 6 }, (_, i) => ({ id: String(i + 1) }));

  return photos.map((photo) => ({
    id: photo.id,
  }));
}
