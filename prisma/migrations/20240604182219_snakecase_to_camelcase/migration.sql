/*
  Warnings:

  - The primary key for the `AmenitiesOnProperties` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `amenity_id` on the `AmenitiesOnProperties` table. All the data in the column will be lost.
  - You are about to drop the column `property_id` on the `AmenitiesOnProperties` table. All the data in the column will be lost.
  - You are about to drop the column `booking_status` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `check_in_date` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `check_out_date` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_guests` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `property_id` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `about_me` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `picture_url` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `bathroom_count` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `bedroom_count` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `host_id` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `max_guest_count` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `price_per_night` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `property_id` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Review` table. All the data in the column will be lost.
  - Added the required column `amenityId` to the `AmenitiesOnProperties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `AmenitiesOnProperties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingStatus` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkinDate` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkoutDate` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfGuests` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aboutMe` to the `Host` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Host` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePicture` to the `Host` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bathRoomCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedroomCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostId` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxGuestCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerNight` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AmenitiesOnProperties" DROP CONSTRAINT "AmenitiesOnProperties_amenity_id_fkey";

-- DropForeignKey
ALTER TABLE "AmenitiesOnProperties" DROP CONSTRAINT "AmenitiesOnProperties_property_id_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_property_id_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_host_id_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_property_id_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_user_id_fkey";

-- AlterTable
ALTER TABLE "AmenitiesOnProperties" DROP CONSTRAINT "AmenitiesOnProperties_pkey",
DROP COLUMN "amenity_id",
DROP COLUMN "property_id",
ADD COLUMN     "amenityId" TEXT NOT NULL,
ADD COLUMN     "propertyId" TEXT NOT NULL,
ADD CONSTRAINT "AmenitiesOnProperties_pkey" PRIMARY KEY ("propertyId", "amenityId");

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "booking_status",
DROP COLUMN "check_in_date",
DROP COLUMN "check_out_date",
DROP COLUMN "number_of_guests",
DROP COLUMN "property_id",
DROP COLUMN "total_price",
DROP COLUMN "user_id",
ADD COLUMN     "bookingStatus" TEXT NOT NULL,
ADD COLUMN     "checkinDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "checkoutDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "numberOfGuests" INTEGER NOT NULL,
ADD COLUMN     "propertyId" TEXT NOT NULL,
ADD COLUMN     "totalPrice" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Host" DROP COLUMN "about_me",
DROP COLUMN "phone_number",
DROP COLUMN "picture_url",
ADD COLUMN     "aboutMe" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "profilePicture" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "bathroom_count",
DROP COLUMN "bedroom_count",
DROP COLUMN "host_id",
DROP COLUMN "max_guest_count",
DROP COLUMN "price_per_night",
ADD COLUMN     "bathRoomCount" INTEGER NOT NULL,
ADD COLUMN     "bedroomCount" INTEGER NOT NULL,
ADD COLUMN     "hostId" TEXT NOT NULL,
ADD COLUMN     "maxGuestCount" INTEGER NOT NULL,
ADD COLUMN     "pricePerNight" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "property_id",
DROP COLUMN "user_id",
ADD COLUMN     "propertyId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmenitiesOnProperties" ADD CONSTRAINT "AmenitiesOnProperties_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmenitiesOnProperties" ADD CONSTRAINT "AmenitiesOnProperties_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "Amenity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
