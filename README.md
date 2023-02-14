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

## Set up MongoDB

1. Install the MongoDB Community Edition
2. [Run MongoDB Community Edition](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
3.
