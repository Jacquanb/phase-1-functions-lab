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
  distanceFromHqInBlocks(block)
  if (feet > distanceFromHqInBlocks(block)) {
    return distanceFromHqInBlocks(block) * feet;
  } else {
    return feet / distanceFromHqInBlocks(block);
  }
}


function distanceTravelledInFeet(start, destination) {
  distanceFromHqInFeet(block);
  if (destination > start) {
    return destination - start * distanceFromHqInFeet
  }
    else  {
    return start - destination * distanceFromHqInFeet 
  }
}




