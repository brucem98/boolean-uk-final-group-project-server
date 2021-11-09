-- CreateTable
CREATE TABLE "Dog" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" VARCHAR(255) NOT NULL,
    "img" TEXT NOT NULL,
    "shotStatus" BOOLEAN NOT NULL,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);
