import Client from "App/Models/Client";
import HttpContext from "@ioc:Adonis/Core/HttpContext";
import { ClientAuthToken } from "Contracts/Clients/AuthClientContract";
import ClientNotFound from "App/Exceptions/Clients/ClientNotFound";

export default class ClientAuthService {
  public async getClient(): Promise<Client> {
    const ctx = HttpContext.get();
    if (!ctx?.auth.user) {
      throw new ClientNotFound('Client not found');
    }
    return ctx.auth.user;
  }

  public async attempt(email: string, password: string): Promise<ClientAuthToken> {
    const ctx = HttpContext.get();
    if (!ctx?.auth) {
      throw new ClientNotFound('Client not found');
    }
    const tokenData = await ctx.auth.use("api").attempt(email, password);
    return tokenData.token;
  }
}
