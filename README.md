# DasHaustelles Reviews Module

- Reviews microservice for a listing page of a Hostel Booking Application
- Containerized on Docker and hosted on Amazon EC2 Instance
- This service is one of many parts to a Hostel Booking Application. Here is the app's proxy link - [github](https://github.com/das-haustelles/product-description-proxy)

## Related Projects
  Below are other microservices that make up the entire application. 
  - https://github.com/das-haustelles/stanley-front-end-capstone
  - https://github.com/das-haustelles/julius-front-end-capstone
  - https://github.com/das-haustelles/rich-front-end-capstone

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some setup instructions for npm
- `npm run build` to compile webpack bundle with --watch flag
- `npm run start` to seed Users Database on MongoDB and to start server
- server is run on `http://localhost:3004/hostels/*/reviews/` where `*` is a number between 1-100 for hostel number

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0 or higher

## Development
- Client
  - React
- Server
  - Express.js
- Database
  - MongoDB, modeled with Mongoose
- Hosting
  - Containerized on Docker and hosted on AWS EC2 Instance

## Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

