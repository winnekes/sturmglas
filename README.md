# sturmglas

Track your mental weather.

# Get started

# Technologies

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
├── iot                            # For the hardware, 3d models and companion code
│   ├── companion
│   │   └── src
│   └── models
├── pages
│   └── api                 # Auth0 and GraphQL endpoint
│       └── auth           
├── public
│
└── server                        # All server logic, sorted by domains
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

#
