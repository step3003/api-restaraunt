import Order from "App/Models/Order";
import DishOrder from "App/Models/DishOrder";


export default class ClientOrder {
  constructor(
    public order: Order,
    public orderDishes: DishOrder[]
  ) {
  }

  public get(): CreatedClientOrderContract {
    return {
      order: {
        tableId: this.order.tableId,
        type: this.order.type,
        clientId: this.order.clientId,
        id: this.order.id,
        orderDishes: this.getDishes()
      }
    };
  }

  private getDishes(): any {
    return this.orderDishes.map((orderDish: DishOrder) => {
      return {
        id: orderDish.id,
        title: orderDish.dish.title,
        price: orderDish.price,
        createdAt: orderDish.createdAt,
        updatedAt: orderDish.updatedAt
      };
    });
  }
}
