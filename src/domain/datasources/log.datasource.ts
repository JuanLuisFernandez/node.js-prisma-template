import { LogEntity, LogLanguageLevel } from "../entities/log.entity";

export abstract class LogDatasource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(languageLevel: LogLanguageLevel): Promise<LogEntity[]>;
}
