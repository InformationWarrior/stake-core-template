export enum BetMode {
  MANUAL = "MANUAL",
  AUTO = "AUTO",
}

export interface TemplateState {
  mode: BetMode;
  isManual: boolean;
  isAuto: boolean;
}
