import Link from "next/link";
import MoreIcon from "../icons/MoreIcon";
import GithubIcon from "../icons/GithubIcon";
import WwwIcon from "../icons/WwwIcon";
import { PartOfProject } from "@/types";

export default function LinksOfProject({
  moreInfo,
  gitHubUrl,
  url,
}: {
  moreInfo: PartOfProject[];
  gitHubUrl: string | null | undefined;
  url: string | null | undefined;
}) {
  return (
    <section className="flex h-24 items-center  justify-center gap-8 overflow-hidden [&>*]:fill-inherit">
      {Boolean(moreInfo.length) && (
        <Link
          href={"/"}
          target="_blank"
          className="[&>*]:fill-inherit"
          title="More information"
        >
          <MoreIcon />
        </Link>
      )}

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
