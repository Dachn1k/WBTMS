let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let cardProducts = JSON.parse(localStorage.getItem('cardProducts')) || [];

let product = document.getElementById('products');

let CardList = [];
fetch('https://62602c5f53a42eaa07013c69.mockapi.io/wb/Products')
  .then((Response) => {
    return Response.json()
  })

  .then((CardList) => {

    CardList.forEach(item => {
      const productCard = document.createElement('div');
      productCard.className = 'productCard';

      const imgBlock = document.createElement('div');
      imgBlock.className = 'imgBlock';
      productCard.appendChild(imgBlock);

      const img = document.createElement('img');
      img.className = 'ProductImg';
      img.src = item.src;
      imgBlock.appendChild(img);

      const modalWindow = document.createElement('img');
      modalWindow.src = item.src;
      modalWindow.className = "modalWindow";
      modalWindow.style.display = "none";
      imgBlock.appendChild(modalWindow);

      const perCard = document.createElement('div');
      perCard.className = "perCard";
      imgBlock.appendChild(perCard);

      const percents = document.createElement('p');
      percents.className = 'percents';
      percents.innerHTML = item.percents;
      perCard.appendChild(percents);

      const card = document.createElement('button');
      card.className = 'card';
      perCard.appendChild(card);

      const cardImg = document.createElement('img');
      cardImg.className = "cardimg";
      cardImg.src = "./assets/1413925.png";
      card.appendChild(cardImg);

      const PriceBlock = document.createElement('div');
      PriceBlock.className = 'priceBlock';
      productCard.appendChild(PriceBlock);

      const price = document.createElement('p');
      price.innerHTML = item.price;
      price.className = 'pricing';
      PriceBlock.appendChild(price)

      const oldPrice = document.createElement('p');
      oldPrice.innerHTML = item.oldPrice;
      oldPrice.className = 'oldPrice';
      PriceBlock.appendChild(oldPrice);

      const p = document.createElement('p');
      p.innerHTML = item.name;
      p.className = 'nameGoods';
      p.id = `p-${item.id}`;
      productCard.appendChild(p);

      product.append(productCard);

    })
  })

  .then(() => {
    let resize = [...document.getElementsByClassName("ProductImg")];
    resize.forEach((item) => {
      let modalWindow = item.nextSibling;
      item.onclick = () => {
        modalWindow.style.display = "block";
        modalWindow.onclick = () => {
          modalWindow.style.display = "none";
        }
      }
    })
  })

  .then(() => {
    let butcard = [...document.getElementsByClassName("card")];
    butcard.forEach((item) => {
      let addToCard = item.nextSibling;
      item.onclick = () => {

      }
    })
  })

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 13) {
    for (let i = 1; i < 13; i++) {
      if ((document.getElementById("search").value).toLowerCase() == ((document.getElementById(`p-${i}`).innerText).split("")[i]).toLowerCase() || (document.getElementById("search").value).toLowerCase() == ((document.getElementById(`p-${i}`).innerText).split("")[0]).toLowerCase() || (document.getElementById("search").value).toLowerCase() == ((document.getElementById(`p-${i}`).innerText).split("")[0]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[1]).toLowerCase() || (document.getElementById("search").value).toLowerCase() == ((document.getElementById(`p-${i}`).innerText).split("")[0]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[1]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[2]).toLowerCase() || (document.getElementById("search").value).toLowerCase() == ((document.getElementById(`p-${i}`).innerText).split("")[0]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[1]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[2]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[3]).toLowerCase() || (document.getElementById("search").value).toLowerCase() == ((document.getElementById(`p-${i}`).innerText).split("")[0]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[1]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[2]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[3]).toLowerCase() + ((document.getElementById(`p-${i}`).innerText).split("")[4]).toLowerCase()) {
        document.getElementById(`p-${i}`).parentElement.style.display = "block";
      }
      else document.getElementById(`p-${i}`).parentElement.style.display = "none";
    }
  }
})

document.getElementById('search').addEventListener('input', () => {
  for (let i = 1; i < 13; i++) {
    if (document.getElementById("search").value == "") {
      document.getElementById(`p-${i}`).parentElement.style.display = "block";
    }
  }
})
