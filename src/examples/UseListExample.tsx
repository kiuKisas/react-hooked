import useList from "@/hooks/useList";

export default function UseListExample() {
  const [list, { push, removeAt, insertAt, updateAt, clear }] = useList([
    1, 2, 3,
  ]);

  return (
    <div className="text-ctp-text">
      <div className="flex gap-4">
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={() => push(4)}
        >
          Push 4
        </button>
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={() => removeAt(1)}
        >
          Remove at 1
        </button>
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={() => insertAt( 1,4)}
        >
          Insert at 1 4
        </button>
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={() => updateAt(1,4)}
        >
          Update at 1 to 4
        </button>
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={() => clear()}
        >
          Clear
        </button>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
