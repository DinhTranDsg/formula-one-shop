import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Order } from "src/lib/mock-order";

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div className="space-y-4">
      {/* Order Info */}
      <Card>
        <CardHeader>
          <CardTitle>Order Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order ID:</span>
            <span className="font-semibold">{order.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order Date:</span>
            <span className="font-semibold">{order.createdAt}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Payment Method:</span>
            <span className="font-semibold">
              {order.paymentMethod === "cod"
                ? "Cash on Delivery"
                : "Card Payment"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Estimated Delivery:</span>
            <span className="font-semibold">{order.estimatedDelivery}</span>
          </div>
        </CardContent>
      </Card>

      {/* Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-semibold">US${item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Qty: {item.quantity}
                </p>
                <Separator className="mt-2" />
              </div>
            ))}
            <div className="flex justify-between pt-2">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">US${order.total}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delivery Address */}
      <Card>
        <CardHeader>
          <CardTitle>Delivery Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">{order.deliveryAddress.address}</p>
          <p className="text-sm">{order.deliveryAddress.city}</p>
          <p className="text-sm">{order.deliveryAddress.postalCode}</p>
          <p className="text-sm">Phone: {order.deliveryAddress.phone}</p>
          <p className="text-sm">Email: {order.deliveryAddress.email}</p>
        </CardContent>
      </Card>
    </div>
  );
}
