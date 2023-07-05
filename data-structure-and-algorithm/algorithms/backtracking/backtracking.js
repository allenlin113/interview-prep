/* 
	State 
*/
const isValidState = (state) => {
    // Check if it is a valid solution
    return true;
};

const getCandidates = (state) => {
    return [];
};

const search = (state, solutions) => {
    if (isValidState(state)) {
        // solutions.push(state.copy); python
        // solutions.push([...state]); js
        // return
    }

    for (let candidate of getCandidates(state)) {
        // state.add(candidate);
        // search(state, solutions);
        // state.remove(candidate);
    }
};

const solve = () => {
    const solutions = [];
    const state = new Set();
    search(state, solutions);
    return solutions;
};
