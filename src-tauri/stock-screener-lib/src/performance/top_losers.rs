use reqwest::{get, StatusCode};

use super::performance_response::PerformanceResponse;

const URL: &str = "https://api.stockmarketapi.in/api/v1/toplosers";

pub async fn get_top_losers(api_key: String) -> Result<PerformanceResponse, StatusCode> {
    let url = format!("{URL}?token={api_key}");
    let response = get(&url).await.unwrap();
    let status = response.status();
    if status == StatusCode::OK {
        let text = response.text().await.unwrap();
        let gainers: PerformanceResponse = serde_json::from_str(&text).unwrap();

        return Ok(gainers);
    }

    Err(status)
}

#[cfg(test)]
mod test {
    use std::env;

    use super::*;
    extern crate tokio;

    #[tokio::test]
    async fn get_top_losers_test() {
        let api = env::var("API").unwrap();
        let _response = get_top_losers(
            api
        )
        .await
        .unwrap();
    }
}