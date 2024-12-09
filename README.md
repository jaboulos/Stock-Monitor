# Stock Monitor App Instructions

## How to Set Up and Run the Application

- To start the app, run the command:
  ```bash
  npm run dev
  ```
- To run tests, use the command:
  ```bash
  npm test
  ```

## Trade-offs or Decisions Made

Some small trade-offs were made in the interest of time, including:

- The setup of CSS styles for the main component `StockList`.
  - In an ideal situation, I would have included more aesthetic styles and CSS variables to make certain parts of the code more reusable.
- I would have also liked to include more sorting and filtering options for the user for a better user experience.
- A proper 404 not found page for routing is also something that I would have liked to include.

## Tier of Requirements Implemented

- **Use Provided Stock Data**: Done
- **UI Design & Development**:
  - **Core Requirements**: Done
  - **Auxiliary Requirements**:
    - Sorting was included.
    - Stock Detail View was included.
    - Offline support (through the use of local storage) was included.
- **React Implementation**:
  - Completed with ReactJS using Vite.
  - App is responsive and works with iOS and Android views.
