import { Link } from '@/navigation';
import { PartOfProject } from '@/types';
import GithubIcon from '../icons/GithubIcon';
import WwwIcon from '../icons/WwwIcon';

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
    <section className="flex h-20 items-center  justify-center gap-8 overflow-hidden [&>*]:fill-inherit">
      {/* TODO Activate when inner pages will be ready */}
      {/* {moreInfo.length && (
        <Link
          href={`/projects/${moreInfo[0].id}`}
          className="[&>*]:fill-inherit"
          title="More information"
        >
          <MoreIcon />
        </Link>
      )} */}

      {gitHubUrl && (
        <Link
          href={gitHubUrl || ''}
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
