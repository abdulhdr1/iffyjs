# Iffy API Client

Iffy is a TypeScript library for interacting with the Iffy API, which provides content moderation services. This library allows you to easily integrate content moderation into your applications.

## Installation

To install the Iffy library, use npm:

```
npm install iffyjs
```

## Getting Started

First, import the Iffy class and create an instance with your API key:

```typescript
import { Iffy } from "iffyjs";

const iffy = new Iffy({ apiKey: "your-api-key-here" });
```

## Usage

### Moderating Text Content

To moderate text content:

```typescript
const content = { type: "text", text: "Content to be moderated" };

try {
	const result = await iffy.moderate(content);
	if ("iffy" in result) {
		console.log("Is content iffy?", result.iffy);
		console.log("Reasoning:", result.reasoning);
	} else {
		console.error("Error:", result.error.message);
	}
} catch (error) {
	console.error("An error occurred:", error);
}
```

### Moderating Image Content

To moderate an image by URL:

```typescript
const content = {
	type: "image_url",
	image_url: { url: "https://example.com/image.jpg" },
};

try {
	const result = await iffy.moderate(content);
	if ("iffy" in result) {
		console.log("Is image iffy?", result.iffy);
		console.log("Reasoning:", result.reasoning);
	} else {
		console.error("Error:", result.error.message);
	}
} catch (error) {
	console.error("An error occurred:", error);
}
```

## API Reference

### Iffy Class

The main class for interacting with the Iffy API.

#### Constructor

```typescript
new Iffy({ apiKey: string });
```

-   `apiKey`: Your Iffy API key (required)

#### Methods

```typescript
moderate(content: Content): Promise<ModerateResponse>
```

-   `content`: The content to be moderated (either text or image URL)
-   Returns a promise that resolves to the moderation response

## Types

-   `Content`: Represents the content to be moderated (text or image URL)
-   `ModerateResponse`: The response from the moderation API (either IffyResponse or ErrorResponse)
-   `IffyResponse`: A successful response containing the moderation result
-   `ErrorResponse`: An error response from the API
