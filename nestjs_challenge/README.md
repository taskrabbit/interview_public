# Taskrabbit Coding Exercise

For this coding exercise, you'll be designing a URL shortener, similar to [Bitly](https://bitly.com/) or [Rebrandly](https://www.rebrandly.com/). Shortened URLs help people share a URL easily across social media platforms.

## Stack

- [NestJS](https://docs.nestjs.com/) 11 (Express adapter)
- [TypeORM](https://typeorm.io/) with SQLite (`better-sqlite3`) — no database server needed
- [Jest](https://jestjs.io/) and [Supertest](https://github.com/ladjs/supertest) for tests

## Setup

Install Node.js `24` (an `.nvmrc` is included, so `nvm use` or `fnm use` will pick it up).

### Confirm Your Setup

Confirm that the following commands can output their versions without error on your machine:

```
node -v   # v24.x
npm -v
```

### Installation Steps

1. Run `npm ci`
2. Run `npm test` and confirm the test passes
3. Run `npm start` and confirm http://localhost:3000 shows a form

## Commands

| Command     | What it does                                                                      |
| ----------- | --------------------------------------------------------------------------------- |
| `npm start` | Start the server on port 3000 with live reload and the Node debugger on port 9229 |
| `npm test`  | Run all tests (`src/**/*.spec.ts`, `test/**/*.e2e-spec.ts`)                       |

The development database is a local `development.sqlite3` file; tests use an in-memory database. The schema is synchronized from your entities automatically, so you don't need migrations.

The Nest CLI is available for generating code, e.g. `npx nest generate module <name>`.
