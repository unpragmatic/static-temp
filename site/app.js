const stops = [
  { id: "kagoshima", name: "Kagoshima", region: "Kyushu", nights: 2, tagline: "Volcanic shores & a warm southern welcome." },
  { id: "fukuoka", name: "Fukuoka", region: "Kyushu", nights: 1, tagline: "Park-side afternoons. Ramen-filled evenings." },
  { id: "hiroshima", name: "Hiroshima", region: "Honshu", nights: 2, tagline: "A place to reflect, and an island to remember." },
  { id: "kyoto", name: "Kyoto", region: "Honshu", nights: 4, tagline: "Old lanes, quiet temples & Kansai adventures." },
  { id: "tokyo", name: "Tokyo", region: "Honshu", nights: 2, tagline: "A short first taste, with more saved for the finale." },
  { id: "hakodate", name: "Hakodate", region: "Hokkaido", nights: 2, tagline: "Northern sea air & a city of sparkling lights." },
  { id: "sapporo", name: "Sapporo", region: "Hokkaido", nights: 3, tagline: "Early-winter streets, warm bowls & room to slow down." },
  { id: "tokyo-finale", name: "Tokyo finale", region: "Honshu", nights: 3, tagline: "Four final calendar days, including arrival and departure." },
];

const days = [
  { stop: "kagoshima", title: "Hello, southern Japan", description: "Arrive and ease into the journey. Keep today light, especially after a long flight.", highlights: ["Wander Tenmonkan's shopping streets", "Shiroyama volcano views, if time allows", "Local black pork for dinner"], travel: "Arrive at Kagoshima Airport; allow time for the airport bus into the city." },
  { stop: "kagoshima", title: "Across to the volcano", description: "Spend the daylight hours on Sakurajima. November is generally milder here than in the north, but bring a layer for the ferry.", highlights: ["Ferry across Kagoshima Bay", "Waterfront walks and permitted volcanic viewpoints", "A footbath before returning to town"], travel: "Sakurajima ferry: approximately 15 minutes each way. Check current JMA volcanic warnings and local access restrictions before leaving. If access or weather is unsuitable, stay in Kagoshima for Sengan-en and indoor sightseeing." },
  { stop: "fukuoka", title: "The city that feeds you", description: "Head north to Fukuoka for green spaces, city exploring, and a very good evening meal.", highlights: ["A relaxed walk around Ohori Park", "Explore central Fukuoka", "Hakata ramen or a riverside yatai stall"], travel: "Kagoshima-Chuo to Hakata by shinkansen: roughly 1 hour 20 minutes to 1 hour 45 minutes, depending on service." },
  { stop: "hiroshima", title: "A moment to reflect", description: "Travel to Hiroshima and give the city's history your time and attention.", highlights: ["Peace Memorial Museum", "Peace Park and the Atomic Bomb Dome", "Hiroshima-style okonomiyaki"], travel: "Hakata to Hiroshima by shinkansen: approximately 1 hour. Reserve museum entry as needed." },
  { stop: "hiroshima", title: "An island beyond the city", description: "Visit Miyajima early on this holiday-weekend Saturday. Enjoy possible autumn color, but treat Mount Misen as optional rather than racing daylight.", highlights: ["Itsukushima Shrine and the waterfront", "Old-town streets and local snacks", "Mount Misen only with clear weather and enough daylight"], travel: "Train to Miyajimaguchi, then ferry to Miyajima. Allow around an hour each way, plus queues. Check tide times, ropeway hours, and the last descent; use shrine and town sightseeing as the fallback." },
  { stop: "kyoto", title: "Into the autumn capital", description: "Settle into your four-night Kyoto base during the November 21-23 holiday weekend. Late November is a good seasonal window for foliage, not a guarantee of peak color.", highlights: ["Higashiyama's atmospheric lanes", "Temple gardens while there is daylight", "Gion at dusk; layers for chilly evenings"], travel: "Hiroshima to Kyoto by shinkansen: approximately 1 hour 40 minutes to 2 hours. Book this transfer and Kyoto accommodation now. Respect private lanes and local photography restrictions." },
  { stop: "kyoto", title: "A holiday taste of Osaka", description: "November 23 is Labor Thanksgiving Day. Put the flexible Osaka food day here and save Arashiyama for Wednesday; Osaka can still be busy.", highlights: ["Kuromon Market, checking individual shop hours", "Osaka Castle grounds or an indoor alternative", "Dotonbori evening food crawl"], travel: "Kyoto to Osaka: approximately 30 minutes by JR special rapid train, plus local travel. Expect holiday crowds and return to Kyoto after dinner." },
  { stop: "kyoto", title: "Red gates & roaming deer", description: "Start Fushimi Inari early, then continue to Nara. With late-autumn daylight, keep the shrine walk short and prioritize Todai-ji over a long summit hike.", highlights: ["A shorter Fushimi Inari torii walk", "Todai-ji before its seasonal closing time", "Nara Park in daylight"], travel: "Continue by train from the Fushimi area to Nara; journey time varies. Confirm opening hours and return to Kyoto in the evening." },
  { stop: "kyoto", title: "Bamboo & autumn river light", description: "Visit Arashiyama on Wednesday, after the holiday weekend. Start early anyway: foliage season remains popular.", highlights: ["Arashiyama bamboo grove", "Tenryu-ji gardens and seasonal color", "Riverside walking or a warm cafe if wet"], travel: "Local train or bus to Arashiyama. Prioritize outdoor sights in daylight. Temple illuminations are optional only after confirming this year's dates and entry arrangements." },
  { stop: "tokyo", title: "Next stop, Tokyo", description: "Take the bullet train east, then settle into Tokyo with a neighborhood afternoon and evening.", highlights: ["Shinkansen journey across central Japan", "Explore Shinjuku", "Find a favorite dinner spot near your hotel"], travel: "Kyoto to Tokyo on a fast shinkansen: approximately 2 hours 15 minutes to 2 hours 30 minutes. Allow time for local transfers." },
  { stop: "tokyo", title: "Tokyo, old & new", description: "Explore the city's traditional side, with room for a museum, park, or a little electronics-store browsing.", highlights: ["Senso-ji and Asakusa shopping streets", "Ueno Park or a museum", "Optional Akihabara visit"], travel: "Use local trains and subway. Pick one museum rather than trying to fit everything in." },
  { stop: "hakodate", title: "North into early winter", description: "Fly to Hakodate on November 28. Expect colder weather than Honshu, possible snow or ice, and sunset around 4 pm; this is not an autumn-foliage stop.", highlights: ["Flight from Tokyo Haneda to Hakodate", "Waterfront or indoor red-brick warehouse browsing", "Mount Hakodate night view only if clear and operating"], travel: "Direct flight: roughly 1 hour 20 minutes to 1 hour 30 minutes in the air. Allow several additional hours for transfers and check-in. Check the short-range forecast and ropeway status; a late arrival means skipping the viewpoint." },
  { stop: "hakodate", title: "Seafood & harbor stories", description: "Use the short daylight window for Goryokaku and Motomachi. Wear grippy waterproof footwear; switch exposed hillside walks for cafes or indoor exhibits if icy.", highlights: ["Morning market seafood breakfast", "Goryokaku tower; park walk if paths are safe", "Motomachi in daylight, or a warm indoor alternative"], travel: "Explore by tram, bus, and on foot. Check attraction hours. Keep tonight as a second chance for the night view, not a guaranteed activity." },
  { stop: "sapporo", title: "Onward to Sapporo", description: "A longer rail day brings you to the northernmost base. An early departure helps preserve a little afternoon daylight; snow is possible, not guaranteed.", highlights: ["Limited-express train north", "A short Odori Park walk if conditions allow", "Susukino and warming miso ramen"], travel: "Hakodate to Sapporo by limited express: approximately 4 hours. Reserve seats and check JR Hokkaido service updates; keep evening plans flexible if delayed." },
  { stop: "sapporo", title: "A winter-minded Otaru detour", description: "Explore the canal and merchant streets in daylight, with glass shops and sushi as warm breaks. Swap this with tomorrow if the weather is poor.", highlights: ["Otaru Canal before dusk", "Glass shops and local crafts", "Sushi and a warm cafe"], travel: "Sapporo to Otaru by train: approximately 30-50 minutes each way. Check services, wear grippy footwear, and avoid slippery waterside paths." },
  { stop: "sapporo", title: "A little breathing room", description: "A flexible Sapporo day before flying south. Use it for city food and indoor sights, or move Otaru here if yesterday's weather was worse. Do not rely on ski areas being open this early.", highlights: ["Central Sapporo cafes and food browsing", "An indoor museum or shopping, checking opening hours", "Optional winter illuminations only if dates are confirmed"], travel: "Stay in Sapporo tonight. This is sightseeing flexibility, not a guaranteed extra night for flight disruption. Check tomorrow's flight and weather before packing." },
  { stop: "tokyo-finale", title: "Tokyo addendum: back to the city", description: "December 3 starts the four-day Tokyo finale. Fly south, check in, and keep the rest of the day light. Arrival travel is included in these four calendar days.", highlights: ["New Chitose to Tokyo Haneda flight", "Check into your final Tokyo base", "A relaxed neighborhood dinner"], travel: "Sapporo to New Chitose by rapid train: approximately 40 minutes. Flight to Haneda: roughly 1 hour 40 minutes. Prefer an earlier flight and allow weather margin; this is not a same-day connection to your international departure." },
  { stop: "tokyo-finale", title: "From forest to skyline", description: "A full Tokyo day for Meiji Shrine, Harajuku, and Shibuya. Early-December foliage may linger, but choose gardens by current conditions rather than a promised peak.", highlights: ["Meiji Shrine in daylight", "Harajuku and nearby streets", "Shibuya and an optional sunset observation deck"], travel: "Use local rail. Check shrine closing time and book your preferred observation deck now; sunset is much earlier than in summer. Use indoor shopping or an art museum if wet." },
  { stop: "tokyo-finale", title: "A Saturday to make your own", description: "Your second full finale day is a Saturday. Choose shopping, gardens, or a prebooked art museum; Kamakura is an alternative if you want another day trip and the weather is good.", highlights: ["Shopping or a ticketed art museum", "Alternatively: Kamakura temples in daylight", "A final celebratory Tokyo dinner"], travel: "Kamakura is roughly an hour by train from many central Tokyo stations. Expect weekend crowds and check temple hours. Keep major souvenir shopping here rather than carrying it through Hokkaido." },
  { stop: "tokyo-finale", title: "Until next time, Japan", description: "December 6 is departure day from Tokyo. A short local breakfast or walk is optional only if your flight time allows. No overnight stay is planned today.", highlights: ["An easy breakfast near your hotel", "Collect bags and head to your booked airport", "International departure from Tokyo"], travel: "Confirm whether your flight uses Haneda or Narita: they are different airports with different transfer times. Leave check-in and disruption margin; do not add a distant day trip today." },
].map((day, index) => ({
  ...day,
  number: index + 1,
  date: new Date(Date.UTC(2026, 10, 17 + index)),
}));

