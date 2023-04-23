use serde::Deserialize;
use reqwest::{get, StatusCode};

#[derive(Deserialize, Debug)]
pub struct AllStockResponse {
    status: String,
    date: Vec<Company>,
}

#[derive(Deserialize, Debug)]
pub struct Company {
    #[serde(rename = "CompanyName")]
    pub company_name: String,

    #[serde(rename = "MarketCap")]
    pub market_cap: f64,

    #[serde(rename = "NSECode")]
    pub nsecode: String,

    #[serde(rename = "TodayHigh")]
    pub today_high: f32,

    #[serde(rename = "TodayLow")]
    pub today_low: f32,

    #[serde(rename = "TodayClose")]
    pub today_close: f32,

    #[serde(rename = "ltp")]
    pub last_traded_price: f32,

    #[serde(rename = "dayChange")]
    pub day_change: String,

    #[serde(rename = "dayChangePerc")]
    pub day_change_percentage: String,

    #[serde(rename = "volume")]
    pub volume: f32,

    #[serde(rename = "totalBuyQty")]
    pub total_buy_quantity: f32,

    #[serde(rename = "totalSellQty")]
    pub total_sell_quantity: f32,

    #[serde(rename = "YrHigh")]
    pub yr_high: f32,

    #[serde(rename = "YrLow")]
    pub yr_low: f32,
}

const URL: &str = "https://api.stockmarketapi.in/api/v1/allstocks";

pub async fn get_all_stocks(api_key: String) -> Result<AllStockResponse, StatusCode> {
    let url = format!("{URL}?token={api_key}");
    let response = get(url).await.unwrap();
    let status = response.status();
    if status == StatusCode::OK {
        let text = response.text().await.unwrap();
        let all_stocks = serde_json::from_str(&text).unwrap();

        return Ok(all_stocks);
    }

    Err(status)
}
