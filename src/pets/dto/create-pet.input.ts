import { InputType, Int, Field } from '@nestjs/graphql';
@InputType()
export class CreatePetInput {
  // @Field(() => Int)
  // id: number;
  
  @Field()
  name: string;

  @Field()
  type: string;
}
