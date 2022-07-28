
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
        toggleCommand: element.menusOptions.toggleCommand,
        toolTips: element.menusOptions.toolTips,
        dropdown: element.menusOptions.dropdown
      })
    });
  }
}