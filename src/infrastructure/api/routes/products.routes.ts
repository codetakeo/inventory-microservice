import {Router} from 'express';
import {ProductController} from '../../controllers/product.controller';

export class ProductsRouter {
	private router: Router;
	private productController: ProductController;

	constructor() {
		this.productController = new ProductController();
		this.router = Router();
	}

	public routes(): Router {
		/**
		 * Get all products
		 */
		this.router.get('/', this.productController.findAll);
		/**
		 * Get product by Id
		 */
		this.router.get('/:id', this.productController.findById);

		return this.router;
	}
}
