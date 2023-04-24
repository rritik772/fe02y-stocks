use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, PartialEq, PartialOrd)]
pub struct StockCandle {
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
}

#[derive(Debug, Serialize, Deserialize, PartialEq, PartialOrd)]
pub struct IndexResponse {
    pub status: String,
    pub data: Vec<StockCandle>,
}
