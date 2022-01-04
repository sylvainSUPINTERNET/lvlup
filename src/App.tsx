import React, { useState, useEffect } from 'react';
import { IItem } from './api/interfaces/extra/Item';
import { IQuest } from './api/interfaces/Quest';
import { Header } from './components/menu/header';
import logo from './logo.svg';
import { getColorForTier } from './utils/utils';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { getEmotions, getMedias } from './api/medias/media.api';
import { WsMedia } from './api/interfaces/media/WsMedia';
import { iconsMedia } from './utils/iconLoader';
// import './App.css';

function App() {

  const [news, setNews] = useState<IQuest[]>([]);

  let [latestNews, setLatestNews] = useState<WsMedia[]>([]);

  let [mediasTarget, setMediaTarget] = useState<string[]>([]);


  /**
   * {
   *  "mediaX": [ wsMedia, wsMedia ...]
   * }
   */
  let [latestNewsV2, setLatestNewsV2] = useState<any>({});

  const connectionHub =  ():void => {
    const connection = new HubConnectionBuilder().withUrl('https://localhost:5001/hub').withAutomaticReconnect().build();

    connection.on("Notify", async (data:any) => {
      let stream = Object.keys(data);
      
      data[stream[0]].slice(0,3).map( async (entry:any) => {
        latestNews = [entry, ...latestNews];

        if ( !latestNewsV2[entry.name] ) {
          latestNewsV2[entry.name] = []
          latestNewsV2[entry.name].push(entry)
        } else {
             if ( latestNewsV2[entry.name].length < 5 ) {
              latestNewsV2[entry.name].push(entry);
             }  
        }
      });
      
      let {message} = await getEmotions(latestNewsV2);

      setLatestNewsV2(message);      
      console.log(message);
    });

    connection.start().then( () => console.log("STARTED WS HUB") /*connection.invoke("send", "Hello")*/)
  }

  const getMediasApi = async () => {
      let {message} = await getMedias();
      console.log(message);
      mediasTarget = (message as string[]);
      setMediaTarget(mediasTarget);
      return message;
  }

  useEffect( () => {
    getMediasApi();
    connectionHub();
    console.log("USE EFFECT");


    // https://medium.com/swlh/creating-a-simple-real-time-chat-with-net-core-reactjs-and-signalr-6367dcadd2c6

    // const socket = new WebSocket('ws://localhost:5000');
    // const newConnection = new HubConnectionBuilder()
    // .withUrl('https://localhost:5001/hub')
    // .withAutomaticReconnect()
    // .build();

    // if ( newConnection ) {
    //   newConnection.start().then( (connection:any) => {
    //     connection.on('ReceiveMessage', (message:any) => { 
    //       console.log(message);
    //     });
    //   })
     
    // }

    // try {
    //   let ws = new WebSocket("ws://localhost:5000/WeatherForecast/ws");
    // } catch ( e ) {
    //   console.log(e)
    // }


  //   // TODO : MOCK
  //   setNews([{
  //     "id": "mongoID1234",
  //     "title": "Hello world quest 1",
  //     "tier": "uncommon",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "rare",
  //       "name": "Very long sword",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg"
  //     }
  //   },
  //   {
  //     "id": "mongoID1234",
  //     "title": "Find a gf kekw",
  //     "tier": "legendary",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "legendary",
  //       "name": "Your GF",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
  //     }
  //   },
  //   {
  //     "id": "mongoID1234",
  //     "title": "Find a gf kekw",
  //     "tier": "legendary",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "legendary",
  //       "name": "Your GF",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
  //     }
  //   },
  //   {
  //     "id": "mongoID1234",
  //     "title": "Find a gf kekw",
  //     "tier": "legendary",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "legendary",
  //       "name": "Your GF",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
  //     }
  //   },
  //   {
  //     "id": "mongoID1234",
  //     "title": "Find a gf kekw",
  //     "tier": "legendary",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "legendary",
  //       "name": "Your GF",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
  //     }
  //   },
  //   {
  //     "id": "mongoID1234",
  //     "title": "Find a gf kekw",
  //     "tier": "legendary",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "legendary",
  //       "name": "Your GF",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
  //     }
  //   },
  //   {
  //     "id": "mongoID1234",
  //     "title": "Find a gf kekw",
  //     "tier": "legendary",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "legendary",
  //       "name": "Your GF",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
  //     }
  //   },
  //   {
  //     "id": "mongoID1234",
  //     "title": "Find a gf kekw",
  //     "tier": "legendary",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "legendary",
  //       "name": "Your GF",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
  //     }
  //   },
  //   {
  //     "id": "mongoID1234",
  //     "title": "Find a gf kekw",
  //     "tier": "legendary",
  //     "reward" : {
  //       "id": "mongoIDTem1234",
  //       "tier": "legendary",
  //       "name": "Your GF",
  //       "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
  //     }
  //   },
  // ])

  }, [latestNewsV2]);


  // let DisplayNews = ({news}: {news:IQuest[]}) => {
  //   return <div>
  //     {
  //       news.map( (quest:IQuest) => {
  //         return <div className="flex mt-5"> {`>`} <span className="ml-2 mr-2" style={{"color": getColorForTier(quest)}}>[{quest.title}]</span>
  //           accomplished by XXXX and get reward
  //           {
  //             quest.reward && <div className="ml-5" style={{"color": getColorForTier(quest.reward as IItem)}}>
  //                 [{quest.reward.name}]
  //                 <img src={quest.reward.media} className="rounded ml-1" style={{"border": `1mm solid ${getColorForTier(quest.reward as IItem)}` }}></img>
  //               </div>
  //           }
  //         </div>
  //       })
  //     }
  //   </div>
  // }



  const renderEmotion = (emotionEngNameKey:string) => {
    if ( emotionEngNameKey === "Fear" ) {
      return "😱"
    }

    if ( emotionEngNameKey === "Angry" ) {
      return "😡"
    }

    if ( emotionEngNameKey === "Surprise") {
      return "😲"
    }

    if ( emotionEngNameKey === "Happy" ) {
      return "😍";
    }

    if ( emotionEngNameKey === "Sad" ) {
      return "😭";
    }
  }





  return (
    <div>
      <Header/>
      <div className="md:container md:mx-auto p-4">
        <div className="text-center">
          <code className="font-bold">Analyse des émotions par ML</code>
        </div>
        {/* <h2 className="text-center">Source médiatique - <span className="font-bold">Youtube</span> (chaînes officiels) : { mediasTarget && mediasTarget.length > 0 && mediasTarget.map( mediaName => {
          return <span className="m-3 font-bold	">{mediaName}</span>
        })} </h2> */}
        <div className="mt-5 flex justify-center space-x-40">
          <div className="rounded-lg p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-5">
            <ul>
              {
                latestNewsV2 && Object.keys(latestNewsV2).length > 0 && Object.keys(latestNewsV2).map( (key:string) => {
                  return (
                    <div className="">
                      {
                        latestNewsV2[key] && latestNewsV2[key].length > 0 && latestNewsV2[key].map((news:WsMedia) => { return <li className="mb-5">
                        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news.title}</h5>
                                <div className="">
                                  <p className="font-bold justify-end flex mt-5 mb-3">{news.publishedAt}</p>
                                </div>
                            </a>

                            <p className="text-justify">
                              <h3 className="text-bold mt-3 mb-1">Description Youtube</h3>
                              {news["description"]}
                            </p>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-bold mt-5">Emotions analysées</p>
                            <ul className="flex space-x-5">
                              <p> {renderEmotion("Fear")} {news["emotions"]["Fear"]} / 1</p>
                              <p>{renderEmotion("Sad")} {news["emotions"]["Sad"]} / 1</p>
                              <p>{renderEmotion("Happy")} {news["emotions"]["Happy"]} / 1</p>
                              <p>{renderEmotion("Surprise")} {news["emotions"]["Surprise"]} / 1</p>
                            </ul>

                            <div className="mt-5 flex justify-end">
                              <div className="m-2">
                                <img src={iconsMedia[news.name.toLowerCase()]} className="object-scale-down h-24 w-24"/>
                                {/* Source : <span className="text-bold">{iconsMedia[news.name.toLowerCase()]}</span> */}
                              </div>
                            </div>
                        </div>
                      </li>
                        })
                      }
                    </div>
                  )
                })
              }
            </ul>
          </div>

          {/* <div className="rounded-lg bg-red-600 p-5">
            <ul>
              <li>
                <div>
                  <p>card</p>
                </div>
              </li>
            </ul>
          </div> */}

        </div>
        
      </div>
      {/* <div className="w-60 h-24 border-2 rounded-md mx-auto mt-20 flex">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full ">
          </div>
              <div className="flex flex-col space-y-3">
              <div className="w-36 bg-gray-300 h-6 rounded-md ">
              </div>
              <div className="w-24 bg-gray-300 h-6 rounded-md ">
              </div>
          </div>
        </div>

        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full ">
          </div>
              <div className="flex flex-col space-y-3">
              <div className="w-36 bg-gray-300 h-6 rounded-md ">
              </div>
              <div className="w-24 bg-gray-300 h-6 rounded-md ">
              </div>
          </div>
        </div>
    </div> */}

    </div>
  );
}

export default App;
