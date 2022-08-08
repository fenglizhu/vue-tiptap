export interface CoustomOptions {
  showMenu?: boolean,
  toolTips?: string
}

type SN = number | string

export interface MenuOptions {
  editor?: any;
  showMenu?: boolean,
  toolTips?: string,
  hasTab?: boolean,
  dataNeType?: string,
  toggleCommand?: Function,
  dropdown?: SN[],
  menuType?: string,
  activeIsObject?: boolean,
  src?: string,
  htmlOption?: Record<string, any>
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}