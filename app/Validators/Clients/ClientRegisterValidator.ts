import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientRegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    firstName: schema.string([
      rules.maxLength(100),
    ]),
    lastName: schema.string([
      rules.maxLength(100),
    ]),
    password: schema.string([
      rules.confirmed(),
      rules.minLength(6)
    ]),
    email: schema.string([
      rules.email(),
      rules.unique({
        table: 'clients',
        column: 'email'
      })
    ]),
  })

  public messages: CustomMessages = {}
}
