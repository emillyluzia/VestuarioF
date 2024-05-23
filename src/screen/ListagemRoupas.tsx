import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


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



const renderItem = ({ item }: { item: Roupas }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.Texto1}>{item.tecido}</Text>
        <Text style={styles.Texto1}>{item.tamanho}</Text>
        <Text style={styles.Texto1}>{item.cor}</Text>
        <Text style={styles.Texto1}>{item.categoria}</Text>
        <Text style={styles.Texto1}>{item.fabricacao}</Text>
        <Text style={styles.Texto1}>{item.estacao}</Text>
       

        
    </TouchableOpacity>
);


function ListagemRoupas(): React.JSX.Element {

    const [roupas, setRoupas] = useState<Produto[]>([]);


    useEffect(() => {
        ListagemRoupas();
    }, []);


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

    const navigation= useNavigation();

    return (
        <View style={styles.container}>
           
            <View style={styles.header}>
                <Text style={styles.headerText} >Ame Fashion</Text>
                <Text style={styles.Textocima}></Text>
            </View>
            <FlatList
                data={roupas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}

            />
            



        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,


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
    }
    
})

export default ListagemRoupas;