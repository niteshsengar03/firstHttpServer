# Hospital HTTP Server

## Introduction

This project is a basic HTTP server built using Node.js and Express, designed to simulate a hospital's kidney health tracking system. It provides endpoints to retrieve information about the kidneys, add new kidney health records, update all kidneys' health status, and delete unhealthy kidneys.


## Features

- Retrieve the count of total, healthy, and unhealthy kidneys.
- Add new kidney health records.
- Update all kidneys' health status to healthy.
- Delete unhealthy kidneys (at least one unhealthy kidney must be present).

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/hospital-http-server.git
Install dependencies:

The server will be running on http://localhost:3000.

**Endpoints**
- GET /: Retrieve information about the kidneys.
- POST /: Body: { "ishealthy": true } Add a new kidney health record.
- PUT /: Update all kidneys' health status to healthy.
- DELETE /: Delete unhealthy kidneys (at least one unhealthy kidney must be present).




