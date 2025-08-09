import { TestimonialCard } from "../../components/TestimonialCard/TestimonialCard";

export const TestimonialCardPage = () => {
  return (
    <div className="flex justify-center mt-25">
      <TestimonialCard
        avatar="profile.png"
        name="Sarah Dole"
        handle="@sarahdole"
        testimonial="I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!"
      />
    </div>
  );
};
