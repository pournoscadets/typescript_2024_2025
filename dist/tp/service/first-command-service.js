export class FistCommandService {
    executeCommand(order) {
        if (!order.user.isFirstOrder) {
            console.info("Le client a deja passé une comande");
        }
        order.totalPrice = order.totalPrice * 0.9;
        return order;
    }
}
