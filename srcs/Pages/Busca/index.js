import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Dimensions, Text, FlatList, Image, TouchableOpacity } from 'react-native';
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
    height: 60,
    width: width,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  containerSearch: {
    backgroundColor: CorCinzaContainer,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    width: '90%',
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
  }
})


function Header() {
  return (
    <View style={css.boxHeader}>
      <View style={css.containerSearch}>
        <Ionicons name='search' size={17} color={CorCinzaIcon} />
        <Text style={css.txtSearch}>Pesquisar</Text>
      </View>
    </View>
  )
}

function Body({ data }) {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const { img } = item;

          return (
            <View style={css.Grid}>
              <TouchableOpacity>

                <Image
                  style={css.ImgGrid}
                  source={{ uri: img }} />
              </TouchableOpacity>

            </View>
          )
        }
        }
      />
    </View>
  )
}

export default function Busca() {

  const [imgs, setImags] = useState([
    { id: 1, img: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg' },
    { id: 2, img: 'https://s2.glbimg.com/Qgl26Ze8x7iJ1HoFwwRkwfjgGrM=/smart/e.glbimg.com/og/ed/f/original/2020/11/05/brasil-tem-duas-praias-entre-as-cinco-melhores-do-mundo.jpg' },
    { id: 3, img: 'https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/02/Melhores-Praias-do-Brasil-Capa.jpg' },
    { id: 4, img: 'https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2021__SL__10__SL__25__SL__05f03b23-c893-4438-9e0e-fc81ba1ad641.jpg._PROC_CP65.jpg' },
    { id: 5, img: 'https://portogente.com.br/images/2021/cursos-instagram-img6-novo.png' },
    { id: 6, img: 'https://coisadefotografa.com/wp-content/uploads/2021/06/como-postar-no-instagram-com-qualidade-maxima-isis-scaled.jpg' },
    { id: 7, img: 'https://instawload.com.br/img/baixar-videos-postagens-stories-instagram.jpg' },
    { id: 8, img: 'https://www.dlojavirtual.com/wp-content/uploads/2019/09/office-620822_1920.jpg' },
    { id: 9, img: 'https://mlabs-s3-blog.s3.amazonaws.com/wp-content/uploads/2017/06/18115027/tamanho-imagens-facebook-redes-sociais-capa.jpg' },
    { id: 10, img: 'https://www.olivetreefilmes.com.br/wp-content/uploads/2022/07/tamanho-de-imagens-e-videos-no-instagram.jpg' },
    { id: 11, img: 'https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg' },
    { id: 12, img: 'https://www.inpixio.com/remove-background/images/main-before.jpg' },
    { id: 13, img: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg' },
    { id: 14, img: 'https://s2.glbimg.com/Qgl26Ze8x7iJ1HoFwwRkwfjgGrM=/smart/e.glbimg.com/og/ed/f/original/2020/11/05/brasil-tem-duas-praias-entre-as-cinco-melhores-do-mundo.jpg' },
    { id: 15, img: 'https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/02/Melhores-Praias-do-Brasil-Capa.jpg' },
    { id: 16, img: 'https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2021__SL__10__SL__25__SL__05f03b23-c893-4438-9e0e-fc81ba1ad641.jpg._PROC_CP65.jpg' },
    { id: 17, img: 'https://portogente.com.br/images/2021/cursos-instagram-img6-novo.png' },
    { id: 18, img: 'https://coisadefotografa.com/wp-content/uploads/2021/06/como-postar-no-instagram-com-qualidade-maxima-isis-scaled.jpg' },
    { id: 19, img: 'https://instawload.com.br/img/baixar-videos-postagens-stories-instagram.jpg' },
    { id: 20, img: 'https://www.dlojavirtual.com/wp-content/uploads/2019/09/office-620822_1920.jpg' },
    { id: 21, img: 'https://mlabs-s3-blog.s3.amazonaws.com/wp-content/uploads/2017/06/18115027/tamanho-imagens-facebook-redes-sociais-capa.jpg' },
    { id: 22, img: 'https://www.olivetreefilmes.com.br/wp-content/uploads/2022/07/tamanho-de-imagens-e-videos-no-instagram.jpg' },
    { id: 23, img: 'https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg' },
    { id: 24, img: 'https://www.inpixio.com/remove-background/images/main-before.jpg' },
  ]);

  return (
    <SafeAreaView style={css.back}>
      <Header />
      <Body data={imgs} />
    </SafeAreaView>
  );
}