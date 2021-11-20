/*
  Warnings:

  - You are about to drop the column `numero` on the `epi` table. All the data in the column will be lost.
  - Added the required column `number` to the `epi` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_epi" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "validate" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_epi" ("createdAt", "id", "name", "updatedAt", "validate") SELECT "createdAt", "id", "name", "updatedAt", "validate" FROM "epi";
DROP TABLE "epi";
ALTER TABLE "new_epi" RENAME TO "epi";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
