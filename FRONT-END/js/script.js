window.onload = function () {
  fetch("http://localhost:1880/api/planta")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("estoque").textContent = data.estoque || "-";
      document.getElementById("manipulacao").textContent =
        data.manipulacao || "-";
      document.getElementById("separacao").textContent = data.separacao || "-";
      document.getElementById("string").textContent =
        data.operacao_string || "-";
      document.getElementById("pedidos").textContent =
        data.total_pedidos ?? "-";
      document.getElementById("reprovados").textContent =
        data.pedidos_reprovados ?? "-";
      document.getElementById("15min").textContent = data.pedidos15min ?? "-";
      document.getElementById("temp").textContent = data.temperatura ?? "-";
      document.querySelector(".umidade p").textContent = data.umidade ?? "-";
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao carregar os dados da planta.");
    });
};
