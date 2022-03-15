# NestJS + GraphQL + Prisma

## (How to set up NestJS with Prisma:)[https://github.com/LeGiangK62/nodeJS-postgres]
# Generate all module, source, controller for new

```bash
nest generate resource
```



# Adding GraphQL schema - first

## Installation


  ```bash
      npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express typescript ts-node ts-morph @apollo/gateway
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

