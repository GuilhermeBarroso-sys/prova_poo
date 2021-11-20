import { prisma } from '@prisma/client';
import prismaClient from '../../prisma'
interface IEpiDelivery {
  employee_id:      string,
  epi_id:           string,
  delivery_date:    Date
  amount_delivered: number
}
interface IPutEpiDelivery {
  id:               string,
  employee_id:      string,
  epi_id:           string,
  delivery_date:    Date
  amount_delivered: number
}
class EpiDeliveryRepository {
  async create({employee_id,epi_id, delivery_date, amount_delivered} : IEpiDelivery) {
    const epi = await prismaClient.ePI_delivery.create({
      data: {
        employee_id,
        epi_id,
        delivery_date,
        amount_delivered
      }
    })
    return epi;
  }
  async list() {
    const epi = await prismaClient.ePI_delivery.findMany({
      orderBy: {
        id: "asc"
      },
      include: {
        employee: true,
        epi: true,
      }
    });
    return epi;
  }
  async destroy(id: string) {
    const epi = await prismaClient.ePI_delivery.delete({
      where: {
        id
      }
    })
    return epi;
  }
  async put({id, employee_id,epi_id,delivery_date,amount_delivered} : IPutEpiDelivery) {
    
    const epi = await prismaClient.ePI_delivery.update({
      where: {
        id
      },
      data: {
        employee_id,
        epi_id,
        delivery_date,
        amount_delivered
      }
    })
    return epi;
  }
}
export {EpiDeliveryRepository}