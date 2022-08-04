export const removeTabClass = (target?: HTMLElement) => {
  const childrenElement = document.querySelector('#zero-editor-menu')?.children || []
  for (let i = 0; i < childrenElement.length; i++) {
    if((target && childrenElement[i] !== target) || !target) {
      childrenElement[i].classList.remove('display-tab')
    }
  }
}