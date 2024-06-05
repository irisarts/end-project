/*
  Warnings:

  - You are about to drop the column `pictureUrl` on the `User` table. All the data in the column will be lost.
  - Added the required column `profilePicture` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "pictureUrl",
ADD COLUMN     "profilePicture" TEXT NOT NULL;
