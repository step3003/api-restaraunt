import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Restaurant from "App/Models/Restaurant";

export default class Table extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public number: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Restaurant)
  public posts: BelongsTo<typeof Restaurant>
}
