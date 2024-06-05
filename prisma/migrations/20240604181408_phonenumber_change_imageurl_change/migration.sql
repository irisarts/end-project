/*
  Warnings:

  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `picture_url` on the `User` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pictureUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone_number",
DROP COLUMN "picture_url",
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "pictureUrl" TEXT NOT NULL;
