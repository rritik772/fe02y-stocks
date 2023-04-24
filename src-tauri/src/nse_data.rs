use stock_screener_lib::{
    indexes::{index_response::IndexResponse, indexcode::IndexCode, nse},
    nsestocks::{stock, allstocks},
    performance::{top_gainers, top_losers, top_volume, performance_response}
};

#[tauri::command]
pub async fn get_index_data(api_key: String, indexes: Vec<IndexCode>) -> Result<IndexResponse, u16> {
    if indexes.len() == 0 {
        let indexes = vec![
            IndexCode::Banknifty,
            IndexCode::Finnifty,
            IndexCode::Nifty,
            IndexCode::Nifty100,
            IndexCode::Niftyauto,
            IndexCode::Niftyfmcg,
            IndexCode::Niftyit,
            IndexCode::Niftymedia,
            IndexCode::Niftymetal,
            IndexCode::Niftymidcap,
            IndexCode::Niftypharma,
            IndexCode::Niftypsubank,
            IndexCode::Niftypvtbank,
            IndexCode::Niftyrealty,
        ];
        return nse::get_index_data(api_key, indexes).await;
    }
    return nse::get_index_data(api_key, indexes).await;
}

#[tauri::command]
pub async fn get_stock_data(api_key: String, stocks: Vec<String>) -> Result<stock::Stock, u16> {
    stock::get_stock_data(api_key, stocks).await
}

#[tauri::command]
pub async fn get_all_stocks(api_key: String) -> Result<allstocks::AllStockResponse, u16> {
    allstocks::get_all_stocks(api_key).await
}

#[tauri::command]
pub async fn get_top_gainers(api_key: String) -> Result<performance_response::PerformanceResponse, u16> {
    top_gainers::get_top_gainers(api_key).await
}

#[tauri::command]
pub async fn get_top_losers(api_key: String) -> Result<performance_response::PerformanceResponse, u16> {
    top_losers::get_top_losers(api_key).await
}

#[tauri::command]
pub async fn get_top_volumes(api_key: String) -> Result<performance_response::PerformanceResponse, u16> {
    top_volume::get_top_volumes(api_key).await
}
