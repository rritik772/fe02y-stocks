use std::collections::HashMap;

use reqwest::{get, StatusCode};
use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct Stock {
    status: String,
    data: HashMap<String, StockData>,
}


#[derive(Debug, Deserialize)]
pub struct StockData {
    #[serde(rename="NSECode")]
    pub nsecode: String,

    #[serde(rename="TodayOpen")]
    pub today_open: f32,

    #[serde(rename="TodayHigh")]
    pub today_high: f32,

    #[serde(rename="TodayLow")]
    pub today_low: f32,

    #[serde(rename="TodayClose")]
    pub today_close: f32,

    #[serde(rename="ltp")]
    pub last_traded_price: f32,

    #[serde(rename="dayChange")]
    pub day_change: String,

    #[serde(rename="dayChangePerc")]
    pub day_change_percentage: String,

    #[serde(rename="volume")]
    pub volume: f32,

    #[serde(rename="totalBuyQty")]
    pub total_buy_quantity: f32,

    #[serde(rename="totalSellQty")]
    pub total_sell_quantity: f32
}


const URL: &str = "https://api.stockmarketapi.in/api/v1/getprices";

pub async fn get_stock_data(api_key: String, stocks: Vec<String>) -> Result<Stock, u16> {
    let codes = stocks.join(",");
    let url = format!("{URL}?token={api_key}&nsecode={codes}");

    // FIXME: better error handling
    let response = get(url).await.unwrap();
    let status = response.status();
    if status == StatusCode::OK {
        let text = response.text().await.unwrap();
        let stocks: Stock = serde_json::from_str(&text).unwrap();
        return Ok(stocks);
    }

    Err(status.as_u16())
}

#[cfg(test)]
mod test {
    use std::env;

    use super::*;

    #[tokio::test]
    async fn get_stock_data_test() {
        let api = env::var("API").unwrap();
        let _response = get_stock_data(
            api,
            vec!["ITC".to_owned()],
        )
        .await
        .unwrap();
    }
}
