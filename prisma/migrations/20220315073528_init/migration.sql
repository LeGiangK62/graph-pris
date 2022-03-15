-- CreateTable
CREATE TABLE "pet" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" VARCHAR(50) NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);
