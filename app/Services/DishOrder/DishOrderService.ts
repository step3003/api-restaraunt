import DishOrder from "App/Models/DishOrder";

export default class DishOrderService {
  public async getByOrderId(orderId: number): Promise<DishOrder[]> {
    return DishOrder.query().where('order_id', orderId).preload('dish');
  }
}
