# My Learning Journey Website

A simple multi-page personal website built with **Next.js (App Router)** and **Tailwind CSS**.

---

## Description

The site introduces me, my learning journey, and my goals as a software engineering student.

It includes a home page, an about page, a contact page, and a blog section with three category pages (Frontend, Backend, Mobile), each nested under its own Blog Layout.

---

## Features

- Multiple routes using the App Router folder structure
- Reusable **Navbar** and **Footer** shared across every page via the root layout
- A **nested Blog layout** (`app/blog/layout.tsx`) with its own header, navigation, and sidebar, applied automatically to every page under `/blog/*`
- Global font (**Poppins**, via `next/font/google`) and custom **primary / secondary colors** configured in `tailwind.config.ts`
- Unique **SEO metadata** (title + description) on every page
- Fully **responsive** layout (mobile, tablet, desktop)

### Bonus Features

- Custom 404 page (`app/not-found.tsx`)
- Loading state for the blog section (`app/blog/loading.tsx`)
- Reusable `Button` component used across the site

---

## Technologies Used

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd my-learning-journey
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Folder Structure

```text
my-learning-journey/
├── app/
│   ├── layout.tsx              # Root layout: Navbar, Footer, global font
│   ├── globals.css             # Tailwind base + global styles
│   ├── page.tsx                # Home page ("/")
│   ├── not-found.tsx           # Custom 404 page (bonus)
│   ├── about/
│   │   └── page.tsx            # About page ("/about")
│   ├── contact/
│   │   └── page.tsx            # Contact page ("/contact")
│   └── blog/
│       ├── layout.tsx          # Nested Blog layout (header, nav, sidebar)
│       ├── loading.tsx         # Blog loading state (bonus)
│       ├── page.tsx            # Blog landing page ("/blog")
│       ├── frontend/
│       │   └── page.tsx        # "/blog/frontend"
│       ├── backend/
│       │   └── page.tsx        # "/blog/backend"
│       └── mobile/
│           └── page.tsx        # "/blog/mobile"
│
├── components/
│   ├── Navbar.tsx              # Site-wide navigation
│   ├── Footer.tsx              # Site-wide footer
│   ├── Button.tsx              # Reusable button (bonus)
│   ├── BlogHeader.tsx          # Blog section header
│   ├── BlogNav.tsx             # Blog category navigation
│   └── BlogSidebar.tsx         # Blog sidebar
│
├── tailwind.config.ts          # Custom colors + font family
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Live Deployment

- **GitHub Repository:** `https://github.com/Umutoni123-aa/my-learning-journey`
- **Live Site:** `https://frabjous-douhua-4b8302.netlify.app/`

---

# my-learning-journey
