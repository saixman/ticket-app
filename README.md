This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

A full-stack ticket management application built from scratch using Next.js, Tailwind CSS, MongoDB Atlas, and Mongoose.
This project was developed as part of a hands-on course focused on modern web development practices. The application allows users to create, view, update, and delete support tickets while persisting data in a MongoDB database.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Feature implemented

- Create new tickets
- View ticket details
- Update existing tickets
- Delete tickets
- Server-side data fetching
- MongoDB Atlas integration
- REST API routes with Next.js
- Full CRUD operations using Mongoose

## Tech stack

Frontend

- Next.js
- React
- Tailwind CSS

Backend

- Next.js API Routes
- Node.js

Database

- MongoDB Atlas
- Mongoose ODM

## Prerequisites

Before running the project locally, make sure you have:

- Node.js installed
- MongoDB Atlas account
- Git

## Installation

- git clone https://github.com/saixamn/ticket-app.git
- launch 'npm install'
- create '.env.local' file with MONGODB_URI=your_mongodb_connection_string
- start developmente server with 'npm run dev'
- open 'http://localhost:3000'

## DB Configuration

Create a cluster, obtain the connection string, and add it to the .env.local file:
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>

## License

This project is available for educational and portfolio purposes.
