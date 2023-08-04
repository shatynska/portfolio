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
  id: serial("id").primaryKey(),
  titleEn: text("title_en").notNull(),
  titleUa: text("title_ua").notNull(),
  typeId: integer("type_id").notNull(),
  stack: text("stack").notNull(),
  url: text("url"),
  gitHubUrl: text("gitHub_url"),
  image: text("image"),
});

export const types = pgTable("types", {
  id: serial("id").primaryKey().notNull(),
  titleEn: text("title_en").notNull(),
  titleUa: text("title_ua").notNull(),
});

export const roles = pgTable("roles", {
  id: serial("id").primaryKey().notNull(),
  titleEn: text("title_en").notNull(),
  titleUa: text("title_ua").notNull(),
});

export const projectsToRoles = pgTable(
  "projects_to_roles",
  {
    id: serial("id").notNull(),
    projectId: integer("project_id")
      .notNull()
      .references(() => projects.id),
    roleId: integer("role_id")
      .notNull()
      .references(() => roles.id),
    description: text("description"),
    active: boolean("active").default(false).notNull(),
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

export const projectsRelations = relations(projects, ({ many, one }) => ({
  projectsToRoles: many(projectsToRoles),
  types: one(types, {
    fields: [projects.typeId],
    references: [types.id],
  }),
}));

export const typesRelations = relations(types, ({ many }) => ({
  projects: many(projects),
}));

export const rolesRelations = relations(roles, ({ many }) => ({
  projectsToRoles: many(projectsToRoles),
}));
