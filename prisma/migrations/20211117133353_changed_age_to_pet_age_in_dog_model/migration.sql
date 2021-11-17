/*
  Warnings:

  - You are about to drop the column `age` on the `Dog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dog" DROP COLUMN "age",
ADD COLUMN     "petAge" INTEGER NOT NULL DEFAULT 8;
