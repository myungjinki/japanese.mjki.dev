import Link from "next/link";
import { japaneseDict } from "../utils/db";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {japaneseDict.map((word) => (
        <Link
          className="flex flex-col items-center p-4 border-2 rounded-xl"
          key={word.id}
          href={`/${word.id}`}
        >
          <div>{`${word.root.kanji}${word.verb.kanji}`}</div>
          <div className="text-xs">{`${word.root.korean}${word.verb.korean}`}</div>
        </Link>
      ))}
    </div>
  );
}
