import { HTML_TYPE } from "../constant";

export const renderElement = ({ type, props = {} }: any, container: { appendChild: (arg0: any) => void; }): void => {
  const isTextElement = !type;
  const element = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);
  element.innerText = props.nodeValue;
  
  const isListener = (p: string) => p.startsWith('on');
  const isSetData = (p: string) => p === 'setData';
  const isAttribute = (p: string) => !isListener(p) && !isSetData(p) && p !== 'children';

  
  Object.keys(props).forEach(p => {
    if (isAttribute(p)) element[p] = props[p];
    if(isSetData(p)) {
      for (const key in props[p]) {
        element.setAttribute(key, props[p][key])
      }
    }
    if (!isTextElement && isListener(p))
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
  });

  if (!isTextElement && props.children && props.children.length)
    props.children.forEach((childElement: { type: any; props?: {} | undefined; }) =>
      renderElement(childElement, element)
    );

  container.appendChild(element);
  
  return element
};

type HTMLElement_String = HTMLElement | string | undefined

export const renderTabDom = (htmlOption: Record<string, any>) : HTMLElement_String => {
  if(!htmlOption) {
    return ''
  }
  if (htmlOption.type === HTML_TYPE.HTML) {
    return renderHTMLTag(htmlOption);
  }  
  else if (htmlOption.type === HTML_TYPE.STYLE) {
    return renderSTYLETag(htmlOption);
  }
}

export const renderHTMLTag = (htmlOption: Record<string, any>): HTMLElement => {
  const div = document.createElement('div');
  div.className = 'editor-menu-tab';

  htmlOption.tagAndText.forEach((item: Record<string, any>) => {
    const tag = document.createElement(item.tag);
    tag.className = 'editor-menu-tab-item'
    tag.innerText = item.text
    tag.setAttribute('data-attr', item.dataAttr);

    div.appendChild(tag);
  });

  return div
}

export const renderSTYLETag = (htmlOption: Record<string, any>): HTMLElement => {
  
  const div = document.createElement('div');
  div.className = `editor-menu-tab ${htmlOption.tabClassName}`;

  htmlOption.tagAndText.forEach((item: string) => {
    const tag = document.createElement('div');
    tag.className = 'editor-menu-tab-item'
    tag.style.setProperty(htmlOption.styleName, item)
    tag.setAttribute('data-attr', item);
    div.appendChild(tag);
  });

  return div
}

