# Job Tracker

**Status:** Live

[Website](domain not created yet)

## Screenshot

![Screenshot](frontend/public/images/githubpic.png)

## Overview

A full-stack MERN application for tracking job applications. Users create an account, add jobs they've applied to, and manage them through the full lifecycle — recording company, position, location, status, work type, application date, job posting link, and personal notes. Every job is scoped to the user who created it: each route verifies ownership before returning or modifying data, so a user can only ever see and change their own applications. Built with JWT authentication over HTTP-only cookies, React Context for global auth state, and a custom CSS design system.

## Features

- User registration and login with JWT authentication (HTTP-only cookies)
- Session persistence across page refreshes
- Create, view, edit, and delete job applications
- Per-user data isolation — every job route verifies ownership before responding
- Individual job detail pages with full application overview
- Protected routes on both client and server
- Form validation with user-facing error messages
- Empty state for new users with no applications
- Date picker for application dates
- Responsive design for mobile and desktop

## Technologies Used

- React
- React Router
- React Context API
- Node.js / Express
- MongoDB / Mongoose
- JWT authentication
- bcrypt (password hashing)
- CSS
- Vite
