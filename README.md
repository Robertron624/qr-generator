# Project Overview

This project is a QR Code generator application. It allows users to generate QR codes that can be scanned to redirect to specific URLs or display certain information.

## Technologies Used

- JavaScript: The main logic of the application is written in JavaScript, specifically in the files src/js/main.js and src/js/qrcode.js. The minified version of the 
QR code generation logic can be found in src/js/qrcode.min.js.

- CSS: The styling for the application is done using CSS, with styles defined in src/styles/style.css and src/styles/qrcode-style.css.

- HTML: The structure of the application is defined in HTML, in the files index.html and qrcode.html.

- Node.js and npm: The project uses Node.js and npm for package management, as defined in the package.json file.

- pnpm: The project also uses pnpm, a fast, disk space efficient package manager, as indicated by the pnpm-lock.yaml file.

- Fonts: The application uses custom fonts, specifically Outfit-Bold, Outfit-Medium, Outfit-Regular, and Outfit-SemiBold, which are stored in the public/fonts directory.

## Setup and Installation

To set up and install the project, you will need to have Node.js and npm installed on your machine. Then, you can clone the repository and install the necessary dependencies by running npm install in the project directory.

Even though the project could've been set up without node and npm, I decided to use them to make it easier to manage the dependencies and to allow for future expansion of the project.

## Usage

Open a terminal in the project directory and run the command `pnpm run dev` to start the application. This will start a local server that will serve the application on port 5173. You can then open a browser and navigate to localhost:5173 to view the application.

If instead, you want to build the application, you can run the command `pnpm run build`. This will create a dist directory with the built application. You can then open the index.html file in the dist directory to view the application.


## Links

- [Repository](https://github.com/Robertron624/qr-generator)
- [Live Demo]()

## Author

- [LinkedIn](www.linkedin.com/in/roberto-ramirez-aguilar)
- [GitHub](https://github.com/Robertron624)