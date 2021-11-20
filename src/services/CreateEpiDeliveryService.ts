import prismaClient from "../prisma";
import { EpiDeliveryRepository } from "../repositories/epiDeliveryRepository/EpiDeliveryRepository";

interface IEpiDelivery {
  employee_id:      string,
  epi_id:           string,
  delivery_date:    Date
  amount_delivered: number
}
class CreateEpiDeliveryService {
  async execute({employee_id,epi_id, delivery_date, amount_delivered} : IEpiDelivery) {
    const epiDeliveryRepository = new EpiDeliveryRepository();
    const employeeExists = await prismaClient.employee.findFirst({
      where: {
        id: employee_id
      }
    });
    const epiExists = await prismaClient.epi.findFirst({
      where: {
        id: epi_id
      }
    });
    if(employeeExists == null || epiExists == null) {
      throw new Error("Employee or Epi Not Found!!!")
    }
    const epiDelivery = await epiDeliveryRepository.create({employee_id,epi_id,delivery_date,amount_delivered});
    return epiDelivery;
  }
}
export {CreateEpiDeliveryService}