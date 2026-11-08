# NearMeLab Company Website

Welcome to the official codebase for the NearMeLab company website. This project is the heart of our online presence, showcasing our expertise, services, and commitment to building high-performance, content-focused web solutions.

This document serves as a guide for developers, project managers, and anyone involved in the maintenance and growth of this site.

> **A Note from the CEO**
>
> "Welcome to the team! This isn't just a website; it's the digital face of our company and a testament to the quality we deliver. Our goal is to create web experiences that are fast, accessible, and user-centric. As you contribute to this project, I encourage you to uphold these principles of excellence and innovation. Let's build something remarkable together."
>
> *- CEO, NearMeLab*

---

## 🚀 Getting Started

Follow these steps to get the project running on your local machine for development and testing purposes.

**Prerequisites:**
- [Node.js](https://nodejs.org/) (Version 18 or higher)
- [pnpm](https://pnpm.io/installation) (as the package manager)

**Local Development Steps:**

1.  **Clone the repository:**
    ```sh
    git clone [your-repository-url]
    cd [your-repository-directory]
    ```

2.  **Install dependencies:**
    ```sh
    pnpm install
    ```

3.  **Run the development server:**
    ```sh
    pnpm dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:4321` to see the site in action.

---

## 🛠️ Our Technology Stack

This project is built with a modern, performance-oriented tech stack:

-   **Framework**: [Astro](https://astro.build/) - For its content-first approach and "zero JS by default" architecture.
-   **UI Components**: [React](https://reactjs.org/) - Used within Astro "islands" for interactive components.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - For a utility-first CSS workflow.
-   **Internationalization (i18n)**: Implemented to support multiple languages.
-   **Deployment**: Automated CI/CD pipeline using **GitHub Actions**.

---

## 📂 Project Structure

A brief overview of the key directories in this project:

-   `/.github/workflows/`: Contains the CI/CD pipeline for automatic deployment.
-   `/public/`: For static assets like images, fonts, and `favicon.svg`.
-   `/src/assets/`: For assets that will be processed by Astro (e.g., images for optimization).
-   `/src/components/`: Contains reusable UI components (.astro, .tsx). React components here are "islands of interactivity."
-   `/src/content/`: For content collections, like blog posts, managed by Astro.
-   `/src/layouts/`: Defines the overall page structure for different page types.
-   `/src/locales/`: Contains JSON files for internationalization (i18n).
-   `/src/pages/`: Defines the site's routes. Each file here becomes a page.
-   `/src/styles/`: Contains global CSS styles.

---

## ✨ Our Services

This website is designed to showcase our core service offerings:

-   **Astro Development**: Building fast, content-focused websites and applications.
-   **Vendure E-commerce**: Creating scalable and customizable e-commerce solutions.
-   **Umbraco Solutions**: Developing flexible and powerful websites with the Umbraco CMS.
-   **Gaming Solutions**: Crafting engaging experiences with technologies like Unity and Unreal Engine.
-   **Custom Software Packages**: Developing bespoke libraries and tools tailored to specific business logic.
-   **UI/UX with Carbon Design System**: Designing intuitive and accessible interfaces.

---

## 📦 Deployment

This project is configured for **Continuous Deployment**.

-   **Trigger**: A `git push` to the `main` branch.
-   **Process**: GitHub Actions automatically triggers a workflow that builds the Astro project.
-   **Deploy**: The built static files (from the `/dist` directory) are then securely deployed to our VPS using `rsync` via SSH.

You can monitor the status of deployments in the "Actions" tab of this GitHub repository.

---

## 🤝 Contributing

As our team grows, we will adhere to a formal contribution process. For now, please ensure that:
1.  All new code is well-documented.
2.  The site builds successfully (`pnpm build`) before pushing.
3.  You follow the established coding style.

Thank you for your contribution to NearMeLab!
