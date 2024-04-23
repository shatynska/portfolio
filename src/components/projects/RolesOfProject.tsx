import { Role } from '@/types';
import { useTranslations } from 'next-intl';

export default function RolesOfProject({
  roles = [],
}: {
  roles: Role[] | undefined;
}) {
  const t = useTranslations('Index');

  const rolesIds = roles?.map((role) => role.id);
  const isFullstack = [2, 3].every((roleId) => rolesIds?.includes(roleId));

  let rolesArray = [];

  if (roles) {
    for (const role of roles) {
      if (role.id === 1 || !isFullstack) {
        rolesArray.push(role.title);
      } else {
        rolesArray.push(t(`Fullstack developer`).toLocaleLowerCase());
        break;
      }
    }
  }

  return (
    <div className="h-8 truncate [&>span:not(:last-child)]:after:content-[',\a0']">
      {t('Roles')}:&nbsp;
      {rolesArray.map((role) => (
        <span key={role}>{role}</span>
      ))}
    </div>
  );
}
