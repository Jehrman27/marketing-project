import { HeroSectionSimple } from "../../components/HeroSectionSimple/HeroSectionSimple";
import HeroSectionImage from "/prism.png";

export const HeroSectionSimplePage = () => {
  return (
    <div className="p-4 h-screen">
      <HeroSectionSimple
        headerText="Well crafted abstract images"
        bodyText="High quality abstract images for your projects, wallpaper and
              presentations."
        image={HeroSectionImage}
      />
    </div>
  );
};
