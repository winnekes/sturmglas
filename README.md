# sturmglas

Track your mental weather with the help of a Companion. An open-source project.

# Getting started

## Requirements
- Nodejs > 12
- Docker and Docker Compose


## Environment variables
Use the following command to create a copy of the `.env.example`:
```sh
cp .env.example .env.local
```

# Start dev enviroment
```sh
npm run dev:start-services # This will initialise a Postgres instance
npm run dev # Start the Next.js server
npm run graphql:generate # Start the graphql-codegen in watch mode, necessary when making changes to queries and mutations
```

# Directory structure

```shell
├── app                          # Frontend logic
│   ├── components               # All components used in /pages are here, sorted by domain
│   │   ├── companion
│   │   ├── generic
│   │   ├── insights
│   │   ├── landing
│   │   ├── mood
│   │   ├── navigation
│   │   └── tutorial
│   ├── hooks
│   ├── queries
│   ├── styles
│   ├── types
│   └── utils
├── iot                          # For the hardware, 3d models and companion code
│   ├── companion
│   │   └── src
│   └── models
├── pages
│   └── api                      # Auth0 and GraphQL endpoint
│       └── auth           
├── public
│
└── server                       # All server logic, sorted by domains
    ├── domains
    │   ├── fitness
    │   │   └── graphql
    │   ├── mood
    │   │   ├── entities
    │   │   └── graphql
    │   ├── statistics
    │   │   └── graphql
    │   ├── tags
    │   │   ├── entities
    │   │   └── graphql
    │   └── user
    │       ├── entities
    │       └── graphql
    └── utils

```

# Contributing
- See [License](LICENSE.md)
- See [Contributing](CONTRIBUTING.md)
- See [Code of Conduct](CODE_OF_CONDUCT.md)