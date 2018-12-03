import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Icon } from "react-native-elements";

import Feed from "../screens/Feed";
import Me from "../screens/Me";
import UserDetail from "../screens/UserDetail";
import Settings from "../screens/Settings";

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: "Feed"
    }
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
    })
  }
});

const Tabs = createBottomTabNavigator(
  {
    Feed: FeedStack,
    Me: Me
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Feed") {
          iconName = `list`;
        } else if (routeName === "Me") {
          iconName = `account-circle`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings"
    }
  }
});

const Root = createStackNavigator({
  Tabs: {
    screen: Tabs
  },
  Settings: {
    screen: SettingsStack
  }
  //   {
  // 	  mode: 'modal',
  // 	  headerMode: 'none'
  //   }
});

export default createAppContainer(Root);
