class Network {

  getData(callback) {

    let url = 'http://localhost:8080/getData';

    let myHeaders = new Headers();
    let myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

    fetch(url, myInit)
    .then((res) => res.json())
    .then((data) => {
      let headers = [];
      let content = [];

      for (let prop in data[0]) {
        if (prop !== '_id') {
          headers.push(data[0][prop])
        }
      }
      for (let i = 1; i < data.length; i++) {
        let user = [];
        for (let prop in data[i]) {
          if (prop !== '_id') {
            user.push(data[i][prop])
          }
        }
        content.push(user)
      }
      callback(headers, content)
    })
  }
}

export default Network;
