// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod nse_data;
mod grow;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            nse_data::get_index_data,
            nse_data::get_stock_data,
            nse_data::get_all_stocks,
            nse_data::get_top_gainers,
            nse_data::get_top_losers,
            nse_data::get_top_volumes,

            grow::get_stock,
            grow::search_stock
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
