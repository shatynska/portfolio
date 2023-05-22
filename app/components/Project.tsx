import Cell from "./Cell";

export default function Project({ projectId }: { projectId?: number }) {
  return (
    <article className="flex">
      <Cell className="cell-md bg-primary-200"></Cell>
      <Cell className="cell-md"></Cell>
      <Cell className="cell-md bg-primary-800 text-primary-100">
        {projectId}
      </Cell>
    </article>
  );
}
