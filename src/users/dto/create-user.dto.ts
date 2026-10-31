import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({description:"the name of the user"})
    name:string;
    @ApiProperty({description:"the email of the user"})
    email:string;
    @ApiProperty({description:"the password of the user"})
    password:string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
}
