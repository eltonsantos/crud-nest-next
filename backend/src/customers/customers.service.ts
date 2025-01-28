import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CustomersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(customerData: {
    name: string;
    url: string;
    validateContract: boolean;
  }) {
    return this.prisma.customer.create({
      data: customerData,
    });
  }

  async findAll() {
    return this.prisma.customer.findMany();
  }

  async findOne(id: number) {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    customerData: { name: string; url: string; validateContract: boolean },
  ) {
    return this.prisma.customer.update({
      where: { id },
      data: customerData,
    });
  }

  async remove(id: number) {
    return this.prisma.customer.delete({
      where: { id },
    });
  }
}
