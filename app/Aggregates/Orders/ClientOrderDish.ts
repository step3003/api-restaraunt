
export default class ClientOrderDish  {
  constructor(
    private id: number,
    private price: number,
    private count: number
  ) {
  }

  public getId(): number {
    return this.id;
  }

  public getPrice(): number {
    return this.price * this.count;
  }

  public getCount(): number {
    return this.count
  }
}
