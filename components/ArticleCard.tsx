import { RiCalendarEventFill } from "react-icons/ri";

interface Props {
  url: string;
  title: string;
  description: string;
  published_at: string;
  tag_list: string[];
}

export const ArticleCard = ({
  url,
  title,
  published_at,
  tag_list,
}: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      className="p-2 mb-2 border border-white hover:border-gray-200 rounded-md"
    >
      <h2 className="font-semibold text-xl">{title}</h2>
      <div className="flex space-x-6 items-center pt-2">
        <div className="flex space-x-2 items-center text-gray-500 text-sm">
          <RiCalendarEventFill />
          <span>{new Date(published_at).toLocaleDateString()}</span>
        </div>
        <ul className="flex space-x-4">
          {tag_list.map((tag, index) => {
            return (
              <li
                className="bg-gray-100 py-0.5 px-2 rounded-lg text-xs"
                key={index}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </a>
  );
};
