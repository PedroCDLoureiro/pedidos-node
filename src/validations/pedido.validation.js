import * as yup from "yup";

// Validação para inserção de novo pedido
export const pedidoValidation = yup.object({
    cliente: yup.string().required(),
    quantidade: yup.string().required(),
    entrega: yup.string().required(),
    pago: yup.boolean().required(),
})