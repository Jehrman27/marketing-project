import { TestimonialCard } from "../../components/TestimonialCard/TestimonialCard";
import profileImage from "/profile.png";

export const TestimonialCardPage = () => {
  return (
    <div className="flex justify-center mt-25">
      <TestimonialCard
        avatar={profileImage}
        name="Sarah Dole"
        handle="@sarahdole"
        testimonial="I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!"
      />
    </div>
  );
};
