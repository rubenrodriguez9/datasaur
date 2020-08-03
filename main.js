/********************
 * HELPER FUNCTIONS *
 ********************/

let herbs = function(dino){
  let newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if(newDino.conivore === false){
    return newDino
  }
  
}

const makeDino = function(species, period, carnivore, extinct = false){
  let newDino = {
    species,
    period,
    carnivore,
    extinct,
  }
  return newDino
}

const makeSingular = function(dino){
  let newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
    if(newDino.species.endsWith('us')){
      newDino.species = newDino.species.slice(0,-2);
      return newDino
    }else return dino

  }

  const truncateSpecies = function(dino){
    let newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
      if(dino.species.length < 10){
        return dino
      }else if(dino.species.length >= 10){
        newDino.species = newDino.species.slice(0, 7) + '...';
        return newDino
      }
  }

  const makeExtinct = function(dino){
    let newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
    newDino.extinct = true;
    return newDino
  }

  const isCarnivore = function(dino){
      return dino.carnivore
    }

  const isExtinct = function(dino){
    return dino.extinct
  }

  const isTriassic = function(dino){
    if(dino.period === 'Triassic'){
      return true
    }else return false
  }
  
  const isJurassic = function(dino){
    if(dino.period === 'Jurassic'){
      return true
    }else return false
  }

  const isCretaceous = function(dino){
    if(dino.period === 'Cretaceous'){
      return true
    }else return false
  }


/***********************
 * ITERATION FUNCTIONS *
 **********************/



 const singularizeDinos = function(dinos){
   
      
      return dinos.map(makeSingular)
  
 }

 const truncateDinos = function(dinos){

  dinos = dinos.map(truncateSpecies)
  return dinos
 }

 const makeAllExtinct = function(dinos){

  dinos = dinos.map(makeExtinct)
  return dinos
 }

 const carnivoresOnly = function(dinos){

  dinos = dinos.filter(isCarnivore)
  return dinos
 }


 const extinctOnly = function(dinos){

  dinos = dinos.filter(isExtinct)
  return dinos
 }

 const triassicOnly = function(dinos){
  
  dinos = dinos.filter(isTriassic)
  return dinos

 }
 

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
