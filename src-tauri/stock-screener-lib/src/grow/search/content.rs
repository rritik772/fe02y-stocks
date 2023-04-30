use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Content {
    id: String,
    search_id: String,
    scheme_search: Option<String>,
    scheme_name: Option<String>,
    scheme_code: Option<String>,
    title: String,
    entity_type: String,
    search_string: Option<String>,
    isin: Option<String>,
    fund_name: Option<String>,
    tiker: Option<String>,
    term_page_view: Option<u32>,
    underlying_search_id: Option<String>,
    nse_scrip_code: Option<String>,
    bse_scrip_code: Option<String>,
    groww_contract_id: Option<String>,
    analytics_label: Option<String>,
    expiry: Option<String>,
}
