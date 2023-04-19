import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./styles";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const ExpensesOverview = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerTintColor: GlobalStyles.colors.primary100,
          headerStyle: { backgroundColor: GlobalStyles.colors.primary700 },
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary700 },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: GlobalStyles.colors.primary100,
        }}
      >
        <Tab.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
