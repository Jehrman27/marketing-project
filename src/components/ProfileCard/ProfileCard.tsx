export type ProfileCardProps = {
  avatar: string;
  name: string;
  title: string;
  bio: string;
  github?: string;
  linkedIn?: string;
  instagram?: string;
  twitter?: string;
};

export const ProfileCard = ({
  avatar,
  name,
  title,
  bio,
  github,
  linkedIn,
  instagram,
  twitter,
}: ProfileCardProps) => {
  const socials = [
    { src: "github-fill.svg", link: github, platform: "GitHub" },
    { src: "linkedin-box-fill.svg", link: linkedIn, platform: "LinkedIn" },
    { src: "instagram-fill.svg", link: instagram, platform: "Instagram" },
    { src: "twitter-x-fill.svg", link: twitter, platform: "Twitter" },
  ].filter((social) => social.link && social.link.trim() !== "");

  return (
    <div className="flex flex-col gap-10 w-85 py-6 px-4 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col gap-6 items-center">
        <img src={avatar} className="w-16 rounded-full" />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium">{name}</h2>
          <p className="text-sm font-normal text-neutral-600">{title}</p>
        </div>
        <p className="text-neutral-600">{bio}</p>
      </div>
      <div className="flex flex-col gap-6">
        <button className="text-white bg-indigo-700 rounded-sm w-full py-2.5 shadow-sm">
          Contact me
        </button>
        {socials.length > 0 && (
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label={`Visit ${social.platform} profile`}
              >
                <img src={social.src} className="w-5" alt={social.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
