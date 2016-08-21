function reducer(state, action) {
  switch(action.type){
    case "GETTVALUE":
      return {
        value : action.value
      };
  }
  return {value:""};
}

module.exports = reducer;
