# REST API for the Warehouse app

REST API server is a small expressjs server. It exposes 4 endpoints for accessing resources. There's also PostgreSQL database server that stores and manipulates data.

## Introducation

The REST API server exposes these 4 urls:

1. Get a list of products

```bash
GET /api/products
```

2. Create a new product

```bash
POST /api/products
```

3. Update the product

```bash
PATCH /api/products/:id
```

4. Delete the product

```bash
DELETE /api/products/:id
```

## Development

Before you fully jump into this project, please make sure you have these prerequisites installed on your local machine:

1. Docker (and docker compose)
2. Nodejs

### Installation

Install nodejs dependencies:

```bash
npm install
```

Run database

```
docker compose up
```

Seed some data. For more about seeding see the [seeding](#seeding) section.

```
npm run seed -- 20
```

In order to run the dev server, run following

```
npm run dev
```

### Seeding

In order to prefill the database with fake data, run `npm run seed` command. Don't forget to specify the number of products you want to seed. For instance, in order to seed 20 products run `npm run seed -- 20`.

### Testing

To run unit and integration tests please run:

```bash
npm run test
```

To run code coverage, please run

```bash
npm run test -- --coverage
```
