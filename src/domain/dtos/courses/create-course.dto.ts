import { LanguageLevel } from '@prisma/client';

export class CreateCourseDto {
  private constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly level: LanguageLevel,
    public readonly isClassroom: boolean,
    public readonly isOnline: boolean,
    public readonly startDate: string,
    public readonly endDate: string,
    public readonly duration: string,
    public readonly minParticipants: number,
    public readonly maxParticipants: number,
    public readonly price: number,
    public readonly book: string
  ) { }

  static create(props: { [key: string]: any }): [string?, CreateCourseDto?] {
    const {
      title, description, level, isClassroom, isOnline,
      startDate, endDate, duration, minParticipants,
      maxParticipants, price, book
    } = props;

    // Validaciones básicas
    if (!title) return ['Title is required'];
    if (!description) return ['Description is required'];
    if (!level || !Object.values(LanguageLevel).includes(level)) {
      return ['Invalid or missing level'];
    }

    if (typeof isClassroom !== 'boolean') return ['isClassroom must be boolean'];
    if (typeof isOnline !== 'boolean') return ['isOnline must be boolean'];

    if (!startDate || typeof startDate !== 'string') return ['startDate is required'];
    if (!endDate || typeof endDate !== 'string') return ['endDate is required'];
    if (!duration || typeof duration !== 'string') return ['duration is required'];

    if (typeof minParticipants !== 'number') return ['minParticipants must be a number'];
    if (typeof maxParticipants !== 'number') return ['maxParticipants must be a number'];
    if (typeof price !== 'number') return ['price must be a number'];

    if (!book || typeof book !== 'string') return ['Book is required'];

    return [undefined, new CreateCourseDto(
      title, description, level, isClassroom, isOnline,
      startDate, endDate, duration, minParticipants,
      maxParticipants, price, book
    )];
  }

  toPlain() {
    return {
      title: this.title,
      description: this.description,
      level: this.level,
      isClassroom: this.isClassroom,
      isOnline: this.isOnline,
      startDate: new Date(this.startDate),
      endDate: new Date(this.endDate),
      duration: this.duration,
      minParticipants: this.minParticipants,
      maxParticipants: this.maxParticipants,
      price: this.price,
      book: this.book
    };
  }
}

