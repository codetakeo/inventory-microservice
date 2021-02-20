import { Router } from 'express';
import { ProductsRouter } from './routes/products.routes';

export class APIRouter {
    private router: Router;
    private products: ProductsRouter;

    constructor() {
        this.router = Router({ mergeParams: true });
        this.products = new ProductsRouter();
    }
    public routes(): Router {
        this.router.use('/products', this.products.routes());
        return this.router;
    }
}
