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
    if( element.type === undefined ){
      element.forEach( child => render(child, container ) );
      return container;
    }

    const dom = element.type === "TEXT_ELEMENT" ? container.ownerDocument.createTextNode("") : container.ownerDocument.createElement( element.type );

    Object.keys(element.props)
      .filter(key => key !== "children")
      .forEach((name) => {
        dom[name] = element.props[name];
      });

    if( element.props.hasOwnProperty("children")){
      element.props.children.forEach((child) => render(child, dom));
    }
    
    
    container.appendChild(dom);
  }

  function Fragment({ children } ){
    if( ! Array.isArray( children ) ){
      children = [ children ];
    }
    return children.map( child => typeof child === "object" ? child : createTextElement(child) );
  }

  export { jsx, render, jsx as jsxs, Fragment };