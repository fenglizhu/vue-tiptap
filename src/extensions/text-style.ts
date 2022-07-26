import {TextStyle as TiptapTextStyle} from '@tiptap/extension-text-style'
import { CoustomOptions } from '../types'

export default class TextStyle {
  constructor () {
    const ZeroTextStyle:any = TiptapTextStyle
    const customOptions: CoustomOptions = {
      showMenu: false
    }
    ZeroTextStyle.customOptions = customOptions
    
    return ZeroTextStyle
  }
}