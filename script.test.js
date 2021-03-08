const googleSearch = require('./script');

dbMock = [
    'dogs.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
]

describe('googleSearch', () => {
    it('this is a silly test', () => {
        expect('hello').toBe('hello')
    })
    
    it('works normally', () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
        expect(googleSearch(null, dbMock)).toEqual([])
    });
    
    it('works with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    });
    
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    });
})



// it('this is a test', () => {

// })