const likeButton = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");

let count = 0;
let liked = false;

likeButton.addEventListener("click", () => {

    if (!liked) {
        count++;
        liked = true;

        likeButton.classList.add("liked");
        likeButton.innerHTML = `💚 Curtido (<span id="like-count">${count}</span>)`;

    } else {
        count--;
        liked = false;

        likeButton.classList.remove("liked");
        likeButton.innerHTML = `❤️ Curtir (<span id="like-count">${count}</span>)`;
    }
});