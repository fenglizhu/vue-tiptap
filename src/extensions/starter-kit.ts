import TiptapStarterKit from '@tiptap/starter-kit'
import { CoustomOptions, MenuOptions } from '../types'

export default class StarterKit {
  constructor () {
    const ZeroStarterKit:any = TiptapStarterKit
    const menusOptions: MenuOptions = {
      showMenu: false
    }
    ZeroStarterKit.menusOptions = menusOptions;
    
    return ZeroStarterKit
  }
}