/*
  Warnings:

  - You are about to alter the column `validate` on the `epi` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_epi" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "validate" DATETIME NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_epi" ("createdAt", "id", "name", "number", "updatedAt", "validate") SELECT "createdAt", "id", "name", "number", "updatedAt", "validate" FROM "epi";
DROP TABLE "epi";
ALTER TABLE "new_epi" RENAME TO "epi";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
