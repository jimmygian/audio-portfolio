# `src/` | Project Architecture

This document outlines the architectural design principles used in this project and how `src/` folder is structured. It also provides an overview of the technologies and libraries used to achieve this design and why it was chosen.

## Table of Contents

- [General](#general)
- [Architecture Overview](#architecture-overview)
  - [Diagram](#diagram)
- [Root-Level Files & Folders](#root-level-files-and-folders)
- [`app/` Directory](#app-directory)
- [`config/` Directory](#config-directory)
- [`store/` Directory](#store-directory)
- [`types/` Directory](#types-directory)

<br>
<br>

## General

This Next.js project leverages a range of libraries and services to ensure a flexible, scalable, and efficient development approach:

- **Next.js**: Utilized for its server-side rendering, routing capabilities, and robust abstractions.
- **TypeScript**: Provides static typing to enhance code quality and maintainability.
- **Redux**: Manages the app's global state, ensuring a clear separation between UI and logic.
- **Tailwind CSS**: Offers a highly customizable yet simple approach to styling components.


<br>


## Architecture Overview

The `src` directory is organized as follows:

- **`app/`**: Contains all React UI components and routing folders. This is also the website's first page.

- **`config/`**: Includes firebase-related configuration files:
  - `firebase.ts`: Configures Firebase.
  - `auth.ts`: Sets up authentication using Firebase.
  - `firestore.ts`: Defines Firestore-specific methods for retrieving and storing data.

- **`store/`**: Manages the global Redux state:
  - `store.ts`: The central store configuration.
  - `features/`: Contains all Redux slices for state management.

- **`types/`**: Defines TypeScript types used across the project. All type definitions are imported and re-exported in the `index.d.ts` file for convenient usage throughout the codebase.


### Diagram

```
./
├── public/
│   ├── fonts/
│   └── {other public files}
│   
├── src/
│   │  
│   ├── app/
│   │   ├── _components/
│   │   ├── home/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── (portfolio)/
│   │   │   ├── audio-post/
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   └── {other folder routes}/
│   │   ├── (testing)/
│   │   │   └── {test files / routes}
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │  
│   ├── config/
│   │   ├── firebase.ts
│   │   ├── firestore.ts
│   │   └── auth.ts
│   │  
│   ├── store/
│   │   ├── store.ts
│   │   ├── reduxHooks.ts
│   │   ├── StoreProvider.tsx
│   │   └── features/
│   │       ├── userData/
│   │       │   ├── userDataSlice.ts
│   │       │   └── userDataSelector.ts
│   │       └── {otherSliceName}/
│   │           ├── {sliceName}Slice.ts
│   │           └── {sliceName}Selector.ts
│   │  
│   ├── types/
│   │   ├── index.d.ts
│   │   ├── firestore.d.ts
│   │   ├── redux.d.ts
│   │   ├── theme.d.ts
│   │   └── {other types}.d.ts
│   │  
│   │  
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

```

<br>

## Root-Level Files and Folders

This section explains the purpose of each root-level file and folder in the project and why they are necessary.



### Folders

#### **`public/`**
- **Purpose**: Contains static assets such as fonts, images, and other files directly accessible from the browser.
- **Why It Exists**:
  - Files in this folder are served at the root (`/`) of your website.
  - For example, a font file in `public/fonts/myFont.woff2` will be accessible at `https://yourdomain.com/fonts/myFont.woff2`.
- **Example Content**: 
  - `fonts/` for custom typography.
  - Public images, favicons, or other static assets.

#### **`src/`**
- **Purpose**: This is the core folder where the main application code resides.
- **Why It Exists**:
  - Organizes all code for components, state management, and configuration in one place.
  - Promotes scalability by separating concerns (UI, state, Firebase configuration, etc.).



### Root-Level Files

#### **`.env.local`**
- **Purpose**: Stores environment variables specific to the development environment (e.g., API keys, Firebase credentials).
- **Why It Exists**:
  - Prevents sensitive data from being hardcoded into your application.
  - Allows for environment-specific configurations (e.g., local vs. production keys).
- **Note**: This file is ignored by Git for security (thanks to `.gitignore`).

#### **`.eslintrc.json`**
- **Purpose**: Defines ESLint rules to maintain code quality and enforce consistent coding styles.
- **Why It Exists**:
  - Helps prevent bugs by highlighting errors and enforcing best practices.
  - Configures rules specific to this project (e.g., TypeScript and Next.js-specific linting).

#### **`.gitignore`**
- **Purpose**: Specifies files and directories that Git should ignore (e.g., `node_modules`, `.env.local`).
- **Why It Exists**:
  - Prevents unnecessary or sensitive files from being tracked in the Git repository.

#### **`next-env.d.ts`**
- **Purpose**: TypeScript definition file auto-generated by Next.js.
- **Why It Exists**:
  - Provides TypeScript support for Next.js APIs (e.g., `getServerSideProps` or `Image`).
- **Note**: You don’t usually edit this file manually.

#### **`next.config.mjs`**
- **Purpose**: Configuration file for Next.js.
- **Why It Exists**:
  - Enables custom Next.js behavior, such as API routes, build optimizations, or environment variables.
  - For example, you can enable image optimization or add custom Webpack configurations here.

#### **`package.json`**
- **Purpose**: Describes your project and manages dependencies, scripts, and metadata.
- **Why It Exists**:
  - Lists all installed libraries and tools (e.g., React, Tailwind CSS, Firebase).
  - Includes scripts for development, building, and deploying the app (e.g., `npm run dev`).
- **Key Sections**:
  - `dependencies`: Libraries required for the app to run.
  - `devDependencies`: Tools needed for development (e.g., ESLint, TypeScript).

#### **`package-lock.json`**
- **Purpose**: Locks the exact versions of your dependencies and their sub-dependencies.
- **Why It Exists**:
  - Ensures the app behaves consistently across different environments by locking dependency versions.

#### **`postcss.config.mjs`**
- **Purpose**: Configuration file for PostCSS, a tool for processing CSS (used by Tailwind CSS).
- **Why It Exists**:
  - Allows you to customize PostCSS behavior (e.g., plugins for handling autoprefixing or minification).

#### **`README.md`**
- **Purpose**: A markdown file describing the project and how to use it.
- **Why It Exists**:
  - Acts as documentation for new developers, team members, or anyone using your project.
  - Typically includes installation steps, project description, and usage instructions.

#### **`tailwind.config.ts`**
- **Purpose**: Configures Tailwind CSS settings, such as custom colors, themes, and plugins.
- **Why It Exists**:
  - Extends or customizes Tailwind’s default configurations to suit your app’s design.
  - Example: Adding custom fonts or breakpoints.

#### **`tsconfig.json`**
- **Purpose**: TypeScript configuration file.
- **Why It Exists**:
  - Specifies compiler options (e.g., strict mode) and paths for TypeScript.
  - Allows you to customize how TypeScript handles the project (e.g., enabling alias imports with `@/`).

<br>


---
---



<br>


## `app/` Directory

The `app/` directory is the central hub for all UI components, route definitions, and layout structures in the project. It is structured in a way that promotes reusability, organization, scalability, and clear separation of concerns:  
- Shared components live in `_components/`.  
- Route-specific components and layouts are grouped logically in their respective folders.   
- Testing and experimental files are isolated in the `(testing)` folder.  

This structure ensures scalability, reusability, and maintainability while adhering to best practices.


<br>


### Directory Structure

- **`_components/`**:  
  Contains shared components that are reused across multiple routes or files. This ensures consistency and avoids duplication of code.
  
  ---

- **`home/`**:  
  Includes the main layout and page for the homepage:  
  - `layout.tsx`: Defines the layout for the `home` route.  
  - `page.tsx`: Implements the content and logic of the homepage.

- **`{other routes}/`**:  
Each folder in the `app/` directory represents a "url" path to a webpage and typically contains:  
  - `layout.tsx`: Defines the layout specific to that route.  
  - `page.tsx`: Contains the page's content and logic.

  ---

- **`(portfolio)/`**:  
  When a folder is in parenthesis, it's only for organisational purposes. In this example, a dedicated folder for portfolio-related routes was created, organized into subfolders:  
  - **`audio-post/`**: Contains:  
    - `layout.tsx`: Defines the layout for the `audio-post` portfolio section.  
    - `page.tsx`: Implements the content for the `audio-post` page.  
  - **`other portfolio-specific folder routes`**: Folders for other portfolio sections. These are organized within the `(portfolio)` folder for clarity and maintainability.

- **`(testing)/`**:  
  An directory for organising files and routes for experimental purposes. It contains various test files and route implementations used during development.

  ---

  `app/.` folder's files - Used for global website's layouts and configurations:

- **`global.css`**:  
  Includes global styling configurations for Tailwind CSS. This file centralizes Tailwind-specific styles and ensures consistent styling across the project.

- **`layout.tsx`**:  
  The root layout file that defines the base layout structure of the application, wrapping all routes and components.

- **`page.tsx`**:  
  The root page file, used for rendering the base or default content of the app "`./`".


<br>


## `config/` Directory

The `config/` directory centralizes the project's Firebase configuration and related utilities. It ensures a clear separation of concerns and a streamlined approach to integrating Firebase services across the application. This directory currently contains three files:

### **`firebase.ts`**

- **Purpose**:  
  This file is the entry point for initializing the Firebase app. It contains the `firebaseConfig` object, which holds all Firebase keys (e.g., API key, project ID, etc.). The configuration is passed into `initializeApp()` from the Firebase SDK.

- **Current Setup**:  
  All sensitive Firebase credentials are stored securely in the local `.env` file during development. These keys are imported into `firebase.ts` to initialize Firebase.

- **Future Plans**:  
  In production, the keys will be securely managed using a service such as Google Secret Manager or another secrets management tool to enhance security and scalability.

---

### **`firestore.ts`**

- **Purpose**:  
  This file encapsulates all Firestore database interactions, defining methods to read and write data.  

- **Design Principles**:  
  - All Firestore queries and updates are abstracted into this file, ensuring a single source of truth for database operations.
  - These methods are designed to be consumed by Redux actions, promoting a clean separation of concerns by preventing direct interaction with Firestore from React components.

- **Example Methods**:  
  - `getDocumentById`: Retrieves a specific document by ID.  
  - `updateDocument`: Updates a Firestore document.  
  - Additional utility functions will be added as the application evolves.

---

### **`auth.ts`**

- **Purpose**:  
  Although currently empty, this file will eventually handle all Firebase Authentication logic.

- **Planned Functionality**:  
  - **Administrator Login**: Implements authentication for an admin dashboard where website data can be managed.  
  - **Future-Proofing for User Authentication**: Prepares the app for potential expansion to include user authentication, enabling user-specific features such as personalized content or access control.

By consolidating all Firebase-related logic into the `config/` directory, this approach promotes better organization, reusability, and maintainability, especially as the project scales.


<br>


## `store/` Directory

The `store/` directory is responsible for managing the app's global state. It provides hooks and tools for accessing and modifying the global state. It is designed to streamline state management and ensure consistency across the application. 

This directory contains three main files and a `features/` folder.


### **`store.ts`**

This file is the central configuration for the Redux store. It combines all Redux slices using `combineReducers` and initializes the store using the `configureStore` method from the `@reduxjs/toolkit` library.

- **Exports**:  
  - The Redux store instance, which is used across the app.
  - Two essential types:
    - `RootState`: Represents the shape of the entire Redux state.
    - `AppDispatch`: The dispatch type used throughout the app.
  
  These types are re-exported in the `redux.d.ts` file within the `types/` directory for consistent and centralized usage.

---

### **`reduxHooks.ts`**
 
Provides custom hooks to streamline the usage of Redux in the app.

- **Custom Hooks**:  
  - `useAppDispatch`: A typed version of `useDispatch` that uses the `AppDispatch` type.  
  - `useAppSelector`: A typed version of `useSelector` that uses the `RootState` type.  

- **Benefits**:  
  By using these custom hooks, you avoid having to manually import `RootState` and `AppDispatch` types every time you use Redux hooks in your components, simplifying the code and reducing redundancy.

---

### **`StoreProvider.tsx`**

- **Purpose**:  
  Provides the Redux store to the React component tree using the `Provider` component from `react-redux`.

- **Why It’s Used**:  
  This component ensures that the Redux store is available to all React components in the application. Wrapping the app with `StoreProvider` allows components to access the store via hooks like `useAppDispatch` and `useAppSelector`. It also encapsulates the provider logic, keeping the root-level setup clean and focused.

---

### **`features/` Folder**

- **Purpose**:  
  Organizes Redux slices and their selectors into separate, logically grouped files and folders.

- **Structure**:  
  Each slice resides in its own folder within `features/` and is further divided into two files:
  - **`{sliceName}Slice.ts`**: Contains the slice definition and its actions, reducers, and initial state. This file exports the slice and is imported in `store.ts` to combine reducers.
  - **`{sliceName}Selector.ts`**: Contains and exports all selectors related to the slice. Selectors are functions used to derive or retrieve specific parts of the Redux state.

- **Example**:  
  ```
  features/
  ├── userData/
      ├── userDataSlice.ts
      └── userDataSelector.ts
  ```

By following this structure, the `features/` folder ensures better organization, scalability, and maintainability of the Redux logic. Separating slices and selectors into different files also promotes a clean codebase and clear separation of responsibilities.





<br>



## `types/` Directory

The `types/` directory is dedicated to managing all TypeScript type definitions used across the project. By centralizing type declarations, it ensures consistency, reusability, and maintainability. This directory follows a modular structure, with separate files for different domains of the app, and an `index.d.ts` file for streamlined imports.

---

### **Purpose and Design Principles**

1. **Separation of Concerns**:  
   Each file in the `types/` directory corresponds to a specific domain or feature of the app, such as Firestore, Redux, or theming. This separation ensures clarity and makes type management more intuitive as the project grows.

2. **Centralized Imports**:  
   The `index.d.ts` file consolidates and re-exports all type definitions, allowing types to be imported from a single source, e.g., `@/types`. This approach simplifies imports and improves readability across the codebase.

---

### **Files in `types/`**

- **`firestore.d.ts`**:  
  Defines all types and interfaces related to Firestore data structures, queries, and operations.  
  Example:
  - Type for Firestore documents.
  - Interfaces for Firestore collections.

- **`redux.d.ts`**:  
  Contains type definitions specific to Redux, such as:
  - `RootState`: Represents the overall shape of the Redux state.  
  - `AppDispatch`: Defines the type of the `dispatch` function.  
  These types are referenced in the `reduxHooks.ts` file and used throughout the app to ensure type safety in Redux operations.

- **`theme.d.ts`**:  
  Includes types and interfaces for managing theming, such as:
  - Tailwind-specific type definitions (if necessary).  
  - Interfaces for customizing themes or shared style-related utilities.

- **Other Files**:  
  Additional files can be added as needed, each corresponding to a specific domain or feature, ensuring the directory remains organized and scalable.

---

### **`index.d.ts`**

The `index.d.ts` file acts as a single entry point for all type definitions in the directory. It re-exports all types from the individual files, enabling a unified import strategy across the project.  
Example:
```typescript
export * from "./firestore";
export * from "./theme";
export * from "./redux";
```


Example usage:

> note that you don't have to import files from anywhere else within `"@/types"`. Since all files are imported and re-exported in `index.d.ts`, you can just use the generic `import { something } from "@/types"`

```typescript
// Importing from the centralized `index.d.ts` file
import type { ThemeType, UserDataType } from "@/types";

const exampleUser: UserDataType = {
  userId: "12345",
  professions: ["engineer", "designer"],
  admin: true,
  dob: new Date(),
  name: {
    full: "John Doe",
    first: "John",
    last: "Doe",
    initials: "JD",
    alias: "Johnny",
  },
  info: {
    username: "johndoe123",
    email: "johndoe@example.com",
    phone: "+123456789",
  },
};
```