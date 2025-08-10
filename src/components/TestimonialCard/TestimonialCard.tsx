export type TestimonialCardProps = {
  avatar: string;
  name: string;
  handle: string;
  testimonial: string;
};

export const TestimonialCard = ({
  avatar,
  name,
  handle,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="w-85 p-6 bg-white rounded-lg shadow-sm">
      <div className="flex">
        <img
          src={avatar}
          alt={`${name}'s profile image`}
          className="w-12 h-12 rounded-full"
        />
        <div className="pl-4 mb-4">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h2 className="text-sm text-neutral-600">{handle}</h2>
        </div>
      </div>
      <p className="text-base text-neutral-600">{testimonial}</p>
    </div>
  );
};
