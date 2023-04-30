use serde::{Deserialize, Serialize};

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
pub struct ExperRating {
    buyCount: Option<u32>,
    sellCount: Option<u32>,
    holdCount: Option<u32>,
    buyPercent: Option<f32>,
    sellPercent: Option<f32>,
    holdPercent: Option<f32>,
}
