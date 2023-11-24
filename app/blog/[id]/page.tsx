import { client } from "@/app/_lib/client";
import { Header } from "@/app/_Components/Header";
import Link from "next/link";
import Image from "next/image";
import cheerio from "cheerio";
import { ToC } from "@/app/_Components/ToC";

export async function generateStaticParams() {
  const posts = await client.get({ endpoint: "blog" });
  return posts.contents.map((post: any) => {
    return {
      id: post.id,
    };
  });
}

export default async function BlogId({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await client.get({ endpoint: "blog", contentId: id });
  const $ = cheerio.load(data.content);
  const headings = $("h1, h2, h3").toArray();
  const toc = headings.map((data: any) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }));

  return (
    <main>
      <Header />
      <div className="my-5 mx-auto px-5 max-w-5xl">
        <div className="py-10 px-5 bg-white rounded">
          <Image
            src={data.eyecatch?.url}
            alt={data.title}
            className="w-full h-64 object-cover mb-5"
            width={data.eyecatch?.width}
            height={data.eyecatch?.height}
          />
          <h1 className="text-2xl lg:text-3xl text-center mb-5 font-extrabold">
            {data.title}
          </h1>
          <hr className="my-8" />
          <ToC tocContent={toc} />
          <hr className="my-8" />
          <div
            className="prose prose-slate"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <hr className="my-8" />
          <Link href="/">
            <p className="">🏠 TOPに戻る</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
