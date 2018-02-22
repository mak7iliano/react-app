import axios from "axios";

export function itemsFetchDataSuccessList(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS_LIST',
        items,
    };
}

export function itemsFetchDataSuccessUser(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS_USER',
        items,
    };
}

export function itemsFetchData(url, id) {
    if (id) {
        url = url +'/'+id+'/';
        return (dispatch) => {
            axios.get(url)
                .then((result) => dispatch(itemsFetchDataSuccessUser(result.data)));
        };
    } else {

        return (dispatch) => {
            axios.get(url)
                .then((result) => dispatch(itemsFetchDataSuccessList(result.data)));
        };
    }
}