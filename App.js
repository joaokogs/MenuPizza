
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View,Image } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [pizza, setPizza] = useState(0)

  const [pizzas, setPizzas] = useState([
    {key:1, nome:'Strogonoff', valor:35.90, img:require('./assets/strogonoff.png')},
    {key:2, nome:'Frango', valor:38.90, img:require('./assets/frango.png')},
    {key:3, nome:'Calabresa', valor:45.90, img:require('./assets/calabresa.png')},
    {key:4, nome:'Portuguesa', valor:65.90, img:require('./assets/portuguesa.png')},
    {key:5, nome:'Brigadeiro', valor:55.90, img:require('./assets/brigadeiro.png')},
  ])

  let pizaasItem = pizzas.map((v,k)=>{
    return <Picker.Item style={styles.aaa} key={k} value={k} label={v.nome}/>
  })

  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>
      <Picker style={styles.aaa} selectedValue={pizza} onValueChange={(itemValue, itemIndex)=> setPizza(itemValue)}>
        {pizaasItem}
      </Picker>

      <Text style={styles.pizzas}>Você escolheu: {pizzas[pizza].nome}</Text>
      <Text style={styles.pizzas}>R$: {pizzas[pizza].valor.toFixed(2)}</Text>
      <View style={styles.img}>
        <Image source={pizzas[pizza].img} style={styles.imagem}></Image>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor:'#212529'
  },
  logo:{
    textAlign: 'center',
    fontSize:28,
    fontWeight:'bold',
    color:'#FFF'
  },
  pizzas:{
    marginTop:15,
    fontSize:28,
    textAlign:'center',
    color:'#FFF'
  },
  img:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  imagem:{
    width:360,
    height:360
  },
  aaa:{
    color:'#FFF',
    backgroundColor:'#212529'
  }
});
