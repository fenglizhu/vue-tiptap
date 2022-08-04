
import { Extension, Editor } from "@tiptap/core";
import { MenuButton } from "./menu-button";
import { removeTabClass } from "./tab-operation";

export default class MenusBar {
  dropdownShow: boolean;
  constructor(menus:Extension,editor:Editor) {
    this.dropdownShow = false;
    this.initMenus(menus);
    this.hideDropdown();
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

  /**
   * hideDropdown
   */
   public hideDropdown() {
    document.onclick = function() {
      removeTabClass()
    }
  }
}