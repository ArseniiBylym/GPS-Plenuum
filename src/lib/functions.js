export const findZoneCenter = (pointsArr) => {
    console.log(pointsArr)
    let lat = null;
    let lng = null;

    for(let i = 0; i < pointsArr.length; i++) {
        console.log(pointsArr[i][0])
        console.log(pointsArr[i][1])
        lat += pointsArr[i][0];
        lng += pointsArr[i][1];
    }

    const point = {
        lat: lat / pointsArr.length,
        lng: lng / pointsArr.length,
    }
    
    return point
}