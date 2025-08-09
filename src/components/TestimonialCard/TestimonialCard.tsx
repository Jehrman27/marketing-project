export const TestimonialCard = () => {
  return (
    <>
      <div
        className="w-85 p-6 bg-white rounded-lg"
        style={{
          boxShadow:
            "0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)",
        }}
      >
        <div className="flex">
          <img
            src="profile.png"
            alt="user's profile image"
            className="w-12 h-12 rounded-full"
          />
          <div className="pl-4 mb-4">
            <h1 className="text-lg font-semibold">Sarah Dole</h1>
            <h2 className="text-sm text-left text-neutral-600">@sarahdole</h2>
          </div>
        </div>
        <p className="text-base text-left text-neutral-600">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>
    </>
  );
};
