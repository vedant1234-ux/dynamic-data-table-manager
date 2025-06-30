# 🚀 Dynamic Data Table Manager

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-blue?logo=next.js)](https://nextjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.8.2-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Material UI](https://img.shields.io/badge/Material--UI-7.2.0-blue?logo=mui)](https://mui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **feature-rich, customizable data table manager** built with **Next.js**, **Redux Toolkit**, **Material UI**, and **TypeScript**. Designed for modern applications that require flexible and interactive data tables with powerful features like dynamic columns, inline editing, CSV import/export, and dark mode theming.

---

## 📍 Project Objective

This frontend task demonstrates your ability to:

* Work with **dynamic UIs**
* Manage **complex state** using Redux Toolkit
* Implement **real-world features** like:

  * CSV import/export
  * Column manipulation
  * Sorting, searching, pagination
  * Inline editing and responsive UI

---

## ✨ Core Features

### 📊 Table View

* Display a data table with default fields: `Name`, `Email`, `Age`, `Role`
* Column sorting with ASC/DESC toggling
* Global search that filters all fields
* Client-side pagination (10 rows per page)

### 🧱 Dynamic Columns

* Manage Columns modal:

  * Add new fields (e.g., Department, Location)
  * Show/hide columns using checkboxes
  * Drag-and-drop to reorder columns
* Persist settings in `localStorage` or via `Redux Persist`

### 📁 Import & Export

* **Import from CSV**:

  * Upload, parse using PapaParse
  * Validate format and highlight errors

* **Export to CSV**:

  * Export current view
  * Only includes visible columns

### 🎁 Bonus Features

* 🔄 **Inline Row Editing**:

  * Double-click to edit fields inline
  * Validate inputs (e.g., age must be a number)
  * "Save All" and "Cancel All" buttons

* 🗑️ **Row Actions**:

  * Edit or Delete rows with confirmation dialogs

* 🌗 **Theme Toggle**:

  * Light/Dark mode using MUI's theming

* 📱 **Responsive Design**:

  * Mobile-friendly, modern UI

---

## 🛠 Tech Stack

* **React 18 / Next.js 14** (App Router)
* **Redux Toolkit** for global state
* **Material UI v5+** for UI components and theming
* **TypeScript** for static typing
* **React Hook Form** for column and row input handling
* **PapaParse** for CSV parsing
* **FileSaver.js** for CSV export
* **localStorage / Redux Persist** for preference persistence

---

## 🚦 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📸 Screenshots

> *Add screenshots in `/screenshots` to showcase your features.*

* 📊 Table View
  ![Table View](./screenshots/table-view.png)

* 🔧 Column Management
  ![Column Management](./screenshots/column-management.png)

* 🌙 Dark Mode
  ![Dark Mode](./screenshots/dark-mode.png)

---

## 📁 Folder Structure

```
src/
├── app/           # Next.js App Router entrypoint and layout
├── components/    # Reusable components (DataTable, Toolbar, Modals, etc.)
├── store/         # Redux slices and store config
├── types/         # Shared TypeScript interfaces and types
├── utils/         # Helper functions (CSV parsing, validation, etc.)
```

---

## 🧩 Customization Tips

* 💡 **Add new column types** – Extend `ColumnConfig` and enhance `EditableCell`
* 🎨 **Customize theme** – Update MUI theme inside `ThemeProvider`
* 🚀 **Add features** – Redux makes scaling features and state easy

---

## 🤝 Contributing

We welcome contributions!
Feel free to open an issue for feature requests or bugs.
Make pull requests clean and document your code.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Made with ❤️ using Next.js, Redux Toolkit, Material UI, and TypeScript.

---

## 🚀 What's Next?

If you need help with:

* Generating production-ready screenshots
* Writing GitHub issues or pull request templates
* Deploying this project to **Vercel** (`vercel.json` support)

Let me know — I'd be happy to help you finalize everything!

---

Let me know if you'd like me to turn this into a downloadable `README.md` file or help you add a `vercel.json`, `.env.example`, or GitHub templates (`CONTRIBUTING.md`, `ISSUE_TEMPLATE`, etc.) for completeness.
