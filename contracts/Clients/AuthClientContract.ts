import Client from "App/Models/Client";

export interface AuthClientContract {
  client: Client,
  token: ClientAuthToken,
}

export type ClientAuthToken = string;
