/**
 * Represents a pair of strings used for HTTP headers.
 */
export type Headers = [string, string][];
/**
 * Represents the content to be moderated.
 * It can be either text content or an image URL.
 */
export type Content = {
    type: "text";
    text: string;
} | {
    type: "image_url";
    image_url: {
        url: string;
    };
};
/**
 * Represents the response from the moderation API.
 * It can be either an IffyResponse or an ErrorResponse.
 */
type ModerateResponse = IffyResponse | ErrorResponse;
/**
 * Represents a successful response from the moderation API.
 */
type IffyResponse = {
    iffy: boolean;
    reasoning: string;
};
/**
 * Represents an error response from the moderation API.
 */
type ErrorResponse = {
    error: {
        message: string;
    };
};
/**
 * The main class for interacting with the Iffy API.
 */
export declare class Iffy {
    /** The API key used for authentication. */
    apiKey: string;
    /** The base URL for the Iffy API. */
    baseUrl: string;
    /**
     * Returns the authorization headers for API requests.
     * @returns {Headers} The authorization headers.
     */
    authHeaders(): Headers;
    /**
     * Returns the default headers for API requests.
     * @returns {Headers} The default headers.
     */
    defaultHeaders(): Headers;
    /**
     * Creates a new instance of the Iffy class.
     * @param {Object} params - The constructor parameters.
     * @param {string} params.apiKey - The API key for authentication.
     * @throws {Error} If the API key is not provided.
     */
    constructor({ apiKey }: {
        apiKey: string;
    });
    /**
     * Sends a moderation request to the Iffy API.
     * @param {Content[]} content - The content to be moderated.
     * @returns {Promise<ModerateResponse>} A promise that resolves to the moderation response.
     */
    moderate(content: Content[]): Promise<ModerateResponse>;
}
export {};
