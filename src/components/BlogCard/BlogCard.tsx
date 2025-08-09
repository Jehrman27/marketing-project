export const BlogCard = () => {
  return (
    <div className="blog-card">
      <img
        src="/img/spacejoy-YqFz7UMm8qE-unsplash.jpg"
        className="blog-card-image"
      />
      <div className="blog-card-details">
        <div className="blog-card-header">
          <div className="blog-card-tag">Interior</div>
          <h1 className="blog-card-title">Top 5 Living Room Inspirations</h1>
        </div>
        <div className="blog-card-body">
          <p className="blog-card-text">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <div className="blog-card-action-container">
            <button className="blog-card-action">Read more</button>
            <img src="/img/arrow-right-line.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
