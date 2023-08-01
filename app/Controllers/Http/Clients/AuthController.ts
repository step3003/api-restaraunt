import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ClientRegisterValidator from "App/Validators/Clients/ClientRegisterValidator";
import { inject } from "@adonisjs/fold";
import RegisterClientUseCase from "App/UseCases/Clients/RegisterClientUseCase";


@inject()
export default class AuthController {
  constructor(private registerUseCase: RegisterClientUseCase) {
  }

  public async register({ request }: HttpContextContract) {
     return await this.registerUseCase.execute(
       await request.validate(ClientRegisterValidator)
     );
  }

  public async login({ request }: HttpContextContract) {
    return await request.validate(ClientRegisterValidator)
  }
}
