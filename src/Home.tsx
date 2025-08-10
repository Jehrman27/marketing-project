import { Link } from "react-router";

function Home() {
  return (
    <div className="mt-7">
      <h1>GreatFrontEnd Marketing Project</h1>
      <h2 className="mt-7 text-2xl">Available Components:</h2>
      <ul className="flex mt-5 flex-col gap-2">
        <Link to="/testimonial-card">Testimonial Card</Link>
        <Link to="/blog-card">Blog Card</Link>
        <Link to="/profile-card">Profile Card</Link>
        <Link to="/hero-section-simple">Hero Section Simple</Link>
      </ul>
    </div>
  );
}

export default Home;
