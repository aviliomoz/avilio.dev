// import { ArrowLink } from "@/components/ArrowLink";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/utils/articles";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Avilio Muñoz",
  description: "Avilio Muñoz's portfolio articles page",
};

export default async function ArticlesPage() {
  const articles: any[] = await getArticles();

  return (
    <section>
      <h1 className="font-bold text-3xl mb-8 pb-4 border-b text-gray-800 dark:text-white">
        Articles
      </h1>
      <div className="flex flex-col">
        {articles.map(({ id, url, title, description, published_at }) => {
          return (
            <ArticleCard
              key={id}
              url={url}
              title={title}
              description={description}
              published_at={published_at}
            />
          );
        })}
      </div>
      {/* <ArrowLink text="See my projects" path="/projects" /> */}
    </section>
  );
}
