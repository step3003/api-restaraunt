import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column, manyToMany, ManyToMany } from "@ioc:Adonis/Lucid/Orm";
import Dish from "App/Models/Dish";
import Table from "App/Models/Table";

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public number: number;

  @column({ serializeAs: "clientId" })
  public clientId: number;

  @column({ serializeAs: "tableId" })
  public tableId: number;

  @column()
  public type: string;

  @column()
  public amount: number;

  @column.date({ serializeAs: "dateReadyAt" })
  public dateReadyAt: DateTime;

  @column({ serializeAs: "timeReadyAt" })
  public timeReadyAt: DateTime;

  @column.dateTime({ autoCreate: true, serializeAs: "createdAt" })
  public createdAt: DateTime;

  @column.dateTime({ autoUpdate: true, serializeAs: "updatedAt" })
  public updatedAt: DateTime;

  @manyToMany(() => Dish, {
    pivotTable: "dish_orders",
    serializeAs: "orderDishes",
    pivotColumns: ["count", "price", "created_at", "updated_at"]
  })
  public dishes: ManyToMany<typeof Dish>;

  @belongsTo(() => Table, {
    serializeAs: "table",
  })
  public table: BelongsTo<typeof Table>;

}
