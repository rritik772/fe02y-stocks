import { Button, Flex, Group, Header, Text } from "@mantine/core";
import { UseAppSwitcher } from "../../context/AppSwitcher";
import { Switches } from "../../models/AppSwitcherModel";

function HeaderComponent() {
  const { currentSwitch, setCurrentSwitch } = UseAppSwitcher();

  return (
    <Header height={{ base: 70 }} p="md">
      <Flex justify="space-between">
        <Text className="display" fz={30} color="blue">
          Stock Screener
        </Text>

        <Group>
          <Button
            variant="subtle"
            disabled={currentSwitch === Switches.Playground}
            onClick={() => setCurrentSwitch(Switches.Playground)}
          >
            Playground
          </Button>
          <Button
            variant="subtle"
            disabled={currentSwitch === Switches.NSE}
            onClick={() => setCurrentSwitch(Switches.NSE)}
          >
            NSE
          </Button>
          <Button
            variant="subtle"
            disabled={currentSwitch === Switches.TrdParty}
            onClick={() => setCurrentSwitch(Switches.TrdParty)}
          >
            3<sup>rd</sup> party
          </Button>
        </Group>
      </Flex>
    </Header>
  );
}

export default HeaderComponent;
