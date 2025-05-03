import { Order } from "../modele/order-modele.js";
import { IshippingCommand } from "./shipping-command.interface.js";

export class UpdateStatusCommandService implements IshippingCommand {
    executeCommand(order: Order): Order {
        order.orderStatus = "shipped"
        return order;
    }
}