import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./styles";
import Icon from "./UI/Icon";
import ExpenseContextProvider from "./store/ExpenseContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const ExpensesOverview = () => {
    return (
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerTintColor: GlobalStyles.colors.primary100,
          headerStyle: { backgroundColor: GlobalStyles.colors.primary700 },
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary700 },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: GlobalStyles.colors.primary100,
          headerRight: ({ tintColor }) => {
            return (
              <Icon
                size={30}
                color={tintColor}
                icon="add"
                onPress={() => navigation.navigate("ManageExpenses")}
              />
            );
          },
        })}
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
        <ExpenseContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: GlobalStyles.colors.primary100,
              headerStyle: { backgroundColor: GlobalStyles.colors.primary700 },
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </ExpenseContextProvider>
      </NavigationContainer>
    </>
  );
}
