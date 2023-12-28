import americanCoffee from "../assets/coffees/american-coffee.svg";
import arabicCoffee from "../assets/coffees/arabic-coffee.svg";
import capuccino from "../assets/coffees/capuccino.svg";
import coffeeMilk from "../assets/coffees/coffee-with-milk.svg";
import creamyEspresso from "../assets/coffees/creamy-espresso-coffee.svg";
import cubanCoffee from "../assets/coffees/cuban-coffee.svg";
import espressoCoffee from "../assets/coffees/espresso-coffee.svg";
import hawaiianCoffee from "../assets/coffees/hawaiian-coffee.svg";
import hotChocolate from "../assets/coffees/hot-chocolate.svg";
import icedCoffee from "../assets/coffees/iced-coffee.svg";
import irishCoffee from "../assets/coffees/irish-coffee.svg";
import latte from "../assets/coffees/latte.svg";
import macchiato from "../assets/coffees/macchiato.svg";
import mochaccino from "../assets/coffees/mochaccino.svg";

export const items = [
  {
    name: "Expresso Tradicional",
    image: espressoCoffee,
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9.90",
    tags: ["TRADICIONAL"],
  },
  {
    name: "Expresso Americano",
    image: americanCoffee,
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9.90",
    tags: ["TRADICIONAL"],
  },
  {
    name: "Expresso Cremoso",
    image: creamyEspresso,
    description: "Café expresso tradicional com espuma cremosa",
    price: "9.90",
    tags: ["TRADICIONAL"],
  },
  {
    name: "Expresso Gelado",
    image: icedCoffee,
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9.90",
    tags: ["TRADICIONAL", "GELADO"],
  },
  {
    name: "Café com Leite",
    image: coffeeMilk,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9.90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    name: "Latte",
    image: latte,
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9.90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    name: "Capuccino",
    image: capuccino,
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9.90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    name: "Macchiato",
    image: macchiato,
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9.90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    name: "Mochaccino",
    image: mochaccino,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9.90",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    name: "Chocolate Quente",
    image: hotChocolate,
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9.90",
    tags: ["ESPECIAL", "COM LEITE"],
  },
  {
    name: "Cubano",
    image: cubanCoffee,
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9.90",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
  },
  {
    name: "Havaiano",
    image: hawaiianCoffee,
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9.90",
    tags: ["ESPECIAL"],
  },
  {
    name: "Árabe",
    image: arabicCoffee,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9.90",
    tags: ["ESPECIAL"],
  },
  {
    name: "Irlandês",
    image: irishCoffee,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9.90",
    tags: ["ESPECIAL", "ALCOÓLICO"],
  },
];
