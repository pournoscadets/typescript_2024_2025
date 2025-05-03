import { Order } from "../modele/order-modele.js";
import { IshippingCommand } from "./shipping-command.interface.js";

export class LoyaltyPointCommand implements IshippingCommand {
    executeCommand(order: Order): Order {
        if(order.user.loyaltyPoints >= 100){
            order.totalPrice = order.totalPrice - 5
        }
        return order;
    }
    
}