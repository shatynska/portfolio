-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "stack" TEXT NOT NULL,
    "url" TEXT,
    "gitHubUrl" TEXT,
    "image" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "projectOnRolesId" INTEGER NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectsOnTypes" (
    "projectId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "ProjectsOnTypes_pkey" PRIMARY KEY ("projectId","typeId")
);

-- CreateTable
CREATE TABLE "ProjectsOnRoles" (
    "projectId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "images" TEXT[],

    CONSTRAINT "ProjectsOnRoles_pkey" PRIMARY KEY ("projectId","roleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_title_key" ON "Type"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Role_title_key" ON "Role"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_title_key" ON "Topic"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectsOnRoles_id_key" ON "ProjectsOnRoles"("id");

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_projectOnRolesId_fkey" FOREIGN KEY ("projectOnRolesId") REFERENCES "ProjectsOnRoles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnTypes" ADD CONSTRAINT "ProjectsOnTypes_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnTypes" ADD CONSTRAINT "ProjectsOnTypes_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnRoles" ADD CONSTRAINT "ProjectsOnRoles_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnRoles" ADD CONSTRAINT "ProjectsOnRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
