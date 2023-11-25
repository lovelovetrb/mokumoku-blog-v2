import { client } from "@/app/_lib/client";
import { Header } from "@/app/_Components/Header";
import { BlogCard } from "@/app/_Components/BlogCard";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await client.get({ endpoint: "categories" });
  return posts.contents.map((post: any) => {
    return {
      id: post.id,
    };
  });
}

export default async function Home({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `category[equals]${id}` },
  });
  const categories = await client.get({
    endpoint: "categories",
    contentId: id,
  });
  const blog = data.contents;
  return (
    <main>
      <Header />
      <div className="mx-auto px-5 max-w-5xl">
        <div className="my-10 py-5 px-3 rounded-xl bg-white">
          <h2 className="container flex justify-center text-xl font-bold">
            タグ {categories.name} の記事
          </h2>
          {blog.length === 0 && (
            <p className="my-10 text-center">記事がありません</p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {blog.map((blog: any) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
          <hr className="my-8" />
          <Link href="/">
            <p className="">🏠 TOPに戻る</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
