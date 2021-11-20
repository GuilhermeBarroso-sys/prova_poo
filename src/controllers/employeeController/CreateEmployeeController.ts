import { Request, Response } from "express";
import { CreateEmployeeService } from "../../services/CreateEmployeeService";

class CreateEmployeeController {
  async handle(request: Request, response: Response) {
    const {name,cpf,role} = request.body;

    const employeeService = new CreateEmployeeService();
    try {
      const employee = await employeeService.execute({name,cpf,role});
      return response.status(201).json(employee);
      
    }catch(err) {
      return response.status(400).json({err:err.message})
    }
  }
}
export {CreateEmployeeController}