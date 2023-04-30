use serde::{Deserialize, Serialize};

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
pub struct Header {
    searchId: String,
    growwCompanyId: String,
    isin: String,
    industryName: Option<String>,
    displayName: String,
    r#type: String,
    nseScriptCode: Option<String>,
    isNseTradable: bool,
    logoUrl: Option<String>,
    floatingShares: Option<u64>,
}
