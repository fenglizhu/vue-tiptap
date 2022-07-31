import {TextStyle as TiptapTextStyle} from '@tiptap/extension-text-style'
import { CoustomOptions, MenuOptions } from '../types'

export default class TextStyle {
  constructor () {
    
    const ZeroTextStyle: Record<string, any> = TiptapTextStyle
    const menusOptions: MenuOptions = {
      showMenu: false
    }
    ZeroTextStyle.menusOptions = menusOptions;
    
    return ZeroTextStyle
  }
}