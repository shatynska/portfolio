import Image from "next/image";
import Project from "../components/Project";
import Cell from "../components/Cell";

export default function SelectedProjects() {
  const selectedProjects = [6, 2, 3];

  return (
    <section className="flex w-96 gap-10 overflow-x-scroll md:w-[768px] lg:w-auto lg:flex-col lg:gap-0 lg:overflow-auto">
      {/* {selectedProjects.map((id) => (
        <Project projectId={id} />
      ))} */}

      <article className="flex flex-col lg:flex-row">
        <Cell className="cell-md items-center border-b-2 border-primary-50 bg-primary-300">
          <Image
            src="/projects/image.svg"
            alt="Web developer picture"
            width="80"
            height="100"
            className="object-cover"
          />
        </Cell>
        <Cell className="cell-md bg-primary-800 text-primary-100 lg:order-last">
          <h3>Drohobych Psychotherapists Union</h3>
          <p className="text-sm">CMS</p>
        </Cell>
        <Cell className="cell-md border-b-2 bg-primary-50">
          <p className="text-sm">Role: UI/UX Designer, Fullstack developer</p>
          <p className="text-sm">
            Stack: PHP, Laravel, TypeScript, React, Inertia, Tailwind
          </p>
        </Cell>
      </article>

      <article className="flex flex-col lg:flex-row">
        <Cell className="cell-md  items-center border-b-2 border-primary-50 bg-primary-300">
          <Image
            src="/projects/psy.svg"
            alt="Web developer picture"
            width="260"
            height="100"
            className="object-cover"
          />
        </Cell>
        <Cell className="cell-md bg-primary-700 text-primary-100 lg:order-last">
          <h3>Private psychology practice</h3>
          <p className="text-sm">Web application</p>
        </Cell>
        <Cell className="cell-md border-b-2 bg-primary-50">
          <p className="text-sm">Role: UI/UX Designer, Fullstack developer</p>
          <p className="text-sm">
            Stack: PHP, Laravel, React, TypeScript, Tailwind
          </p>
        </Cell>
      </article>

      <article className="flex flex-col lg:flex-row">
        <Cell className="cell-md  items-center border-b-2 border-primary-50 bg-primary-300">
          <Image
            src="/projects/pigeons.svg"
            alt="Web developer picture"
            width="220"
            height="100"
            className="object-cover"
          />
        </Cell>
        <Cell className="cell-md bg-primary-600 text-primary-100 lg:order-last">
          <h3>Web portfolio</h3>
          <p className="text-sm">Website</p>
        </Cell>
        <Cell className="cell-md border-b-2 bg-primary-50">
          <p className="text-sm">Role: UI/UX Designer, Frontend developer</p>
          <p className="text-sm">Stack: TypeScript, React, Next.js, Tailwind</p>
        </Cell>
      </article>

      <section className="hidden lg:flex">
        <Cell className="cell-sm border-l-2 bg-primary-50"></Cell>
        <Cell className="cell-sm items-center bg-primary-700 text-primary-100">
          Other projects &gt;
        </Cell>
        <Cell className="cell-sm bg-primary-300"></Cell>
      </section>
    </section>
  );
}
