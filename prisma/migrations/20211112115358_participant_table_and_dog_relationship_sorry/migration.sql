-- CreateTable
CREATE TABLE "Participant" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "vaccinated" BOOLEAN NOT NULL,
    "dogId" INTEGER NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_dogId_key" ON "Participant"("dogId");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
