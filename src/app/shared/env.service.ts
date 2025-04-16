import { Injectable } from '@angular/core';

declare global {
    interface Window {
        __env?: { [key: string]: string | boolean };
    }
}

@Injectable({
    providedIn: 'root',
})
export class EnvService {
    private readonly _env?: { [key: string]: string | boolean };
    constructor() {
        this._env = window.__env || undefined;
        if (!this._env) {
            console.error(
                'No environment variables found. Please ensure they are set correctly on the server.'
            );
        }
    }

    public get baseAPIURL(): string {
        return this._env?.['BASE_API_URL'] as string;
    }
}
