import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateCourseDto, UpdateCourseDto } from "../../domain/dtos";

export class CoursesController {

  constructor() { }

  public getCourses = async (req: Request, res: Response) => {
    const courses = await prisma.course.findMany();
    res.json(courses);
  };

  public getCourseById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid ID' });
      return;
    }

    const course = await prisma.course.findFirst({
      where: { id }
    });

    if (!course) {
      res.status(404).json({ error: `course with id ${id} not found` });
      return;
    }

    res.json(course);
  };

  public createCourse = async (req: Request, res: Response) => {
    const [error, createCourseDto] = CreateCourseDto.create(req.body);

    if (error || !createCourseDto) {
      res.status(400).json({ error });
      return;
    }

    try {
      const course = await prisma.course.create({
        data: createCourseDto.toPlain()
      });
      res.status(201).json(course);
    } catch (err) {
      console.error('Prisma error:', err);
      res.status(500).json({ error: 'Failed to create course' });
    }
  }

  public updateCourse = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    // Validar que el ID sea un número válido
    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid ID' });
      return;
    }

    // Verificar que el curso exista
    const existingCourse = await prisma.course.findUnique({ where: { id } });
    if (!existingCourse) {
      res.status(404).json({ error: `Course with id ${id} not found` });
      return;
    }

    // Validar y crear el DTO
    const [error, updateDto] = UpdateCourseDto.create(req.body);

    if (error || !updateDto) {
      res.status(400).json({ error });
      return;
    }

    try {
      const updatedCourse = await prisma.course.update({
        where: { id },
        data: updateDto.toPlain(),
      });

      res.json(updatedCourse);
    } catch (err) {
      console.error('Prisma error:', err);
      res.status(500).json({ error: 'Failed to update course' });
    }
  };

  public deleteCourse = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const course = await prisma.course.findFirst({
      where: { id }
    });

    if (!course) {
      res.status(404).json({ error: `Course with id ${id} not found` });
      return;
    }

    const deleted = await prisma.course.delete({
      where: { id }
    });

    (deleted)
      ? res.json(deleted)
      : res.status(400).json({ error: `Todo with id ${id} not found` });

    res.json({ course, deleted });
  }
}

