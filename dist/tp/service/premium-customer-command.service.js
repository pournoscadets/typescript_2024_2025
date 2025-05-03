export class PremiumCustomerCommandService {
    executeCommand(order) {
        if (order.user.isPremium) {
            order.shippingCost = 0;
            order.eligibleForFreeShipping = true;
        }
        return order;
    }
}
