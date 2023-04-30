use serde::{Serialize, Deserialize};


#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
pub struct Fundamental {
    name: String,
    shortName: String,
    value: String,
}
