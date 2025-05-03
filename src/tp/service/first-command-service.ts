import { Order } from "../modele/order-modele.js";
import { IshippingCommand } from "./shipping-command.interface.js";

export class FistCommandService implements IshippingCommand{
    executeCommand(order: Order): Order {
       if(!order.user.isFirstOrder){
           console.info("Le client a deja passé une comande")
       }
       order.totalPrice = order.totalPrice * 0.9
       return order;
    }
}