
import React, { useState } from 'react';
import axios from 'axios';
import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Footer from '../components/Footer';
function CadastroScreen():JSX.Element{


    const[tecido,setTecido]=useState("");
    const[tamanho,setTamanho]=useState("");
    const[cor,setCor]=useState("");
    const[categoria,setCategoria]=useState("");
    const[fabricacao,setFabricacao]=useState("");
    const[estacao,setEstacao]=useState("");
    const[descricao,setDescricao]=useState("");

    const cadastrarProduto = async()=>{
        console.log('cadastrando')
        try{
        const formData = new FormData();
        formData.append('tecido',tecido);
        formData.append('tamanho',tamanho);
        formData.append('cor',cor);
        formData.append('categoria',categoria);
        formData.append('fabricacao',fabricacao);
        formData.append('estacao',estacao);
        formData.append('descricao',descricao);
       

console.log(formData)
         const response = await axios.post('http://10.137.11.202:8000/api/cadastroRoupas',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
         });
         console.log(response.data)

        }catch(error){
            console.log(error);
        }
    

    }

    
    return (

       
        <View style={styles.container}>
            <Text style={styles.headerText} >AME Fashion</Text>
            
        

            <View style={styles.card}>
                <Text style={styles.title}>𝑪𝑨𝑫𝑨𝑺𝑻𝑹𝑶</Text>

                <TextInput style={styles.input} placeholder="Tecido" placeholderTextColor={"#000000"}
                 onChangeText={(textTecido)=> setTecido(textTecido)}/>

                 <TextInput style={styles.input} placeholder="Tamanho" placeholderTextColor={"#000000"}
                 onChangeText={(textTamanho)=> setTamanho(textTamanho)}/>

                <TextInput style={styles.input} placeholder="Cor" placeholderTextColor={"#000000"}
                 onChangeText={(textCor)=> setCor(textCor)}/>

                 <TextInput style={styles.input} placeholder="Categoria" placeholderTextColor={"#000000"}
                 onChangeText={(textCategoria)=> setCategoria(textCategoria)}/>

                 <TextInput style={styles.input} placeholder="Fabricacao" placeholderTextColor={"#000000"}
                 onChangeText={(textFabricacao)=> setFabricacao(textFabricacao)}/>
                
                <TextInput style={styles.input} placeholder="Estacao" placeholderTextColor={"#000000"}
                 onChangeText={(textEstacao)=> setEstacao(textEstacao)}/>

                <TextInput style={styles.input} placeholder="Descricao" placeholderTextColor={"#000000"}
                 onChangeText={(textDescricao)=> setDescricao(textDescricao)}/>

                <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
               <Footer/>
        </View>

    


    

    );
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#C71585'
    },
    logo:{
        width:80,
        height:80,
        marginBottom:20,
        marginTop:-150

    },
    card:{
        backgroundColor:'#C71585',
        width:350,
        borderRadius:50,
        padding:30,
        paddingVertical:60,
        elevation:3,
        shadowColor:'rgba(0,0,0,0.3)',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.8,
        shadowRadius:2,
    },

    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical:270
    },
    footerIcon: {
        width: 40,
        height: 40

    },

    
    title:{
        fontSize:19,
        fontWeight:'bold',
        color:"black",
        marginBottom:20,
        textAlign:'center'
    },
    input:{
        backgroundColor:"white",
        height:40,
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:"black"

    },
    button:{
        backgroundColor:"#FF1493",
        height:40,
        borderRadius:8
    },
    buttonText:{
        color:"black",
        textAlign:'center',
        fontSize:20,
        lineHeight:40,

    },

forgotPassword:{
    color:"white",
    textAlign:'center',
    marginTop:10,


},

imagebackground: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center'
},
headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'

},
imageButton:{
    backgroundColor:'#FF1493',
    padding:10,
    borderRadius:5,
    alignItems:'center',
    marginBottom:10

   },

   imageButtonText:{
    color:'white',
    fontWeight:'bold'
   },


});

export default CadastroScreen;
