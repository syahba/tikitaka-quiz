// logic for quiz
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const form = document.getElementById("form");
  const quiz = document.getElementById("quiz");
  const input = document.getElementById("answer");
  const voucher = document.getElementById("voucher");
  const logo = document.getElementById("logo");

  // store original heading
  const originalHeading = title.querySelector("h1").innerHTML;

  // when an answer is submitted
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // removes some elements
    quiz.style.display = "none";
    logo.style.display = "none";

    if (input.value == "8") {
      title.querySelector("h1").innerHtml = updateHeading(
        "Yay! Kamu berhasil mendapatkan",
        true
      );
      voucher.style.display = "flex";
    } else {
      title.querySelector("h1").innerHtml = updateHeading(
        "Maaf, jawabanmu salah",
        false
      );

      // add button element
      const btn = document.createElement("button");
      btn.textContent = "Jawab Ulang";

      // add event to new button
      btn.addEventListener("click", () => {
        // return original elements
        quiz.style.removeProperty("display");
        logo.style.removeProperty("display");
        title.querySelector("h1").textContent = originalHeading;

        // reset form and view
        btn.remove();
        form.reset();
      });

      title.appendChild(btn);
    }
  });
});

// update title in header
const updateHeading = (message, isSuccess) => {
  title.querySelector("h1").innerHTML = `
    <span class='sub-heading'>${message}</span> <br>
    <span style='font-weight: 700; color: orange;'>${
      isSuccess ? "Voucher Spesial" : "Ayo coba lagi!"
    }</span>
  `;
};
