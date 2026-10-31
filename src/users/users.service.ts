import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()



export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {

    const newUser = {
      id: Date.now(),
      ...createUserDto,
      
    };
    this.users.push();
    return newUser;
  
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

  
    Object.assign(user, updateUserDto);

    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }

    this.users.splice(index, 1);

    return { message: `User #${id} has been removed` };
  }
}
