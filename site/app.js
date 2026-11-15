const stops = [
  { id: "kagoshima", name: "Kagoshima", region: "Kyushu", nights: 2, tagline: "Volcanic shores & a warm southern welcome." },
  { id: "fukuoka", name: "Fukuoka", region: "Kyushu", nights: 1, tagline: "Park-side afternoons. Ramen-filled evenings." },
  { id: "hiroshima", name: "Hiroshima", region: "Honshu", nights: 2, tagline: "A place to reflect, and an island to remember." },
  { id: "kyoto", name: "Kyoto", region: "Honshu", nights: 4, tagline: "Old lanes, quiet temples & Kansai adventures." },
  { id: "tokyo", name: "Tokyo", region: "Honshu", nights: 4, tagline: "A thousand worlds in one extraordinary city." },
  { id: "hakodate", name: "Hakodate", region: "Hokkaido", nights: 2, tagline: "Northern sea air & a city of sparkling lights." },
  { id: "sapporo", name: "Sapporo", region: "Hokkaido", nights: 2, tagline: "Wide skies, canal-side wandering & one last bowl." },
];

const days = [
  { stop: "kagoshima", title: "Hello, southern Japan", description: "Arrive and ease into the journey. Keep today light, especially after a long flight.", highlights: ["Wander Tenmonkan's shopping streets", "Shiroyama volcano views, if time allows", "Local black pork for dinner"], travel: "Arrive at Kagoshima Airport; allow time for the airport bus into the city." },
  { stop: "kagoshima", title: "Across to the volcano", description: "Spend the day on Sakurajima, with volcanic scenery and a slower waterfront pace.", highlights: ["Ferry across Kagoshima Bay", "Waterfront walks and volcanic viewpoints", "A footbath before returning to town"], travel: "Sakurajima ferry: approximately 15 minutes each way. Check volcanic advisories and weather." },
  { stop: "fukuoka", title: "The city that feeds you", description: "Head north to Fukuoka for green spaces, city exploring, and a very good evening meal.", highlights: ["A relaxed walk around Ohori Park", "Explore central Fukuoka", "Hakata ramen or a riverside yatai stall"], travel: "Kagoshima-Chuo to Hakata by shinkansen: roughly 1 hour 20 minutes to 1 hour 45 minutes, depending on service." },
  { stop: "hiroshima", title: "A moment to reflect", description: "Travel to Hiroshima and give the city's history your time and attention.", highlights: ["Peace Memorial Museum", "Peace Park and the Atomic Bomb Dome", "Hiroshima-style okonomiyaki"], travel: "Hakata to Hiroshima by shinkansen: approximately 1 hour. Reserve museum entry as needed." },
  { stop: "hiroshima", title: "An island beyond the city", description: "A full-day escape to Miyajima, where shrine gates meet the sea and wooded trails rise above town.", highlights: ["Itsukushima Shrine and the waterfront", "Old-town streets and local snacks", "Mount Misen, if weather and energy allow"], travel: "Train to Miyajimaguchi, then ferry to Miyajima. Allow around an hour each way from central Hiroshima, plus waiting time." },
  { stop: "kyoto", title: "Into the old capital", description: "Settle into your four-night Kyoto base, then discover its historic eastern neighborhoods.", highlights: ["Higashiyama's atmospheric lanes", "Historic streets around the temple district", "An evening walk through Gion"], travel: "Hiroshima to Kyoto by shinkansen: approximately 1 hour 40 minutes to 2 hours. Respect private lanes and local photography restrictions." },
  { stop: "kyoto", title: "Bamboo & river light", description: "Start early in Arashiyama, then leave the afternoon open for quieter discoveries.", highlights: ["Arashiyama bamboo grove before the crowds", "Tenryu-ji and its gardens", "Riverside wandering and an unhurried lunch"], travel: "Local train or bus to Arashiyama. Return to the same Kyoto hotel." },
  { stop: "kyoto", title: "Red gates & roaming deer", description: "Make an early visit to Fushimi Inari before continuing to Nara. This is a fuller day: keep the shrine walk short if needed.", highlights: ["Fushimi Inari's torii-lined paths", "Todai-ji's Great Buddha", "Nara Park and the surrounding streets"], travel: "Continue by train from the Fushimi area to Nara; journey time varies by route. Return to Kyoto in the evening." },
  { stop: "kyoto", title: "A taste of Osaka", description: "Swap temple lanes for Osaka's lively streets, market snacks, and neon-lit dinner scene.", highlights: ["Kuromon Market food browsing", "Osaka Castle grounds", "Dotonbori evening food crawl"], travel: "Kyoto to Osaka: approximately 30 minutes by JR special rapid train, plus local travel. Return to Kyoto after dinner." },
  { stop: "tokyo", title: "Next stop, Tokyo", description: "Take the bullet train east, then settle into Tokyo with a neighborhood afternoon and evening.", highlights: ["Shinkansen journey across central Japan", "Explore Shinjuku", "Find a favorite dinner spot near your hotel"], travel: "Kyoto to Tokyo on a fast shinkansen: approximately 2 hours 15 minutes to 2 hours 30 minutes. Allow time for local transfers." },
  { stop: "tokyo", title: "Tokyo, old & new", description: "Explore the city's traditional side, with room for a museum, park, or a little electronics-store browsing.", highlights: ["Senso-ji and Asakusa shopping streets", "Ueno Park or a museum", "Optional Akihabara visit"], travel: "Use local trains and subway. Pick one museum rather than trying to fit everything in." },
  { stop: "tokyo", title: "From forest to skyline", description: "Move from Meiji Shrine's wooded grounds to Harajuku's streets and Shibuya's city lights.", highlights: ["Meiji Shrine", "Harajuku and nearby streets", "Shibuya and a sunset observation deck"], travel: "Local rail between neighborhoods. Book your preferred observation deck ahead, especially for sunset." },
  { stop: "tokyo", title: "A day to make your own", description: "Keep a flexible day for whatever you love most, or trade the city for temples and the coast.", highlights: ["Shopping, gardens, or an art museum", "Alternatively: a Kamakura day trip", "One last Tokyo dinner"], travel: "Stay local or take the train to Kamakura, roughly an hour from many central Tokyo stations. Reserve ticketed attractions as needed." },
  { stop: "hakodate", title: "North to Hokkaido", description: "Fly to Hakodate and let the northern sea air set a new pace. Save the night view for clear weather.", highlights: ["Flight from Tokyo Haneda to Hakodate", "Waterfront and red-brick warehouse district", "Mount Hakodate night view, if clear"], travel: "Direct flight: roughly 1 hour 20 minutes to 1 hour 30 minutes in the air. Allow several additional hours for airport transfers and check-in." },
  { stop: "hakodate", title: "Seafood & harbor stories", description: "A full day for Hakodate's seafood, star-shaped fort, and historic hillside streets.", highlights: ["Morning market seafood breakfast", "Goryokaku park and tower", "Motomachi's historic district"], travel: "Explore by tram, bus, and on foot. Winter conditions can make hillside walks slippery." },
  { stop: "sapporo", title: "Onward to Sapporo", description: "A longer rail day brings you to your final base. Keep the afternoon and evening easy.", highlights: ["Scenic limited-express train north", "Odori Park and central Sapporo", "Susukino and a bowl of miso ramen"], travel: "Hakodate to Sapporo by limited express: approximately 4 hours, depending on the service. Check the current timetable." },
  { stop: "sapporo", title: "A little detour to Otaru", description: "Spend your last full day among canals, old merchant buildings, and small shops by the sea.", highlights: ["Otaru Canal and merchant streets", "Glass shops and local crafts", "Sushi before returning to Sapporo"], travel: "Sapporo to Otaru by train: approximately 30-50 minutes each way, depending on service." },
  { stop: "sapporo", title: "Until next time, Japan", description: "Enjoy an easy morning if your departure time allows, then head to the airport. No overnight stay is planned today.", highlights: ["A final coffee or neighborhood walk", "Last-minute food souvenirs", "Departure from New Chitose Airport"], travel: "Sapporo to New Chitose Airport by rapid train: approximately 40 minutes, plus waiting and check-in time. Allow extra margin in winter." },
].map((day, index) => ({ ...day, number: index + 1 }));

