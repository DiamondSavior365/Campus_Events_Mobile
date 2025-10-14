import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ClubList from "./src/screens/ClubList";
import EventList from "./src/screens/EventList";
import HalloweenScreen from "./src/screens/HalloweenScreen";
import ThanksgivingScreen from "./src/screens/ThanksgivingScreen";
import ChristmasScreen from "./src/screens/ChristmasScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Event_List: EventList,
    Club_List: ClubList,
    Halloween_Screen: HalloweenScreen,
    Thanksgiving_Screen: ThanksgivingScreen,
    Christmas_Screen: ChristmasScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Campus Events",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
