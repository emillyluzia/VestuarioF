import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screen/CadastroScreen';
import EditarRoupas from './src/screen/RoupasEditar';

const Stack = createStackNavigator();


function App(): React.ReactElement {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name='Cadastro' component={CadastroScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name='Editar' component={EditarRoupas} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;
