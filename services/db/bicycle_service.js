import { Bicycle } from "../../database/models";
// ----------------------------------------------------------------
export async function createBicycle({ brand, model }) {
  const bike = await Bicycle.create({
    brand: brand,
    model: model
  });
  return bike.dataValues;
}

//--------------------------------------------------------------------------
export async function fetchBicycles() {
  const bikes = await Bicycle.findAll();
  return bikes;
}