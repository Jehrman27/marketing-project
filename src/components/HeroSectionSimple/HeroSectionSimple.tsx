export type HeroSectionSimpleProps = {
  headerText: string;
  bodyText: string;
  image: string;
};

export const HeroSectionSimple = ({
  headerText,
  bodyText,
  image,
}: HeroSectionSimpleProps) => {
  return (
    <div className="flex flex-col justify-center bg-white w-full rounded-sm shadow-2xl">
      <div className="flex flex-col py-12 px-3 gap-12 md:py-16 md:px-4 md:gap-8 lg:flex-row lg:py-24 lg:px-24 lg:items-center">
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              {headerText}
            </h2>
            <p className="text-lg font-normal text-neutral-600 md:text-xl">
              {bodyText}
            </p>
          </div>
          <div className="flex gap-4 md:gap-8 md:w-[458px] lg:w-[383px]">
            <button
              type="button"
              className="flex-1 py-3 px-5 rounded-sm shadow-sm border-1 border-neutral-200 bg-white text-neutral-900 text-base font-medium md:py-4"
              aria-label="Learn more"
            >
              Learn more
            </button>
            <button
              type="button"
              className="flex-1 py-3 px-5 rounded-sm shadow-sm border-1 border-neutral-200 bg-indigo-700 text-white text-base font-medium md:py-4"
              aria-label="See pricing"
            >
              See pricing
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt="hero image" />
        </div>
      </div>
    </div>
  );
};
