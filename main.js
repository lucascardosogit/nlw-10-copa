function createGame(data1) {
  return `
      <li>
      <strong>
        ${data1}
      </strong>
      <img src="" alt="" />
      <img src="" alt="" />
    </li>
  `
}

let delay = -1
function createCard(date, semanas, games) {
  delay = delay + 1
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${semanas}</span></h2>
          <ul>
            <img src="./assets/icon-brazil.svg" alt="Bandeira do Brasil" >
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "31/10 a 05/11",
    "SEMANA",
    createGame("31/10 13:30 Tiago CG 160 A") +
      createGame("31/10 16:30 Eduardo ONIX B") +
      createGame("31/10 18:30 Michel CG 160 A") +
      createGame("01/11 13:30 Tiago CG 160 A") +
      createGame("01/11 18:30 Michel CG 160 A") +
      createGame("03/11 18:30 Michel CG 160 A") +
      createGame("04/11 17:30 Eduardo ONIX B") +
      createGame("04/11 19:30 Michel CG 160 A") +
      createGame("05/11 11:30 Michel CG 160 A") +
      createGame("05/11 12:30 Michel CG 160 A")
  ) +
  createCard(
    "07/11 a 11/11",
    "SEMANA",
    createGame("07/11	13:30	Tiago CG 160	A") +
      createGame("07/11	16:30	Eduardo ONIX	B") +
      createGame("07/11	18:30	Michel CG 160 A") +
      createGame("08/11	13:30	Tiago CG 160	A") +
      createGame("09/11	13:30	Tiago CG 160	A") +
      createGame("09/11	18:30	Michel CG 160 A") +
      createGame("10/11	13:30	Eduardo ONIX	B") +
      createGame("11/11	16:30	Eduardo ONIX	B") +
      createGame("11/11	17:30	Eduardo ONIX	B") +
      createGame("11/11	20:30	Michel CG 160 A") +
      createGame("11/11	21:30	Michel CG 160 A")
  ) +
  createCard(
    "14/11 a 18/11",
    "SEMANA",
    createGame("14/11	16:30	Eduardo ONIX	B") +
      createGame("18/11	16:30	Eduardo ONIX	B")
  ) +
  createCard(
    "21/11 a 25/11",
    "SEMANA",
    createGame("21/11	13:30	Tiago CG 160 A") +
      createGame("21/11	16:30	Eduardo ONIX	B") +
      createGame("21/11	17:30	Eduardo ONIX	B") +
      createGame("22/11	13:30	Tiago CG 160 A") +
      createGame("22/11	16:30	Eduardo ONIX	B") +
      createGame("22/11	17:30	Eduardo ONIX	B") +
      createGame("23/11	13:30	Tiago CG 160 A") +
      createGame("24/11	12:30	Eduardo ONIX	B") +
      createGame("24/11	13:30	Eduardo ONIX	B") +
      createGame(" PROVA 25/11	13:30	Michel CG 160 A") +
      createGame("25/11	16:30	Eduardo ONIX	B") +
      createGame("25/11	17:30	Eduardo ONIX	B")
  ) +
  createCard(
    "28/11 a 01/12",
    "SEMANA",
    createGame("28/11	16:30	Eduardo ONIX	B") +
      createGame("28/11	17:30	Eduardo ONIX	B") +
      createGame("29/11	12:30	Eduardo ONIX	B") +
      createGame("29/11	13:30	Eduardo ONIX	B") +
      createGame(" PROVA 01/12	08:30	Eduardo ONIX	B")
  )
