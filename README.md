# Name Search App

This is a simple web application built using Vite and React that allows users to search for individuals by name and view their genome information. It also includes additional features like displaying recent search queries and saving favorite individuals.

## Requirements

### Basic Functionality

- Users can search for individuals by their names.
- Matching individuals are displayed in a list.
- Upon clicking a search result, users are directed to their genome information, either on [torre.ai](http://torre.ai/) or within the app.

### Additional Features

Choose one or both of the following features:

1. **Display Recent Searches**

    - The app displays up to 10 of the most recent search queries.
    - Users can easily see their past searches for convenience.

2. **Favorite Individuals**

    - Users can save or favorite individuals.
    - The list of favorite individuals is easily accessible for future reference.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd name-search-app
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/) to use the app.

## Usage

1. Enter a name in the search bar and press Enter or click the search button.

2. Matching individuals will be displayed in a list. Click on an individual's name to view their genome information.

3. To view recent search queries, use the provided feature in the app.

4. To save or favorite individuals, use the appropriate feature in the app.

## API Endpoints

You can access the following API endpoints:

- **Search for People and Organizations:**

  - POST: [https://torre.ai/api/entities/_searchStream](https://torre.ai/api/entities/_searchStream)

- **Search-related Endpoints:**

  - [https://arda.torre.co/webjars/swagger-ui/index.html](https://arda.torre.co/webjars/swagger-ui/index.html)
  - [https://search.torre.co/webjars/swagger-ui/index.html](https://search.torre.co/webjars/swagger-ui/index.html)

- **Retrieve Genome Information:**

  - GET: [https://torre.bio/api/bios/$username](https://torre.bio/api/bios/$username)

## Note

This README provides a basic overview of the Name Search App. For more detailed documentation and implementation details, please refer to the code and comments in the repository.

**Happy searching!**

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
