import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { classicModeFetch, triviaFetch } from '../api/trivia-api.js'
import GameCard from '../components/GameCard';
import Timer from '../components/timer.js'
import { shuffle, replaceUnicode } from '../helper_functions/helper-functions.js';
import AuthService from '../services';
import { createGameHistory } from '../api/game-history-api';
import Game from './Game';

const CATEGORIES = {
  "0": "Random",
  "9": "General Knowledge",
  "10": "Entertainment: Books",
  "11": "Entertainment: Film",
  "12": "Entertainment: Music",
  "13": "Entertainment: Musicals & Theatres",
  "14": "Entertainment: Television",
  "15": "Entertainment: Video Games",
  "16": "Entertainment: Board Games",
  "17": "Science & Nature",
  "18": "Science: Computers",
  "19": "Science: Mathematics",
  "20": "Mythology",
  "21": "Sports",
  "22": "Geography",
  "23": "History",
  "24": "Politics",
  "25": "Art",
  "26": "Celebrities",
  "27": "Animals",
  "28": "Vehicles",
  "29": "Entertainment: Comics",
  "30": "Science: Gadgets",
  "31": "Entertainment: Japanese Anime & Manga",
  "32": "Entertainment: Cartoon & Animations",
}

// const CATEGORIES = {
//   "General Knowledge": "9",
//   "Entertainment: Books": "10",
//   "Entertainment: Film": "11",
//   "Entertainment: Music": "12",
//   "Entertainment: Musicals & Theatres": "13",
//   "Entertainment: Television": "14",
//   "Entertainment: Video Games": "15",
//   "Entertainment: Board Games": "16",
//   "Science & Nature": "17",
//   "Science: Computers": "18",
//   "Science: Mathematics": "19",
//   "Mythology": "20",
//   "Sports": "21",
//   "Geography": "22",
//   "History": "23",
//   "Politics": "24",
//   "Art": "25",
//   "Celebrities": "26",
//   "Animals": "27",
//   "Vehicles": "28",
//   "Entertainment: Comics": "29",
//   "Science: Gadgets": "30",
//   "Entertainment: Japanese Anime &amp; Manga": "31",
//   "Entertainment: Cartoon & Animations": "32",
// }


class GameModes extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: {}
    }
  }

  startGame(){
    let category = this.state.category;
    console.log(category);
    this.props.history.push({
      pathname: '/game',
      state: {
        num: 10,
        category: category,
        difficulty: ""
      }
    })
  }

  setCategory(categoryNum, categoryName){
    console.log(categoryNum);
    let category = { [categoryNum] : categoryName}
    this.setState({category: category})
  }

  render(){
    console.log(Object.entries(CATEGORIES));
    console.log("state in mode", this.state);
    let categories =  Object.entries(CATEGORIES).map((category, i) => {
      return (
        <Button variant="contained" color="primary" onClick={this.setCategory.bind(this, category[0], category[1])}>{category[1]}</Button>
      )
    })
    return (
      <div>
        {categories}
        <Button color="secondary" onClick={this.startGame.bind(this)}>Start Game</Button>
      </div>
    )
  }
}

export default GameModes;
