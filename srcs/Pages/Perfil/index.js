import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Dimensions, Text, FlatList, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconsMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('screen');


const CorCinzaContainer = '#efefef';
const CorCinzaIcon = '#747474';
const CorAzul = '#4e6eff';

const css = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight
  },
  BoxTitle: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 15
  },
  TxtTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  BoxImgPerfil: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgPerfil: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginRight: '15%'
  },
  iconAdd: {
    position: 'absolute',
    bottom: 10,
    left: 60,
    height: 32,
    width: 32,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 2
  },
  StyleInfos: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  infoNumber: {
    fontWeight: 'bold',
    fontSize: 16
  },
  infoTxt: {
    fontSize: 14
  },
  BoxNameDesc: {
    padding: 15,
  },
  BoxBotoes: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  top5: {
    marginTop: 5
  },
  botaoEditar: {
    width: '88%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CorCinzaContainer
  },
  botaoAdd: {
    width: '10%',
    height: '100%',
    borderRadius: 8,
    marginLeft: 10,
    backgroundColor: CorCinzaContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxFindText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 25,
    marginTop: 20
  },
  AvatarFind: {
    height: 80,
    width: 80,
    borderRadius: 80
  },
  CardPessoas: {
    marginRight: 5,
    padding: 15,
    borderWidth: 2,
    borderColor: CorCinzaContainer,
    height: 215,
    width: 170,
    alignItems: 'center',
    marginTop: 10
  },
  txtCinza: {
    fontSize: 13,
    color: CorCinzaIcon
  },
  botaoSeguir: {
    backgroundColor: '#0098fd',
    marginTop: 5,
    width: '100%',
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  corBranco: {
    color: 'white'
  },
  width: {
    width: width
  },
  BoxIndicator: {
    width: width,
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 15
  },
  BotaoIndicator: {
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: CorCinzaIcon
  },
  Grid: {
    height: 150,
    width: '34%',
    marginRight: 1,
    marginBottom: .5,
  },
  ImgGrid: {
    height: 150,
    width: '100%',
    marginRight: 1,
    marginBottom: .5,
  }
})

function PreHeader() {
  return (
    <View style={css.BoxTitle}>
      <Text style={css.TxtTitle}>Nomeuser</Text>
      <Icon name='add-circle-outline' size={24} color={'black'} style={{ position: 'absolute', right: 65 }} />
      <Icon name='menu-outline' size={28} color={'black'} style={{ position: 'absolute', right: 19 }} />
    </View>
  )
}

