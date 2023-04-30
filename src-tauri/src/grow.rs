use stock_screener_lib::grow::{
    search::{self, SearchData},
    stock_data::{self, StockData},
};


#[tauri::command]
pub async fn search_stock(text: String) -> Result<SearchData, u16> {
    search::search(text).await
}

#[tauri::command]
pub async fn get_stock(text: String) -> Result<StockData, u16> {
    stock_data::stock(text).await
}
