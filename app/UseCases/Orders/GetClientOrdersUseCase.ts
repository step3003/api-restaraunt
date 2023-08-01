import { inject } from "@adonisjs/fold";
import ClientAuthService from "App/Services/Auth/ClientAuthService";
import Client from "App/Models/Client";
import OrderService from "App/Services/Orders/OrderService";
import Order from "App/Models/Order";

@inject()
export default class GetClientOrdersUseCase {
  constructor(
    private clientAuthService: ClientAuthService,
    private orderService: OrderService,
  ) {
  }

  public async execute(restaurantId: number, currentPage: number|undefined): Promise<Order[]> {
    const client: Client = await this.clientAuthService.getClient();
    return await this.orderService.getByRestaurantIdAndClientId(
      restaurantId,
      client.id,
      currentPage
    );
  }
}
