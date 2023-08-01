import Dish from "App/Models/Dish";
import ClientOrderDish from "App/Aggregates/Orders/ClientOrderDish";
import Restaurant from "App/Models/Restaurant";


export default class DishService {
  public async getOrderDishesWithPrice(dishes: CreateClientDishOrderContract[], restaurantId: number): Promise<ClientOrderDish[]> {
    const ids: number[] = dishes.map((value: CreateClientDishOrderContract) => value.id);

    await Restaurant.findOrFail(restaurantId)

    const gotDishes: Dish[] = await Dish.query()
      .where("restaurant_id", restaurantId)
      .whereIn("id", ids);

    return gotDishes.map((lucidDish: Dish) => {
      const orderDish: CreateClientDishOrderContract | undefined = dishes.find((item: any) => item.id === lucidDish.id);
      if (orderDish) {
        return new ClientOrderDish(
          orderDish.id,
          lucidDish.price,
          orderDish.count
        );
      }
      return null;
    }).filter(
      (combinedDish: ClientOrderDish | null): combinedDish is ClientOrderDish => combinedDish !== null
    );
  }
}
