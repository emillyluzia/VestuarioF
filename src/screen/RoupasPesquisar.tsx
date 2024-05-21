import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import { useNavigation } from "@react-navigation/native";

interface Produto {
    id: number;
    tecido: string;
    tamanho: string;
    cor: string;
    categoria: string;
    fabricacao: string;
    estacao: string;
    descricao: string;
}

function PesquisaRoupas(): React.JSX.Element {

    const navigation = useNavigation();

    const produtos: Produto[] = [
        {
            id: 1,
            tecido: 'Algodão',
            tamanho: 'M',
            cor: 'Roxo',
            categoria: 'Adulto',
            fabricacao: 'China',
            estacao: 'Inverno',
            descricao: 'Roupa super quentinha',
        },
        {
            id: 2,
            tecido: 'Algodão',
            tamanho: 'G',
            cor: 'Rosa',
            categoria: 'Kids',
            fabricacao: 'Brasil',
            estacao: 'Calor',
            descricao: 'Roupa super confortável',
        },
    ]

    const selecionaProduto = (produto: Produto) => {
        navigation.navigate('EditarProdutos', { produto });
    }


    const renderItem = ({ item }: {item: Produto }) => {
        return (
            <TouchableOpacity style={styles.menuItem}
             onPress={() => selecionaProduto(item)}>
                <View style={styles.itemDetails}>
                    <Text style={styles.tissue}>{item.tecido}</Text>
                    <Text style={styles.size}>{item.tamanho}</Text>
                    <Text style={styles.color}>{item.cor}</Text>
                    <Text style={styles.category}>{item.categoria}</Text>
                    <Text style={styles.descrition}>{item.descricao}</Text>
                    <Text style={styles.color}>{item.cor}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'red'} barStyle={'light-content'}/>
            <Head/>
            <FlatList
               data={produtos}
               renderItem={renderItem}
               keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
               contentContainerStyle={styles.menuList}
               />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },
    itemDetails:{
        marginLeft: 10,
        flex: 1,
    },
    tissue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    size: {
        fontSize: 14,
        color: '#666'
    },
    color: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    fabrication: {
        fontSize: 14,
        color: '#666'
    },
    station: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    descrition: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    menuList:{
        flexGrow: 1
    }
})

export default PesquisaRoupas;