export const TestimonialCard = () => {
  return (
    <>
      <div className="testimonial-card">
        <div className="testimonial-card-header">
          <img
            src="img/profile-thumbnail.png"
            alt="user's profile image"
            className="avatar"
          />
          <div className="user-info">
            <h1 className="name">Sarah Dole</h1>
            <h2 className="username">@sarahdole</h2>
          </div>
        </div>
        <p className="testimonial-card-body">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>

      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by
        <a href="https://www.greatfrontend.com/projects/u/jehr" target="_blank">
          Jonathan Ehrmantraut
        </a>
        .
      </div>
    </>
  );
};
