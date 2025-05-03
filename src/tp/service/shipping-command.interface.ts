import { Order } from "../modele/order-modele.js";

export interface IshippingCommand {
    executeCommand(order: Order): Order;
}