import { japaneseDict } from "../utils/db";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {japaneseDict.map((word) => (
        <div key={word.id} className="flex flex-col items-center p-4 border-2 rounded-xl">
          <div>{`${word.root.kanji}${word.verb.kanji}`}</div>
          <div className="text-xs">{`${word.root.korean}${word.verb.korean}`}</div>
        </div>
      ))}
    </div>
  );
}
