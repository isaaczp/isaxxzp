document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const suggestions = document.getElementById("suggestions");

  function normalize(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  const destinos = {
    "los ausoles": "ahuachapan.html",
    "cascadas de malacatao": "ahuachapan.html",
    "concepción de ataco": "ahuachapan.html",
    "centro histórico de ahuachapán": "ahuachapan.html",
    "termales de albania": "ahuachapan.html",
    "chorros de la calera": "ahuachapan.html",

    "santa ana": "santaana.html",
    "volcan de santa ana": "santaana.html",
    "coatepeque": "santaana.html",
    "metapan": "santaana.html",
    "tazumal": "santaana.html",
    "chalchuapa": "santaana.html",

    "sonsonate": "sonsonate.html",
    "nahuizalco": "sonsonate.html",
    "juayua": "sonsonate.html",
    "izalco": "sonsonate.html",
    "acajutla": "sonsonate.html",
    "santo domingo de guzman": "sonsonate.html",

    "chalatenango": "chalatenango.html",
    "la palma": "chalatenango.html",
    "san ignacio": "chalatenango.html",
    "el pital": "chalatenango.html",

    "la libertad": "lalibertad.html",
    "puerto de la libertad": "lalibertad.html",
    "el tunco": "lalibertad.html",
    "el zonte": "lalibertad.html",
    "tamanique": "lalibertad.html",

    "san salvador": "sansalvador.html",
    "centro historico": "sansalvador.html",
    "plan de la laguna": "sansalvador.html",
    "bicentenario": "sansalvador.html",
    "soyapango": "sansalvador.html",
    "mejicanos": "sansalvador.html",
    "antiguo cuscatlan": "sansalvador.html",

    "cuscatlan": "cuscatlan.html",
    "suchitoto": "cuscatlan.html",
    "cojutepeque": "cuscatlan.html",

    "la paz": "lapaz.html",
    "zacatecoluca": "lapaz.html",
    "san luis la herradura": "lapaz.html",
    "santiago nonualco": "lapaz.html",

    "cabanas": "cabanas.html",
    "ilobasco": "cabanas.html",
    "sensuntepeque": "cabanas.html",

    "san vicente": "sanvicente.html",
    "apastepeque": "sanvicente.html",
    "tecoluca": "sanvicente.html",

    "usulutan": "usulutan.html",
    "alegria": "usulutan.html",
    "berlin": "usulutan.html",
    "jucuapa": "usulutan.html",

    "san miguel": "sanmiguel.html",
    "volcan chaparrastique": "sanmiguel.html",
    "chinameca": "sanmiguel.html",
    "moncagua": "sanmiguel.html",

    "morazan": "morazan.html",
    "perquin": "morazan.html",
    "joateca": "morazan.html",

    "la union": "launion.html",
    "golfo de fonseca": "launion.html",
    "conchagua": "launion.html",
    "intipuca": "launion.html",
    "santa rosa de lima": "launion.html"
  };

  const listaDestinos = Object.keys(destinos);

  searchInput.addEventListener("input", () => {
    const query = normalize(searchInput.value.trim());
    suggestions.innerHTML = "";

    if (!query) {
      suggestions.style.display = "none";
      return;
    }

    const filtrados = listaDestinos.filter(item => normalize(item).includes(query));
    if (filtrados.length) {
      filtrados.slice(0, 6).forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.charAt(0).toUpperCase() + item.slice(1);
        li.onclick = () => window.location.href = destinos[item];
        suggestions.appendChild(li);
      });
      suggestions.style.display = "block";
    } else {
      suggestions.style.display = "none";
    }
  });

  document.addEventListener("click", e => {
    if (!searchInput.contains(e.target)) suggestions.style.display = "none";
  });

  function buscar() {
    const query = normalize(searchInput.value.trim());
    if (!query) return;
    for (let item in destinos) {
      if (query.includes(normalize(item))) {
        window.location.href = destinos[item];
        return;
      }
    }
    alert("No se encontró ningún resultado para: " + searchInput.value);
  }

  searchBtn.addEventListener("click", buscar);
  searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") buscar();
  });
});
