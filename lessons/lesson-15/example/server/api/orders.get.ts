export default defineEventHandler((event) => {
  const authHeader = getHeader(event, 'authorization');
  if (authHeader !== 'Bearer my-secret-token') {
    event.res.statusCode = 401;
    return { error: 'Unauthorized' };
  }
  const query = getQuery(event);
  const orders = [
    { id: 1, item: "Order One", quantity: 2 },
    { id: 2, item: "Order Two", quantity: 1 },
    { id: 3, item: "Order Three", quantity: 5 }
  ];
  if (query.search) {
    return orders.filter(order =>
      order.item.toLowerCase().includes(query.search.toLowerCase())
    );
  }
  return orders;
});
