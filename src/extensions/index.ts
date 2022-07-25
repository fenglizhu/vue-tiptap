const context: any = import.meta.glob("./*.ts", { eager: true });
const module: Record<string, any> = {};

for (let key in context) {
  module[context[key].default.name] = context[key].default;
}
console.log(module);


export { default as Bold } from './bold';
export { default as Highlight } from './highlight';
export { default as TextStyle } from './text-style';
export { default as Undeline } from './undeline';
export { default as Italic } from './italic';
export { default as Strike } from './strike';
export { default as Blockquote } from './block-quote';
export { default as CodeBlock } from './code-block';
export { default as Color } from './color';

