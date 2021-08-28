interface Request {
    bodySize: number;
    method: string;
    url: string;
    httpVersion: string;
    headers: Array<{ name: string, value: string }>;
    cookies: Array<{ name: string, value: string }>;
    queryString: any[];
    headersSize: number;
    postData: Record<string, any>;
}

interface Response {
    status: number;
    statusText: string;
    httpVersion: string;
    headers: Array<{ name: string, value: string }>;
    cookies: Array<{ name: string, value: string }>;
    content: Record<string, any>;
    redirectURL: string;
    headersSize: number;
    bodySize: number;
}

export interface Entry {
    pageref: string;
    startedDateTime: string;
    request: Request;
    response: Response;
    cache: Record<string, any>;
    timings: Record<string, any>;
    time: number;
    _securityState: string;
    serverIPAddress: string;
    connection: string;
}

export interface Har {
    version: string;
    creator: { name: string, version: string };
    browser: { name: string, version: string };
    pages: any[];
    entries: Entry[];
}

export interface Tab {
    title: string;
    content: Entry;
    key: number | string;
}
