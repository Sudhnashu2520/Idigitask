import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,Dimensions, Alert } from 'react-native';

import {  Camera,useCameraDevice,useCodeScanner } from 'react-native-vision-camera';



const QrCodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [active,setActive] = useState(false)
 
   
    const device = useCameraDevice('back')
    
    useEffect(() => {
        (async () => {
            const  status  = await Camera.requestCameraPermission();
            console.log("permissionstatus : "+status)
            setHasPermission(status === 'granted');
        })();

        
    }, []);

    const codeScannerr = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
          console.log(`Scanned ${codes.length} codes!`)
        Alert.alert('Scanning Successful')
          setScanned(true)
          setActive(false)
        }
      })

      

    if (hasPermission === null) {
        return <Text>Requesting camera permission...</Text>;
    }
    if (hasPermission === false) {
        return <Text>Camera permission denied. Please grant access.</Text>;
    }

    return (
        <View style={styles.container}>
            {/* <Text style={{color:'black',textAlign:'center',marginBottom:50,fontSize:20,fontWeight:'bold'}} >Qr-Code Scanner</Text> */}
            <View style={styles.imgcontainer}>
                {
                    active?
                    <Camera
                    isActive={active}
                        style={styles.preview}
                        device={device}
                        focusable={true}
                        
                        codeScanner={codeScannerr}
                        
                    />
                    :
                    <Image source={require('../assets/qr-code.png')} style={styles.preview}/>
                }
           
            <Image style={{height:Dimensions.get('screen').height/2.8,alignSelf:'center',width:Dimensions.get('screen').width/1.3,position:'absolute'}} 
            source={require('../assets/scanning.png')}/>
            </View>
            
            {/* <View style={{backgroundColor: 'rgba(255, 0, 0, 0.5)',position:'absolute',height:'100%',width:'100%'}}>

            </View> */}
            <TouchableOpacity style={{padding:15,alignSelf:'center',marginTop:50,borderRadius:30,backgroundColor:active?'grey':'#007bff'}} onPress={()=>setActive(true)}>
                
                {
                    scanned?<Text style={{textAlign:'center',color:'#fff',}}>Scan Again</Text>:<Text style={{textAlign:'center',color:'#fff'}}>Scan</Text>
                }
               
            </TouchableOpacity>
            
        </View>
    );
};
//129653
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
       backgroundColor:'#fff'
       
    },
    imgcontainer: {
     //   flex: 1,
      //  flexDirection: 'column',
        justifyContent: 'center',
        alignContent:'center',
       // alignItems:'center',
       backgroundColor:'#fff'
       
    },
    preview: {
        height:Dimensions.get('screen').height/3.5,alignSelf:'center',width:Dimensions.get('screen').width/1.6,
              
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    infoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
    closeText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default QrCodeScanner;