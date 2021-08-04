import DataHandlerComponent from '../DataHandlerComponent';

beforeEach(() => {

});

describe('The DataHandlerComponent Utility Class', () => {
  it('Provides Mock Data From getDrinksPopular EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getDrinksPopular();
    //console.log(JSON.stringify(results))
    //assert
    expect(results.drinks).toHaveLength(20);
    //teardown
  })

  it('Provides Mock Data From getDrinksRandom EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getDrinksRandom();
    //console.log(JSON.stringify(results))
    //assert
    expect(results.drinks).toHaveLength(10);
    //teardown
  })

  it('Provides Mock Data From getIngredientsAll EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getIngredientsAll();
    //console.log(JSON.stringify(results))
    //assert
    expect(results.drinks).toHaveLength(488);
    //teardown
  })

  it('Provides Mock Data From getGlassesAll EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getGlassesAll();
    //console.log(JSON.stringify(results))
    //assert
    expect(results.drinks).toHaveLength(32);
    //teardown
  })

  it('Provides Mock Data From getCategoriesAll EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getCategoriesAll();
    //console.log(JSON.stringify(results))
    //assert
    expect(results.drinks).toHaveLength(11);
    //teardown
  })
})