import { render } from "../../runtime/jsx-runtime";
import { MatrixQuery } from "./utils/MatrixQuery";


export function matrixIF( element, container ){
    const beginElement = container.ownerDocument.createTextNode( MatrixQuery.conditional(null, element.props) );
    container.appendChild(beginElement);

    if( element.props.hasOwnProperty("children") ){
        element.props.children.forEach((child) => render(child, container));
    }

    const endAsset = container.ownerDocument.createTextNode("%end_asset%");
    container.appendChild(endAsset);
    return container;
}


export function matrixElse( element, container ){
    const statement = MatrixQuery.conditional("else_", element.props);

    if( ! statement ){
        const elseAsset = container.ownerDocument.createTextNode("%else_asset%");
        container.appendChild(elseAsset);
        if( element.props.hasOwnProperty("children") ){
            element.props.children.forEach((child) => render(child, container));
        }
        return container;
    }

    const beginElement = container.ownerDocument.createTextNode( statement );
    container.appendChild(beginElement);
    if( element.props.hasOwnProperty("children") ){
        element.props.children.forEach((child) => render(child, container));
    }

    return container;

}

export function matrixData( element, container ){
    const asset = container.ownerDocument.createTextNode(MatrixQuery.meta( element.props ));
    container.appendChild(asset);
    if( element.props.hasOwnProperty("children") ){
        element.props.children.forEach((child) => render(child, container));
    }

    return container;
}


