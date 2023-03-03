const {shuffleArray} = require('./utils')
let testArr = []
let testArrTwo = [1,2,3]
describe('shuffleArray should be an array', () => {
   test('shuffeArray returns an array', () =>{
    expect(shuffleArray([])).toEqual(testArr)
   })
})
describe('shuffleArray should be shuffling', ()=>{
    test('shuffleArray shuffles numbers', ()=>{
        expect(shuffleArray([1,2,3])).not.toEqual(testArrTwo)
    })
})