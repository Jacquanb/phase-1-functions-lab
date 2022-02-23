// Code your solution in this file!


let hq = 42;

function distanceFromHqInBlocks(block){
   if (block > hq){
  return block - hq; }
   else {
    return hq - block;
  }  
} 

let feet = 264;

function distanceFromHqInFeet(block) {
  if (feet > distanceFromHqInBlocks(block)) {
    return distanceFromHqInBlocks(block) * feet;
  } else {
    return feet / distanceFromHqInBlocks(block);
  }
}


function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264
  }
    else  {
    return (start - destination) * 264
  }
}

function calculatesFarePrice(start, destination) {
  let traveled = distanceTravelledInFeet(start, destination);
  if (400 >= traveled) {
    return  0
  } 
    if (400 < traveled && 2000 >= traveled) {
    return (traveled - 400) * .02
  } if (2000 <= traveled && traveled <= 2500) {
    return 50 /2
  } else {
    return 'cannot travel that far'
  }
}



