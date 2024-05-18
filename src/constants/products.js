import {
  ButterMilk,
  ChickenTikka,
  GulabJamun,
  HyderabadiChicken,
  HyderabadiVeg,
  LucknowiChicken,
  PaneerBiryani,
  PaneerTikka,
  ShahiChicken,
  ShahiVeg,
} from "../assets/images/products";

export const products = [
  {
    sectionHeading: "Veg Biryani",
    products: [
      {
        title: "Hyd. Paneer Subz Dum",
        image: HyderabadiVeg,
        description:
          "Inspired by the Hyderabadi Style, loaded with fresh crispy vegetables (green peas, soya chunks, beans, carrots, paneer), marinated in Biryaan's Signature Spice Mix and layered with premium long grain basmati rice.",
        price: { small: 117, half: 177, full: 227 },
      },
      {
        title: "Paneer Dum",
        image: PaneerBiryani,
        description:
          "Paneer Dum Biryani is loaded with soft, crumbly and fresh paneer, marinated in Biryaan's Signature Spice Mix and layered with premium long grain basmati rice.",
        price: { small: 137, half: 197, full: 257 },
      },
      {
        title: "Shahi Veg Dum",
        image: ShahiVeg,
        description:
          "Shahi Veg Dum Biryani followed by fresh vegetables (green peas, soya chunks, beans, carrots) marinated in Biryaan's Signature Spice Mix, layered by pure ghee, golden fried onions and cashews with premium long grain basmati rice.",
        price: { small: 127, half: 187, full: 237 },
      },
      {
        title: "Paneer Tikka Biryani",
        image: PaneerTikka,
        description:
          "Paneer Tikka Biryani inspired by tandoori tikka paneer which has smokey flavour and marinated in Biryaan's Signature Spice Mix, layered by butter, golden fried onions with premium long grain basmati rice.",
        price: { full: 267 },
      },
    ],
  },
  {
    sectionHeading: "Chicken Biryani",
    products: [
      {
        title: "Hyderabadi Chicken Dum",
        image: HyderabadiChicken,
        description:
          "Inspired by the Hyderabadi Style, fresh juicy chicken marinated in Biryaan's Signature Spice Mix and layered with premium long grain basmati rice.",
        price: { small: 147, half: 217, full: 267 },
      },
      {
        title: "Shahi Chicken Dum",
        image: ShahiChicken,
        description:
          "Followed by fresh juicy Chicken marinated in Biryaan's Signature Spice Mix, layered by pure ghee, golden fried onions and cashews with premium long grain basmati rice.",
        price: { small: 157, half: 227, full: 277 },
      },
      {
        title: "Lucknowi Chicken Dum",
        image: LucknowiChicken,
        description:
          "This biryani will be loaded with flavourful ground spices with kevda water, marinated well by Biryaan's Signature Spice Mix & layered with premium long grain basmati rice.",
        price: { small: 157, half: 227, full: 277 },
      },
      {
        title: "Chicken Tikka Biryani",
        image: ChickenTikka,
        description:
          "Chicken Tikka Biryani inspired by tandoori tikka chicken which have smokey flavour and marinated in Biryaan's Signature Spice Mix, layered by butter, golden fried onions with premium long grain basmati rice.",
        price: { full: 297 },
      },
    ],
  },
  {
    sectionHeading: "Dessert & Beverages",
    products: [
      {
        title: "Gulab Jamun",
        image: GulabJamun,
        description:
          "Gulab Jamun, a dessert loved by everyone, made with love using khoya & pure ghee, decorated with rose petals & nuts.",
        price: { "1 piece": 13 },
      },
      {
        title: "Moong Daal Halwa",
        image: ButterMilk, // Image Of Moong Daal Halwa
        description:
          "Indulge in the rich and decadent taste of Moong Daal Halwa, a traditional Indian dessert made from moong dal and ghee.",
      },
      {
        title: "Buttermilk",
        image: ButterMilk,
        description:
          "Buttermilk, a creamy buttermilk served with some rock salt, mint, basil leaves and coriander.",
        price: { "250ml": 40 },
      },
      {
        title: "Kashmiri Soda",
        image: ButterMilk, // Image Of Kashmiri Soda
        description:
          "Experience the unique and refreshing taste of Kashmiri soda, a delightful beverage with a hint of exotic flavors.",
      },
    ],
  },
  {
    sectionHeading: "Starters",
    products: [
      {
        title: "Veg Cutlet",
        image: ButterMilk, // Image Of Veg Cutlet,
        description:
          "Savor the crispy and flavorful taste of veg cutlets, made with assorted vegetables and spices.",
      },
      {
        title: "Veg Kebab",
        image: ButterMilk, // Image Of Veg Kebab
        description:
          "Indulge in the juicy and aromatic flavors of veg kebabs, perfect for a delightful appetizer.",
      },
      {
        title: "Chicken Cutlet",
        image: ButterMilk, // Image Of Chicken Cutlet
        description:
          "Enjoy the succulent and crispy taste of chicken cutlets, seasoned with a blend of spices and herbs.",
      },
      {
        title: "Chicken Kebab",
        image: ButterMilk, // Image Of Chicken Kebab
        description:
          "Delight your taste buds with the smoky and flavorful taste of chicken kebabs, grilled to perfection.",
      },
    ],
  },
  {
    sectionHeading: "Others & Extras",
    products: [
      {
        title: "Butter Chicken",
        image: ButterMilk, // Image Of Butter Chicken
        description:
          "Indulge in the creamy and rich flavors of butter chicken, a classic Indian dish loved by all.",
      },
      {
        title: "Butter Paneer",
        image: ButterMilk, // Image Of Butter Paneer
        description:
          "Treat yourself to the luscious and creamy taste of butter paneer, a vegetarian delight.",
      },
      {
        title: "Chapati",
        image: ButterMilk, // Image Of Chapati
        description:
          "Enjoy the soft and fluffy texture of chapati, a staple Indian bread perfect for pairing with your favorite dishes.",
      },
      {
        title: "Raita",
        image: ButterMilk, // Image Of Raita
        description:
          "Cool down your palate with a refreshing bowl of raita, a yogurt-based side dish with fresh vegetables and spices.",
      },
      {
        title: "Gravy",
        image: ButterMilk, // Image Of Gravy
        description:
          "Enhance the flavor of your meals with a flavorful and aromatic gravy, perfect for adding richness to your dishes.",
      },
    ],
  },
];
