import { inject } from "@adonisjs/fold";
import OrderService from "App/Services/Orders/OrderService";
import TableService from "App/Services/Table/Table";
import ClientAuthService from "App/Services/Auth/ClientAuthService";
import Client from "App/Models/Client";
import Order from "App/Models/Order";
import DishService from "App/Services/Dishes/Dish";
import Table from "App/Models/Table";
import DishOrderService from "App/Services/DishOrder/DishOrderService";
import ClientOrder from "App/Aggregates/Orders/ClientOrder";
import DishOrder from "App/Models/DishOrder";
import ClientOrderDish from "App/Aggregates/Orders/ClientOrderDish";

@inject()
export default class CreateOrderUseCase {
  constructor(
    private dish: DishService,
    private orderService: OrderService,
    private tableService: TableService,
    private clientAuthService: ClientAuthService,
    private dishOrderService: DishOrderService
  ) {
  }

  public async execute({tableId, dishes, restaurantId}: CreateClientOrderContract): Promise<CreatedClientOrderContract> {
    const orderDishes: ClientOrderDish[] = await this.dish.getOrderDishesWithPrice(dishes, restaurantId);
    const table: Table  = await this.tableService.findById(tableId);
    const client: Client = await this.clientAuthService.getClient();
    const createdOrder: Order = await this.orderService.create(table.id, client.id);
    await this.orderService.attachWithDish(createdOrder, orderDishes);
    const createdOrderDishes: DishOrder[] = await this.dishOrderService.getByOrderId(createdOrder.id);

    return new ClientOrder(createdOrder, createdOrderDishes).get();
  }
}
