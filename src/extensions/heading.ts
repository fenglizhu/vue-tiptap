import{ Heading as TiptapHeading }from '@tiptap/extension-heading'
import { CoustomOptions, Commands } from '../types'

export default class Heading {
  constructor() {
    const ZeroHeading:any = TiptapHeading.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleHeading(attribute);
      }
    }
    ZeroHeading.config.hasTab = true;
    ZeroHeading.config.paramsKey = 'level';
    
    ZeroHeading.customOptions = customOptions;

    return ZeroHeading
  }
}