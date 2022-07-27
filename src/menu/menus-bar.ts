
import { Extension, Editor } from "@tiptap/core";
import { MenuButton } from "./menu-button";

export default class MenusBar {

  constructor(menus:Extension,editor:Editor) {
    this.initMenus(menus);
  }

  /**
   * initMenus
   */
  public initMenus(menus: Extension | any) {
    menus.forEach((element: any) => {
      new MenuButton({
        addcustomCommands: element.addcustomCommands,
        toolTips: element.menusOptions.toolTips
      })
    });
  }
}