use serde::{Deserialize, Serialize};

#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
pub struct Stats {
    marketCap: Option<f32>,
    pbRatio: Option<f32>,
    peRatio: Option<f32>,
    bookValue: Option<f32>,
    epsTime: Option<f32>,
    roe: Option<f32>,
    industryPe: Option<f32>,
    cappedType: Option<String>,
    faceValue: Option<f32>,
    deptToEquity: Option<f32>,
}
