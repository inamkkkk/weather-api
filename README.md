# Weather API Proxy

A simple Node.js proxy API that fetches weather data from a third-party service.

## Installation

1.  Clone the repository:
    
    git clone <repository_url>
    
2.  Install dependencies:
    
    npm install
    
3.  Configure environment variables:
    -   Create a `.env` file in the root directory.
    -   Add the following variables:
        -   `WEATHER_API_KEY`: Your API key from the weather service.
        -   `WEATHER_API_BASE_URL`: The base URL of the weather service API.
        -   `PORT`: The port the server will listen on (default: 3000).

## Usage

1.  Start the server:
    
    npm start
    
2.  Access the API:
    -   `GET /weather/:city`: Get weather data for a specific city.

## Example

`GET /weather/London`

## Technologies

-   Node.js
-   Express.js
-   Axios
-   dotenv
