import { LogEntity, LogLanguageLevel } from "../entities/log.entity";

export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(languageLevel: LogLanguageLevel): Promise<LogEntity[]>;
}
