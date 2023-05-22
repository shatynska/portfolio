import Project from "../components/Project";
import Cell from "../components/Cell";

export default function SelectedProjects() {
  const selectedProjects = [6, 2, 3];

  return (
    <section>
      {selectedProjects.map((id) => (
        <Project projectId={id} />
      ))}
      <section className="flex">
        <Cell className="cell-sm border-r-2"></Cell>
        <Cell className="cell-sm items-center bg-primary-700 text-primary-100">
          Other projects
        </Cell>
        <Cell className="cell-sm border-b-2 border-primary-100 bg-primary-200"></Cell>
      </section>
    </section>
  );
}
