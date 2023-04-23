use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct PerformanceResponse {
    status: String,
    data: Vec<PerformanceStock>
}

#[derive(Deserialize, Debug)]
pub struct PerformanceStock {
    #[serde(rename="CompanyName")]
    pub company_name: String,

    #[serde(rename = "MarketCap")]
    pub market_cap: f64,

    #[serde(rename="NSECode")]
    pub nsecode: String,

    #[serde(rename="TodayHigh")]
    pub today_high: f32,

    #[serde(rename="TodayLow")]
    pub today_low: f32,

    #[serde(rename="ltp")]
    pub last_traded_price: f32,

    #[serde(rename="dayChange")]
    pub day_change: String,

    #[serde(rename="dayChangePerc")]
    pub day_change_percentage: String,

    #[serde(rename = "YrHigh")]
    pub yr_high: f32,

    #[serde(rename = "YrLow")]
    pub yr_low: f32,
}
