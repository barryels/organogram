# Organogram [![Maintainability](https://api.codeclimate.com/v1/badges/4398476b7ff6d9935dc3/maintainability)](https://codeclimate.com/github/barryels/organogram/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4398476b7ff6d9935dc3/test_coverage)](https://codeclimate.com/github/barryels/organogram/test_coverage)

## Getting Started

1. Copy the `.env.example` file
2. Rename the copied file to `.env`
3. Update the variables as necessary
4. Run: `npm install`

## Usage

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run test:e2e`

Opens the Cypress launchpad for testing

### `npm run test:e2e:headless`

Runs the Cypress e2e tests in headless mode

### `npm run test:e2e:headless:watch`

Runs the Cypress e2e tests in headless mode while watching for file changes

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

This repo is currently set up to use GitHub Pages for simple hosting (see: `.github/workflows/main.yml`)
