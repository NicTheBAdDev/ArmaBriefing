const missionCards = document.querySelector("#missionCards");
const missionCount = document.querySelector("#missionCount");
const tooltip = document.querySelector("#markerTooltip");
const intelBox = document.querySelector("#intelBox");

let activeMissionId = missions[0]?.id;

function renderMissionCards() {
  missionCount.textContent = `${missions.length} Einträge`;
  missionCards.innerHTML = missions.map(mission => `
    <button class="mission-card ${mission.id === activeMissionId ? "active" : ""}" data-id="${mission.id}">
      <strong>${mission.codename}</strong>
      <span>${mission.title} · ${mission.mapName}</span>
    </button>
  `).join("");

  document.querySelectorAll(".mission-card").forEach(card => {
    card.addEventListener("click", () => {
      activeMissionId = card.dataset.id;
      render();
    });
  });
}

function markerClass(type) {
  if (type === "enemy") return "marker enemy";
  if (type === "objective") return "marker objective";
  if (type === "extraction") return "marker extraction";
  return "marker";
}

function renderMissionDetail() {
  const mission = missions.find(item => item.id === activeMissionId) || missions[0];

  document.querySelector("#missionCodename").textContent = mission.codename;
  document.querySelector("#missionTitle").textContent = mission.title;
  document.querySelector("#missionStatus").textContent = mission.status;
  document.querySelector("#scenarioText").textContent = mission.scenario;
  document.querySelector("#briefingText").textContent = mission.briefing;
  document.querySelector("#briefingText2").textContent = mission.briefing2;
  document.querySelector("#mapName").textContent = `MAP: ${mission.mapName}`;
  document.querySelector("#mapImage").src = mission.mapImage;
  document.querySelector("#mapImage").alt = `Karte ${mission.mapName}`;

  document.querySelector("#factions").innerHTML = mission.factions.map(faction => `
    <div class="faction">
      <strong>${faction.name}</strong>
      <span>${faction.role}</span>
    </div>
  `).join("");

  document.querySelector("#keybinds").innerHTML = mission.keybinds.map(([action, key]) => `
    <li><strong>${action}:</strong> ${key}</li>
  `).join("");

  const markerContainer = document.querySelector("#mapMarkers");
  markerContainer.innerHTML = mission.markers.map((marker, index) => `
    <button
      class="${markerClass(marker.type)}"
      style="left:${marker.x}%; top:${marker.y}%"
      data-index="${index}"
      aria-label="${marker.title}">
    </button>
  `).join("");

  document.querySelectorAll(".marker").forEach(markerEl => {
    const marker = mission.markers[Number(markerEl.dataset.index)];

    markerEl.addEventListener("mousemove", event => {
      tooltip.hidden = false;
      tooltip.style.left = `${event.clientX + 16}px`;
      tooltip.style.top = `${event.clientY + 16}px`;
      tooltip.innerHTML = `<strong>${marker.title}</strong><br>${marker.info}`;
    });

    markerEl.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });

    markerEl.addEventListener("click", () => {
      intelBox.innerHTML = `<strong>${marker.title}</strong><p>${marker.info}</p>`;
    });
  });

  intelBox.innerHTML = `<strong>Intel</strong><p>Wähle einen Kartenpunkt aus.</p>`;
}

function render() {
  renderMissionCards();
  renderMissionDetail();
}

render();
