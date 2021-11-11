/*
  Warnings:

  - You are about to drop the column `ticketnumber` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `ticketNumber` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "ticketnumber",
ADD COLUMN     "ticketNumber" INTEGER NOT NULL;
