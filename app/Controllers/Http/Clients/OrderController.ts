import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CreateOrderUseCase from "App/UseCases/Orders/CreateOrderUseCase";
import { inject } from "@adonisjs/fold";
import CreateOrderValidator from "App/Validators/Orders/CreateOrderValidator";
import GetClientOrdersUseCase from "App/UseCases/Orders/GetClientOrdersUseCase";
import Order from "App/Models/Order";

@inject()
export default class OrderController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
    private getClientOrdersUseCase: GetClientOrdersUseCase
  ) {
  }

  public async create({ request }: HttpContextContract): Promise<CreatedClientOrderContract> {
    return await this.createOrderUseCase.execute({
      ...await request.validate(CreateOrderValidator),
      ...{
        restaurantId: request.param("restaurantId")
      }
    });
  }

  public async get({ request }: HttpContextContract): Promise<Order[]> {
    return await this.getClientOrdersUseCase.execute(
      request.param("restaurantId"),
      request.qs().page,
    );
  }
}
