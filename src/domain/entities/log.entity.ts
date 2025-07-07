
export enum LogLanguageLevel {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced'
}

export class LogEntity {
  public title: string;
  public description: string;
  public level: LogLanguageLevel;
  public isClassroom: boolean;
  public isOnline: boolean;
  public startDate: Date;
  public endDate: Date;
  public duration: string;
  public minParticipants: number;
  public maxParticipants: number;
  public price: number;
  public book?: string; // opcional, como en el schema
  public createdAt: Date;

  constructor(data: {
    title: string;
    description: string;
    level: LogLanguageLevel;
    isClassroom: boolean;
    isOnline: boolean;
    startDate: Date;
    endDate: Date;
    duration: string;
    minParticipants: number;
    maxParticipants: number;
    price: number;
    book?: string;
    createdAt: Date;
  }) {
    this.title = data.title;
    this.description = data.description;
    this.level = data.level;
    this.isClassroom = data.isClassroom;
    this.isOnline = data.isOnline;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.duration = data.duration;
    this.minParticipants = data.minParticipants;
    this.maxParticipants = data.maxParticipants;
    this.price = data.price;
    this.book = data.book;
    this.createdAt = data.createdAt;
  }

  static fromObject = (object: { [key: string]: any }): LogEntity => {
    const { title, description, level, isClassroom, isOnline, startDate, endDate, duration, minParticipants,
      maxParticipants, price, book, createdAt } = object;
    const log = new LogEntity({
      title, description, level, isClassroom, isOnline, startDate, endDate, duration, minParticipants,
      maxParticipants, price, book, createdAt
    });
    return log;
  }
}
