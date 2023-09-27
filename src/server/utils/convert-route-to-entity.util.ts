const mapping: Record<string, string> = {
  inventories: 'inventory',
  orders: 'order',
  'order-items': 'order_item',
  pharmacies: 'pharmacy',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
