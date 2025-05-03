import { Order } from "../modele/order-modele.js";
import { IshippingCommand } from "./shipping-command.interface.js";

export class CommandService {
    constructor(private _commands: IshippingCommand[]){}

    addCommand(command: IshippingCommand){
        this._commands.push(command)
    }

    processCommand(order: Order): Order{
        for(let command of this._commands){
            command.executeCommand(order);
        }
        return order;
    }
}