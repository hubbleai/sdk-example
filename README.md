# Carbon Demo

This is a demo app creating using [Carbon](https://www.carbon.ai)'s Vanilla JS [SDK](https://www.npmjs.com/package/carbon-connect-js). This app is a simple demo of how to use the SDK to create a Carbon Connect app.

## Getting Started

To get started, clone this repo and run `npm install` to install the dependencies. Then, run `npm start` to start the app. You can then visit `http://localhost:3000` to see the app running.

## Using the demo app

You can visit the demo app [here](https://sdk-example-theta.vercel.app/). The app expects your API key and the customer-id you would want to test with. After your provide the values and click on `Try Carbon`, you can see the list of test actions you can perform. Please note that you have to generate the access token before using any protected endpoints. You can do so by clicking on the `Generate Access Token` button. Once the access token is generated, it is stored in the app's state and used for all the other requests.

## Using the SDK

The SDK is available as a [npm package](https://www.npmjs.com/package/carbon-connect-js). To use it, simply install it using `npm install carbon-connect-js` and then import it into your app using `import * as Carbon from 'carbon-connect-js'`. You can then use the SDK to make requests to the Carbon API.

## Documentation

The documentation for the SDK is available [here](https://api.carbon.ai/redoc#section/Javascript-SDK).
