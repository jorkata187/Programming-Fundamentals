function towns(arr) {
    for (let town of arr) {
        let [townName, latitude, longitude] = town.split(' | ');
         
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObj = { town: townName, latitude: latitude, longitude: longitude }
        console.log(townObj);
    }
}

towns([
    'Sofia | 42.7654 | 23.8534',
    'Plovdiv | 76.98765 | 36.854'
])