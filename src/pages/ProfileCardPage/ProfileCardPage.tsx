import { ProfileCard } from "../../components/ProfileCard/ProfileCard";

export const ProfileCardPage = () => {
  return (
    <ProfileCard
      avatar="profile.png"
      name="Sarah Dole"
      title="Front End Engineer @ Microsoft"
      bio="I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer."
      github="https://github.com"
      linkedIn="https://linkedin.com"
      instagram="https://instagram.com"
      twitter="https://twitter.com"
    />
  );
};
