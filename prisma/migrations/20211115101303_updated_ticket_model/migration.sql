/*
  Warnings:

  - You are about to drop the column `price` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `email` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vaccinated` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "price",
ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "firstName" VARCHAR(255) NOT NULL,
ADD COLUMN     "lastName" VARCHAR(255) NOT NULL,
ADD COLUMN     "vaccinated" BOOLEAN NOT NULL;
