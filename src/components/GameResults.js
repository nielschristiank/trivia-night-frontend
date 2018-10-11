import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AuthService from '../services';
import { shuffle, replaceUnicode } from '../helper_functions/helper-functions.js';
import '../pages/Game.css';
import './GameCard.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008000",
    },
  },
});

class GameResults extends Component {
  constructor(props){
    super(props)
    this.Auth = new AuthService();
  }

  render(){

    let { questions, counter, answered_questions, answers_order, score} = this.props;
    //Created a bunch of snarky comments to be displayed to player after the game ends, based on their score.
    let messages = ["Are you cereal? You couldn't even get one right?", "Hey, it's OK. I forgot everything I learned in college too.", "A calculator could do better than you.", "Good job!", "Better than Dwight's free throw percentage I guess...", "Don't quit your day job, pal.", "That's perfect, Average Joe!", "Wow. Just... like... Wow.", "Were you blowing compressed air at your face?", "Congratulations! You know how to use Google."]
    let final_score = score/questions.length*100
    let message = ''
    if (final_score === 0){
      message = messages[0]
    } else if (final_score>0 && final_score<=20) {
      message = messages[1]
    } else if (final_score>20 && final_score<=30) {
      message = messages[2]
    } else if (final_score>30 && final_score<=40) {
      message = messages[3]
    } else if (final_score>40 && final_score<=50) {
      message = messages[4]
    } else if (final_score>50 && final_score<=60) {
      message = messages[5]
    } else if (final_score>60 && final_score<=70) {
      message = messages[6]
    } else if (final_score>70 && final_score<=89) {
      message = messages[7]
    } else if (final_score>89 && final_score<100) {
      message = messages[8]
    } else if (final_score===100) {
      message = messages[9]
    }

    {/*Create an array that contains Result objects for each question. Each result object will contain the question text, the correct answer for that question, and the player's actual answer.*/}
    let results = [];
    for (var i = 0; i < questions.length; i++) {
      results.push({question:'',correct:'',players:''})
    }
    {/*Updating each results object to receive the actual data contained in this.props*/}
    results.forEach((val,i)=>{
      val.question = questions[i].question
      val.correct = questions[i].correct_answer
      val.players = answered_questions[i].players_answer
    })

    {/*Used .map to clean up result objects as well as turn them into Cards to be rendered*/}
    let resultCards = results.map((val,i) => {
      val.question = replaceUnicode(val.question);
      val.correct = replaceUnicode(val.correct);
      val.players = replaceUnicode(val.players);
      return (
        <Card>
          <CardContent>
            Question: {val.question}
          </CardContent>
          <CardContent>
            Correct Answer: {val.correct}
          </CardContent>
          <CardContent>
            Your Answer: {val.players}
          </CardContent>
        </Card>
      )
    })

    if(this.Auth.loggedIn()){
      return (
        <Card >
          <CardContent color="primary">
            <h1 color="primary">{message}</h1>
            <h2 color="primary">Score: {final_score}%</h2>
            <Button color="primary" href='/selectgame'>Play Again</Button>
            <Button color="primary" href='/dashboard'>View Game History</Button>
          </CardContent>
          <CardContent>
            {resultCards}
          </CardContent>
        </Card>
      )
    } else { //If guest, show end page with results, do not save history.
      return (
        <Card >
          <CardContent color="primary">
            <h1 color="primary">{message}</h1>
            <h2 color="primary">Score: {final_score}%</h2>
            <Button color="primary" href='/selectgame'>Play Again</Button>
            <Button color="primary" href='/register'>Register here to save your scores!</Button>
          </CardContent>
          <CardContent>
            {resultCards}
          </CardContent>
        </Card>
      )
    }
  }
}
export default GameResults;