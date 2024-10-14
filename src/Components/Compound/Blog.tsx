export type Blog = {
  title: string;
  author: string;
  date: string;
  description: string;
};

export const BlogComponent: React.FC<Blog> = ({ author, date, description, title }) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>{title}</li>
        <li>{description}</li>
        <li>{author}</li>
        <li>{date}</li>
      </ul>
      <p>Blog content</p>
    </div>
  );
};
