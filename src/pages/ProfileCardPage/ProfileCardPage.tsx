const socials = [
  { src: "github-fill.svg", link: "" },
  { src: "linkedin-box-fill.svg", link: "" },
  { src: "instagram-fill.svg", link: "" },
  { src: "twitter-x-fill.svg", link: "" },
];

export const ProfileCardPage = () => {
  return (
    <div
      className="flex flex-col gap-10 mt-50 w-85 mx-auto py-6 px-4 bg-white rounded-lg"
      style={{
        boxShadow:
          "0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)",
      }}
    >
      <div className="flex flex-col gap-6 items-center">
        <img src="/profile.png" className="w-16 rounded-full" />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium">Sarah Dole</h2>
          <p className="text-sm font-normal text-neutral-600">
            Front End Engineer @ Microsoft
          </p>
        </div>
        <p className="text-neutral-600">
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <button className="text-white bg-indigo-700 rounded-sm w-full py-2.5 shadow-sm">
          Contact me
        </button>
        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <button className="p-2">
              <img src={social.src} className="w-5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
