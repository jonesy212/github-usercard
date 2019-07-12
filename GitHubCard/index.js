/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/jonesy212')
  .then(data => {
    console.log('response', data)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



const cards = document.querySelector('.cards')

function UserCards(imgUrl, UserInfo) {
  //create the elements
  const card = document.createElement('div')
  const avatar = document.creatElement('img')
  const name = document.createElement('h2')
  const bio = document.createElement('h3')
  const location = document.creatElement('h3')
  const followers = document.creatElement('h3')
  const following = document.creatElement('h3')
  const login = document.creatElement('h4')

  //set styles
  cards.classList.add('cards')
  avatar.classList.add('img')
  name.classList.add('name')
  login.classList.add('username')
  location.classList.add('User-location')
  url.classList.add('User-Github ')
  followers.classList.add('User-followers')
  following.classList.add('User-following')
  bio.classList.add('User-bio')
  
  //seat the content
  img.src = imgUrl
  name.textContent =`Name: ${UserInfo}`
  login.textContent =`Username: ${UserInfo}`
  location.textContent =`Location: ${UserInfo}`
  url.textContent =`Github: ${UserInfo}`
  follower.textContent =`Followers: ${UserInfo}`
  following.textContent =`Following: ${UserInfo}`
  bio.textContent =`Bio: ${UserInfo}`

  //put them together
  card.appendChild(img)
  card.appendChild(img)
  card.appendChild(img)
  card.appendChild(img)
  card.appendChild(img)
  card.appendChild(img)
  card.appendChild(img)

}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


  axios.get('https://api.github.com/users/jonesy212/followers')
      .then(data => {
        console.log('UserInfo', data)
      })

  //   forEach() => {

  //   }

// const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

promise.then(data => {

})

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
