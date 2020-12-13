const App = () => {
    const asset = "Business.Details.companyName";
    const asAsset = "Company.Acronym";
    return(
<div className="section">
  <m-if asset={asset} as_asset={asAsset} modifier="eq:ABC">
    <a
      className="button primary"
      style="color:#000;text-decoration:none;"
      href="https://www.thisiatest.com"
    >
      Sign up to our mailing list
    </a>
    <m-else asset={asset} as_asset={asAsset} modifier="eq:DEF">
      <a
        className="primary button"
        style="color:#000;text-decoration:none;"
        href="https://www.thisiatest.com"
      >
        Sign up to our mailing list
      </a>
    </m-else>
    <m-else asset={asset} as_asset={asAsset} modifier="eq:HIJ">
      <a
        className="primary button"
        style="color:#000;text-decoration:none;"
        href="https://www.thisiatest.com"
      >
        Sign up to our mailing list
      </a>
    </m-else>
    <m-else asset={asset} as_asset={asAsset} modifier="eq:KLM">
      <a
        className="primary button"
        style="color:#000;text-decoration:none;"
        href="https://www.thisiatest.com"
      >
        Sign up to our mailing list
      </a>
    </m-else>
    <m-else asset={asset} as_asset={asAsset} modifier="eq:NOP">
      <a
        className="primary button"
        style="color:#000;text-decoration:none;"
        href="https://www.thisiatest.com"
      >
        Sign up to our mailing list
      </a>
    </m-else>
    <m-else asset={asset} as_asset={asAsset} modifier="eq:QRS">
      <a
        className="primary button"
        style="color:#000;text-decoration:none;"
        href="https://www.thisiatest.com"
      >
        Sign up to our mailing list
      </a>
    </m-else>
    <m-else>
      <a
        className="button primary"
        style="color:#000;text-decoration:none;"
        href="https://www.thisiatest.com"
      >
        Sign up to our mailing list
      </a>
    </m-else>
  </m-if>
</div>

  );

}
export default App;