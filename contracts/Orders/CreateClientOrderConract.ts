interface CreateClientOrderContract {
  tableId: number,
  restaurantId: number,
  dishes: CreateClientDishOrderContract[],
}

interface CreateClientDishOrderContract {
  id: number,
  count: number,
}