let selectedDay = 1;
let selectedRegion = "all";
const stopPicker = document.querySelector("#stop-picker");
const dayPicker = document.querySelector("#day-picker");
const timeline = document.querySelector("#timeline");

function selectDay(number) {
  selectedDay = number;
  const day = days[number - 1];
  const stop = stops.find((item) => item.id === day.stop);
  const index = stops.indexOf(stop);
  const stopDays = days.filter((item) => item.stop === stop.id);
  document.querySelector("#stop-position").textContent = `${String(index + 1).padStart(2, "0")} / 07`;
  document.querySelector("#stop-detail").innerHTML = `
    <span class="region-label">${stop.region.toUpperCase()}</span>
    <h2 class="stop-title">${stop.name}</h2>
    <p class="stop-tagline">${stop.tagline}</p>
    <div class="stay-meta"><strong>Days ${stopDays[0].number}${stopDays.length > 1 ? `-${stopDays.at(-1).number}` : ""}</strong><strong>${stop.nights} ${stop.nights === 1 ? "night" : "nights"} here</strong></div>`;
  dayPicker.replaceChildren(...stopDays.map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Day ${item.number}`;
    button.setAttribute("aria-pressed", String(item.number === number));
    button.addEventListener("click", () => {
      selectDay(item.number);
      dayPicker.querySelector(`[aria-pressed="true"]`).focus();
    });
    return button;
  }));
  document.querySelector("#day-detail").innerHTML = `
    <span class="day-label">DAY ${String(day.number).padStart(2, "0")} / ${day.number === 18 ? "DEPARTURE" : "THE PLAN"}</span>
    <h3>${day.title}</h3><p class="day-description">${day.description}</p>
    <ul class="highlights">${day.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
    <div class="travel-box"><strong>GETTING AROUND</strong>${day.travel}</div>`;
  stopPicker.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.stop === stop.id)));
  document.querySelectorAll("[data-map-stop]").forEach((marker) => marker.classList.toggle("active", marker.dataset.mapStop === stop.id));
  document.querySelector("#previous-stop").disabled = index === 0;
  document.querySelector("#next-stop").disabled = index === stops.length - 1;
  timeline.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.day) === number)));
}

function renderTimeline() {
  const visibleDays = days.filter((day) => selectedRegion === "all" || stops.find((stop) => stop.id === day.stop).region === selectedRegion);
  document.querySelector("#day-count").textContent = `${visibleDays.length} ${visibleDays.length === 1 ? "day" : "days"}${selectedRegion === "all" ? " from south to north" : ` in ${selectedRegion}`}. Select a day to see the details above.`;
  timeline.replaceChildren(...visibleDays.map((day) => {
    const stop = stops.find((item) => item.id === day.stop);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-card";
    button.dataset.day = day.number;
    button.setAttribute("aria-pressed", String(day.number === selectedDay));
    button.innerHTML = `<span class="card-top"><strong>DAY ${String(day.number).padStart(2, "0")}</strong><span>${stop.region}</span></span><span class="card-title">${day.title}</span><span class="card-bottom">${day.number === 18 ? "Depart from Sapporo" : `Stay in ${stop.name}`} <span aria-hidden="true">&#8599;</span></span>`;
    button.addEventListener("click", () => {
      selectDay(day.number);
      document.querySelector(".explorer-card").scrollIntoView({ block: "start" });
      dayPicker.querySelector('[aria-pressed="true"]').focus({ preventScroll: true });
    });
    return button;
  }));
}

