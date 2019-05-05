import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: sources[0]
        },
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: sources[1]
        },
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Chart",
          title: "Chart",
          icon: sources[0]
        },
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Setting",
          title: "Setting",
          icon: sources[1]
        },
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Profile",
          title: "Profile",
          icon: sources[0]
        },
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Setting",
          title: "Setting",
          icon: sources[1]
        }
      ]
    });
  });

  // Promise.all([
  //   Icon.getImageSource(
  //     Platform.OS === "android"
  //       ? "md-notifications-outline"
  //       : "ios-notifications-outline",
  //     30
  //   ),
  //   Icon.getImageSource(Platform.OS === "android" ? "md-more" : "ios-more", 30)
  // ]).then(sources => {
  //   Navigation.startTabBasedApp({
  //     tabs: [
  //       {
  //         screen: "awesome-places.SharePlaceScreen",
  //         label: "Share Place",
  //         title: "Share Place"
  //         // icon: require("../../assets/img/icon/clock-gray1.png"),
  //         // selectedIcon: require("../../assets/img/icon/clock-blue.png"),
  //         // navigatorStyle: navBarStyle,
  //         // navigatorButtons: {
  //         //   leftButtons: [
  //         //     {
  //         //       icon: sources[1],
  //         //       title: "Menu",
  //         //       id: "sideDrawerToggle"
  //         //     }
  //         //   ]
  //         // },
  //         // topBar: {
  //         //   drawBehind: false
  //         // }
  //       },
  //       {
  //         screen: "awesome-places.FindPlaceScreen",
  //         label: "Find Place",
  //         title: "Find Place"
  //         // icon: require("../../assets/img/icon/trello-gray.png"),
  //         // selectedIcon: require("../../assets/img/icon/trello-blue.png"),
  //         // navigatorStyle: navBarStyle,
  //         // navigatorButtons: {
  //         //   leftButtons: [
  //         //     {
  //         //       icon: sources[1],
  //         //       title: "Menu",
  //         //       id: "sideDrawerToggle"
  //         //     }
  //         //   ]
  //         // },
  //         // topBar: {
  //         //   drawBehind: false
  //         // }
  //       },
  //       {
  //         screen: "awesome-places.FindPlaceScreen",
  //         label: "Setting",
  //         title: "Setting"
  //         // icon: require("../../assets/img/icon/calendar-gray.png"),
  //         // selectedIcon: require("../../assets/img/icon/calendar-blue1.png"),
  //         // navigatorStyle: navBarStyle,
  //         // navigatorButtons: {
  //         //   leftButtons: [
  //         //     {
  //         //       icon: sources[1],
  //         //       title: "Menu",
  //         //       id: "sideDrawerToggle"
  //         //     }
  //         //   ]
  //         // },
  //         // topBar: {
  //         //   drawBehind: false
  //         // }
  //       }
  //     ]
  //     // tabsStyle: {
  //     //   tabBarButtonColor: "#A6A6B3",
  //     //   tabBarSelectedButtonColor: "#22a6ff",
  //     //   // tabBarTextFontFamily: "'Montserrat', sans-serif",
  //     //   tabBarBackgroundColor: "#ffffff",
  //     //   forceTitlesDisplay: true,
  //     //   tabFontSize: 14,
  //     //   selectedTabFontSize: 14
  //     //   // tabBarTextFontSize: 25,
  //     //   // tabFontSize: 30,
  //     //   // selectedFontsize: 30
  //     // },
  //     // drawer: {
  //     //   right: {
  //     //     screen: "partypypes.SideDrawer"
  //     //   }
  //     // },
  //     // appStyle: {
  //     //   tabBarSelectedButtonColor: "#22a6ff",
  //     //   tabBarButtonColor: "#A6A6B3",
  //     //   // navBarTextFontSize: 50,
  //     //   forceTitlesDisplay: true,
  //     //   tabFontFamily: "Avenir-Medium",
  //     //   tabFontSize: 14,
  //     //   selectedTabFontSize: 14,
  //     //   navBarHidden: true
  //     //   // tabFontFamily: "'Montserrat', sans-serif"
  //     //   // tabFontSize: 30,
  //     //   // selectedFontsize: 30
  //     // }
  //   });
  // });
};

export default startTabs;
