const BASE = "http://localhost:3000";

let createGameHistory = function(game_history){
  console.log("in create game history", game_history, game_history.user_id);
  return fetch(BASE + "/users/" + game_history.user_id + "/game_histories", {
    method: 'POST',
    body: JSON.stringify({
      game_history: game_history
    }),
    headers: {
      'Content-Type':'application/json',
      'Accept': 'application/json',
    },
  })
  .then(res => {
    console.log(res);
    res = res.json();
    console.log(res);
    return res;
  }).catch(err => {
      console.log(err);
      return err;
  })
}

export {
  createGameHistory,
}