import { inject } from "@adonisjs/fold";
import ClientAuthService from "App/Services/Auth/ClientAuthService";
import Client from "App/Models/Client";
import OrderService from "App/Services/Orders/OrderService";
import * as console from "console";

@inject()
export default class GetClientOrdersUseCase {
  constructor(
    private clientAuthService: ClientAuthService,
    private orderService: OrderService,
  ) {
  }

  public async execute(restaurantId: number): Promise<void> {
    const client: Client = await this.clientAuthService.getClient();
    const test =  await this.orderService.getByRestaurantIdAndClientId(restaurantId, client.id);
    console.log(test);
  }
}
