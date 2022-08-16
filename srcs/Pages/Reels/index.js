import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, StatusBar, Text, ImageBackground, FlatList, Image, Pressable, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('screen');

const CorCinzaContainer = '#efefef';
const CorCinzaIcon = '#747474';
const CorAzul = '#4e6eff';

const css = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: 'white'
  },
  BoxReelsStyle: {
    position: 'absolute',
    top: Platform.OS == 'ios' ? 80 : 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    width: width,
  },
  txtTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  BoxInfosUser: {
    flexDirection: 'row',
    position: 'absolute',
    width: width,
    alignItems: 'center',
    paddingLeft: 10
  },
  avatarImg: {
    height: 30,
    width: 30,
    borderRadius: 30
  },
  txtUser: {
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
    marginRight: 15
  },
  BotaoSeguir: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  txtBotao: {
    fontSize: 14,
    color: 'white',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 1,
    marginBottom: 3
  },
  txt: {
    marginLeft: 10,
    color: 'white'
  },
  txtDesc: {
    width: 280,
    color: 'white'
  },
  IconVertical: {
    height: 30,
    width: 30,
    borderRadius: 10,
    position: 'absolute',
  },
  rotateTop: {
    transform: [{ rotate: '-30deg' }],
  },
  txtPadrao:{
    marginTop: 5,
    fontSize: 13,
    color: 'white'
  }
});


export default function Reels() {
  const [reels, setReels] = useState([

    { idPostagem: 1, ImgUser: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg', NomeUser: 'Fernando', ImgPostagem: 'https://images.unsplash.com/photo-1581981436156-33342c4b870c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFpc2FnZW18ZW58MHx8MHx8&w=1000&q=80', DescPostagem: 'Bela praia para está com a familia, muito sol , agua de coco, maravilha demais, bom final de semanas a todos e fiquem na paz de Deus', HorarioPostagem: 'Há 10 horas', curtidoPor: 'João Lima' },
    { idPostagem: 2, ImgUser: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg', NomeUser: 'Maria', ImgPostagem: 'https://i.pinimg.com/736x/c0/f1/6b/c0f16b9e48cd40a732cf803c8095cb5c.jpg', DescPostagem: 'Tomando um belo café', HorarioPostagem: 'Há 2 horas', curtidoPor: 'Anderson Carlos' },
    { idPostagem: 3, ImgUser: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg', NomeUser: 'Fernando', ImgPostagem: 'https://i.pinimg.com/736x/2a/e4/46/2ae44688eb71f2d26b190190d2806474--clouds-sea.jpg', DescPostagem: 'Bela praia para está com a familia', HorarioPostagem: 'Há 10 horas', curtidoPor: 'Jean Matos' },
    { idPostagem: 4, ImgUser: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg', NomeUser: 'Maria', ImgPostagem: 'https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-1.jpg?resize=1500%2C2250&ssl=1', DescPostagem: 'Tomando um belo café, depois daquele almoço top', HorarioPostagem: 'Há 2 horas' },
    { idPostagem: 5, ImgUser: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg', NomeUser: 'Fernando', ImgPostagem: 'https://anselmohoffmann.com.br/wp-content/uploads/2021/12/melhores-configuracoes-para-fotografia-de-paisagem-5.jpg', DescPostagem: 'Bela praia para está com a familia', HorarioPostagem: 'Há 10 horas' },
    { idPostagem: 6, ImgUser: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg', NomeUser: 'Maria', ImgPostagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Henri_Rousseau_-_Myself-_Portrait_–_Landscape_-_Google_Art_Project.jpg/597px-Henri_Rousseau_-_Myself-_Portrait_–_Landscape_-_Google_Art_Project.jpg', DescPostagem: 'Tomando um belo café, depois daquele almoço top', HorarioPostagem: 'Há 2 horas' },
  ])
  return (
    <SafeAreaView style={css.back}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <BodyReels dataReels={reels} />
      <BoxReels />
    </SafeAreaView>
  );
}

function BoxReels() {
  return (
    <View style={css.BoxReelsStyle}>
      <Text style={css.txtTitle}>Reels</Text>
      <Icon onPress={() => alert('criar novo reels')} name='camera-outline' size={30} color={'white'} />
    </View>
  )
}

function BodyReels({ dataReels }) {
  return (
    <FlatList
      data={dataReels}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.idPostagem}
      renderItem={({ item }) => <CardReels reels={item}
      />}
    />
  )
}

function CardReels({ reels }) {
  const { ImgPostagem, NomeUser, ImgUser, DescPostagem } = reels;
  return (
    <View style={{ width: width, height: height }}>
      <Image style={StyleSheet.absoluteFillObject} source={{ uri: ImgPostagem }} />

      <View style={[css.BoxInfosUser, { bottom: 80 }]}>
        <Image source={{ uri: ImgUser }} style={css.avatarImg} />
        <Text style={css.txtUser}>{NomeUser}</Text>
        <Pressable style={css.BotaoSeguir}>
          <Text style={css.txtBotao}>Seguir</Text>
        </Pressable>
      </View>
      <View style={[css.BoxInfosUser, { bottom: 40 }]}>
        <Text numberOfLines={1} style={css.txtDesc}>{DescPostagem}</Text>
      </View>
      <View style={[css.BoxInfosUser, { bottom: 12 }]}>
        <Icon name='musical-notes' size={15} color={'white'} />
        <Text style={css.txt}>marcospaulo.70 - Áudio original</Text>
      </View>

      <Image style={[css.IconVertical, { bottom: 15, borderWidth: 2, borderColor: 'white', right: 15 }]} source={{ uri: 'https://media.istockphoto.com/photos/studio-portrait-of-a-50-year-old-bearded-man-in-a-green-sweater-on-a-picture-id1182328313?k=20&m=1182328313&s=612x612&w=0&h=BYoJ8NtOwyB2heUCHiY_61BGiOTZeYePapfgkjfIyj4=' }} />
      <Icon name='ellipsis-horizontal' size={20} color={'white'} style={[css.IconVertical, { bottom: 65, right: 10 }]} />
      <Icon style={[css.IconVertical, css.rotateTop, { bottom: 105, right: 10 }]} name='send-outline' size={25} color={'white'} />
      <View style={[css.IconVertical, { bottom: 170, right: 15}]}>
        <Icon name='chatbubble-outline' size={30} color={'white'} />
        <Text style={css.txtPadrao}>350</Text>
      </View>

      <View style={[css.IconVertical, { bottom: 240, right: 15 }]}>
        <Icon style={{marginLeft: -4}} name={'heart-outline'} size={33} color={'white'} />
        <Text style={css.txtPadrao}>350</Text>
      </View>


    </View>
  )
}