const dateFormat = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
function dateLabel(day) {
  return dateFormat.format(day.date);
}

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
  document.querySelector("#stop-position").textContent = `${String(index + 1).padStart(2, "0")} / ${String(stops.length).padStart(2, "0")}`;
  document.querySelector("#stop-detail").innerHTML = `
    <span class="region-label">${stop.region.toUpperCase()}${stop.id === "tokyo-finale" ? " / TOKYO ADDENDUM" : ""}</span>
    <h2 class="stop-title">${stop.name}</h2>
    <p class="stop-tagline">${stop.tagline}</p>
    <div class="stay-meta"><strong>Days ${stopDays[0].number}${stopDays.length > 1 ? `-${stopDays.at(-1).number}` : ""}</strong><strong>${stop.nights} ${stop.nights === 1 ? "night" : "nights"} here</strong></div>
    <p class="stay-dates">${dateLabel(stopDays[0])}${stopDays.length > 1 ? ` - ${dateLabel(stopDays.at(-1))}` : ""}, 2026</p>`;
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
    <span class="day-label">DAY ${String(day.number).padStart(2, "0")} / ${day.number === days.length ? "DEPARTURE" : stop.id === "tokyo-finale" ? "TOKYO ADDENDUM" : "THE PLAN"}</span>
    <time class="detail-date" datetime="${day.date.toISOString().slice(0, 10)}">${dateLabel(day)}, 2026</time>
    <h3>${day.title}</h3><p class="day-description">${day.description}</p>
    <ul class="highlights">${day.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
    <div class="travel-box"><strong>GETTING AROUND</strong>${day.travel}</div>`;
  stopPicker.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.stop === stop.id)));
  document.querySelectorAll("[data-map-stop]").forEach((marker) => marker.classList.toggle("active", marker.dataset.mapStop === (stop.id === "tokyo-finale" ? "tokyo" : stop.id)));
  document.querySelector("#return-flight").classList.toggle("active-return", stop.id === "tokyo-finale");
  document.querySelector("#previous-stop").disabled = index === 0;
  document.querySelector("#next-stop").disabled = index === stops.length - 1;
  timeline.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.day) === number)));
}

function renderTimeline() {
  const visibleDays = days.filter((day) => selectedRegion === "all" || (selectedRegion === "addendum" ? day.stop === "tokyo-finale" : stops.find((stop) => stop.id === day.stop).region === selectedRegion));
  document.querySelector("#day-count").textContent = `${visibleDays.length} days${selectedRegion === "all" ? " northbound, then back to Tokyo" : selectedRegion === "addendum" ? " in the Tokyo addendum (December 3-6)" : ` in ${selectedRegion}`}. Select a day to see the details above.`;
  timeline.replaceChildren(...visibleDays.map((day) => {
    const stop = stops.find((item) => item.id === day.stop);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-card";
    button.dataset.day = day.number;
    button.setAttribute("aria-pressed", String(day.number === selectedDay));
    button.classList.toggle("addendum-card", day.stop === "tokyo-finale");
    button.innerHTML = `<span class="card-top"><strong>DAY ${String(day.number).padStart(2, "0")}</strong><span>${day.stop === "tokyo-finale" ? "Addendum" : stop.region}</span></span><time class="card-date" datetime="${day.date.toISOString().slice(0, 10)}">${dateLabel(day)}</time><span class="card-title">${day.title}</span><span class="card-bottom">${day.number === days.length ? "Depart from Tokyo" : `Stay in ${stop.id === "tokyo-finale" ? "Tokyo" : stop.name}`} <span aria-hidden="true">&#8599;</span></span>`;
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
