-- CreateTable
CREATE TABLE "Pedidos" (
    "id" SERIAL NOT NULL,
    "cliente" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,
    "entrega" TEXT NOT NULL,
    "pago" BOOLEAN NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);
