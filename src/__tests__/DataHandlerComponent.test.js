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

  it('Provides Mock Data From getDrinkRandom EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getDrinkRandom();
    //console.log(JSON.stringify(results))
    //assert
    expect(results.drinks).toHaveLength(1);
    //teardown
  })

  it('Provides Mock Data From getDrinksByFirstLetter EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getDrinksByFirstLetter('m');
    //console.log(JSON.stringify(results))
    //assert
    expect(results.drinks).toHaveLength(32);
    //teardown
  })

  it('Provides Mock Data From getDrinksByID EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getDrinksByID(11011);

    expect(results.drinks).toHaveLength(1);
    //assert

    //teardown
  })

  it('Provides Mock Data From getDrinksBySearch EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getDrinksBySearch('margarita');

    expect(results.drinks).toHaveLength(6);
    //assert

    //teardown
  })

  it('Provides Mock Data From getDrinksByIngredients EndPoint', async () => {
    //setup
    const dataHandler = new DataHandlerComponent();
    //execute
    const results = await dataHandler.getDrinksByIngredients(['vodka', 'gin']);

    expect(results.drinks).toHaveLength(9);
    //assert

    //teardown
  })

  // it('should throw an error if called with an invalid api mock drink id number', () =>
  // {
  //   const dataHandler = new DataHandlerComponent();
  //     function drinkOctopus() {
  //       try {
  //         dataHandler.getDrinksByID(12000);
  //       } catch (error) {
  //         console.log('Request failed', error)
  //       }
  //     }
  //     expect(drinkOctopus).toThrowError('invalid mock API ID');
  //   })
})
