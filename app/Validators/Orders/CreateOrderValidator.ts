import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";


export default class CreateOrderValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    tableId: schema.number([
      rules.required()
    ]),
    dishes: schema.array().members(
      schema.object().members({
        id: schema.number([
          rules.required()
        ]),
        count: schema.number([
          rules.required()
        ])
      })
    )
  });

  public messages: CustomMessages = {};
}
