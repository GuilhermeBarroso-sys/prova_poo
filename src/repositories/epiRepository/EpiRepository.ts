import prismaClient from '../../prisma'
interface IEpi {
  name:     string,
  validate: string,
  number: number
}
class EpiRepository {
  async create({name,validate, number} : IEpi) {
    const epi = await prismaClient.epi.create({
      data: {
        name,
        validate,
        number,
      }
    })
    return epi;
  }
}
export {EpiRepository}