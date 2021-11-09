/*
  Warnings:

  - You are about to drop the `competition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "competition";

-- CreateTable
CREATE TABLE "Competition" (
    "id" SERIAL NOT NULL,
    "exhibitionName" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "prizePool" INTEGER NOT NULL,
    "difficulty" VARCHAR(255) NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);
