import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";

type Role = {
  id: number;
  title: string;
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

  let rolesArray = [];

  if (roles) {
    for (const role of roles) {
      if (role.id === 1 || !isFullstack) {
        rolesArray.push(role.title);
      } else {
        rolesArray.push(t(`Fullstack developer`));
        break;
      }
    }
  }

  return (
    <div className="h-8 truncate [&>span:not(:last-child)]:after:content-[',\a0']">
      {t("Roles")}:&nbsp;
      {rolesArray.map((role) => (
        <span>{role}</span>
      ))}
    </div>
  );
}
