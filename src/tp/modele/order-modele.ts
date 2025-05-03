import { User } from "./user-modele.js";

export type Order = {
    user: User;
    totalPrice: number;
    shippingCost: number;
    eligibleForFreeShipping: boolean;
    loyaltyPointsApplied: boolean;
    invoiceGenerated: boolean;
    orderStatus: Orderstatus
}

type Orderstatus = "pending" | "shipped" | "cancelled"
