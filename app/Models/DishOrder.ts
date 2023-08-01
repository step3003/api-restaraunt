import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column,  } from "@ioc:Adonis/Lucid/Orm";
import Dish from "App/Models/Dish";


export default class DishOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({serializeAs: "orderId"})
  public order_id: number

  @column({serializeAs: "dishId"})
  public dish_id: number

  @column()
  public price: number

  @column()
  public count: number

  @column.dateTime({ autoCreate: true, serializeAs: "createdAt"})
  public createdAt: DateTime

  @column.dateTime({  autoUpdate: true, serializeAs: "updatedAt" })
  public updatedAt: DateTime

  @belongsTo(() => Dish, {
    foreignKey: "dish_id"
  })
  public dish: BelongsTo<typeof Dish>
}
