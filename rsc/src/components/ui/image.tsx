export const EventImage = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      alt={name}
      className="w-96 h-48 object-cover overflow-hidden"
    />
  );
};
