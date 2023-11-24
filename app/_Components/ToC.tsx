import Link from "next/link";

type ToC = {
  text: string;
  id: string;
  name: string;
};

type ToCProps = {
  tocContent: ToC[];
};

export const ToC = ({ tocContent }: ToCProps) => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold">📝 目次</h3>
      <ul className="ml-3 mt-3">
        {tocContent.map((toc: any) => (
          <li key={toc.id} className="mt-5">
            <Link href={`#${toc.id}`}>{toc.text}</Link>
          </li>
        ))}
      </ul>
      <div className="ml-5"></div>
    </div>
  );
};
