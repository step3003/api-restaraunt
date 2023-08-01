import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.group(() => {
    Route.post("/register", "AuthController.register");
    Route.post("/login", "AuthController.login");
  }).prefix("auth");

  Route.group(() => {
    Route.group(() => {
      Route.group(() => {
        Route.post("/", "OrderController.create");
        Route.get("/", "OrderController.get");
      }).prefix("/:restaurantId/orders");

    }).prefix("restaurants");

  }).middleware("auth:api");

}).namespace("App/Controllers/Http/Clients")
  .prefix("client/api");


