const API_GATEWAY = 'http://127.0.0.1:8081';

async function fetchQuizData() {
    let response = await fetch(API_GATEWAY + '/quiz/list');
    if (response.ok) {
        return await response.json();
    } else {
        console.log("Ошибка HTTP: " + response.status);
        return null;
    }
}

(async () => {
    let data = await fetchQuizData();
    console.log(data);
})()
