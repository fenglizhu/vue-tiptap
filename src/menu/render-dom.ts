export const renderElement = ({ type, props = {} }: any, container: { appendChild: (arg0: any) => void; }) => {
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
      console.log(333);
      
      for (const key in props[p]) {
        console.log(key);
        
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
};
