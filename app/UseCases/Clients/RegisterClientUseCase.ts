import ClientService from "App/Services/Clients/ClientService";
import { inject } from "@adonisjs/fold";
import Client from "App/Models/Client";
import ClientAuthService from "App/Services/Auth/ClientAuthService";
import { AuthClientContract, ClientAuthToken } from "Contracts/Clients/AuthClientContract";


@inject()
export default class RegisterClientUseCase {
  constructor(
    private clientService: ClientService,
    public authService: ClientAuthService
  ) {
  }

  public async execute(registerClientData: RegisterClientContract): Promise<AuthClientContract>  {
    const client: Client = await this.clientService.create(registerClientData);
    const token: ClientAuthToken = await this.authService.attempt(
      registerClientData.email,
      registerClientData.password
    );

    return {
      token: token,
      client: client
    };
  }
}
