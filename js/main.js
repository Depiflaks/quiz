let url = 'http://127.0.0.1:8081/quiz/list';
let response = fetch(url);


if (response.ok) {
  let data = await response.json();
  console.log(data);
} else {
  alert("Ошибка HTTP: " + response.status);
}