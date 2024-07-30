export type Headers = [string, string][];
export type Content =
	| { type: "text"; text: string }
	| {
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

export class Iffy {
	apiKey: string;
	baseUrl = "https://www.iffy.com/api";

	authHeaders(): Headers {
		return [["Authorization", `Bearer ${this.apiKey}`]];
	}

	defaultHeaders(): Headers {
		return [
			["Accept", "application/json"],
			["Content-Type", "application/json"],
		];
	}

	constructor({ apiKey }: { apiKey: string }) {
		if (!apiKey) {
			throw new Error("API key is required");
		}

		this.apiKey = apiKey;
	}

	async moderate(content: Content): Promise<ModerateResponse> {
		try {
			const url = `${this.baseUrl}/moderate`;

			const response = await fetch(url, {
				method: "POST",
				headers: [...this.defaultHeaders(), ...this.authHeaders()],
				body: JSON.stringify({
					content,
				}),
			});
			const data = await response.json();
			return data as IffyResponse;
		} catch (error) {
			return error as ErrorResponse;
		}
	}
}
