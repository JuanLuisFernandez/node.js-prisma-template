import { Router } from "express";
import { CoursesController } from "./controller";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new CoursesController();

    router.get('/', todoController.getCourses);
    router.get('/:id', todoController.getCourseById);
    router.post('/', todoController.createCourse);
    router.put('/:id', todoController.updateCourse);
    router.delete('/:id', todoController.deleteCourse);

    return router;
  }
}
