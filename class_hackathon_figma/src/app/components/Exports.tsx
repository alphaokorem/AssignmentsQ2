export type data = {
    name: string;
    image: string;
  };
  export type data1 = {
    image: string;
    detail: string;
    price: string;
  };
  export const categories: data[] = [
    { name: "Phones", image: "/category/phone.png" },
    { name: "Smart Watches", image: "/category/watch.png" },
    { name: "Cameras", image: "/category/camera.png" },
    { name: "Headphones", image: "/category/headphones.png" },
    { name: "Computers", image: "/category/comp.png" },
    { name: "Gaming", image: "/category/game.png" },
  ];
  export const products: data1[] = [
    {
      image: "/products/phone1.png",
      detail: "Apple iPhone 14 Pro Max 128GB Deep Purple ",
      price: "$900",
    },
    {
      image: "/products/camera1.png",
      detail: "Blackmagic Pocket Cinema Camera 6k",
      price: "$2535",
    },
    {
      image: "/products/watch1.png",
      detail: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      price: "$399",
    },
    {
      image: "/products/headphones1.png",
      detail: "AirPods Max SilverStarlight Aluminium",
      price: "$549",
    },
    {
      image: "/products/watch2.png",
      detail: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: "$369",
    },
    {
      image: "/products/phone2.png",
      detail: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: "$1799",
    },
    {
      image: "/products/airpods1.png",
      detail: "Galaxy Buds FEGraphite | Black",
      price: "$99.99",
    },
    {
      image: "/products/ipad.png",
      detail: "Apple iPad 9 10.2' 64GB Wi-Fi Silver (MK2L3) 2021",
      price: "$398",
    },
  ];
export const discounts : data1[] = [
  {image: "/discounts/phone.png", detail: "Apple iPhone 14 Pro 512GB Gold (MQ233)", price: "$1437"}, 
  {image: "/discounts/headphones.png", detail: "AirPods Max Silver Starlight Aluminium ", price: "$549"},
  {image: "/discounts/watch.png", detail: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ", price: "$399"},
  {image: "/discounts/phone2.png", detail: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: "$1499"}
]