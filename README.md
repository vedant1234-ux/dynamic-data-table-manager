# 🚀 Dynamic Data Table Manager

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-blue?logo=next.js)](https://nextjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.8.2-purple?logo=redux)](https://redux-toolkit.js.org/)
[![Material UI](https://img.shields.io/badge/Material--UI-7.2.0-blue?logo=mui)](https://mui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, extensible **Data Table Manager** built with **Next.js**, **Redux Toolkit**, **Material UI**, and **TypeScript**. Designed for real-world applications that need advanced, interactive data tables with inline editing, dynamic columns, CSV import/export, and theming.

---

## 📑 Table of Contents

- [Objective](#objective)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quickstart](#quickstart)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Customization](#customization)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Deployment](#deployment)
- [Acknowledgements](#acknowledgements)

---

## 🎯 Objective

Showcase modern frontend skills with a robust, scalable, and interactive data table manager. Demonstrates dynamic UIs, complex state management, and real-world feature implementation.

---

## ✨ Features

- **Table View:** Sortable, searchable, paginated table (`Name`, `Email`, `Age`, `Role`)
- **Dynamic Columns:** Add/remove, show/hide, drag-and-drop reorder, persistent settings
- **CSV Import/Export:** Validate and parse CSV (PapaParse), export filtered/visible data (FileSaver.js)
- **Inline Editing:** Double-click to edit, field validation, save/cancel all
- **Row Actions:** Edit/Delete with confirmation
- **Theme Toggle:** Light/Dark mode (MUI)
- **Responsive UI:** Mobile-first, modern layout

---

## 🛠 Tech Stack

| Technology        | Purpose                        |
|-------------------|-------------------------------|
| Next.js 14        | App routing and structure      |
| React 18          | Component-based frontend       |
| Redux Toolkit     | Global state management        |
| TypeScript        | Type safety and code quality   |
| Material UI v5+   | UI components and styling      |
| React Hook Form   | Form handling and validation   |
| PapaParse         | CSV import parsing             |
| FileSaver.js      | CSV download/export            |

---

## ⚡ Quickstart

```bash
# Clone and install
git clone https://github.com/your-username/dynamic-data-table-manager.git
cd dynamic-data-table-manager
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
src/
├── app/           # Next.js App Router pages and layout
├── components/    # UI components (Table, Modal, Toolbar, etc.)
├── store/         # Redux slices and configuration
├── types/         # TypeScript interfaces and types
├── utils/         # Utility functions (CSV parsing, validation, etc.)
```

---

## 📸 Screenshots

> Place screenshots inside the `/screenshots` folder.

| View                                            | Description                   |
|-------------------------------------------------|-------------------------------|
| ![Table](./screenshots/table-view.png)          | 📊 Table with sorting, search |
| ![Columns](./screenshots/column-management.png) | 🔧 Manage Columns Modal       |
| ![Dark](./screenshots/dark-mode.png)            | 🌙 Dark Mode                  |

---

## 🧩 Customization

- **Add new column types:** Extend `ColumnConfig` and update `EditableCell.tsx`
- **Change theme:** Edit `ThemeProvider.tsx`
- **Expand features:** Add slices or components modularly with Redux Toolkit

---

## 🧪 Testing

- [Jest](https://jestjs.io/) for unit tests
- [React Testing Library](https://testing-library.com/) for component tests
- [Cypress](https://www.cypress.io/) for end-to-end

---

## 🤝 Contributing

We welcome contributions!  
1. Fork the repo  
2. Create a new branch  
3. Commit your changes with clear messages  
4. Submit a PR with documentation

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

🔗 Live Demo:
https://dynamic-data-table-manager-iota.vercel.app

---

## ❤️ Acknowledgements

- Built with [Next.js](https://nextjs.org/)
- UI powered by [Material UI](https://mui.com/)
- State managed with [Redux Toolkit](https://redux-toolkit.js.org/)
- CSV handled via [PapaParse](https://www.papaparse.com/)

---

> Created with 💻 by [VEDANT VALMIK WARGHADE] – Contributions welcome!

