import { BlogCard } from "../../components/BlogCard/BlogCard";
import BlogImage from "/blog-img.jpg";

export const BlogCardPage = () => {
  return (
    <div className="flex justify-center mt-30">
      <BlogCard
        image={BlogImage}
        badge="Interior"
        headerText="Top 5 Living Room Inspirations"
        bodyText="Curated vibrants colors for your living, make it pop & calm in the
            same time."
      />
    </div>
  );
};
