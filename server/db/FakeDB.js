

export class Burger {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.description = data.description || ''
  }
}

class FakeDB {
  burgers = [
    new Burger({
      id: 1,
      name: 'Big Burger',
      price: 15,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }),
    new Burger({
      id: 2,
      name: 'Cheese Burger',
      price: 13,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }),
    new Burger({
      id: 3,
      name: 'Hawaiian Burger',
      price: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }),
    new Burger({
      id: 4,
      name: 'Double Burger',
      price: 17,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }),
    new Burger({
      id: 5,
      name: 'Fish Burger',
      price: 14,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    })
  
  ]

}

export const fakeDB = new FakeDB()