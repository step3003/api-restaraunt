import { inject } from "@adonisjs/fold";
import Menu from "App/Services/Menu/Menu";

@inject()
export default class GetMenuByRestaurantUseCase {
  constructor(private menu: Menu) {
  }

  public async execute(restaurantId: number) {
    return await this.menu.getByRestaurantId(restaurantId);
  }
}
