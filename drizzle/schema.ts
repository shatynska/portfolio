import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  primaryKey,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
  type: text("type").notNull(),
  stack: text("stack").notNull(),
  url: text("url"),
  gitHubUrl: text("gitHubUrl"),
  image: text("image"),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  projectsToRoles: many(projectsToRoles),
}));

export const roles = pgTable("roles", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
});

export const rolesRelations = relations(roles, ({ many }) => ({
  projectsToRoles: many(projectsToRoles),
}));

export const projectsToRoles = pgTable(
  "projects_to_roles",
  {
    projectId: integer("project_id")
      .notNull()
      .references(() => projects.id),
    roleId: integer("role_id")
      .notNull()
      .references(() => roles.id),
  },
  (t) => ({
    pk: primaryKey(t.projectId, t.roleId),
  })
);

export const projectsToRolesRelations = relations(
  projectsToRoles,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectsToRoles.projectId],
      references: [projects.id],
    }),
    role: one(roles, {
      fields: [projectsToRoles.roleId],
      references: [roles.id],
    }),
  })
);
