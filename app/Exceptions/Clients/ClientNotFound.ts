import { Exception } from "@poppinss/utils";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ClientNotFound extends Exception {
  public async handle(error: this, ctx: HttpContextContract) {
    ctx.response.status(403).send(error.message)
  }
}
