// Mock order data for tracking
export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  createdAt: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  items: OrderItem[];
  deliveryAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: "cod" | "card";
  total: number;
  estimatedDelivery: string;
}

// Mock orders database
const mockOrders: Record<string, Order> = {
  "ORD-001": {
    id: "ORD-001",
    createdAt: "2025-12-20",
    status: "delivered",
    items: [
      {
        id: "1",
        name: "Formula 1 Primary Logo Sweat Short",
        quantity: 1,
        price: 54,
      },
    ],
    deliveryAddress: {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main Street",
      city: "New York, NY",
      postalCode: "10001",
    },
    paymentMethod: "card",
    total: 54,
    estimatedDelivery: "2025-12-25",
  },
  "ORD-002": {
    id: "ORD-002",
    createdAt: "2025-12-23",
    status: "shipped",
    items: [
      {
        id: "2",
        name: "Scuderia Ferrari 2025 Team Charles Leclerc Cap",
        quantity: 1,
        price: 33,
      },
    ],
    deliveryAddress: {
      fullName: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
      address: "456 Oak Avenue",
      city: "Los Angeles, CA",
      postalCode: "90001",
    },
    paymentMethod: "cod",
    total: 33,
    estimatedDelivery: "2025-12-27",
  },
  "ORD-003": {
    id: "ORD-003",
    createdAt: "2025-12-25",
    status: "processing",
    items: [
      {
        id: "1",
        name: "Formula 1 Primary Logo Sweat Short",
        quantity: 2,
        price: 108,
      },
      {
        id: "2",
        name: "Scuderia Ferrari 2025 Team Charles Leclerc Cap",
        quantity: 1,
        price: 33,
      },
    ],
    deliveryAddress: {
      fullName: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1 (555) 456-7890",
      address: "789 Pine Road",
      city: "Chicago, IL",
      postalCode: "60601",
    },
    paymentMethod: "card",
    total: 141,
    estimatedDelivery: "2025-12-30",
  },
};

export function getOrder(orderId: string): Order | null {
  return mockOrders[orderId] || null;
}
