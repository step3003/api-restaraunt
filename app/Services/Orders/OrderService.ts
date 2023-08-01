import Order from "App/Models/Order";
import ClientOrderDish from "App/Aggregates/Orders/ClientOrderDish";


export default class OrderService {
  public async create(tableId: number, client: number): Promise<Order> {
    return Order.create({
      tableId: tableId,
      clientId: client,
      type: "type",
      amount: 12
    });
  }

  public async attachWithDish(order: Order, dishes: ClientOrderDish[]): Promise<void> {
    const mappedDishes: any = dishes.map((orderDish: ClientOrderDish) => ({
      [orderDish.getId()]: {
        price: orderDish.getPrice(),
        count: orderDish.getCount()
      }
    }));

    const syncObject = Object.assign({}, ...mappedDishes);

    return await order.related("dishes").sync(syncObject);
  }

  public async getByRestaurantIdAndClientId(
    restaurantId: number,
    clientId: number,
    currentPage: number | undefined
  ): Promise<any> {
    return Order.query()
      .where("client_id", clientId)
      .whereHas("table", (postsQuery) => {
        postsQuery.where("restaurant_id", restaurantId);
      })
      .paginate(currentPage ?? 1, 10);
  }

  public async find(restaurantId: number) {
    return { restaurantId };
  }

  public async delete(restaurantId: number, orderId: number) {
    return { restaurantId, orderId };
  }
}
