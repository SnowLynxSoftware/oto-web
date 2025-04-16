import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../env.service';
import { IClientDataOptions } from './client-data-options.interface';
import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppClientDataService {
    private readonly _baseURL: string;

    constructor(
        private readonly _envService: EnvService,
        private readonly _http: HttpClient
    ) {
        this._baseURL = this._envService.baseAPIURL;
    }

    public executeRequest<T>(options: IClientDataOptions): Promise<T> {
        let url = this._getFullURLWithPathParams(
            options.partialUrl,
            options.pathParams || {}
        );

        if (options.queryParams) {
            const queryString = new URLSearchParams(
                options.queryParams
            ).toString();
            url += `?${queryString}`;
        }

        return lastValueFrom(
            this._http.request<T>(options.method || 'GET', url, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    ...options.headers,
                }),
                body: options.body,
                withCredentials: options.withCredentials,
                responseType: (options.responseType as any) || 'json',
            })
        ).catch((error) => {
            console.error('Request failed:', error);
            throw error;
        });
    }

    private _getFullURLWithPathParams(
        partialUrl: string,
        pathParams: { [key: string]: string }
    ): string {
        let url = `${this._baseURL}${partialUrl}`;
        Object.keys(pathParams).forEach((key) => {
            url = url.replace(`:${key}`, pathParams[key]);
        });
        return url;
    }
}
