export const HeroSectionSimple = () => {
  return (
    <div className="flex flex-col justify-center bg-white w-full h-full shadow-sm">
      <div className="py-12 px-3 flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold">
              Well crafted abstract images
            </h2>
            <p className="text-lg font-normal text-neutral-600">
              High quality abstract images for you projects, wallpaper and
              presentations.
            </p>
          </div>
          <div className="flex  gap-4">
            <button className="flex-1 py-3 px-5 rounded-sm shadow-sm border-1 border-neutral-200 bg-white text-neutral-900 text-base font-medium">
              Learn more
            </button>
            <button className="flex-1 py-3 px-5 rounded-sm shadow-sm border-1 border-neutral-200 bg-indigo-700 text-white">
              See pricing
            </button>
          </div>
        </div>
        <div>
          <img src="prism.png" />
        </div>
      </div>
    </div>
  );
};
