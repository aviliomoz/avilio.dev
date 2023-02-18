import { ArrowLink } from "@/components/ArrowLink";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/utils/articles";

export default async function ArticlesPage() {
  const articles: any[] = await getArticles();

  return (
    <section>
      <h1 className="font-bold text-3xl mb-8 pb-4 border-b">Articles</h1>
      <div className="flex flex-col">
        {articles.map(
          ({ id, url, title, description, published_at, tag_list }) => {
            return (
              <ArticleCard
                key={id}
                url={url}
                title={title}
                description={description}
                published_at={published_at}
                tag_list={tag_list}
              />
            );
          }
        )}
      </div>
      <ArrowLink text="Contact me" path="/contact" />
    </section>
  );
}