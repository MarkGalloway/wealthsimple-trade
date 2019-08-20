import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

type ClientOptions = {};

export default class WealthSimpleTrade {
  private client: AxiosInstance;
  private token?: string;
  private refreshToken?: string;

  constructor(options: ClientOptions = {}) {
    const baseURL = 'https://trade-service.wealthsimple.com';

    this.client = axios.create({
      baseURL,
      headers: {
        'User-Agent': 'Trade/101 CFNetwork/975.0.3 Darwin/18.2.0',
        'App-Secret': '4d3aa822-f563-4577-a230-cdd169bfea02',
        'Content-Type': 'application/json',
      },
    });
  }

  private getConfig(): AxiosRequestConfig {
    return { headers: { Authorization: this.token } };
  }

  private afterRequest<P>(response: AxiosResponse<P>): AxiosResponse<P> {
    if (response.status > 204) {
      const errorResponse = (response as any) as AxiosResponse<ErrorResponse>;
      throw new Error(
        `Received Error Code: ${errorResponse.status}\n Message: ${errorResponse.data.error}`,
      );
    }

    return response;
  }

  private async get<P>(url: string) {
    const config = this.getConfig();
    const response = await this.client.get<P>(url, config);
    return this.afterRequest(response);
  }

  private async post<P>(url: string, payload: any) {
    const config = this.getConfig();
    const response = await this.client.post<P>(url, payload, config);
    return this.afterRequest(response);
  }

  async login(email: string, password: string): Promise<User> {
    const url = '/auth/login';
    const payload = { email, password };
    const response = await this.post<LoginResponse>(url, payload);

    this.token = response.headers['X-Access-Token'];
    this.refreshToken = response.headers['X-Refresh-Token'];
    return response.data;
  }

  async refreshLogin(): Promise<User> {
    const url = '/auth/refresh';
    const payload = { refresh_token: this.refreshToken };
    const response = await this.post<LoginResponse>(url, payload);

    this.token = response.headers['X-Access-Token'];
    this.refreshToken = response.headers['X-Refresh-Token'];
    return response.data;
  }

  async getMe(): Promise<MeResponse> {
    const url = '/me';
    const response = await this.get<MeResponse>(url);
    return response.data;
  }
}
