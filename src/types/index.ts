export interface CoustomOptions {
  [x: string]: any;
  collapse?: Boolean,
  toggleCommands?: Function,
  showMenu?: Boolean,
  toolTips?: String
}

type SN = number | string

export interface MenuOptions {
  [x: string]: any;
  showMenu?: Boolean,
  toolTips?: String,
  hasTab?: Boolean,
  clickParamsKey?: String,
  collapse?: Boolean,
  toggleCommand?: Function,
  dropdown?: SN[],
  eleAttribute?: String
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}