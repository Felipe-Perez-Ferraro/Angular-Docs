import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtPayload } from './interfaces/jwt-payload';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from './interfaces/login-response.interface';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcryptjs from 'bcryptjs';
import { CreateUserDto, LoginDto, RegisterDto, UpdateAuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { password, ...userData } = createUserDto;
      const newUser = new this.userModel({
        password: bcryptjs.hashSync(password, 10),
        ...userData,
      });

      await newUser.save();
      const { password: _, ...user } = newUser.toJSON();

      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `El email ${createUserDto.email} ya existe!`,
        );
      }
      throw new InternalServerErrorException('Sucedio un error');
    }
  }

  async register(registerDto: RegisterDto) {
    const user = await this.create(registerDto);

    return {
      user,
      token: this.getJwtToken({ id: user._id }),
    };
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('El correo electrónico no existe');
    }
    if (!bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('La contaseña es incorrecta');
    }
    if (!user.isActive) {
      throw new UnauthorizedException('El usuario está inactivo');
    }

    const { password: _, ...rest } = user.toJSON();

    return {
      user: rest,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    const { password, ...rest } = user.toJSON();

    return rest;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
