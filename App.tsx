import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import React from "react";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen name="Home" component={Home} options={{ title: "Overview" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
