-- CreateTable
CREATE TABLE "competition" (
    "id" SERIAL NOT NULL,
    "exhibitionName" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "prizePool" INTEGER NOT NULL,
    "difficulty" VARCHAR(255) NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "competition_pkey" PRIMARY KEY ("id")
);
