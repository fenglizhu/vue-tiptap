export const querySelector = (options: string, parentElement: Document | HTMLElement = document): HTMLElement => {
  return parentElement.querySelector(options)!
}

export const removeClass = (element: HTMLElement | Element, className: string) => {
  element && element.classList.remove(className);
}

export const addClass = (element: HTMLElement | Element, className: string) => {
  element && element.classList.add(className);
}