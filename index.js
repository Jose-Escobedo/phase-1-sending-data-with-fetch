// Add your code here
// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// };

// fetch("http://localhost:3000/dogs", configurationObject);
let userName = "Steve";
let userEmail = "steve@steve.com";

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: `${userName}`,
    email: `${userEmail}`,
  }),
};

function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", configurationObject)
    .then((res) => res.json())
    .then((data) => card(data))
    .catch((error) => errorMessage(error));
}

function card(data) {
  const nameFromObject = document.createElement("div");
  nameFromObject.innerHTML = `<h2>${data.name} ${data.id}</h2>`;

  document.body.append(nameFromObject);
}

function errorMessage(error) {
  const message = "Unauthorized Access";
  const h2Message = document.createElement("h2");
  h2Message.innerHTML = `<h2> ${error} <h2>`;

  document.body.append(h2Message);
}
submitData();
