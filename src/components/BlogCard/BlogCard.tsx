import ArrowRight from "/arrow-right-line.svg";

export type BlogCardProps = {
  image: string;
  badge: string;
  headerText: string;
  bodyText: string;
};

export const BlogCard = ({
  image,
  badge,
  headerText,
  bodyText,
}: BlogCardProps) => {
  return (
    <div className="w-85 bg-white rounded-lg shadow-sm">
      <img
        src={image}
        className="w-full h-72 object-cover rounded-t-lg"
        alt="blog post cover image"
      />
      <div className="flex flex-col gap-3 py-6 px-4">
        <div className="flex flex-col gap-2">
          <div className="w-fit text-sm font-normal text-green-700 bg-green-50 rounded-full py-0.5 px-2 border border-green-200">
            {badge}
          </div>
          <h1 className="text-lg font-semibold">{headerText}</h1>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-base font-medium text-neutral-600">{bodyText}</p>
          <button className="flex  items-center gap-1.5 text-indigo-700 text-base font-medium">
            Read more{" "}
            <img src={ArrowRight} className="w-5 h-5" alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
