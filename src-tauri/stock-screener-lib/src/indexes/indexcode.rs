use std::fmt::Display;

use serde::{Serialize, Deserialize};

#[derive(Debug, Deserialize, Serialize)]
pub enum IndexCode {
    Banknifty,
    Finnifty,
    Nifty,
    Nifty100,
    Niftyauto,
    Niftyfmcg,
    Niftyit,
    Niftymedia,
    Niftymetal,
    Niftymidcap,
    Niftypharma,
    Niftypsubank,
    Niftypvtbank,
    Niftyrealty
}

impl Display for IndexCode {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            IndexCode::Banknifty    => write!(f, "BANKNIFTY"),
            IndexCode::Finnifty     => write!(f, "FINNIFTY"),
            IndexCode::Nifty        => write!(f, "NIFTY"),
            IndexCode::Nifty100     => write!(f, "NIFTY100"),
            IndexCode::Niftyauto    => write!(f, "NIFTYAUTO"),
            IndexCode::Niftyfmcg    => write!(f, "NIFTYFMCG"),
            IndexCode::Niftyit      => write!(f, "NIFTYIT"),
            IndexCode::Niftymedia   => write!(f, "NIFTYMEDIA"),
            IndexCode::Niftymetal   => write!(f, "NIFTYMETAL"),
            IndexCode::Niftymidcap  => write!(f, "NIFTYMIDCAP"),
            IndexCode::Niftypharma  => write!(f, "NIFTYPHARMA"),
            IndexCode::Niftypsubank => write!(f, "NIFTYPSUBANK"),
            IndexCode::Niftypvtbank => write!(f, "NIFTYPVTBANK"),
            IndexCode::Niftyrealty  => write!(f, "NIFTYREALTY")
        }
    }
}
