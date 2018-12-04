import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import Home from "../components/Home";
import Settings from "../components/Settings";
import Login from "../components/Login";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home,
    Settings
  },
  {
    intialRouteName: "Settings",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" },
    swipeEnabled: true
  }
);

// ToDo Root stack

export default createAppContainer(TabNavigator);
