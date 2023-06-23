const mapping: Record<string, string> = {
  companies: 'company',
  'end-customers': 'end_customer',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
