# Tears of the Kingdom Armor Upgrade (TOTK Upgrade)

Tears of the Kingdom Armor Upgrade (TOTK Upgrade) is a web application designed for the game "The Legend of Zelda - Tears of the Kingdom". It helps players calculate the materials required for armor upgrades within the game.

The project is built with React, Vite, Vitest for unit testing, MDB Bootstrap for CSS styling, and Yarn for dependency management. The application is hosted on GitHub Pages and can be accessed at [https://mcradane.github.io/totk-upgrade/](https://mcradane.github.io/totk-upgrade/). The production build is automatically compiled and deployed using GitHub Actions.

## Features

- Calculate the materials required for armor upgrades based on user input.
- Interactive user interface for selecting armor pieces and desired upgrade levels.
- Display of required materials and quantities in an easy-to-read format.
- Support for all armor sets and items.
- Multi-language support (English and French).

## Installation

1. Ensure that you have [Node.js](https://nodejs.org) installed on your machine. This project has been tested with Node 16.16.
2. Clone the repository:

   ```bash
   git clone https://github.com/mcradane/totk-upgrade.git
   ```

3. Navigate to the project directory:

   ```bash
   cd totk-upgrade
   ```

4. Install project dependencies using Yarn:

   ```bash
   yarn install
   ```

## Usage

1. Start the development server:

   ```bash
   yarn dev
   ```

   This will launch the application in development mode. Open [http://localhost:5173](http://localhost:5173) in your browser to access it.

2. Select the desired armor pieces and upgrade levels using the interactive interface.

3. The required materials and quantities for the armor upgrades will be displayed.

## Testing

The project includes unit tests to ensure code reliability. You can run the tests using the following command:

```bash
yarn test
```

This will execute the test suites and provide feedback on the test results.

## Deployment

The production build of the application is automatically compiled and deployed to GitHub Pages using GitHub Actions. Whenever changes are pushed to the `main` branch, the deployment workflow will trigger and update the deployed site.

You can access the deployed application at [https://mcradane.github.io/totk-upgrade/](https://mcradane.github.io/totk-upgrade/).

## Contributing

Contributions to Tears of the Kingdom Armor Upgrade are welcome! If you find any issues or have suggestions for improvements, please open an issue on the GitHub repository.

If you wish to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your modifications and commit your changes.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

Please ensure that your code follows the established coding standards and is thoroughly tested.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The project is inspired by the armor upgrade mechanics in "The Legend of Zelda - Tears of the Kingdom" game.
- Special thanks to the open-source community for providing the tools and libraries used in this project.
