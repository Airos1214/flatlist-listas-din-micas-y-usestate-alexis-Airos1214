import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Alumnos() {
    const [alumnos, setAlumnos] = useState(null);

    useEffect(() => {
        console.log("Pantalla cargada");

        setTimeout(() => {
            setAlumnos([
                {nombre:'CANDELARIA MORA SAMANTHA', matricula:'2114354'},
                {nombre:'CANTU SILVA JAVIER', matricula:'2111889'},
                {nombre:'CARMONA LOZANO ANGEL EMILIANO', matricula:'2069119'},
                {nombre:'CASTILLO ACOSTA JORGE', matricula:'2132842'},
                {nombre:'DAVILA GONZALEZ ALDO ADRIAN', matricula:'1994122'},
                {nombre:'DURAN BARRIENTOS FABRIZIO', matricula:'2018230'},
                {nombre:'FLORES GONZALEZ SEBASTIAN', matricula:'2104564'},
                {nombre:'DURAN BARRIENTOS FABRIZIO', matricula:'2018230'},
                {nombre:'FLORES GONZALEZ SEBASTIAN', matricula:'2104564'},
                {nombre:'FLORES LÓPEZ DIEGO', matricula:'2066033'},
                {nombre:'FLORES MARTINEZ ERICK ADRIAN', matricula:'2132976'},
                {nombre:'GARZA AVALOS DIEGO', matricula:'2066114'},
                {nombre:'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula:'2031243'},
                {nombre:'GRANJA PEÑA DIEGO', matricula:'2064733'},
                {nombre:'IBARRA RODRIGUEZ ALEXIS', matricula:'2031243'},
                {nombre:'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula:'2064733'},
                {nombre:'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula:'2094647'},
                {nombre:'MIRELES VELAZQUEZ ALEJANDRO', matricula:'2005102'},
                {nombre:'MONSIVAIS SALAZAR ANDRES', matricula:'2064574'},
                {nombre:'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula:'2024783'},
                {nombre:'PEÑA MUNGARRO LUIS ANGEL', matricula:'2066077'},
                {nombre:'PUENTE REYNOSO JULIO CESAR', matricula:'2092151'},
                {nombre:'RAMIREZ LOPEZ BRYAN', matricula:'2103708'},
                {nombre:'RAMOS AVILA LILIANA VALERIA', matricula:'2115192'},
                {nombre:'RICO JAUREGUI MAURICIO', matricula:'2037503'},
                {nombre:'RIVERA LUNA ADRIAN', matricula:'2131513'},
                {nombre:'RIVERA REYNA JOSE EMILIO', matricula:'2013503'},
                {nombre:'RODRIGUEZ OLVERA ROSA ISELA', matricula:'2004613'},
                {nombre:'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula:'2133022'},
                {nombre:'SANCHEZ GALARZA JUAN CARLOS', matricula:'2026061'},
                {nombre:'SOLIS ORTIZ ALFREDO', matricula:'2095320'},
                {nombre:'VELAZQUEZ ABREGO HERWIN DANIEL', matricula:'2025350'},
                {nombre:'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula:'2103895'},
                {nombre:'ZACATENCO OLIVE RODRIGO', matricula:'1857791'},
                {nombre:'ZAVALA CANTU TERESA MARGARITA', matricula:'2025218'}
            ]); 
        }, 1500);
    }, []);

    if (alumnos === null) {
        return <Text>Cargando lista...</Text>;
    }

    if (alumnos.length === 0) {
        return <Text>No hay alumnos disponibles</Text>;
    }

    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Alumnos</Text>
            <FlatList
                data={alumnos}
                keyExtractor={(item)=> item.matricula}
                renderItem={({item}) => (

                    <View style={styles.item}>

                        <MaterialIcons
                            name="account-circle"
                            size={45}
                            color="#3a86ff"
                        />

                        <View style={{marginLeft:10}}>
                            <Text>{item.nombre}</Text>

                            <Text>
                                <Text style={{fontWeight:'bold'}}>Matrícula: </Text>
                                {item.matricula}
                            </Text>
                        </View>

                    </View>

                )}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"rgb(63, 93, 228)",
        paddingTop:50
    },

    titulo:{
        fontSize:28,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:15,
        color:"#ffffff"
    },

    item:{
    backgroundColor:"#ffffff",
    marginHorizontal:15,
    marginVertical:6,
    borderRadius:10,
    elevation:3,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
},

    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    loading:{
        fontSize:18
    }

});