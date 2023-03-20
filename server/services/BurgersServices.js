import { Burger, fakeDB } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"


class BurgersService {

  async getBurgers() {
    const burgers =await fakeDB.burgers
    return burgers
  }
  async getBurgerById(burgerId) {
    const burger = await fakeDB.burgers.find(b => b.id == burgerId)

    if (!burger) {
      throw new BadRequest('Invalid ID, burger not found')
    }
    return burger
    }

  async createBurger(burgerData) {
    if (!burgerData.id || !burgerData.name || !burgerData.price || !burgerData.description){
      throw new BadRequest('No burger data found')
    }
    const buildBurger = new Burger(burgerData)
    await fakeDB.burgers.push(buildBurger)
    return buildBurger
  }

    async deleteBurger(burgerId) {
      const burgerIndex = await fakeDB.burgers.findIndex(b => b.id == burgerId)
      if (burgerIndex == -1) {
        throw new BadRequest("No burger found")
      }
      fakeDB.burgers.splice(burgerIndex, 1)
  }

}

export const burgersService = new BurgersService()