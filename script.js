const cardContainer = document.querySelector(".card-container");
const input = document.querySelector("#search");
const users = [
  {
    profileName: "light",
    pfp: "https://i.pinimg.com/736x/df/6f/f1/df6ff18dad88a147fafffab7f3616199.jpg",
    tagline: "Justice will prevail, no matter the cost.",
  },
  {
    profileName: "luffy",
    pfp: "https://i.pinimg.com/736x/87/5b/4f/875b4fb82c44a038466807b0dcf884cc.jpg",
    tagline: "I’m gonna be King of the Pirates!",
  },
  {
    profileName: "megumi",
    pfp: "https://i.pinimg.com/736x/bc/0a/9a/bc0a9a9a4d542a93d7e8d3b44ad423cb.jpg",
    tagline: "I choose who I save.",
  },
  {
    profileName: "yuta",
    pfp: "https://i.pinimg.com/736x/73/a9/0c/73a90c529c97dece141df5b8e4b20fc3.jpg",
    tagline: "Love is the most twisted curse.",
  },
  {
    profileName: "suburu",
    pfp: "https://i.pinimg.com/736x/b6/27/82/b6278265e3a3e5f55bcbcb45cf9ea632.jpg",
    tagline: "I won’t give up, no matter how many times I die.",
  },
  {
    profileName: "ichigo",
    pfp: "https://i.pinimg.com/1200x/08/cf/dd/08cfddc9d99f30675f868ca8cf6c5718.jpg",
    tagline: "If I don’t swing, I can’t protect anyone.",
  },
  {
    profileName: "yoru",
    pfp: "https://i.pinimg.com/736x/bb/05/61/bb05614deeb70c89ac914ec81c3a439c.jpg",
    tagline: "Fear is power, and I am its master.",
  },
  {
    profileName: "tom",
    pfp: "https://i.pinimg.com/736x/8a/2f/73/8a2f738921257baf35ea539eaffabcff.jpg",
    tagline: "Calm, sharp, and always in control.",
  },
  {
    profileName: "killer queen",
    pfp: "https://i.pinimg.com/736x/20/04/5c/20045ca92bb36354a5978b817619bf37.jpg",
    tagline: "Everything I touch turns to bombs.",
  },
  {
    profileName: "dio",
    pfp: "https://i.pinimg.com/736x/64/d0/f6/64d0f687cb05f1488c13fd16120616a1.jpg",
    tagline: "I reject my humanity!",
  },
];

function createEL(tag, classlist = [], text = "") {
  const el = document.createElement(tag);
  if (classlist.length) {
    classlist.forEach((className) => {
      el.classList.add(className);
    });
  }
  if (text !== undefined) el.textContent = text;
  return el;
}

function createCard(obj) {
  const card = createEL("div", ["card"]);

  const image = createEL("img", ["bg-img"]);
  image.src = obj.pfp;
  
  const blurredLayer = createEL("div", ["blurred-layer"]);
  blurredLayer.style.backgroundImage = `url(${obj.pfp})`;
  
  const content = createEL("div", ["content"]);

  const profileName = createEL("h3", [], obj.profileName);

  const tagline = createEL("p", [], obj.tagline);

  content.append(profileName, tagline);
  card.append(image, blurredLayer, content);

  return card;
}
// rendering users
function showUsers(arr) {
  cardContainer.innerHTML = "";
  arr.forEach((user) => {
    const card = createCard(user);
    cardContainer.append(card);
  });
}

function filter(arr) {
  const value = input.value.toLowerCase()
  if (value.trim) {
    const filtered = arr.filter((user) => {
      return user.profileName.toLowerCase().startsWith(value);
    });
    showUsers(filtered);
  }
}

showUsers(users);

input.addEventListener("input", () => filter(users));
