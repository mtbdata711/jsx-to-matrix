import { MatrixTypes } from "../lib/types";

function jsx(type, config) {
    if (typeof type === "function") {
      return type(config);
    }

  const { children = [], ...props } = config;
    const childrenProps = [].concat(children);
    return {
      type,
      props: {
        ...props,
        children: childrenProps.map((child) =>
          typeof child === "object" ? child : createTextElement(child)
        ),
      },
    };
  }

  function createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    };
  }


  function render(element, container) {

  if( MatrixTypes.hasOwnProperty( element.type ) ){
    return MatrixTypes[element.type]( element, container );
  }

    const dom = element.type === "TEXT_ELEMENT" ? container.ownerDocument.createTextNode("") : container.ownerDocument.createElement( element.type );
    Object.keys(element.props)
      .filter(key => key !== "children")
      .forEach((name) => {
        dom[name] = element.props[name];
      });

    element.props.children.forEach((child) => render(child, dom));
    
    container.appendChild(dom);
  }

  export { jsx, render, jsx as jsxs };