import { MatrixQuery } from "../../utils/MatrixQuery";

export const MatrixIF = props => {
    const query = MatrixQuery.conditional(null, props);
    return(
      <>
      {query}
      {props.children && props.children}
      {"%end_asset%"}
      </>
    )
}
  
  