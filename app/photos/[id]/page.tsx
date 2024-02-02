export default function PhotoPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div className="card">{id}</div>;
}

export async function generateStaticParams() {
  const photos = Array.from({ length: 6 }, (_, i) => ({ id: String(i + 1) }));

  return photos.map((photo) => ({
    id: photo.id,
  }));
}