function Header() {
  return (
    <View>
      <View style={css.BoxImgPerfil}>
        <Image style={css.imgPerfil} source={{ uri: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg' }} />
        <View style={css.iconAdd}>
          <Icon name='add-circle' size={30} color={'#4e6eff'} />
        </View>
        <Infos num={'9'} subtitle={'Publicar'} />
        <Infos num={'800'} subtitle={'Seguidores'} />
        <Infos num={'500'} subtitle={'Seguindo'} />
      </View>
      <View style={css.BoxNameDesc}>
        <Text style={[css.infoNumber, css.infoTxt]}>NomeUser</Text>
        <Text style={css.top5}>Aqui você vai aprender muita coisa sobre react native! saiba mais... Acesse nosso canal através do link www.brunaodev.com</Text>
        <Text style={[css.infoNumber, css.infoTxt, css.top5]}>Ver tradução</Text>
      </View>
      <View style={css.BoxBotoes}>
        <View style={css.botaoEditar}>
          <Text style={css.infoNumber}>Editar perfil</Text>
        </View>
        <View style={css.botaoAdd}>
          <Icon name='person-add' size={20} color={'black'} />
        </View>
      </View>
    </View>
  )
}

function Infos({ num, subtitle }) {
  return (
    <View style={css.StyleInfos}>
      <Text style={css.infoNumber}>{num}</Text>
      <Text style={css.infoTxt}>{subtitle}</Text>
    </View>
  )
}

function FindPessoas({ Pessoas }) {
  return (
    <View>
      <View style={css.BoxFindText}>
        <Text style={css.infoNumber}>Encontrar pessoas</Text>
        <Text style={[css.infoNumber, { color: CorAzul }]}>Ver tudo</Text>
      </View>
      <FlatList contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false} horizontal data={Pessoas} keyExtractor={item => item.id} renderItem={({ item }) => <CardPessoas data={item} />} />
    </View>
  )
}

function CardPessoas({ data }) {
  const { nome, img, seguidoPor, amigosEmComum } = data;

  return (
    <View style={css.CardPessoas}>
      <Icon style={{ position: 'absolute', top: 2, right: 5 }} name='close' size={20} color={CorCinzaIcon} />
      <Image style={css.AvatarFind} source={{ uri: img }} />
      <Text style={[css.infoNumber, css.top5]}>{nome}</Text>
      <Text style={[css.txtCinza, { marginTop: 8 }]}>Seguido(a) por</Text>
      <Text numberOfLines={1} style={css.txtCinza} >{seguidoPor} e mais {amigosEmComum}</Text>
      <Pressable style={css.botaoSeguir}>
        <Text style={css.corBranco}>Seguir</Text>
      </Pressable>
    </View>
  )
}

function IndicatorScreens({ valueSelected, setValueSelected, listaFotosFeed, listaFotosComVoce}) {

  return (
    <View style={css.width}>
      <View style={css.BoxIndicator}>
        <Pressable onPress={() => setValueSelected(0)} style={[css.BotaoIndicator, { borderBottomWidth: valueSelected == 0 ? 3 : null }]}>
          <IconsMaterial name='grid' size={25} color={valueSelected == 0 ? 'black' : CorCinzaIcon} />
        </Pressable>

        <Pressable onPress={() => setValueSelected(1)} style={[css.BotaoIndicator, { borderBottomWidth: valueSelected == 1 ? 3 : null }]}>
          <IconsMaterial name='comment-account-outline' size={25} color={valueSelected == 1 ? 'black' : CorCinzaIcon} />
        </Pressable>
      </View>
      <ResultScreen listFotos={listaFotosFeed} listFotosComVoce={listaFotosComVoce} valorScreen={valueSelected} />
    </View>
  )
}

function ResultScreen({ listFotos, valorScreen, listFotosComVoce }) {
  return (
    <>
      {valorScreen == 0 ?
        <ListasRenderizada Fotos={listFotos} />
        :
        <ListasRenderizada Fotos={listFotosComVoce} />
      }
    </>
  )
}

function ListasRenderizada({ Fotos }) {
  return (
    <FlatList
      data={Fotos}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {

        return (
          <View style={css.Grid}>
            <TouchableOpacity>

              <Image
                style={css.ImgGrid}
                source={{ uri: item }} />
            </TouchableOpacity>

          </View>
        )
      }
      }
    />
  )
}

export default function Perfil() {
  const [randomPeople, setRandomPeople] = useState([
    { id: 1, nome: 'Bill Gates', img: 'https://conteudo.imguol.com.br/c/entretenimento/74/2017/07/15/bill-gates-1500129791753_v2_1910x1000.jpg', seguidoPor: 'Elon Musk', amigosEmComum: 5 },
    { id: 2, nome: 'Jimi Hendrix', img: 'https://cdn.domtotal.com/img/noticias/2020-09/1472018_461456.jpg', seguidoPor: 'Datena Sbt', amigosEmComum: 10 },
    { id: 3, nome: 'Robert Plant', img: 'https://lastfm.freetls.fastly.net/i/u/ar0/455629b849b54455817dffb1459a8205', seguidoPor: 'Wiliam Bonner', amigosEmComum: 1 },
    { id: 4, nome: 'Cazuza', img: 'https://studiosol-a.akamaihd.net/gcs/cifra-blog/pt/wp-content/uploads/2022/04/7c70e63-cazuza.jpg', seguidoPor: 'Steven Jobs', amigosEmComum: 9 },
  ]);
  const [selected, setSelected] = useState(0);

  const [fotosFeed, setFotosFeed] = useState([
    'https://i0.wp.com/abglt.org.br/wp-content/uploads/2020/10/wallpaper-pc1-scaled-1.jpg?fit=2560%2C1440&ssl=1',
    'https://i.pinimg.com/474x/ea/80/03/ea8003eda835af024292148060887ed4.jpg',
    'https://i.pinimg.com/originals/cb/75/08/cb75089d4437359724c28eede200cb53.png',
    'https://i.pinimg.com/originals/b9/b1/2c/b9b12c6ac93b4272c5d627b3e216d041.png',
    'https://wallpaperaccess.com/full/24866.jpg',
    
  ]);

  const [fotosComVoce, setFotosComVoce] = useState([]);

  return (
    <SafeAreaView style={css.back}>
      <PreHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <FindPessoas Pessoas={randomPeople} />
        <IndicatorScreens valueSelected={selected} setValueSelected={setSelected} listaFotosFeed={fotosFeed} listaFotosComVoce={fotosComVoce} />
      </ScrollView>
    </SafeAreaView>
  );
}
