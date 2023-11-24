import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({ blog }: any) => {
  const date = new Date(blog.publishedAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const publishedAt = `${year}年${month}月${day}日`;

  return (
    <div className="mt-10">
      <Link href={`/blog/${blog.id}`}>
        <div className="">
          <Image
            src={blog.eyecatch?.url}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-xl mb-3"
            width={blog.eyecatch?.width}
            height={blog.eyecatch?.height}
          />
          <p className="text-xl font-bold">{blog.title}</p>
          <p className="text-gray-500">{publishedAt}</p>
        </div>
      </Link>
    </div>
  );
};
