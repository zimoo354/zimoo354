import { ContentBlock } from "@/components/common/ContentBlock";
import { SocialLink } from "@/components/common/SocialLink";
import { CONTENT } from "@/constants/content";

const { socialLinks } = CONTENT;

export const SocialLinks = () => (
  <ContentBlock title="Links">
    {socialLinks.map((link) => (
      <SocialLink key={link.title} {...link} />
    ))}
  </ContentBlock>
);
