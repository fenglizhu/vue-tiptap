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
  toggleCommand?: Function,
  dropdown?: SN[],
  menuType?: string
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}