export interface SearchStockModel {
    id: string;
    search_id: string;
    scheme_search?: string;
    scheme_name?: string;
    scheme_code?: string;
    title: string;
    entity_type: string;
    search_string?: string;
    isin?: string;
    fund_name?: string;
    tiker?: string;
    term_page_view?: number;
    underlying_search_id?: string;
    nse_scrip_code?: string;
    bse_scrip_code?: string;
    groww_contract_id?: string;
    analytics_label?: string;
    expiry?: string;
}

export const SearchStockModelDefault = {
  id: '',
  search_id: '',
  title: '',
  entity_type: '',
}
