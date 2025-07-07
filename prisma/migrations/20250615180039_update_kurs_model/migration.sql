-- CreateEnum
CREATE TYPE "LanguageLevel" AS ENUM ('beginner', 'intermediate', 'advanced');

-- AlterTable
ALTER TABLE "Kurs" ADD COLUMN     "level" "LanguageLevel" NOT NULL DEFAULT 'beginner';
