# DynamicMenu

<p align="center">
  <img src="/client/src/assets/LOGO.png" />
</p>

**Dynamic Menu** web app pretend to be an easy way to create and modify restaurants menu.

The possible users of this web app are the owners or managers of restaurants.

**This MVP should allow them to:**

- Generate a new Menu per each restaruant.
- Add or remove a single dish.
- Generate thery own QR Code.
- Generate a PDF with the QR code. 

## Getting started
1. Run npm i from /server folder
2. Run npm i from /client folder

## Installation

1. Clone this repo and enter!

   ```bash
   git clone https://github.com/llere-alt/DynamicMenu.git
   cd DynamicMenu/
   ```

2. Install dependencies.

   ```bash
   cd client && npm i
   cd ../server && npm i
   ```
3. Start the app.

- on the server folder
   ```bash
   nodemon index.js
   ```
 - on the client folder
    ```bash
    npm start
   ```


## Tech Stack
* [React](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* Other dependencies:
  * [react-to-pdf](https://www.npmjs.com/package/react-to-pdf)
  * [qrcode.react](https://www.npmjs.com/package/qrcode.react)

## Developed by:
* Daniel Hernández Llerena - [GitHub](https://github.com/llere-alt) - [LinkedIn](https://www.linkedin.com/in/daniel-hernandez-ller/)
