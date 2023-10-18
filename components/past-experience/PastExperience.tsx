import { HOMEPAGE_CONTENT } from "@/constants/content";
import { JobExperience } from "@/components/common/JobExperience";
import { ContentBlock } from "@/components/common/ContentBlock";

const { education, jobExperiences } = HOMEPAGE_CONTENT;

export const PastExperience = () => (
  <>
    <ContentBlock title="Experience">
      {jobExperiences.map((position) => (
        <JobExperience key={position.companyName} {...position} />
      ))}
    </ContentBlock>
    <ContentBlock title="Education">
      <JobExperience {...education} />
    </ContentBlock>
  </>
);
