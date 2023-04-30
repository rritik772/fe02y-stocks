use serde::{Deserialize, Serialize};

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
pub struct PriceData {
    nse: MarketData,
}

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
pub struct MarketData {
    yearLowPrice: Option<f32>,
    yearHighPrice: Option<f32>,
    ltp: Option<f32>,
    open: Option<f32>,
    high: Option<f32>,
    low: Option<f32>,
    pclose: Option<f32>,
}
