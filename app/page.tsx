import { client } from "@/app/_lib/client";
import { Header } from "@/app/_Components/Header";
import { BlogCard } from "@/app/_Components/BlogCard";

export default async function Home() {
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;
  return (
    <main>
      <Header />
      <div className="mx-auto px-5 max-w-5xl">
        <div className="my-10 py-5 px-3 rounded-xl bg-white">
          <h2 className="container flex justify-center text-xl font-bold">
            記事一覧
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {blog.map((blog: any) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
