import { Order } from "./modele/order-modele.js";
import { User } from "./modele/user-modele.js";
import { CommandService } from "./service/command.service.js";
import { FistCommandService } from "./service/first-command-service.js";
import { LoyaltyPointCommand } from "./service/loyality-point-command.service.js";
import { PremiumCustomerCommandService } from "./service/premium-customer-command.service.js";
import { IshippingCommand } from "./service/shipping-command.interface.js";
import { UpdateStatusCommandService } from "./service/update-status-command.service.js";

const commands: IshippingCommand[] = []
const commandService: CommandService = new CommandService(commands);
const kouassi: User = {
    name: "Kouassi",
    email: "kouassi@gmail.com",
    isPremium: true,
    isFirstOrder: true,
    loyaltyPoints: 105
}

const order: Order = {
        user: kouassi,
        totalPrice: 200,
        shippingCost: 5,
        eligibleForFreeShipping: false,
        loyaltyPointsApplied: false,
        invoiceGenerated: true,
        orderStatus: "pending"
}

 commandService.addCommand(new FistCommandService())
 commandService.addCommand(new LoyaltyPointCommand())
 commandService.addCommand(new PremiumCustomerCommandService())
 commandService.addCommand(new UpdateStatusCommandService())

 const test = commandService.processCommand(order);
 console.log(test)

 // price = 180
 // price = 175
 // shippingCost = 0 
 // status =  shipped
 // eligibleForFreeShipping =  true

 // IMPLEMENT LE PATTERN COMMAND


