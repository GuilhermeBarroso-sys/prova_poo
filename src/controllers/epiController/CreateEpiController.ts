import { Request, Response } from "express";
import { CreateEpiService } from "../../services/CreateEpiService";

class CreateEpiController {
  async handle(request: Request, response: Response) {
    const {name,validate,number} = request.body;

    const epiService = new CreateEpiService();
    try {
      const epi = await epiService.execute({name,validate,number});
      return response.status(201).json(epi);
      
    }catch(err) {
      return response.status(400).json({err:err.message})
    }
  }
}
export {CreateEpiController}