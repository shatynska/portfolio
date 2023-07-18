import { pgTable, pgEnum, pgSchema, AnyPgColumn, varchar, timestamp, text, integer, uniqueIndex, serial, foreignKey, primaryKey } from "drizzle-orm/pg-core"


import { sql } from "drizzle-orm"

export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar("id", { length: 36 }).primaryKey().notNull(),
	checksum: varchar("checksum", { length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text("logs"),
	rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	startedAt: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	appliedStepsCount: integer("applied_steps_count").notNull(),
});

export const role = pgTable("Role", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
},
(table) => {
	return {
		titleKey: uniqueIndex("Role_title_key").on(table.title),
	}
});

export const project = pgTable("Project", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	type: text("type").notNull(),
	stack: text("stack").notNull(),
	url: text("url"),
	gitHubUrl: text("gitHubUrl"),
	image: text("image"),
});

export const topic = pgTable("Topic", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	projectOnRolesId: integer("projectOnRolesId").notNull().references(() => projectsOnRoles.id, { onDelete: "restrict", onUpdate: "cascade" } ),
},
(table) => {
	return {
		titleKey: uniqueIndex("Topic_title_key").on(table.title),
	}
});

export const projectsOnRoles = pgTable("ProjectsOnRoles", {
	id: serial("id").notNull(),
	projectId: integer("projectId").notNull().references(() => project.id, { onDelete: "restrict", onUpdate: "cascade" } ),
	roleId: integer("roleId").notNull().references(() => role.id, { onDelete: "restrict", onUpdate: "cascade" } ),
	description: text("description"),
	images: text("images").array(),
},
(table) => {
	return {
		idKey: uniqueIndex("ProjectsOnRoles_id_key").on(table.id),
		projectsOnRolesPkey: primaryKey(table.projectId, table.roleId)
	}
});