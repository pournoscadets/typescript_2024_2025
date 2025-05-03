export class UpdateStatusCommandService {
    executeCommand(order) {
        order.orderStatus = "shipped";
        return order;
    }
}
