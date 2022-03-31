// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const houses = [
  {
    thumb: "https://cdn.vox-cdn.com/thumbor/J9u7iS497zWP35BEJOiOAN_igYg=/0x0:4000x2667/920x613/filters:focal(1680x1014:2320x1654):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65894378/2BWFDG7.8.jpg",
    type: "Sell",
    price: "R$ 3.000.000,00"
  },
  {
    thumb: "https://www.familyhomeguide.com/ezoimgfmt/familyhomeguide.com/wp-content/uploads/2020/01/15-Types-of-Rooms-in-a-House-with-Descriptions-and-Images-1.jpg?ezimgfmt=rs:810x491/rscb7/ng:webp/ngcb7",
    type: "New",
    price: "R$ 9.000.000,00"
  },
  {
    thumb: "https://www.theplancollection.com/Upload/Designers/198/1011/Plan1981011Image_6_2_2018_1015_4_891_593.jpg",
    type: "Sell",
    price: "R$ 8.000.000,00"
  },
  {
    thumb: "https://www.theplancollection.com/Upload/Designers/126/1795/aux_lr3928_Pool_891_593.jpg",
    type: "Sell",
    price: "R$ 4.000.000,00"
  },
  {
    thumb: "https://www.theplancollection.com/Upload/Designers/161/1042/1360_Photo1_891_593.jpg",
    type: "New",
    price: "R$ 2.000.000,00"
  },
  {
    thumb: "https://www.theplancollection.com/Upload/Designers/165/1094/CLS2909_photo1_891_593.jpg",
    type: "New",
    price: "R$ 1.000.000,00"
  }
];

houses.map(house => {
  const cardClone = card.cloneNode(true);
  const price = cardClone.querySelector(".price")
  cardClone.querySelector("img").src = house.thumb;
  cardClone.querySelector(".title").innerHTML = house.price;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    house.type;

  if(house.type === 'New') {
    price.style.background = '#51D275'
  } else {
    price.style.background = '#DC9730'
  }
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});




// MENU RESPONSIVO