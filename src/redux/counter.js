const counterReducer = (state = [], action) => {
    const {payload: idx} = action
    switch(action.type){
        case 'increment':            
            state[idx].score += 1
            return  [...state].sort(sortByScore)
        case 'decrement':
            state[idx].score -= 1
            return  [...state].sort(sortByScore)
        default: 
            return state;    
    }
}

const sortByScore = (a , b) => {
    return b.score - a.score
}



export default counterReducer;