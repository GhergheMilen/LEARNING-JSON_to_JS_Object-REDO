document.querySelectorAll(".flip-card").forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const choice = btn.value;

    // Resetează toate cardurile
    document.querySelectorAll(".flip-card").forEach((el) => {
      el.classList.remove("clicked", "animate-up");
    });

    btn.classList.add("animate-up");

    setTimeout(() => {
      const card = btn.querySelector(".card-inner");
      card.classList.add("clicked");
    }, 500);

    // Așteaptă ca animația să ruleze
    await new Promise((r) => setTimeout(r, 1500));

    // Trimite cererea POST (fără reload)
    const formData = new URLSearchParams();
    formData.append("choice", choice);

    const res = await fetch("/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

// Primește HTML și înlocuiește conținutul din <main>
const html = await res.text();
const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");
const newContent = doc.querySelector("main");
document.querySelector("main").replaceWith(newContent);

// Reatașează evenimentele pentru noile carduri
const newScript = document.createElement("script");
newScript.src = "/script.js";
document.body.appendChild(newScript);

// 🔁 Reaplică .animate-up ca să declanșeze tranziția
setTimeout(() => {
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.classList.add("animate-up");

    // ⏱ forțăm reflow ca să accepte clasa
    void card.offsetWidth;

    // după scurt delay, o eliminăm pentru tranziție lină
    setTimeout(() => {
      card.classList.remove("animate-up");
    }, 500);
  });
}, 50);

  });
});
