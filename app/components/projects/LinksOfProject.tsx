import Link from "next/link";
import MoreIcon from "../icons/MoreIcon";
import GithubIcon from "../icons/GithubIcon";
import WwwIcon from "../icons/WwwIcon";

export default function LinksOfProject({
  gitHubUrl,
  url,
}: {
  gitHubUrl: string | null | undefined;
  url: string | null | undefined;
}) {
  return (
    <section className="flex h-24 items-center  justify-center gap-8 overflow-hidden [&>*]:fill-inherit">
      {gitHubUrl && (
        <Link
          href={gitHubUrl || ""}
          target="_blank"
          className="[&>*]:fill-inherit"
          title="GitHub repository"
        >
          <GithubIcon />
        </Link>
      )}

      {url && (
        <Link
          href={url}
          target="_blank"
          className="[&>*]:fill-inherit"
          title="URL address"
        >
          <WwwIcon />
        </Link>
      )}
    </section>
  );
}
