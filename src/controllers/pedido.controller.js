import { response } from "express";
import { createPedido, getPedidos, getTotal } from "../repositorys/pedido.repository.js";
import { pedidoValidation } from "../validations/pedido.validation.js";

// Função para criação de pedido
export const create = async (request, response) => {
    try {
        await pedidoValidation.validate(request.body);

        const pedido = await createPedido(request.body);
        response.status(200).send(pedido);
    } catch (e) {
        response.status(400).send(e);

    }
}

// Função para listagem dos pedidos
export const get = async (request, response) => {
    try {
        const pedidos = await getPedidos();
        response.status(200).send(pedidos);
    } catch (e) {
        response.status(400).send(e);
    }
}

// Função para obter número total de pedidos
export const getTotalPedidos = async (request, response) => {
    try {
        const total_pedidos = await getTotal();
        response.status(200).send(String(total_pedidos));
    } catch (e) {
        response.status(400).send(e);
    }
}