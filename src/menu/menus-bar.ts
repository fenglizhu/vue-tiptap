
import { Extension, Editor } from "@tiptap/core";
import { MenuButton } from "./menu-button";
import { removeTabClass } from "./tab-operation";

export default class MenusBar {
  dropdownShow: boolean;
  menuElement: Element;
  constructor(menus:Extension, editor:Editor, menuElement: Element) {
    this.dropdownShow = false;
    this.menuElement = menuElement;
    this.initMenus(menus);
    this.hideDropdown();
  }

  /**
   * initMenus
   */
  public initMenus(menus: Extension | any) {
    menus.forEach((element: any) => {
      new MenuButton(element.menusOptions)
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