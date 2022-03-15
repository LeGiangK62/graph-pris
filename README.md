# NestJS + GraphQL + Prisma

[How to set up NestJS with Prisma:](https://github.com/LeGiangK62/nodeJS-postgres)


- [NestJS + GraphQL + Prisma](#nestjs--graphql--prisma)
- [Generate all module, source, controller for new](#generate-all-module-source-controller-for-new)
- [Adding GraphQL schema - first](#adding-graphql-schema---first)
  - [Installation](#installation)
  - [Adding GQL into app.module](#adding-gql-into-appmodule)
  - [Adding generate typings file](#adding-generate-typings-file)
  - [Edit graphql file](#edit-graphql-file)
  - [Generate graphql.ts file](#generate-graphqlts-file)
  - [Edit x.service APIs function](#edit-xservice-apis-function)
  - [To create:](#to-create)
  - [To Query:](#to-query)
- [Adding GraphQL code - first](#adding-graphql-code---first)
  - [Create object type in x.entity.ts](#create-object-type-in-xentityts)
  - [Adding GraphQL module to app.module](#adding-graphql-module-to-appmodule)
  - [Run to generate schema.gql](#run-to-generate-schemagql)
  - [Edit x.service APIs function](#edit-xservice-apis-function-1)


# Generate all module, source, controller for new

```bash
nest generate resource
```

# Adding GraphQL schema - first

## Installation


  ```bash
      npm i --save @nestjs/graphql @nestjs/apollo graphql apollo-server-express typescript ts-node ts-morph @apollo/gateway
  ```

## Adding GQL into app.module
  ```ts
    @Module({
    imports: [...,
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        typePaths: ['./**/*.graphql'],
      }),
    ],
    ...
  })
  ...
  ```

## Adding generate typings file

  ```ts
    import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
    import { join } from 'path';

    const definitionsFactory = new GraphQLDefinitionsFactory();
    definitionsFactory.generate({
          typePaths: ['./src/**/*.graphql'],
          path: join(process.cwd(), 'src/graphql.ts'),
          outputAs: 'class',
    });
  ```

## Edit graphql file


## Generate graphql.ts file
  ```bash
    tsc .\src\generate-typings.ts 
    node .\src\generate-typings.js 
  ```


## Edit x.service APIs function

## To create:
  ```graphql
    mutation {
      createUser(createUserInput:{
        id: 1
        name: "x"
      }){
        id 
        name
      }
    }
  ```

## To Query:
  ```graphql
    query{
      users{ 
        # id
        name
      }
    }
  ```


# Adding GraphQL code - first

## Create object type in x.entity.ts
  ```ts
    @ObjectType()
    export class Pet {
      // @Field(() => Int, { description: 'Example field (placeholder)' })
      // exampleField: number;

      @Field(type => Int)
      id: number;

      @Field()
      name: string;

      @Field({nullable: true})
      type?: string;
    }

  ```

## Adding GraphQL module to app.module
  ```ts
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ```

## Run to generate schema.gql
  ```bash
    npm run start:dev
  ```

## Edit x.service APIs function