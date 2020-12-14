import { MatrixQuery } from "../../utils/MatrixQuery";

export const MatrixElse = props => {
  const query = MatrixQuery.conditional("else_", props) ? MatrixQuery.conditional("else_", props) : "%else_asset";
    return(
      <>
      {query}
      {props.children && props.children}
      </>
    )
}
  
  