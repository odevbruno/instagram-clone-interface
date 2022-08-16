import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Dimensions, Text, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('screen');


const CorCinzaContainer = '#efefef';
const CorCinzaIcon = '#747474';

const css = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight
  },
  boxHeader: {
    width: width,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerSearch: {
    backgroundColor: CorCinzaContainer,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    width: '95%',
    height: 35,
    marginBottom: 10,
    borderRadius: 10
  },
  txtSearch: {
    color: CorCinzaIcon,
    fontSize: 15,
    marginLeft: 10
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
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    paddingLeft: 15,
    paddingRight: 20,
    padding: 10,
    marginTop: 10
  },
  txtLogo: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  Icone: {
    height: 40,
    width: 40
  },
  containerCategorias: {
    height: 40,
    width: width,
    flexDirection: 'row'
  },
  botaoCategoria: {
    height: '85%',
    marginRight: 10,
    backgroundColor: CorCinzaContainer,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtCategoria: {
    margin: 5,
    marginLeft: 20,
    marginRight: 20
  },
  paddFlatlist: {
    paddingHorizontal: 12
  },
  Grid: { 
    width: '50%',
    marginRight: 1,
    marginBottom: 1,
  },
  ImgGrid: {
    height: 220,
    width: '100%',
    marginRight: 1,
    marginBottom: .5,
  }
})


function Header({ ListCategorias }) {
  return (
    <View style={css.boxHeader}>
      <View style={css.containerLogo}>
        <Text style={css.txtLogo}>Loja</Text>
        <Image source={require('../../Imgs/boorkmarkloja.png')} style={[css.Icone, { position: 'absolute', right: 60 }]} />
        <Image source={require('../../Imgs/menuLoja.png')} style={[css.Icone, { position: 'absolute', right: 8 }]} />
      </View>
      <View style={css.containerSearch}>
        <Ionicons name='search' size={17} color={CorCinzaIcon} />
        <Text style={css.txtSearch}>Pesquisar</Text>
      </View>
      <View style={css.containerCategorias}>
        <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={css.paddFlatlist} horizontal data={ListCategorias} renderItem={({ item }) => <BarCategorias item={item} />} />
      </View>
    </View>
  )
}

function BarCategorias({ item }) {
  return (
    <TouchableOpacity style={css.botaoCategoria}>
      <Text style={css.txtCategoria}>{item}</Text>
    </TouchableOpacity>
  )
}

function Body({ dataProdutos }) {
  return (
    <FlatList numColumns={2} data={dataProdutos} renderItem={({ item }) => <CardImgProdutos Img={item} />} />
  )
}

function CardImgProdutos({ Img }) {
  return (
    <View style={css.Grid}>
      <TouchableOpacity>
        <Image
          style={css.ImgGrid}
          source={{ uri: Img }} />
      </TouchableOpacity>

    </View>
  )
}

export default function Loja() {
  const [categs, setCategs] = useState([
    'Lojas', 'Videos', 'Escolhas do editor', 'Coleções', 'Guias'
  ]);

  const [produtos, setProdutos] = useState([
    'https://www.promoview.com.br/images/2021/04/10/lil-nas-x.png',
    'https://s2.glbimg.com/pzxGWvvRRkNy6SdErZQFiu40_Ao=/0x0:695x398/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/t/y/0SI4EITciwAicVHv8VCg/uni-1-copia.jpg',
    'https://authenticfeet.vteximg.com.br/arquivos/ids/261206/categoria%20tênis%20320X600px.jpg?v=637915161883830000',
    'https://cf.shopee.com.br/file/e7f62caf988b01b4afdb99d7eac37e57',
    'https://s2.glbimg.com/NuF7SaATkE6-Pnms8PxNVxRW-p0=/0x0:845x1152/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Z/G/GKIE56Ql6Xy876j4nprw/camisa-prc-1-.jpg',
    'https://58532.cdn.simplo7.net/static/58532/sku/thumb_feminino-camisa-feminina-social-manga-longa-cetim-886--p-1657046974819.jpeg',
    'https://s2.glbimg.com/cd--yxSMsxVFI7c8C25bCjC4qzM=/0x0:695x431/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/E/5/POkfvKRzaURPEwLBAXXw/2015-03-13-fone-da-zingara-7.jpg'

  ])

  return (
    <SafeAreaView style={css.back}>
      <Header ListCategorias={categs} />
      <Body dataProdutos={produtos} />
    </SafeAreaView>
  );
}