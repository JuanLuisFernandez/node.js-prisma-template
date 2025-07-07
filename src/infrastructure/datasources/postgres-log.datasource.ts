import { PrismaClient, LanguageLevel } from "@prisma/client";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogLanguageLevel, LogEntity } from "../../domain/entities/log.entity";

const prismaClient = new PrismaClient();

const severityLevel = {
  beginner: LanguageLevel.beginner,
  intermediate: LanguageLevel.intermediate,
  advanced: LanguageLevel.advanced,
}

export class PostgresLogDatasource implements LogDatasource {

  async saveLog(log: LogEntity): Promise<void> {

    const level = severityLevel[log.level];
    const newLog = await prismaClient.course.create({
      data: {
        ...log,
        level: level,
      }
    });
  }

  async getLogs(languageLevel: LogLanguageLevel): Promise<LogEntity[]> {
    const level = severityLevel[languageLevel];
    const dbLogs = await prismaClient.course.findMany({
      where: { level }
    });

    return dbLogs.map(dbLog => LogEntity.fromObject(dbLog));

  }
}
