export const increaseMovie = (count) => {
    return (dispatch) => {
        dispatch({
            type: "INCREASE",
            payload: count,
        })
    }
}

export const decreaseMovie = (count) => {
    return (dispatch) => {
        dispatch({
            type: "DECREASE",
            payload: count,
        })
    }
}