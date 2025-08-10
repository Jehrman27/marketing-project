export const HeroSectionSimple = () => {
  return (
    <div className="bg-white w-full shadow-sm">
      <div>
        <h2 className="text-4xl font-semibold">Well crafted abstract images</h2>
        <p className="text-lg font-normal text-neutral-600">
          High quality abstract images for you projects, wallpaper and
          presentations.
        </p>
        <button className="py-3 px-5 rounded-sm shadow-sm border-1 border-neutral-200 bg-white text-neutral-900">
          Learn more
        </button>
        <button className="py-3 px-5 rounded-sm shadow-sm border-1 border-neutral-200 bg-indigo-700 text-white">
          See pricing
        </button>
      </div>
      <div>
        <img src="prism.png" className="object-cover w-fit" />
      </div>
    </div>
  );
};
