# nextn 🤖⛓️

**nextn** (likely a combination of Next.js, AI, and Web3) is a powerful tool that combines Artificial Intelligence with blockchain technologies to provide analysis and insights into the cryptocurrency ecosystem.

## About the Project

This project was born from the need for smarter, more automated tools for crypto asset analysis. Using AI capabilities from Google's Genkit (`@genkit-ai/google-genai`) and Web3 integration via thirdweb (`@thirdweb-dev/react`), `nextn` offers [describe what it does, e.g., "market sentiment analysis," "smart contract audits," "project insights," etc.].

The application is built with Next.js and can be used as a web application.

## Key Features

*   **AI-Powered Analysis:** Describe the types of analysis the AI performs.
*   **Blockchain Integration:** Detail how it interacts with the blockchain (e.g., reading on-chain data, interacting with smart contracts via thirdweb).
*   **Wallet Management (if applicable):** Mention if there are wallet-related features, such as connecting different wallet types.
*   **Web Application:** A modern web interface built with Next.js and shadcn/ui.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

*   Node.js (v20.x or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/nextn.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd nextn
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1.  Create a `.env.local` file in the project root.
2.  Add the necessary environment variables. For example:
    ```env
    # Example variables - adjust as needed
    NEXT_PUBLIC_THIRDWEB_CLIENT_ID=YOUR_THIRDWEB_CLIENT_ID
    GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
    ```

## How to Use

### Running the Development Server
To start the web server, run:
```sh
npm run dev
```

Open http://localhost:9002 with your browser to see the result.

### Running Genkit
To start the Genkit development UI, run:
```sh
npm run genkit:watch
```
