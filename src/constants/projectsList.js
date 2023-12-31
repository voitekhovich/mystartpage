import howToLearnImg from "@images/data/How To Learn.png";
import mestoImg from "@images/data/Mesto.png";
import russianTravelImg from "@images/data/Russian Travel.png";
import starWarsImg from "@images/data/Star Wars.png";
import moviesImg from "@images/data/Movies.png";

export const projectsList = [
  {
    name: "Star Wars",
    projectName: "react-star-wars",
    link: "https://starwars.avcode.ru/",
    description: "Frontend проект для API сервиса https://swapi.dev/",
    gitHub: "https://github.com/voitekhovich/react-star-wars",
    video: "",
    image: starWarsImg,
    active: true
  },
  {
    name: "Movies Explorer",
    projectName: "movies-explorer-frontend",
    link: "https://movies.avcode.ru/",
    description: "Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.",
    gitHub: "https://github.com/voitekhovich/movies-explorer-frontend",
    video: "https://user-images.githubusercontent.com/30049720/228648047-0b5c3594-a0c4-4466-b7a8-fadeb4d0894a.mp4",
    image: moviesImg,
    active: false
  },
  {
    name: "Mesto",
    projectName: "mesto",
    link: "https://mesto.avcode.ru/",
    description: "Сервис Mesto: интерактивная страница, куда можно добавлять фотографии, удалять их, ставить лайки и редактировать профиль.",
    gitHub: "https://github.com/voitekhovich/mesto",
    video: "https://user-images.githubusercontent.com/30049720/221412047-47975354-4a56-4716-a226-a94c87c353bc.mp4",
    image: mestoImg,
    active: true
  },
  {
    name: "Путешествие по России",
    projectName: "russian-travel",
    link: "https://rutravel.avcode.ru/",
    description: 'Учебный проект Яндекс.Практикум по курсу "Адаптивная вёрстка и работа с макетом".',
    gitHub: "https://github.com/voitekhovich/russian-travel",
    video: "https://user-images.githubusercontent.com/30049720/221410832-b41150a9-6787-4e27-b6c2-f6200047e418.mp4",
    image: russianTravelImg,
    active: true
  },
  {
    name: "Научиться учиться",
    projectName: "how-to-learn",
    link: "https://howtolearn.avcode.ru/",
    description: 'Учебный проект Яндекс.Практикум по курсу "Расширенные возможности HTML и CSS".',
    gitHub: "https://github.com/voitekhovich/how-to-learn",
    video: "https://user-images.githubusercontent.com/30049720/221370596-5d9565f0-2671-4a89-ad47-af7beaf5a319.mp4",
    image: howToLearnImg,
    active: true
  }
]