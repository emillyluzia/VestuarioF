import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Footer from "../components/Footer";

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

function RoupasPesquisar(): React.JSX.Element {
    const [roupas, setRoupas] = useState<any[]>([]);
    const [pesquisa, setPesquisa] = useState<string>("");

    const navigation = useNavigation();

    useEffect(() => {
        pesquisarRoupas();
    }, [])

    const pesquisarRoupas = async () => {

        try {
            if (pesquisa != "") {
                const response = await axios.get('http://10.137.11.202:8000/api/pesquisaCategoria/' + pesquisa);
                setRoupas(response.data.data);
            } else {
                const response = await axios.get('http://10.137.11.202/vestuario/public/api/vizualizar');
                setRoupas(response.data.dados);
            }

        } catch (error) {
            console.log(error);
        }
    }


    const renderItem = ({ item }: { item: Roupas }) => {
        return (
            <TouchableOpacity style={styles.menuItem}>
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

        <Footer />
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'red'} barStyle={'light-content'} />
            <Head />
            <FlatList
                data={roupas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.menuList}
            />

            <Footer />
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
    itemDetails: {
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
    menuList: {
        flexGrow: 1
    }
})

export default RoupasPesquisar;
