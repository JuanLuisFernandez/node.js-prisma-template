import { Router } from "express";
import { CoursesController } from "./todos/controller";
import { TodoRoutes } from "./todos/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/api/todos', TodoRoutes.routes);

    return router;
  }
}
