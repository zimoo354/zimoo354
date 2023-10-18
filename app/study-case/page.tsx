import { cmsClient } from "@/lib/cms";
import Link from "next/link";

export default async function StudyCasesIndex() {
  const { items } = await cmsClient.getEntries<{
    contentTypeId: string;
    fields: {
      title: string;
      slug: string;
    };
  }>({
    content_type: "studyCase",
  });

  return (
    <div>
      <h2>Study cases:</h2>
      {items.map(({ fields: post }) => (
        <li key={post.slug}>
          <Link href={`/study-case/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
}
