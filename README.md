<p align="center">
  <a href="https://nextjs-postgres-auth.vercel.app/">
    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1638296063361/Ik3mn5a_WQ.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" height="96">
    <h3 align="center">Prisma PostgreSQL Starter</h3>
  </a>
</p>

<p align="center">
This is a <a href="https://expressjs.com/">Express.js</a> starter kit that uses <a href="https://www.postgresql.org/">PostgreSQL</a> for database<br/>
<a href="https://www.prisma.io/">Prisma</a> as the ORM, and a <a href="https://vercel.com/postgres">Vercel Postgres</a> database to persist the data.</p>

<br/>

## Deploy Your Own

## Developing Locally

You can clone & create this repo with the following command

```bash
yarn install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## Live Link:

[![Custom Button Text](https://vercel.com/button)](https://book-catalog-api-backend.vercel.app)

## Application Routes

### User

- https://book-catalog-api-backend.vercel.app/api/v1/auth/signup (POST)
- https://book-catalog-api-backend.vercel.app/api/v1/auth/signin (POST)
  #### Get All Users → Only Allowed For Admin
- https://book-catalog-api-backend.vercel.app/api/v1/users (GET)
  #### Get a Single User → Only Allowed For Admin
- https://book-catalog-api-backend.vercel.app/api/v1/users/6ef52a92-925d-41c5-9e86-b3218becd74a (Single GET)
  #### Update a Single User → Only Allowed For Admin
- https://book-catalog-api-backend.vercel.app/api/v1/users/711b70fa-155a-42f9-9f84-2c868b16ed23 (PATCH)
  #### Delete a User → Only Allowed For Admin
- https://book-catalog-api-backend.vercel.app/api/v1/users/0b79f421-7b79-4e22-8118-a2b94dcb35ce (DELETE)
  #### Only for specific user (customer and admin)
- https://book-catalog-api-backend.vercel.app/api/v1/profile (GET)

### Category

#### Only Allowed For Admin

- https://book-catalog-api-backend.vercel.app/api/v1/categories/create-category (POST)
- https://book-catalog-api-backend.vercel.app/api/v1/categories (GET)
- https://book-catalog-api-backend.vercel.app/api/v1/categories/f346b40c-e6f6-4cb5-bc98-1e042d59723f (Single GET)
  #### Only Allowed For Admin
- https://book-catalog-api-backend.vercel.app/api/v1/categories/11ae4a3b-f0a2-4f7e-bb5c-b5f110b92d81 (PATCH)
  ### Only Allowed For Admin
- https://book-catalog-api-backend.vercel.app/api/v1/categories/c4c0780e-cee8-48bd-a47f-4da4c6e57973 (DELETE)

### Books

#### Only Allowed For Admin

- https://book-catalog-api-backend.vercel.app/api/v1/books/create-book (POST)
- https://book-catalog-api-backend.vercel.app/api/v1/books (GET)
- https://book-catalog-api-backend.vercel.app/api/v1/books/:categoryId/category (GET)
  ```bash
  https://book-catalog-api-backend.vercel.app/api/v1/books/f346b40c-e6f6-4cb5-bc98-1e042d59723f/category
  ```
- https://book-catalog-api-backend.vercel.app/api/v1/books/:id (GET)
  ```bash
  https://book-catalog-api-backend.vercel.app/api/v1/books/4be67568-3e02-4031-a0e3-1a7c75bb946d
  ```
  #### Only Allowed For Admin
- https://book-catalog-api-backend.vercel.app/api/v1/books/:id (PATCH)
  ```bash
  https://book-catalog-api-backend.vercel.app/api/v1/books/4be67568-3e02-4031-a0e3-1a7c75bb946d
  ```
  #### Only Allowed for admins
- https://book-catalog-api-backend.vercel.app/api/v1/books/:id (DELETE)
  ```bash
  https://book-catalog-api-backend.vercel.app/api/v1/books/3705d769-3803-4693-8d34-b21eed770d48
  ```

### Orders

#### Only Allowed For Customer

- https://book-catalog-api-backend.vercel.app/api/v1/orders/create-order (POST)
  #### All for admin but conditional for customer
- https://book-catalog-api-backend.vercel.app/api/v1/orders (GET)
- https://book-catalog-api-backend.vercel.app/api/v1/orders/:orderId (GET)
  ```bash
  https://book-catalog-api-backend.vercel.app/api/v1/orders/44b684ba-2553-4769-828c-a1cfb80c233e
  ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
