import { Exception } from "@poppinss/utils";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TableNotFound extends Exception {
  public async handle(error: this, ctx: HttpContextContract) {
    ctx.response.status(404).send(error.message)
  }
}
