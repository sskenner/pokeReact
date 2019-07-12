import React from 'react';
import {ScrollView, Text, Image} from 'react-native';

class SearchBody extends React.Component{
    render(){
        var pokemon = this.props.data;
        if(!pokemon){
            return<View />
        }
        return(
            <ScrollView style={{flex: 1}}>
                <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                <View style={styles.viewStyle}>
                    <Image
                        source={}
                        style={styles.img}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
}

export default SearchBody;
