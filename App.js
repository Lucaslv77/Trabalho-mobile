import { StatusBar } from "react-native";
import { StyleSheet, View, StatusBar } from "react-native";
import {CarProvider} from './components/CarContext'

import CarInputComponent from "./components/CarInputComponent";
import CarConuntComponent from "./components/CarConuntComponent";
import CarListComponent from "./components/CarListComponent";

export default function App() {
    return (
      <CarProvider>
        <View>
           <CarConuntComponent/>
           <CarInputComponent/>
           <CarListComponent/>
           <StatusBar style="auto" />
           
        </View>
      </CarProvider>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})