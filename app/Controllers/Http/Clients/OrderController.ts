import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ClientRegisterValidator from "App/Validators/Clients/ClientRegisterValidator";
import CreateOrderUseCase from "App/UseCases/Orders/CreateOrderUseCase";
import { inject } from "@adonisjs/fold";
import CreateOrderValidator from "App/Validators/Orders/CreateOrderValidator";
import * as console from "console";

@inject()
export default class OrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {
  }

  public async create({ request }: HttpContextContract): Promise<any> {
    return await this.createOrderUseCase.execute({
      ...await request.validate(CreateOrderValidator),
      ...{
        restaurantId: request.param("restaurantId")
      }
    });
  }

  public async get({ request }: HttpContextContract) {
    console.log(request);
    return await request.validate(ClientRegisterValidator);
  }
}
