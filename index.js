// $(document).ready(function() {
//   // $('#teste').on('click', nextGift);
//   showGifs();

//   // const element = document.getElementsByClassName('my-gif');
//   // var hammertime = Hammer(element).on('swipe', event => {
//   //   alert('Salvo!');
//   //   return showGifs();
//   // });

//   // $('.my-gif').hammer().on("event", function(event) {
//   //   alert('Salvo!');
//   //   return showGifs();
//   // });

//   var element = document.getElementsByClassName('my-gif');
//   console.log(element);

//   var hammertime = new Hammer(element)
//   hammertime.on('swipe', event => {
//     alert('Salvo!');
//   })
// });

window.onload = () => {
  showGifs();
  var element = document.getElementById('main');
  
  // var hammertime = new Hammer(element)
  // hammertime.on('swipe', event => {
  //   alert('Salvo!');
  // }) 

  var hammertime = Hammer(element).on('swipe', function(event) {
    alert('salvo!');
  })

}

function getGifsOnDb() {
  const url = 'https://api.giphy.com/v1/gifs/random?&api_key=p601QJjcIu36JyETPBWQftu1pUvK8sE9&limit=10';

  return fetch(url)
  .then(response => response.json())
  .then(json => json.data)
  .catch(error => console.log(error));
}

async function showGifs() {
  const data = await getGifsOnDb();
  const imgUrl = data.fixed_height_downsampled_url;

  return document.getElementById('main').innerHTML = template(imgUrl);
}

function template(imgUrl) {  
  return `
    <img src="${imgUrl}" id="my-gif">
  `;
}