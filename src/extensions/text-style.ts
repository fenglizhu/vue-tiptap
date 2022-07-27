import {TextStyle as TiptapTextStyle} from '@tiptap/extension-text-style'
import { CoustomOptions, MenuOptions } from '../types'

export default class TextStyle {
  constructor () {
    
    const ZeroTextStyle:any = TiptapTextStyle

    const customOptions: CoustomOptions = {}
    const menusOptions: MenuOptions = {
      showMenu: false
    }
    
    ZeroTextStyle.customOptions = customOptions;
    ZeroTextStyle.menusOptions = menusOptions;
    
    return ZeroTextStyle
  }
}