-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_employees" ("cpf", "id", "name", "role") SELECT "cpf", "id", "name", "role" FROM "employees";
DROP TABLE "employees";
ALTER TABLE "new_employees" RENAME TO "employees";
CREATE TABLE "new_EPI_delivery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employee_id" TEXT NOT NULL,
    "epi_id" TEXT NOT NULL,
    "delivery_date" DATETIME NOT NULL,
    "amount_delivered" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EPI_delivery_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EPI_delivery_epi_id_fkey" FOREIGN KEY ("epi_id") REFERENCES "epi" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EPI_delivery" ("amount_delivered", "delivery_date", "employee_id", "epi_id", "id") SELECT "amount_delivered", "delivery_date", "employee_id", "epi_id", "id" FROM "EPI_delivery";
DROP TABLE "EPI_delivery";
ALTER TABLE "new_EPI_delivery" RENAME TO "EPI_delivery";
CREATE TABLE "new_epi" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "validate" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_epi" ("id", "name", "numero", "validate") SELECT "id", "name", "numero", "validate" FROM "epi";
DROP TABLE "epi";
ALTER TABLE "new_epi" RENAME TO "epi";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
