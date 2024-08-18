# Movie Portal

This project is a fullstack Netflix clone built using Next.js 13, MongoDB, Tailwind CSS, and NextAuth. The application features user authentication via GitHub, secure profile management with PIN authentication, dynamic content browsing, and a responsive, interactive user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#Authentication)
- [Account Management](#Account-Management)
  

## Features

- **User Authentication**: Secure login using GitHub via NextAuth.
- **Profile Management**: Create, delete, and manage up to four user profiles per account, each secured with a PIN.
- **Dynamic Content**: Browse and search movies and TV shows by categories.
- **Responsive Design**: Seamless user experience across all devices using Tailwind CSS.
- **Animations**: Interactive UI enhanced with Framer Motion for smooth transitions.


## Technologies Used

- **Frontend**: Next.js 13, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, MongoDB, Mongoose
- **Authentication**: NextAuth with GitHub provider

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the following environment variables:
   ```env
   MONGO_URI=your-mongodb-uri
   GITHUB_ID=your-github-client-id
   GITHUB_SECRET=your-github-client-secret
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Sign in** with your GitHub account.
2. **Create and manage profiles**, each secured with a PIN.
3. **Browse** and **search** for movies and TV shows.
4. **Add movies** to your favorites list.

### Authentication
- **POST** `/api/auth/[...nextauth]`: Handles authentication using NextAuth and GitHub provider.

### Account Management
- **POST** `/api/account/create`: Creates a new user profile.
- **DELETE** `/api/account/delete`: Deletes a user profile.
- **GET** `/api/account/getAll`: Retrieves all profiles for the authenticated user.
- **POST** `/api/account/login`: Authenticates a user profile using a PIN.
