import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screen/CadastroScreen';
import EditarRoupas from './src/screen/RoupasEditar';
import ListagemRoupas from './src/screen/ListagemRoupas';


const Stack = createStackNavigator();


function App(): React.ReactElement {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name='Roupas' component={ListagemRoupas} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;
