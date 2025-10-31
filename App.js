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
<<<<<<< HEAD
=======
import LoginScreen from "./src/screens/LoginScreen";
<<<<<<< HEAD
import SportsScreeen from "./src/screens/SportsScreeen";
=======
import SignUpScreen from "./src/screens/SignUpScreen"
import AuthProvider from "./src/lib/supabase/providers/AuthProvider";
>>>>>>> 954a5adfb243aa446176e4936754373f7762cad3
>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3

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
<<<<<<< HEAD
  },
  {
    initialRouteName: "Home",
=======
    Login_Screen: LoginScreen,
<<<<<<< HEAD
    Sports_Screeen: SportsScreeen,
=======
		Sign_Up_Screen: SignUpScreen,
>>>>>>> 954a5adfb243aa446176e4936754373f7762cad3
  },
  {
    initialRouteName: "Sports_Screeen",
>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3
    defaultNavigationOptions: {
      title: "Campus Events",
      headerShown: false,
    },
  }
);

<<<<<<< HEAD
export default createAppContainer(navigator);
=======
const AppContainer = createAppContainer(navigator);
const RootApp = () => <AppContainer />;

const App = () => (
	<AuthProvider>
		<RootApp />
	</AuthProvider>
);

export default App;
>>>>>>> 0950a750b35a6f89e69cfcd29225508caab8c9d3
