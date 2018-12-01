import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Feed from "../screens/Feed";
import Me from "../screens/Me";
import UserDetail from "../screens/UserDetail";
import Settings from "../screens/Settings";

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: "Feed"
    }
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: {
      title: ({ state }) => {
        return `${state.params.name.first.toUpperCase()} ${state.params.name.last.toUpperCase()}`;
      }
    }
  }
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBar: {
        label: "Feed",
        icon: () => <Icon name="list" size={35} color={"red"} />
      }
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBar: {
        label: "Me",
        icon: () => <Icon name="account-circle" size={35} color={"red"} />
      }
    }
  }
});

export const SettingStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings"
    }
  }
});

export const Root = StackNavigator({
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
