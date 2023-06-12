import { create, get, getTotalPedidos } from "../controllers/pedido.controller.js";

const pedidoRoutes = app => {
    app.post("/pedido", create);
    app.get("/pedidos", get);
    app.get("/totalpedidos", getTotalPedidos);
}

export default pedidoRoutes