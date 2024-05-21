import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";


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

const RoupasEditar: React.FC = () => {

    const [tecido, setTecido] = useState<string>('')
    const [tamanho, setTamanho] = useState<string>('')
    const [cor, setCor] = useState<string>('')
    const [categoria, setCategoria] = useState<string>('')
    const [fabricacao, setFabricacao] = useState<string>('')
    const [estacao, setEstacao] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
  

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const { produto } = route.params;

        setTecido(produto.tecido);
        setTamanho(produto.tamanho);
        setCor(produto.cor);
        setCategoria(produto.categoria);
        setFabricacao(produto.fabricacao);
        setEstacao(produto.estacao);
        setDescricao(produto.descricao);

  
    })


    return (
        <View>
            <StatusBar backgroundColor={"red"} barStyle={"light-content"} />
            <Head />
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    value={tecido}
                    onChangeText={setTecido}
                />

                <TextInput
                    style={styles.input}
                    value={tamanho}
                    onChangeText={setTamanho}
                />

                <TextInput
                    style={styles.input}
                    value={cor}
                    onChangeText={setCor}
                />

                <TextInput
                    style={styles.input}
                    value={categoria}
                    onChangeText={setCategoria}
                />

                <TextInput
                    style={styles.input}
                    value={fabricacao}
                    onChangeText={setFabricacao}
                />

                <TextInput
                    style={styles.input}
                    value={estacao}
                    onChangeText={setEstacao}
                />

                <TextInput
                    style={styles.input}
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}></Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "red",
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButtom: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    imagemButtonText: {
        color: 'White',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center',

    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    menuList: {
        flexGrow: 1
    },


});

export default RoupasEditar;