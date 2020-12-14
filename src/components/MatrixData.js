import { MatrixQuery } from "../../utils/MatrixQuery";

export const MatrixData = props => {
    let query = MatrixQuery.meta(props);
    return(
      <>
      {query}
      </>
    )
}
  
  