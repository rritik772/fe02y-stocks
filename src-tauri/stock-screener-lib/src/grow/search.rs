use reqwest::{get, StatusCode};
use serde::{Serialize, Deserialize};

pub mod content;

#[derive(Serialize, Deserialize, Debug)]
pub struct SearchData {
    content: Vec<content::Content>
}


pub async fn search(text: String) -> Result<SearchData, u16> {
    let url = format!("{URL}={text}");
    let response = get(&url).await.unwrap();
    let status = response.status();
    if status == StatusCode::OK {
        let text = response.text().await.unwrap();
        let search_data: SearchData = serde_json::from_str(&text).unwrap();
        println!("{:#?}", search_data);

        return Ok(search_data);
    }

    Err(status.as_u16())
}


#[cfg(test)]
mod test {
    use super::*;

    extern crate tokio;

    #[tokio::test]
    async fn search_test() {
        let _ = search("tata".to_owned()).await;
    }
}
