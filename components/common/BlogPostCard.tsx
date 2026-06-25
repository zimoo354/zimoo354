export type BlogPost = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  imageUrl: string | null;
};

export const BlogPostCard = ({ title, description, link, pubDate, imageUrl }: BlogPost) => {
  const date = new Date(pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-4 group rounded-lg p-4 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50"
    >
      {imageUrl && (
        <div className="w-full h-64 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 min-w-0">
        <time className="text-sm text-slate-500 dark:text-slate-400">{date}</time>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 line-clamp-2">{description}</p>
      </div>
    </a>
  );
};
