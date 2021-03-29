// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
} 
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
 selectingDrivers.slice(0,1)

 const createFareMultiplier = function (x){ 
     return function two(y){
        return (x * y)
     } 
    }
const fareDoubler = function fares(y){
    return (y * 2);
}
const fareTripler = function faresTwo(z){
    return (z * 3);
}
// const selectDifferentDrivers = function (fstDrivers,scdDrivers){
//     return scdDrivers(fstDrivers)
        
//     }
function selectDifferentDrivers(fstDrivers,scdDrivers){
    return scdDrivers(fstDrivers)
}

// function returnLastTwoDrivers(fstDrivers){
//         return fstDrivers.slice(0,2)
//         }
    


