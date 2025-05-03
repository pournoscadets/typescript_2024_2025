import { Order } from "../modele/order-modele.js";
import { IshippingCommand } from "./shipping-command.interface.js";

export class PremiumCustomerCommandService implements IshippingCommand{
    executeCommand(order: Order): Order {
       if(order.user.isPremium){
            order.shippingCost = 0;
            order.eligibleForFreeShipping = true;
       }
       return order;
    }
}