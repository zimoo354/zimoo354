import { cmsClient } from "@/lib/cms";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const StudyCase = async ({ params }: { params: { slug: string } }) => {
  const {
    items: [page],
  } = await cmsClient.getEntries({
    "fields.slug": params.slug,
    content_type: "studyCase",
  });

  const {
    fields: { title, slug, content, image },
  } = page;

  console.log();

  return (
    <div>
      <h1>Study case: {title}</h1>
      {documentToReactComponents(content)}
    </div>
  );
};

export default StudyCase;
