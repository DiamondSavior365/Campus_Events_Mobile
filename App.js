import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ClubList from "./src/screens/ClubList";
import EventList from "./src/screens/EventList";
import HalloweenScreen from "./src/screens/HalloweenScreen";
import ThanksgivingScreen from "./src/screens/ThanksgivingScreen";
import ChristmasScreen from "./src/screens/ChristmasScreen";
import DirectoryScreen from "./src/screens/DirectoryScreen";
import F1_RacerScreen from "./src/screens/F1_RacerScreeen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen"
import AuthProvider from "./src/lib/supabase/providers/AuthProvider";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Event_List: EventList,
    Club_List: ClubList,
    Directory_Screen: DirectoryScreen,
    Halloween_Screen: HalloweenScreen,
    Thanksgiving_Screen: ThanksgivingScreen,
    Christmas_Screen: ChristmasScreen,
    F1_Racer_Screen: F1_RacerScreen,
    Login_Screen: LoginScreen,
		Sign_Up_Screen: SignUpScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Campus Events",
      headerShown: false,
    },
  }
);

const AppContainer = createAppContainer(navigator);
const RootApp = () => <AppContainer />;

const App = () => (
	<AuthProvider>
		<RootApp />
	</AuthProvider>
);

export default App;