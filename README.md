## How to run the app

1. Assuming you have nodejs and mongoDB Community install. Start the MongoDB `brew services start mongodb-community@6.0`

2. Launch the local server by running `npm run dev` at the **/server** directory (`./server`). An express server will be up and running on [http://localhost:3001](http://localhost:3001).

```
cd server
npm run dev
```

4. Start the client service by running `npm run start` at the **/client** directory (`./client`). A new tab will open in the browser. Go to [http://localhost:3000](http://localhost:3000) to view the **Tesla Dataset Exploration App**

```
cd client
npm run start
```

## Documentation

- [REST API documentation](https://github.com/haoyt5/money-tracker/wiki/REST-API-Documentation)

## File Structure

```
client/
┣ .storybook/
┃ ┣ css/
┃ ┃ ┣ bootstrap.css
┃ ┃ ┣ compiled-tailwind.css
┃ ┃ ┗ compiled-tailwind.min.css
┃ ┣ main.js
┃ ┗ preview.js
┣ public/
┣ src/
┃ ┣ components/
┃ ┃ ┣ ExpenseForm.tsx
┃ ┃ ┣ ExpenseTableContainer.tsx
┃ ┃ ┣ Header.tsx
┃ ┃ ┣ PageBackwardButton.tsx
┃ ┃ ┣ SubmitButton.tsx
┃ ┃ ┗ SummaryTable.tsx
┃ ┣ context/
┃ ┃ ┗ SocketProvider.tsx
┃ ┣ hooks/
┃ ┃ ┣ useFetch.ts
┃ ┃ ┗ useSubscribeFetch.ts
┃ ┣ pages/
┃ ┃ ┣ ErrorPage.tsx
┃ ┃ ┣ ExpensesPage.tsx
┃ ┃ ┗ SummaryPage.tsx
┃ ┣ routes/
┃ ┃ ┣ AuthRoot.tsx
┃ ┃ ┗ router.tsx
┃ ┣ stories/
┃ ┃ ┣ assets/
┃ ┃ ┣ examples/
┃ ┃ ┣ FormButtons.stories.tsx
┃ ┃ ┣ Header.stories.tsx
┃ ┃ ┗ Header.tsx
┃ ┣ index.css
┃ ┣ index.tsx
┃ ┣ logo.svg
┃ ┗ react-app-env.d.ts
┣ storybook-static/
┣ .npmrc
┣ .prettierignore
┣ .prettierrc.json
┣ package-lock.json
┣ package.json
┣ tailwind.config.js
┗ tsconfig.json
```

```
server/
┣ dist/
┃ ┗ index.js
┣ node_modules/
┣ src/
┃ ┣ db/
┃ ┃ ┗ Database.ts
┃ ┣ models/
┃ ┃ ┗ expense.ts
┃ ┣ routes/
┃ ┃ ┣ expenses.ts
┃ ┃ ┗ index.ts
┃ ┗ index.ts
┣ .prettierignore
┣ .prettierrc.json
┣ package-lock.json
┣ package.json
┗ tsconfig.json
```
