interface YandexMapProps {
  address: string;
  coordinates: [number, number];
}

export function YandexMap({ coordinates }: YandexMapProps) {
  const [latitude, longitude] = coordinates;
  
  return (
    <iframe
      src={`https://yandex.com/map-widget/v1/?ll=${longitude},${latitude}&z=16&pt=${longitude},${latitude},comma&lang=en_US`}
      width="100%"
      height="300"
      frameBorder="0"
      className="rounded-lg"
      allowFullScreen
    />
  );
}