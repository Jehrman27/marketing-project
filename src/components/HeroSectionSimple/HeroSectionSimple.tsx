export const HeroSectionSimple = () => {
  return (
    <div className="flex flex-col justify-center bg-white w-full min-h-full rounded-sm shadow-sm">
      <div className="py-12 md:py-16 px-3 md:px-4 flex flex-col gap-12 md:gap-8">
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Well crafted abstract images
            </h2>
            <p className="text-lg md:text-xl font-normal text-neutral-600">
              High quality abstract images for you projects, wallpaper and
              presentations.
            </p>
          </div>
          <div className="flex gap-4 md:gap-8">
            <button className="flex-1 md:flex-none py-3 md:py-4 px-5 md:w-53.25 rounded-sm shadow-sm border-1 border-neutral-200 bg-white text-neutral-900 text-base font-medium">
              Learn more
            </button>
            <button className="flex-1 md:flex-none py-3 md:py-4 px-5 md:w-53.25 rounded-sm shadow-sm border-1 border-neutral-200 bg-indigo-700 text-white">
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
