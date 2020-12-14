import { MatrixIF } from "./components/MatrixIF";
import { MatrixData } from "./components/MatrixData";
import { MatrixElse } from "./components/MatrixElse";
const App = () => {
    const asset = "Business.Details.companyName";
    const asAsset = "Company.Acronym";
    return(
<div className="section test">
  <MatrixIF asset={ asset } as_asset={ asAsset } modifier={ "eq:ABC" }>
    <MatrixData asset={asset} />
  <MatrixElse>
    <p>Goodbye Sun</p>
  </MatrixElse>
  </MatrixIF>
</div>

  );

}
export default App;