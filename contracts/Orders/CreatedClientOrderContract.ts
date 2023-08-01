interface CreatedClientOrderContract {
  order: {
    id: number,
    tableId: number,
    type: string,
    clientId: number,
    orderDishes: CreatedClientOrderDishContract[],
  }
}

interface CreatedClientOrderDishContract {
  id: number,
  title: string,
  price: number,
  createdAt: string,
  updatedAt: string,
}
