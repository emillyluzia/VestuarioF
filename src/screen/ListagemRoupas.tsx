import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';
import Footer from '../components/Footer';


interface Roupas {
    id: number;
    tecido: string;
    tamanho: string;
    cor: string;
    categoria: string;
    fabricacao: string;
    estacao: string;
    descricao: string;
    
}



function ListagemRoupas(): React.JSX.Element {

    const [roupas, setRoupas] = useState<Produto[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [filteredRoupas, setFilteredRoupas] = useState<Roupas[]>(roupas);

    useEffect(() => {
      if(pesquisa == ""){
        ListagemRoupas();
      }
    }, []);

    const buscar = async () => {

      try {
          const response = await axios.get('http://10.137.11.202:8000/api/pesquisaCategoria/' + pesquisa);
          console.log('buscando roupas')
          setRoupas(response.data.data)
          console.log(roupas)
          if (response.data.status === true) {

          } else {
              console.log('Erro na busca:', response.data.message);
          }
      } catch (error) {
          console.log('Erro na requisição:', error);
      }
  };
    const ListagemRoupas = async () => {
        try {
            const response = await axios.get('http://10.137.11.202:8000/api/vizualizar');
            if (response.status === 200) {
                console.log(response.data.data)
                setRoupas(response.data.data);
                
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (id: number) => {
        try {
          await axios.delete('http://10.137.11.202:8000/api/excluir/'+id);
          setRoupas(roupas.filter((roupa) => roupa.id !== id));
          setFilteredRoupas(filteredRoupas.filter((roupa) => roupa.id !== id));
        } catch (error) {
      
        }
      };

    const navigation= useNavigation();

    const renderItem = ({ item }: { item: Roupas }) => {
        return (
          <View style={styles.container}>
             <Text style={styles.Texto1}>{item.tecido}</Text>
            <Text style={styles.Texto1}>{item.tamanho}</Text>
            <Text style={styles.Texto1}>{item.cor}</Text>
            <Text style={styles.Texto1}>{item.categoria}</Text>
            <Text style={styles.Texto1}>{item.fabricacao}</Text>
            <Text style={styles.Texto1}>{item.estacao}</Text>
            <View style={styles.botaoContainer}>
              <TouchableOpacity style={styles.botaoDeletar} onPress={() => handleDelete(item.id)}>
                <Text style={styles.botaoText}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      };
    

      
    return (
        
        <View style={styles.container}>
           
            <View style={styles.header}>
                <Text style={styles.headerText} >Ame Fashion</Text>
                <Text style={styles.Textocima}></Text>
            </View>
            <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          value={pesquisa}
          onChangeText={(text) => setPesquisa(text)}
        />
        <TouchableOpacity style={styles.Pesquisa} onPress={() => buscar()}><Text>Pesquisar</Text></TouchableOpacity>
            <FlatList
                data={roupas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}

            />

          <Footer/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    botaoText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
      },
      Pesquisa: {
        padding: 12,
        backgroundColor: '#43ec5f',
        width: 18,
        height: 15,
        position: 'absolute',
        top: 100,
        right: 30,
        borderRadius: 20,
    },
      searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
      },
      searchBar: {
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 5,
      },
        botaoDeletar: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        height: 42,
        width: '49%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      botaoEditar: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        height: 42,
        width: '49%', 
        justifyContent: 'center',
        alignItems: 'center',
      },
      botaoContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
      },
    item: {
        backgroundColor: '#FF1493',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,
        borderColor:'black',
        borderWidth:4

    },
    header: {
        backgroundColor: '#C71585',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 107

    },
    headerText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30

    },
    images:{
        width: 200,
        height: 200

    },
    imagebackground: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'center'
    },
    Texto1: {
        fontSize:20,
        borderBottomWidth:2,
        borderBottomRightRadius:-200,
        borderBottomColor:'white'
    },
    Textovalor:{
        fontSize:15,
        color:'white'
    },
    Textocima:{
        fontSize:20,
        color: 'white'
    },
    pesquisa:{
        borderWidth:5,
        borderColor:'black',
        borderRadius:10
    },
    buttonPesquisar:{
        padding:10,
        width:15,
        height:10,
        position:'absolute',
        marginTop:105,
        marginLeft:350,
        backgroundColor:'red'
    }
})

export default ListagemRoupas;