use serde::{Serialize, Deserialize};


#[allow(non_snake_case)]
#[derive(Serialize, Deserialize, Debug)]
pub struct Details {
    fullName: Option<String>,
    parentCompany: Option<String>,
    headquarters: Option<String>,
    ceo: Option<String>,
    managingDirector: Option<String>,
    foundedYear: i32,
    businessSummary: Option<String>,
    websiteUrl: Option<String>,
}
