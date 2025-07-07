import { LanguageLevel } from '@prisma/client';

type CourseProps = {
  title: string;
  description: string;
  level: LanguageLevel;
  isClassroom: boolean;
  isOnline: boolean;
  startDate: string;
  endDate: string;
  duration: string;
  minParticipants: number;
  maxParticipants: number;
  price: number;
  book: string;
};

export class UpdateCourseDto {
  private constructor(
    public readonly props: Partial<CourseProps>
  ) { }

  static create(props: Partial<CourseProps>): [string?, UpdateCourseDto?] {
    // Validaciones condicionales (solo si el campo existe)
    if ('title' in props && typeof props.title !== 'string') {
      return ['Title must be a string'];
    }

    if ('description' in props && typeof props.description !== 'string') {
      return ['Description must be a string'];
    }

    if ('level' in props && !Object.values(LanguageLevel).includes(props.level!)) {
      return ['Invalid level'];
    }

    if ('isClassroom' in props && typeof props.isClassroom !== 'boolean') {
      return ['isClassroom must be a boolean'];
    }

    if ('isOnline' in props && typeof props.isOnline !== 'boolean') {
      return ['isOnline must be a boolean'];
    }

    if ('startDate' in props && typeof props.startDate !== 'string') {
      return ['startDate must be a string'];
    }

    if ('endDate' in props && typeof props.endDate !== 'string') {
      return ['endDate must be a string'];
    }

    if ('duration' in props && typeof props.duration !== 'string') {
      return ['duration must be a string'];
    }

    if ('minParticipants' in props && typeof props.minParticipants !== 'number') {
      return ['minParticipants must be a number'];
    }

    if ('maxParticipants' in props && typeof props.maxParticipants !== 'number') {
      return ['maxParticipants must be a number'];
    }

    if ('price' in props && typeof props.price !== 'number') {
      return ['price must be a number'];
    }

    if ('book' in props && typeof props.book !== 'string') {
      return ['Book must be a string'];
    }

    return [undefined, new UpdateCourseDto(props)];
  }

  toPlain() {
    const plain: any = { ...this.props };

    // Convertir fechas si existen
    if (plain.startDate) plain.startDate = new Date(plain.startDate);
    if (plain.endDate) plain.endDate = new Date(plain.endDate);

    return plain;
  }
}

