# Clean architecture - Domain Driven Design Implementation

### Description

Implementation of Clean Architecture Patterns guided mostly from:

-   Uncle Bob's Clean Architecture
-   Microsoft's Domain Driven Design

---

### Layers

```
inventory-microservice/     # Project's Root directory.
|- build/                   # Folder used to store builded (output) files.
|- logs/                    # Folder used to store logs files.
|- src/
    |- application/         # Folder used to define Application Layer Components.
    |- config/              # Folder used to store configuration constants.
    |- domain/              # Folder used to define Domain Layer Components.
    |- helpers/             # Folder used to store general classes or function.
    |- infrastructure/      # Folder used to define Infrastructure Layer Components.
    |- app.ts               # Server middleware and configuration file.
    |- server.ts            # Server initializer file.
|- .env                     # Environmental variables file.
|- .eslintrc                # Eslint run commands.
|- .prettierignore          # Prettier ignore file.
|- .prettierrc              # Prettier run commands.
|- package-lock.json        # Dependency tree project descriptor.
|- package.json             # Project metadata file.
|- README.md                # Documentation.
|- tsconfig.json            # TypeScript configuration file.
```

The project structure from inner to outter layer

1. Domain

    a. Entities

    - Here are the business object classes, containing internal business logic and are used on the application layer.

    b. Repositories

    - Here are defined the interfaces (contracts) of the different repositories whose are implemented on the infrastructure layer to make the requests or connection to any datasource used in the app.

2. Application

    a. Use Cases

    - Here are defined classes that contains the most of the business logic of the application. Usually the classes created here are defined having the user stories in mind

    b. Data Transfer (DTO)

    - Here are the Data Transfer Objects, which are used for external communication, mainly for send or receive data to the frontend (in case of this API)

3. Infrastructure

    a. API

    - Here are defined all the routes that the API has, centralized and exported.

    b. Controllers

    - Here are defined all the HTTP Handling Logic for the different routes on the API. Here are the HTTP Requests validation and responses

    c. Database

    - Here are defined the database connection and configuration, also imported and centralized the data access objects (DAOs)

    d. Repository Implementations

    - Here are the implementation of the repository contracts defined on the Domain Layer
