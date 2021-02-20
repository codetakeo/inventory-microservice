import { Request, Response } from 'express';
//import { badRequest, CustomRequest, ok, serverError } from '../../helpers';
import { ProductDTO } from '../../application/data-transfer/product.dto';

export class ProductController {
    // private guarantorSettingService: GuarantorSettingService;
    constructor() {}

    public findAll = async (req: Request, res: Response) => {
        try {
            return;
        } catch (error) {
            return error;
        }
    };

    public findById = async (req: Request, res: Response) => {
        try {
            return;
        } catch (error) {
            return error;
        }
    };
}