stops.forEach((stop) => {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.stop = stop.id;
  button.textContent = stop.name;
  button.addEventListener("click", () => selectDay(days.find((day) => day.stop === stop.id).number));
  stopPicker.append(button);
});

// HTML buttons overlay the schematic coordinates so map stops also work with a keyboard.
const mapWrap = document.querySelector(".map-wrap");
document.querySelectorAll("[data-map-stop]").forEach((marker) => {
  const circle = marker.querySelector("circle");
  const stop = stops.find((item) => item.id === marker.dataset.mapStop);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "map-hit";
  button.setAttribute("aria-label", `Explore ${stop.name}`);
  button.style.left = `${Number(circle.getAttribute("cx")) / 600 * 100}%`;
  button.style.top = `${Number(circle.getAttribute("cy")) / 580 * 100}%`;
  button.addEventListener("click", () => selectDay(days.find((day) => day.stop === stop.id).number));
  mapWrap.append(button);
});

document.querySelectorAll("[data-region]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRegion = button.dataset.region;
    document.querySelectorAll("[data-region]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    renderTimeline();
  });
});

function moveStop(direction) {
  const currentStop = days[selectedDay - 1].stop;
  const nextStop = stops[stops.findIndex((stop) => stop.id === currentStop) + direction];
  if (nextStop) selectDay(days.find((day) => day.stop === nextStop.id).number);
}
document.querySelector("#previous-stop").addEventListener("click", () => moveStop(-1));
document.querySelector("#next-stop").addEventListener("click", () => moveStop(1));
renderTimeline();
selectDay(1);
