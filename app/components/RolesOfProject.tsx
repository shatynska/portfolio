import React from "react";

type Role = {
  id: number;
  titleEn: string;
  titleUa: string;
};

export default function RolesOfProject({
  roles = [],
}: {
  roles: Role[] | undefined;
}) {
  let rolesArray = [];

  const rolesIds = roles?.map((role) => role.id);
  const isFullstack = [2, 3].every((roleId) => rolesIds?.includes(roleId));

  if (roles) {
    for (const role of roles) {
      if (role.id === 1 || !isFullstack) {
        rolesArray.push(role.titleUa);
      } else {
        rolesArray.push(`Fullstack developer`);
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
