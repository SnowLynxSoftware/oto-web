export interface IClientDataOptions {
    partialUrl: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: { [key: string]: string };
    pathParams?: { [key: string]: string };
    queryParams?: { [key: string]: string };
    responseType?: 'json' | 'text';
    withCredentials?: boolean;
}
