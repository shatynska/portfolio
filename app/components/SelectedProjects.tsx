import Image from "next/image";
import Project from "../components/Project";
import Cell from "../components/Cell";

export default function SelectedProjects() {
  const selectedProjects = [6, 2, 3];

  return (
    <section>
      {/* {selectedProjects.map((id) => (
        <Project projectId={id} />
      ))} */}

      <article className="flex">
        <Cell className="cell-md  items-center border-b-2 border-white bg-primary-200">
          <Image
            src="/projects/image.svg"
            alt="Web developer picture"
            width="80"
            height="100"
            className="object-cover"
          />
        </Cell>
        <Cell className="cell-md border-b-2">
          <p className="text-sm">Role: UI/UX Designer, Fullstack developer</p>
          <p className="text-sm">
            Stack: PHP, Laravel, TypeScript, React, Inertia, Tailwind
          </p>
        </Cell>
        <Cell className="cell-md border-b-2 border-primary-900 bg-primary-800 text-primary-100">
          <h3 className="text-xl">Drohobych Psychotherapists Union</h3>
          <p className="text-sm">CMS</p>
        </Cell>
      </article>

      <article className="flex">
        <Cell className="cell-md  items-center border-b-2 border-white bg-primary-200">
          <Image
            src="/projects/psy.svg"
            alt="Web developer picture"
            width="260"
            height="100"
            className="object-cover"
          />
        </Cell>
        <Cell className="cell-md border-b-2">
          <p className="text-sm">Role: UI/UX Designer, Fullstack developer</p>
          <p className="text-sm">
            Stack: PHP, Laravel, React, TypeScript, Tailwind
          </p>
        </Cell>
        <Cell className="cell-md border-b-2 border-primary-800 bg-primary-700 text-primary-100">
          <h3 className="text-xl">Private psychology practice</h3>
          <p className="text-sm">Web application</p>
        </Cell>
      </article>

      <article className="flex">
        <Cell className="cell-md  items-center border-b-2 border-white bg-primary-200">
          <Image
            src="/projects/pigeons.svg"
            alt="Web developer picture"
            width="220"
            height="100"
            className="object-cover"
          />
        </Cell>
        <Cell className="cell-md border-b-2">
          <p className="text-sm">Role: UI/UX Designer, Frontend developer</p>
          <p className="text-sm">Stack: TypeScript, React, Next.js, Tailwind</p>
        </Cell>
        <Cell className="cell-md border-b-2 border-primary-700 bg-primary-600 text-primary-100">
          <h3 className="text-xl">Web portfolio</h3>
          <p className="text-sm">Website</p>
        </Cell>
      </article>

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
