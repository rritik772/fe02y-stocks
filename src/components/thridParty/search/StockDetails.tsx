import { Button, Collapse, Divider, Flex, Image, Paper, SimpleGrid, Table, Text, Title, UnstyledButton } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useThirdPartyContext } from '../../../context/thridparty';

const StockDetails = () => {
    const { selectedStock, getStockData } = useThirdPartyContext();

    const [stockData, setStockData] = useState(undefined);
    const [toggleSummary, setToggleSummary] = useState<boolean>(false);

    useEffect(() => {
        const get_stock_data = async () => {
            const response = await getStockData(selectedStock);
            setStockData(response)
        }

        get_stock_data()
    }, [selectedStock])

    if (stockData === undefined) return <></>

    return (
        <div style={{ marginTop: '10px' }}>
            <Flex ml={20} align='center'>
                <Image maw={50} radius='md' src={stockData.header.logoUrl} />
                <Text ml={10}>{stockData.header.displayName}</Text>
            </Flex>

            <Paper shadow='md' p='20px'>
                <Title order={4} className='sans-5'>Price Data</Title>
                <Table striped withBorder highlightOnHover withColumnBorders>
                    <thead>
                        <tr>
                            <th>Open</th>
                            <th>Low</th>
                            <th>High</th>
                            <th>LTP</th>
                            <th>pClose</th>
                            <th>yrHigh</th>
                            <th>yrLow</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{parseFloat(stockData.priceData.nse.open).toFixed(3)}</td>
                            <td>{parseFloat(stockData.priceData.nse.low).toFixed(3)}</td>
                            <td>{parseFloat(stockData.priceData.nse.high).toFixed(3)}</td>
                            <td>{parseFloat(stockData.priceData.nse.ltp).toFixed(3)}</td>
                            <td>{parseFloat(stockData.priceData.nse.pclose).toFixed(3)}</td>
                            <td>{parseFloat(stockData.priceData.nse.yearHighPrice).toFixed(3)}</td>
                            <td>{parseFloat(stockData.priceData.nse.yearLowPrice).toFixed(3)}</td>
                        </tr>
                    </tbody>
                </Table>

                <Title order={4} mt={10} className='sans-5'>Expert Rating</Title>
                <Table withColumnBorders withBorder striped highlightOnHover>
                    <thead>
                        <tr>
                            <th>Buy</th>
                            <th>Hold</th>
                            <th>Sell</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{stockData.expertRating.buyCount}</td>
                            <td>{stockData.expertRating.holdCount}</td>
                            <td>{stockData.expertRating.sellCount}</td>
                        </tr>
                        <tr>
                            <td>{parseFloat(stockData.expertRating.buyPercent).toFixed(3)}%</td>
                            <td>{parseFloat(stockData.expertRating.holdPercent).toFixed(3)}%</td>
                            <td>{parseFloat(stockData.expertRating.sellPercent).toFixed(3)}%</td>
                        </tr>
                    </tbody>
                </Table>
            </Paper>

            <Paper shadow='md' p={20}>
                <Title order={4} className='sans-5'>Fundamentals</Title>
                <Flex mr={20} justify='space-between'>
                    {
                        stockData.fundamentals.map((funda, i) => (
                            <Paper>
                                <Text>{funda.shortName}</Text>
                                <Text>{funda.value}</Text>
                            </Paper>
                        ))
                    }
                </Flex>

            </Paper>

            <Paper mt={20} shadow='md' p='20px'>
                <Title mt={20} order={4} className='sans-5'>Details</Title>
                <Flex direction='column' gap={3}>
                    <Text>Full Name: {stockData.details.fullName}</Text>
                    <Text>CEO Name: {stockData.details.ceo}</Text>
                    <Text>Headquarters: {stockData.details.headquarters}</Text>
                    <Text>Managing Director: {stockData.details.managingDirector}</Text>

                    <Text>Floating Shares: {stockData.header.floatingShares}</Text>
                    <Text>Industry Name: {stockData.header.industryName}</Text>
                    <div>
                        <UnstyledButton onClick={() => setToggleSummary(!toggleSummary)}>
                            <Text variant='gradient'> Toggle Summary </Text>
                        </UnstyledButton>
                        <Collapse in={toggleSummary}>{stockData.details.businessSummary}</Collapse>
                    </div>
                </Flex>
            </Paper>

        </div>
    )
}

export default StockDetails;
