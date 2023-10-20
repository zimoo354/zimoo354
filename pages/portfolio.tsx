import { BigAssTitle } from "@/components/common/BigAssTitle";
import { PageWrapper } from "@/components/common/PageWrapper";
import { PortfolioItem } from "@/components/common/PortfolioItem";
import { CONTENT } from "@/constants/content";

const { portfolioItems } = CONTENT;

const Portfolio = () => {
  return (
    <PageWrapper className="flex flex-col px-8 relative">
      <BigAssTitle>PORTFOLIO</BigAssTitle>
      <>
        {portfolioItems.map((item, idx) => (
          <PortfolioItem key={item.title} {...item} rtl={idx % 2 !== 0} />
        ))}
      </>
    </PageWrapper>
  );
};

export default Portfolio;
