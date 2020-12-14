export class MatrixQuery{

    static conditional(prefix = null, props = {}){
        let statement = "%";

        if( ! props.hasOwnProperty( "asset" ) ){
            return false;
        }
    
        if( prefix ){
            statement += prefix;
        }
    
        if( props.hasOwnProperty("asset") ){
          statement +=  `begin_asset_metadata_${props.asset}`;
        }
    
        if( props.hasOwnProperty("as_asset") ){
            statement += `^as_asset:asset_metadata_${props.as_asset}`;
        }
    
        if( props.hasOwnProperty("modifier") ){
            statement += `^${props.modifier}`;
        }
    
        return statement + "%";
    }

    static meta(props){
        if( ! props.hasOwnProperty("asset") ){
            return false;
        }
        let statement = ""
        if( props.hasOwnProperty("asset")  ){
          statement = `%asset_metadata_${props.asset}`;
        }
  
        if( props.hasOwnProperty("as_asset") ){
            statement += `^as_asset:asset_metadata_${props.as_asset}`;
        }
    
        if( props.hasOwnProperty("modifier") ){
          statement += `^${props.modifier}`;
        }

        return statement + "%";

    }

}