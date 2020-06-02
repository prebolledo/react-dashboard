const ventanMes = (sendData, error) => {
    fetch(process.env.REACT_APP_MS_VENTAS)
    .then(response => response.json())
    .then(json => sendData(json.ventas))
    .catch(e => error(e));
};

export {
    ventanMes,
};

