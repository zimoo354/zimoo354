import { HOMEPAGE_CONTENT } from "@/constants/content";
import { JobExperience } from "@/components/common/JobExperience";
import { ContentBlock } from "@/components/common/ContentBlock";

const { jobExperiences } = HOMEPAGE_CONTENT;

export const PastExperience = () => (
  <>
    <ContentBlock title="Education">
      <p className="text-lg font-semibold">
        Universidad Autónoma de Querétaro - B.S. in Software Engineering
      </p>
      <p>Graduated in Dec 2017 | GPA 93 / 100</p>
    </ContentBlock>
    <ContentBlock title="Experience">
      {jobExperiences.map((position) => (
        <JobExperience key={position.companyName} {...position} />
      ))}
    </ContentBlock>
  </>
);
