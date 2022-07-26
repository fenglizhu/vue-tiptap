import TiptapStarterKit from '@tiptap/starter-kit'
import { CoustomOptions } from '../types'

export default class StarterKit {
  constructor () {
    const ZeroStarterKit:any = TiptapStarterKit
    const customOptions: CoustomOptions = {
      showMenu:false
    }
    ZeroStarterKit.customOptions = customOptions
    
    return ZeroStarterKit
  }
}