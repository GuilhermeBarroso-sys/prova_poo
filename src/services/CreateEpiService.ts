import { EpiRepository } from "../repositories/epiRepository/EpiRepository";

interface IEpi {
  name:          string,
  validate:      string,
  number:        number
}
class CreateEpiService {
  async execute({name,validate, number} : IEpi) {
    const epiRepository = new EpiRepository();
    const epi = await epiRepository.create({name,validate,number});
    return epi;
  }
}
export {CreateEpiService}