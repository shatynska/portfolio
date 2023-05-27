import Image from "next/image";
import Cell from "./Cell";

export default function Project({ projectId }: { projectId?: number }) {
  return (
    <article className="flex">
      <Cell className="cell-md border-b-2 border-primary-100 bg-primary-300">
        <Image
          src="/projects/pigeons.svg"
          alt="Web developer picture"
          width="220"
          height="100"
          className="object-cover"
        />
      </Cell>
      <Cell className="cell-md border-b-2"></Cell>
      <Cell className="cell-md border-b-2 border-primary-700 bg-primary-800 text-primary-100">
        {projectId}
      </Cell>
    </article>
  );
}
