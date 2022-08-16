import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, Image, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('screen');
import { LinearGradient } from 'expo-linear-gradient';

const PretoFosco = '#424242';

const css = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight
    },

    boxHeader: {
        height: 50,
        width: width,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 20,
    },
    boxLeft: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center'
    },
    styleImg: {
        width: 120,
        height: '100%',
        marginRight: 5
    },
    boxRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    margLeft: {
        marginLeft: 20
    },
    margRight: {
        marginRight: 17,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80
    },
    rotateTop: {
        transform: [{ rotate: '-30deg' }],
        marginTop: -10
    },

    containerStorys: {
        height: 120,
        width: width,
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20
    },

    userStory: {
        height: 65,
        width: 65,
        borderRadius: 65
    },

    txtStorys: {
        color: '#5c5c5c',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10
    },

    iconAdd: {
        position: 'absolute',
        bottom: 25,
        right: 8,
        height: 32,
        width: 32,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 2
    },

    paddingHorizontal: {
        paddingHorizontal: 10,
    },

    bordaColorida: {
        height: 70,
        width: 70,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bordaBrancaRedonda: {
        borderWidth: 2,
        borderColor: 'white'
    },

    centerItem: {
        alignItems: 'center',
    },

    BoxImgPostagem: {
        width: width,
    },

    headerPostagem: {
        height: 55,
        width: width,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        paddingLeft: 10
    },

    ImgUserPostagem: {
        height: 35,
        width: 35,
        borderRadius: 35,
    },

    txtUserNome: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 10
    },

    iconPostagem: {
        position: 'absolute',
        right: 20
    },

    ImagePostagem: {
        width: width,
        height: 300,
        marginBottom: 10
    },

    BoxBotoes: {
        height: 50,
        width: width,
        flexDirection: 'row',
    },

    margLeftRight: {
        marginLeft: 11,
        marginRight: 15
    },

    BoxFooter: {

        width: width,
        paddingLeft: 5
    },

    BoxDescricao: {
        flexDirection: 'row',
        width: width,
        paddingRight: 15
    },

    txtDesc: {
        width: '75%'
    },
    BoxAddComentarios: {
        paddingLeft: 10,
        marginTop: 15,
        marginBottom: 10
    },

    left10: {
        marginLeft: 10,
    },

    AvatarImgUser: {
        height: 25,
        width: 25,
        borderRadius: 25
    },

    styleTxtComent: {
        marginLeft: 15,
        color: '#424242'
    },

    icons: {
        height: 20,
        width: 20,
        position: 'absolute',
    },

    boxOne: {
        flexDirection: 'row',
        width: width
    },

    boxTwo: {
        flexDirection: 'row',
        marginTop: 10
    },

    txtRodapé: {
        fontSize: 12,
        marginLeft: 1,
        marginTop: 5,
        color: PretoFosco
    },

    iconBook: {
        position: 'absolute',
        right: 20
    }
});


function Header() {
    return (
        <View style={css.boxHeader}>
            <View style={css.boxLeft}>
                <Image
                    resizeMode='contain'
                    source={require('../../Imgs/logoInsta.png')}
                    style={css.styleImg}
                />
                <Icon
                    name='chevron-down-outline'
                    size={18}
                    color={'black'}
                />
            </View>

            <View style={css.boxRight}>
                <Icon
                    name='add-circle-outline'
                    size={25}
                    color={'black'}
                />

                <Icon
                    style={css.margLeft}
                    name='heart-outline'
                    size={25}
                    color={'black'}
                />

                <Icon
                    style={[css.rotateTop, css.margLeft]}
                    name='send-outline'
                    size={23}
                    color={'black'}
                />
            </View>
        </View>
    )
}

function Storys({ user, story }) {
    const { key, imgUser, nomeUser } = user;
    return (
        <View style={[css.containerStorys, css.centerItem]}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                <BoxLeft Imagem={imgUser} Nome={nomeUser} />
                <BoxRight dataStorys={story} />
            </ScrollView>
        </View>
    )
}

function BoxLeft({ Imagem, Nome }) {
    return (
        <TouchableOpacity onPress={() => alert('CRIAR STORY')} style={css.centerItem}>
            <Image
                source={{ uri: Imagem }}
                style={[css.userStory, { marginRight: 13, marginTop: 2 }]}
            />
            <View style={css.iconAdd}>
                <Icon name='add-circle' size={30} color={'#4e6eff'} />
            </View>
            <Text style={[css.txtStorys, { marginTop: 13 }]}>{Nome}</Text>
        </TouchableOpacity>
    )
}

