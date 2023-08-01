import Client from "App/Models/Client";

export default class ClientService {
  public async create(registerClientData: RegisterClientContract): Promise<Client> {
      return await Client.create(registerClientData);
  }
}
