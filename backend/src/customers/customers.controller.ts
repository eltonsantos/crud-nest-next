import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(
    @Body()
    customerData: {
      customer: {
        name: string;
        url: string;
        validateContract: boolean;
      };
      site: {
        name: string;
        cnpj: string;
        observation: string;
      };
      user: {
        email: string;
        cpf: string;
        dateExpiration: Date;
      };
    },
  ) {
    return this.customersService.create(customerData);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.customersService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body()
    customerData: { name: string; url: string; validateContract: boolean },
  ) {
    return this.customersService.update(id, customerData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.customersService.remove(id);
  }
}
