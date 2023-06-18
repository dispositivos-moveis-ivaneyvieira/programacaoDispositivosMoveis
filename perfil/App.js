import { Text, View, Image } from 'react-native';

// Criando um componente

const Introducao = (props) => {
  return (
    <View>
      <Text>Olá Mundo</Text>
      <Text>{props.nome}</Text>
      <Text>--------------</Text>
    </View>
  );
};

const Perfil = (props) => {
  return (
    <View>
      <Image style={{ width: 80, height: 80 }} source={{ uri: props.foto }} />
      <Text>{props.nome}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <Introducao nome="Ivaney" />
      <Introducao nome="Bia" />
      <Introducao nome="Ray" />
      <Perfil
        foto="https://icons.iconarchive.com/icons/iconarchive/dog-breed/96/Australian-Shepherd-icon.png"
        nome="Major"
      />
      <Perfil
        foto="https://icons.iconarchive.com/icons/iconarchive/dog-breed/128/Cane-Corso-icon.png"
        nome="Marley"
      />
      <Perfil
        foto="https://icons.iconarchive.com/icons/iconarchive/dog-breed/128/Bichon-Frise-icon.png"
        nome="Meg Sales"
      />
    </View>
  );
};

export default App;
