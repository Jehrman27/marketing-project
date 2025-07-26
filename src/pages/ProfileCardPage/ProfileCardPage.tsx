const socials = [
  { src: "github-fill.svg", link: "" },
  { src: "instagram-fill.svg", link: "" },
  { src: "linkedin-box-fill.svg", link: "" },
  { src: "twitter-x-fill.svg", link: "" },
];

export const ProfileCardPage = () => {
  return (
    <div className="flex flex-col gap-10 mt-50 w-85 mx-auto py-6 px-4 bg-white rounded-lg">
      <div className="flex flex-col gap-6 items-center">
        <img src="/profile.png" className="w-16 rounded-full" />
        <div>
          <h2>Sarah Dole</h2>
          <p>Frontn End Engineer @ Microsoft</p>
        </div>
        <p>
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer.
        </p>
      </div>
      <div>
        <button>Contact Me</button>
        <div>
          {socials.map((social) => (
            <button className="w-9 p-2">
              <img src={social.src} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
