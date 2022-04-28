function distanceFromHqInBlocks(street) {
    if(street > 42) {
        return street - 42;
    } else {
        return 42 - street;
    }
}
function distanceFromHqInFeet(street) {
    if(street > 42) {
        let blocks= street - 42;
        return blocks * 264
    } else if (street < 42) {
        let blocks= 42 - street;
        return blocks * 264;
    }
}
function distanceTravelledInFeet(start, destination) {
    if(start > destination) {
        let blocks= start - destination;
        return blocks * 264
    } else if (start < destination) {
        let blocks= destination - start;
        return blocks * 264
    }
}
function calculatesFarePrice(start, destination) {
    const distance= distanceTravelledInFeet(start, destination);
    const dis= distance- 400;
    if(distance < 400) {
        return 0;
    } else if (distance> 400 && distance < 2000) {
        return dis * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}