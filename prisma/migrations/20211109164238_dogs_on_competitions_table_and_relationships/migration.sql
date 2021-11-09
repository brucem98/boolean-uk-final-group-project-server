-- CreateTable
CREATE TABLE "DogsOnCompetitions" (
    "competitionId" INTEGER NOT NULL,
    "dogId" INTEGER NOT NULL,

    CONSTRAINT "DogsOnCompetitions_pkey" PRIMARY KEY ("competitionId","dogId")
);

-- AddForeignKey
ALTER TABLE "DogsOnCompetitions" ADD CONSTRAINT "DogsOnCompetitions_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DogsOnCompetitions" ADD CONSTRAINT "DogsOnCompetitions_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
