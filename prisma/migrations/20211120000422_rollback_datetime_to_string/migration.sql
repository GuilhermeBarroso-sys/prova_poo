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
INSERT INTO "new_epi" ("createdAt", "id", "name", "number", "updatedAt", "validate") SELECT "createdAt", "id", "name", "number", "updatedAt", "validate" FROM "epi";
DROP TABLE "epi";
ALTER TABLE "new_epi" RENAME TO "epi";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