function BoxRight({ dataStorys }) {
    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={css.paddingHorizontal}
                horizontal
                data={dataStorys}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {

                    const { id, nome, img } = item;

                    return (
                        <TouchableOpacity onPress={() => alert('ABRE STORYS')} style={css.margRight}>
                            <BordaColorida variacao={css.bordaColorida}>
                                <Image
                                    resizeMode='cover'
                                    source={{ uri: img }}
                                    style={[css.userStory, css.bordaBrancaRedonda]}
                                />
                            </BordaColorida>
                            <Text style={css.txtStorys}>{nome}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

function BoxBody({ Postagens, valorLike, postagemLiked, acaoLike, user, story }) {

    return (
        <View style={css.centerItem}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <Storys user={user} story={story} />}
                data={Postagens}
                keyExtractor={item => item.idPostagem}
                renderItem={({ item }) => {
                    const { idPostagem, haveStory, ImgUser, NomeUser, ImgPostagem, DescPostagem, HorarioPostagem, curtidoPor } = item;
                    return (
                        <View style={[css.centerItem]}>
                            <View style={css.headerPostagem}>
                                {haveStory ?
                                    <Pressable onPress={() => alert('Abre story')}>
                                        <BordaColorida variacao={[css.bordaColorida, { height: 39, width: 39, borderRadius: 39 }]}>
                                            <Image source={{ uri: ImgUser }} style={[css.ImgUserPostagem, css.bordaBrancaRedonda]} />
                                        </BordaColorida>
                                    </Pressable>
                                    :
                                    <Pressable onPress={() => alert('Abre story')}>
                                        <Image source={{ uri: ImgUser }} style={[css.ImgUserPostagem, { marginLeft: 4 }]} />
                                    </Pressable>
                                }
                                <Text style={css.txtUserNome}>{NomeUser}</Text>
                                <Icon onPress={() => alert('ABRE CONFIGURAÇÕES')} style={css.iconPostagem} name='ellipsis-horizontal' size={20} color={'black'} />
                            </View>
                            <View style={css.BoxImgPostagem}>
                                <Image resizeMode='cover' style={css.ImagePostagem} source={{ uri: ImgPostagem }} />
                            </View>
                            <View style={css.BoxBotoes}>
                                {postagemLiked == idPostagem ?
                                    <Icon onPress={() => acaoLike(idPostagem)} style={css.margLeftRight} name={'heart'} size={28} color={'red'} />
                                    :
                                    <Icon onPress={() => acaoLike(idPostagem)} style={css.margLeftRight} name={'heart-outline'} size={28} color={'black'} />

                                }
                                <Icon style={{ marginRight: 15 }} name='chatbubble-outline' size={26} color={'black'} />
                                <Icon style={[css.rotateTop, css.margLeftRight, { marginTop: -5 }]} name='send-outline' size={25} color={'black'} />
                                <Icon style={css.iconBook} name='bookmark-outline' size={26} color={'black'} />
                            </View>
                            <View style={css.BoxFooter}>
                                {curtidoPor == null ? null :
                                    <View style={css.left10}>
                                        <Text>Curtido por {curtidoPor}</Text>
                                    </View>

                                }

                                <View style={css.BoxDescricao}>
                                    <Text style={css.txtUserNome}>{NomeUser} </Text>
                                    <Text numberOfLines={1} style={css.txtDesc}>{DescPostagem}</Text>
                                </View>
                                <View style={css.BoxAddComentarios}>
                                    <View style={css.boxOne}>
                                        <Image
                                            source={{ uri: ImgUser }}
                                            style={css.AvatarImgUser}
                                        />
                                        <Text
                                            style={css.styleTxtComent}>Adicione um comentário...</Text>

                                        <Image
                                            source={{
                                                uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/heavy-black-heart_2764.png'
                                            }}
                                            style={[css.icons, { right: 85 }]}
                                        />
                                        <Image
                                            source={{
                                                uri: 'https://emojitool.com/img/whatsapp/2.19.352/raising-hands-300.png'
                                            }}
                                            style={[css.icons, { right: 55 }]}
                                        />

                                        <Icon style={[css.icons, { right: 25 }]} name='add-circle-outline' size={18} color={PretoFosco} />
                                    </View>
                                    <View style={css.boxTwo}>
                                        <Text style={css.txtRodapé}>{HorarioPostagem}</Text>
                                        <Text style={[css.txtRodapé, { fontWeight: '700' }]}> - Ver tradução</Text>
                                    </View>


                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

function Divisor() {
    return (
        <View
            style={{
                height: 1,
                width: width,
                backgroundColor: '#eeeeee'
            }}
        />
    )
}

function BordaColorida({ children, variacao }) {
    return (
        <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={['#f8c610', '#dd18ba']}
            style={variacao}>
            {children}
        </LinearGradient>
    )
}


export default function Home() {
    const [userData, setUserData] = useState({
        key: 1, nomeUser: 'Seus story', imgUser: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'
    });

    const [dataStorys, setDataStorys] = useState([
        { id: 1, nome: 'Luciana', img: 'https://portal-assets.icnetworks.org/uploads/picture/file/104874/resized_045.DomingasPerson_Oc.Person_IC_FotoAndreSeiti3.jpg' },
        { id: 2, nome: 'Fernando', img: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg' },
        { id: 3, nome: 'Julia', img: 'https://revistatudo.com.br/wp-content/uploads/2020/08/Crédito-da-foto-Gustavo-Arrais_Marina_Person_02-12-2015_3887.jpg' },
        { id: 4, nome: 'Henquire', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg' },
        { id: 5, nome: 'Paulo', img: 'https://i.guim.co.uk/img/media/48cb9586d9dd5c15b1ff15873e066d2977cb4482/66_0_1916_1150/master/1916.jpg?width=1200&quality=85&auto=format&fit=max&s=a9828149a206b076be6df36a8ce2e436' },
        { id: 6, nome: 'Maria', img: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg' },
        { id: 7, nome: 'Bill', img: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' },
        { id: 8, nome: 'Carlos', img: 'https://www.mind.org.uk/media-a/1283/mind-full-size-11.jpg?quality=70' },
        { id: 9, nome: 'Renata', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
        { id: 10, nome: 'Carlos', img: 'https://www.mind.org.uk/media-a/1283/mind-full-size-11.jpg?quality=70' },
        { id: 11, nome: 'Carlos', img: 'https://www.mind.org.uk/media-a/1283/mind-full-size-11.jpg?quality=70' },
    ])

    const [postagens, setPostagens] = useState([
        { idPostagem: 1, haveStory: true, ImgUser: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg', NomeUser: 'Fernando', ImgPostagem: 'https://s2.glbimg.com/Qgl26Ze8x7iJ1HoFwwRkwfjgGrM=/smart/e.glbimg.com/og/ed/f/original/2020/11/05/brasil-tem-duas-praias-entre-as-cinco-melhores-do-mundo.jpg', DescPostagem: 'Bela praia para está com a familia, muito sol , agua de coco, maravilha demais, bom final de semanas a todos e fiquem na paz de Deus', HorarioPostagem: 'Há 10 horas', curtidoPor: 'João Lima' },
        { idPostagem: 2, haveStory: true, ImgUser: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg', NomeUser: 'Maria', ImgPostagem: 'https://s2.glbimg.com/TLSi-Skh-SyW_zL3qXKaqas1NNA=/620x413/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg', DescPostagem: 'Tomando um belo café', HorarioPostagem: 'Há 2 horas', curtidoPor: 'Anderson Carlos' },
        { idPostagem: 3, haveStory: true, ImgUser: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg', NomeUser: 'Fernando', ImgPostagem: 'https://s2.glbimg.com/Qgl26Ze8x7iJ1HoFwwRkwfjgGrM=/smart/e.glbimg.com/og/ed/f/original/2020/11/05/brasil-tem-duas-praias-entre-as-cinco-melhores-do-mundo.jpg', DescPostagem: 'Bela praia para está com a familia', HorarioPostagem: 'Há 10 horas', curtidoPor: 'Jean Matos' },
        { idPostagem: 4, haveStory: false, ImgUser: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg', NomeUser: 'Maria', ImgPostagem: 'https://s2.glbimg.com/TLSi-Skh-SyW_zL3qXKaqas1NNA=/620x413/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg', DescPostagem: 'Tomando um belo café, depois daquele almoço top', HorarioPostagem: 'Há 2 horas' },
        { idPostagem: 5, haveStory: true, ImgUser: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg', NomeUser: 'Fernando', ImgPostagem: 'https://s2.glbimg.com/Qgl26Ze8x7iJ1HoFwwRkwfjgGrM=/smart/e.glbimg.com/og/ed/f/original/2020/11/05/brasil-tem-duas-praias-entre-as-cinco-melhores-do-mundo.jpg', DescPostagem: 'Bela praia para está com a familia', HorarioPostagem: 'Há 10 horas' },
        { idPostagem: 6, haveStory: false, ImgUser: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg', NomeUser: 'Maria', ImgPostagem: 'https://s2.glbimg.com/TLSi-Skh-SyW_zL3qXKaqas1NNA=/620x413/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg', DescPostagem: 'Tomando um belo café, depois daquele almoço top', HorarioPostagem: 'Há 2 horas' },

    ])

    const [like, setLike] = useState(false);
    const [postLikado, setPostLikado] = useState(null);

    const handlerLike = (data) => {

        if (like) {
            setLike(false)
            setPostLikado(data)
        } else {
            setLike(true)
            setPostLikado(data)
        }
    }

    return (
        <SafeAreaView style={css.back}>
            <Header />
            <BoxBody Postagens={postagens} acaoLike={handlerLike} valorLike={like} postagemLiked={postLikado} user={userData} story={dataStorys} />
        </SafeAreaView>
    );
}