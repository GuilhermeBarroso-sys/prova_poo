import { EpiDeliveryRepository } from "../repositories/epiDeliveryRepository/EpiDeliveryRepository";

class DestroyEpiDeliveryService {
  async execute(id: string) {
    const epiDeliveryRepository = new EpiDeliveryRepository();
    const epiDelivery = await epiDeliveryRepository.destroy(id);
    return epiDelivery;
  }
}

export {DestroyEpiDeliveryService}