interface Props {
  url: string;
  title: string;
  description: string;
  published_at: string;
}

export const ArticleCard = ({ url, title, published_at }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      className="group flex justify-between items-center mb-4"
    >
      <div className="flex pr-10">
        <div className="w-0 group-hover:w-0.5 group-hover:mr-2 transition-all bg-gray-200 rounded-md dark:bg-white"></div>
        <h2 className="font-normal group-hover:font-medium text-lg group-hover:text-gray-800 dark:text-white dark:group-hover:text-white">
          {title}
        </h2>
      </div>
      <span className="text-gray-500 text-sm dark:text-white">
        {new Date(published_at).toLocaleDateString()}
      </span>
    </a>
  );
};
