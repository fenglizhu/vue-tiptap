export interface CoustomOptions {
  [x: string]: any;
  collapse?: Boolean,
  toggleCommands?: Function,
  showMenu?: Boolean,
  toolTips?: String
}

// 点击菜单参数
export interface Commands {
  attribute?: any
}

export interface MenuOptions {
  showMenu?: Boolean,
  toolTips?: String,
  hasTab?: Boolean,
  clickParamsKey?: String,
  collapse?: Boolean
}