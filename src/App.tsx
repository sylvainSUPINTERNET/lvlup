import React, { useState, useEffect } from 'react';
import { IItem } from './api/interfaces/extra/Item';
import { IQuest } from './api/interfaces/Quest';
import { Header } from './components/menu/header';
import logo from './logo.svg';
import { getColorForTier } from './utils/utils';
// import './App.css';

function App() {

  const [news, setNews] = useState<IQuest[]>([]);

  useEffect(() => {

    // TODO : MOCK
    setNews([{
      "id": "mongoID1234",
      "title": "Hello world quest 1",
      "tier": "uncommon",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "rare",
        "name": "Very long sword",
        "media": "https://wow.zamimg.com/images/wow/icons/large/classicon_warrior.jpg"
      }
    },
    {
      "id": "mongoID1234",
      "title": "Find a gf kekw",
      "tier": "legendary",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "legendary",
        "name": "Your GF",
        "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
      }
    },
    {
      "id": "mongoID1234",
      "title": "Find a gf kekw",
      "tier": "legendary",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "legendary",
        "name": "Your GF",
        "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
      }
    },
    {
      "id": "mongoID1234",
      "title": "Find a gf kekw",
      "tier": "legendary",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "legendary",
        "name": "Your GF",
        "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
      }
    },
    {
      "id": "mongoID1234",
      "title": "Find a gf kekw",
      "tier": "legendary",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "legendary",
        "name": "Your GF",
        "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
      }
    },
    {
      "id": "mongoID1234",
      "title": "Find a gf kekw",
      "tier": "legendary",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "legendary",
        "name": "Your GF",
        "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
      }
    },
    {
      "id": "mongoID1234",
      "title": "Find a gf kekw",
      "tier": "legendary",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "legendary",
        "name": "Your GF",
        "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
      }
    },
    {
      "id": "mongoID1234",
      "title": "Find a gf kekw",
      "tier": "legendary",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "legendary",
        "name": "Your GF",
        "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
      }
    },
    {
      "id": "mongoID1234",
      "title": "Find a gf kekw",
      "tier": "legendary",
      "reward" : {
        "id": "mongoIDTem1234",
        "tier": "legendary",
        "name": "Your GF",
        "media": "https://wow.zamimg.com/images/wow/icons/large/achievement_character_bloodelf_female.jpg"
      }
    },
  ])

  }, []);


  let DisplayNews = ({news}: {news:IQuest[]}) => {
    return <div>
      {
        news.map( (quest:IQuest) => {
          return <div className="flex mt-5"> {`>`} <span className="ml-2 mr-2" style={{"color": getColorForTier(quest)}}>[{quest.title}]</span>
            accomplished by XXXX and get reward
            {
              quest.reward && <div className="ml-5" style={{"color": getColorForTier(quest.reward as IItem)}}>
                  [{quest.reward.name}]
                  <img src={quest.reward.media} className="rounded ml-1" style={{"border": `1mm solid ${getColorForTier(quest.reward as IItem)}` }}></img>
                </div>
            }
          </div>
        })
      }
    </div>
  }

  return (
    <div>
      <Header/>

      <div className="text-center mt-40 mb-40 text-5xl">
        <p className="mb-5">Marre de procrastiner ?</p>
        <p>Faite de votre vie, un jeu vidéo !</p>
      </div>

      <div className="text-center mt-40 mb-40 text-5xl">
          Créer un compte + Ajouter vos quêtes + Accomplissez dans votre quotidien !
      </div>

      <div className="flex justify-center p-5">
        <div className="p-2">
          <ul>
            <div className="bg-black text-white shadow-lg rounded grow p-5 font-mono">
              <DisplayNews news={news}/>
            </div>
          </ul>
        </div>
        {/* <div className="p-2 flex-1">
          Créer votre quête
          <form>
            <input type="text" placeholder="nom"></input>
            <input type="text" placeholder="nom"></input>
            <input type="text" placeholder="nom"></input>
            <input type="text" placeholder="nom"></input>
            <input type="text" placeholder="nom"></input>
          </form>
        </div> */}
      </div>

    </div>
  );
}

export default App;
