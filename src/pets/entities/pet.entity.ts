import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @Field(type => Int)
  id?: number;

  @Field()
  name: string;

  @Field()
  type: string;
}
