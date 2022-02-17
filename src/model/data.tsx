import Products from "./productsInterface";

import goldenGateFicusSmall from "../images/Golden-Gate-Ficus-Small.jpeg";
import goldenGateFicusBig from "../images/Golden-Gate-Ficus-Big.jpeg";
import hawaiianUmbrella from "../images/Hawaiian-Umbrella.jpeg";
import greenMoundJuniper from "../images/Green-Mound-Juniper.jpeg";
import fukienTea from "../images/Fukien-Tea.jpeg";
import dwarfJade from "../images/Dwarf-Jade.jpeg";
import chineseElm from "../images/Chinese-Elm.jpeg";

const data: Products[] = [
  {
    id: 1,
    title: "Small Golden Gate Ficus",
    description:
      "This Ficus, the most popular indoor bonsai, is 5-8 inch tall and very easy to care for.",
    imgUrl: goldenGateFicusSmall,
    price: 44,
    quantity: 0,
    stock: 8,
  },
  {
    id: 2,
    title: "Big Golden Gate Ficus",
    description:
      "This larger Ficus (8-10 inch) has a stunning trunk movement and a fine ramification.",
    imgUrl: goldenGateFicusBig,
    price: 69,
    quantity: 0,
    stock: 8,
  },
  {
    id: 3,
    title: "Dwarf Jade",
    description:
      "This tree (8-12 inch) is one of the easiest indoor bonsai to grow, recommended for beginners.",
    imgUrl: dwarfJade,
    price: 49,
    quantity: 0,
    stock: 8,
  },
  {
    id: 4,
    title: "Fukien Tea (Carmona)",
    description:
      "This Carmona (6-8 inch) showcases beautiful trunk texture and grows well indoors.",
    imgUrl: fukienTea,
    price: 49,
    quantity: 0,
    stock: 8,
  },
  {
    id: 5,
    title: "Hawaiian Umbrella",
    description:
      "This Schefflera is one of the strongest trees to keep indoors, it is 4-7 inch tall.",
    imgUrl: hawaiianUmbrella,
    price: 34,
    quantity: 0,
    stock: 8,
  },
  {
    id: 6,
    title: "Green Mound Juniper",
    description:
      "The most popular outdoor bonsai, this Juniper is 4-6 inch tall. Can not be shipped to CA.",
    imgUrl: greenMoundJuniper,
    price: 34,
    quantity: 0,
    stock: 8,
  },
  {
    id: 7,
    title: "Chinese Elm",
    description: "This Ulmus thrives outdoors above 20 degrees, it is 6-10 inch tall.",
    imgUrl: chineseElm,
    price: 44,
    quantity: 0,
    stock: 8,
  },
];

export default data;
