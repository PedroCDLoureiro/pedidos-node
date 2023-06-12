import { prisma } from "../services/prisma.js";

export const createPedido = async (data) => {
    const pedido = await prisma.pedidos.create({
        data
    });
    return pedido;
};

export const getPedidos = async () => {
    const pedidos = await prisma.pedidos.findMany({});
    return pedidos;
};

export const getTotal = async () => {
    const total_pedidos = await prisma.pedidos.count({});
    return total_pedidos;
};