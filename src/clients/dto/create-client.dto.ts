import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateClientDto {
  //@IsNotEmpty()
  //@Length(1, 100)
  //id: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  full_name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  address: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 10)
  cups: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  role: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  building_type: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(1, 100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  password: string;
}