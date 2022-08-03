export interface CoustomOptions {
  showMenu?: boolean,
  toolTips?: string
}

type SN = number | string

export interface MenuOptions {
  [x: string]: any;
  showMenu?: boolean,
  toolTips?: string,
  hasTab?: boolean,
  clickParamsKey?: string,
  toggleCommand?: Function,
  dropdown?: SN[],
  eleAttribute?: string
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}