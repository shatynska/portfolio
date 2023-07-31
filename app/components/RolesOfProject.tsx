import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";

type Role = {
  id: number;
  titleEn: string;
  titleUa: string;
};

export default async function RolesOfProject({
  roles = [],
}: {
  roles: Role[] | undefined;
}) {
  const locale = useLocale();
  const t = await getTranslator(locale, "Index");

  const rolesIds = roles?.map((role) => role.id);
  const isFullstack = [2, 3].every((roleId) => rolesIds?.includes(roleId));

  const localeForTitle = locale[0].toUpperCase() + locale.substring(1);

  let rolesArray = [];

  if (roles) {
    for (const role of roles) {
      if (role.id === 1 || !isFullstack) {
        rolesArray.push(role[`title${localeForTitle}` as keyof typeof role]);
      } else {
        rolesArray.push(t(`Fullstack developer`));
        break;
      }
    }
  }

  return (
    <span className="[&>span:not(:last-child)]:after:content-[',\a0']">
      {rolesArray.map((role) => (
        <span>{role}</span>
      ))}
    </span>
  );
}
