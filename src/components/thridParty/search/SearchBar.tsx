import { Badge, Button, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useThirdPartyContext } from '../../../context/thridparty';
import { SearchStockModel } from '../../../models/SearchStockModel';

const SearchBar = () => {
    const { search_stock, setSelectedStock } = useThirdPartyContext();

    const [searchText, setSearchText] = useState<string>('');
    const [stocks, setStocks] = useState<SearchStockModel[]>([]);

    useEffect(() => {
        const searched_stocks = async () => {
            const response = await search_stock(searchText);
            setStocks(response.content.filter(stock => stock.entity_type === "Stocks"))
        }

        if (searchText.length >= 3)
            searched_stocks();
    }, [searchText])

    return (
        <div>
            <TextInput
                size="md"
                placeholder='ITC | TATA'
                label="Search Stocks"
                value={searchText}
                onChange={(e => setSearchText(e.target.value))}
            />
            {
                stocks.map(stock => (
                    <Badge
                        component='button'
                        mr={5}
                        onClick={() => setSelectedStock(stock.search_id)}
                    >{stock.title}</Badge>
                ))
            }
        </div>
    )
}

export default SearchBar;
