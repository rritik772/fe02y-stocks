import { Accordion, Container, Grid } from "@mantine/core";
import NseComponent from "./components/nse/NseComponent";
import Stock from "./components/stock/Stock";
import WatchList from "./components/watchlist/WatchList";
import { UseAppSwitcher } from "./context/AppSwitcher";
import { Switches } from "./models/AppSwitcherModel";

function App() {
  const { currentSwitch, setCurrentSwitch } = UseAppSwitcher();

  const getComponent = () => {
    switch (currentSwitch) {
      case Switches.NSE:
        return <NseComponent />;
      case Switches.TrdParty:
        return <div>TrdParty</div>;
      case Switches.Playground:
        return <div>Playground</div>;
      default:
        return <div>Default</div>;
    }
  };

  return <div>
    <Grid grow gutter='lg'>

      <Grid.Col span={8}>
        {getComponent()}
      </Grid.Col>

      <Grid.Col span={4}>
        <Accordion variant="contained" className="sticky-accord">
          <Accordion.Item value="Stock">
            <Accordion.Control>Stock Details</Accordion.Control>
            <Accordion.Panel><Stock /></Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="watchlist">
            <Accordion.Control>WatchList</Accordion.Control>
            <Accordion.Panel><WatchList /></Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Grid.Col>

    </Grid>
  </div >;
}

export default App;
