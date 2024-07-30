export type Headers = [string, string][];
export type Content = {
    type: "text";
    text: string;
} | {
    type: "image_url";
    image_url: {
        url: string;
    };
};
type ModerateResponse = IffyResponse | ErrorResponse;
type IffyResponse = {
    iffy: boolean;
    reasoning: string;
};
type ErrorResponse = {
    error: {
        message: string;
    };
};
export declare class Iffy {
    apiKey: string;
    baseUrl: string;
    authHeaders(): Headers;
    defaultHeaders(): Headers;
    constructor({ apiKey }: {
        apiKey: string;
    });
    moderate(content: Content): Promise<ModerateResponse>;
}
export {};
