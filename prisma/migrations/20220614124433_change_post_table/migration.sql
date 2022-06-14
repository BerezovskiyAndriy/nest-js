-- AlterTable
ALTER TABLE `Post` ADD COLUMN `avatar` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `age` INTEGER NULL,
    MODIFY `status` BOOLEAN NULL DEFAULT false;
