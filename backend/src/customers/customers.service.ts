import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CustomersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(customerData: {
    customer: { name: string; url: string; validateContract: boolean };
    site: { name: string; cnpj: string; observation: string };
    user: { email: string; cpf: string; dateExpiration: Date };
  }) {
    const { customer, site, user } = customerData;

    const dateExpiration =
      user.dateExpiration instanceof Date
        ? user.dateExpiration.toISOString()
        : new Date(user.dateExpiration).toISOString();

    const validateContract = customer.validateContract === true;

    const result = await this.prisma.$transaction(async (prisma) => {
      const newCustomer = await prisma.customer.create({
        data: {
          name: customer.name,
          url: customer.url,
          validateContract: validateContract,
        },
      });

      const newSite = await prisma.site.create({
        data: {
          name: site.name,
          cnpj: site.cnpj,
          observation: site.observation,
        },
      });

      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          cpf: user.cpf,
          dateExpiration: dateExpiration,
        },
      });

      return { newCustomer, newSite, newUser };
    });

    return result;
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
