**NestJS + GraphQL + Prisma**

- [1. Set up NestJS with Prisma](#1-set-up-nestjs-with-prisma)
- [2. Adding GraphQL schema - first](#2-adding-graphql-schema---first)
  - [2.2. Adding GQL into app.module](#22-adding-gql-into-appmodule)
  - [2.3. Adding generate typings file](#23-adding-generate-typings-file)
  - [2.4. Edit graphql file](#24-edit-graphql-file)
  - [2.5. Generate graphql.ts file](#25-generate-graphqlts-file)
  - [2.6. Edit x.service APIs function](#26-edit-xservice-apis-function)
  - [2.7. To create:](#27-to-create)
  - [2.8. To Query:](#28-to-query)
- [3. Adding GraphQL code - first](#3-adding-graphql-code---first)
  - [3.1. Create object type in x.entity.ts](#31-create-object-type-in-xentityts)
  - [3.2. Adding GraphQL module to app.module](#32-adding-graphql-module-to-appmodule)
  - [3.3. Run to generate schema.gql](#33-run-to-generate-schemagql)
  - [3.4. Edit x.service APIs function](#34-edit-xservice-apis-function)


# 1. Set up NestJS with Prisma
[How to set up NestJS with Prisma:](https://github.com/LeGiangK62/nodeJS-postgres)


* Generate all module, source, controller for new

```bash
nest generate resource
```

* Installation


  ```bash
      npm i --save @nestjs/graphql @nestjs/apollo graphql apollo-server-express typescript ts-node ts-morph @apollo/gateway
  ```

# 2. Adding GraphQL schema - first

* Create schema first
* Generate class (graphql.ts) from schema

## 2.2. Adding GQL into app.module
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

## 2.3. Adding generate typings file

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

## 2.4. Edit graphql file


## 2.5. Generate graphql.ts file
  ```bash
    tsc .\src\generate-typings.ts 
    node .\src\generate-typings.js 
  ```


## 2.6. Edit x.service APIs function

## 2.7. To create:
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

## 2.8. To Query:
  ```graphql
    query{
      users{ 
        # id
        name
      }
    }
  ```


# 3. Adding GraphQL code - first

* Create class (entity) first
* Generate schema from entity

## 3.1. Create object type in x.entity.ts
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

## 3.2. Adding GraphQL module to app.module
  ```ts
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ```

## 3.3. Run to generate schema.gql
  ```bash
    npm run start:dev
  ```

## 3.4. Edit x.service APIs function