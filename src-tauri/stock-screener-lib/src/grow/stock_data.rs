use reqwest::{get, StatusCode};
use serde::{Deserialize, Serialize};

pub mod details;
pub mod expert_rating;
pub mod fundamental;
pub mod header;
pub mod price_data;
pub mod stats;

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
pub struct StockData {
    header: header::Header,
    stats: stats::Stats,
    fundamentals: Vec<fundamental::Fundamental>,
    details: details::Details,
    priceData: price_data::PriceData,
    expertRating: expert_rating::ExperRating,
}


// FIXME: Better error handling
pub async fn stock(text: String) -> Result<StockData, u16> {
    let url = format!("{URL}/{text}");
    let response = get(&url).await.unwrap();
    let status = response.status();

    if status == StatusCode::OK {
        let text = response.text().await.unwrap();
        let stock_data: StockData = serde_json::from_str(&text).unwrap();

        return Ok(stock_data);
    }

    Err(status.as_u16())
}

#[cfg(test)]
mod test {
    use super::*;
    extern crate tokio;

    #[tokio::test]
    async fn search_test() {
        let _ = stock("zomato-ltd".to_owned()).await.unwrap();
    }
}
