import Client from "App/Models/Client";

export default class WaiterAuthService {
  public async login() {

  }

  public async register() {

  }

  public async getClient(): Promise<Client> {
     return new Client();
  }
}
