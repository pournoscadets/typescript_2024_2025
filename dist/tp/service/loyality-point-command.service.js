export class LoyaltyPointCommand {
    executeCommand(order) {
        if (order.user.loyaltyPoints >= 100) {
            order.totalPrice = order.totalPrice - 5;
        }
        return order;
    }
}
