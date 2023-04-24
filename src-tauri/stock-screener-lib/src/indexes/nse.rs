use crate::indexes::index_response::IndexResponse;
use crate::indexes::indexcode::IndexCode;
use reqwest::{get, StatusCode};

const URL: &str = "https://api.stockmarketapi.in/api/v1/indexprice";

pub async fn get_index_data(
    api_key: String,
    indexes: Vec<IndexCode>,
) -> Result<IndexResponse, u16> {
    let indexes = indexes
        .iter()
        .map(|index| index.to_string())
        .collect::<Vec<String>>();
    let codes = indexes.join(",");
    let url = format!("{URL}?token={api_key}&indexcode={codes}");

    // FIXME: better error handling
    let response = get(url).await.unwrap();
    let status = response.status();
    if status == StatusCode::OK {
        // FIXME: better error handling
        let text = response.text().await.unwrap();
        let index_response: IndexResponse = serde_json::from_str(&text).unwrap();
        return Ok(index_response);
    }

    Err(status.as_u16())
}

#[cfg(test)]
mod test {
    use std::env;

    use super::*;
    extern crate tokio;

    #[tokio::test]
    async fn get_index_data_test() {
        let api = env::var("API").unwrap();
        let _response = get_index_data(api, vec![IndexCode::Nifty]).await.unwrap();
    }
}
