const places = {
  kagoshima: { name: "Kagoshima", region: "Kyushu", tagline: "Volcanic shores & a gentle landing." },
  fukuoka: { name: "Fukuoka", region: "Kyushu", tagline: "Park-side afternoons. Ramen-filled evenings." },
  hiroshima: { name: "Hiroshima", region: "Honshu", tagline: "Time to reflect, and an island to remember." },
  kyoto: { name: "Kyoto", region: "Honshu", tagline: "Autumn gardens, old lanes & Kansai day trips." },
  tokyo: { name: "Tokyo", region: "Honshu", tagline: "A first taste before the northern journey." },
  sendai: { name: "Sendai", region: "Honshu", tagline: "A Tohoku rail stop, with Matsushima nearby." },
  hakodate: { name: "Hakodate", region: "Hokkaido", tagline: "Northern sea air & weather-dependent night views." },
  sapporo: { name: "Sapporo", region: "Hokkaido", tagline: "Early-winter streets & warming bowls." },
  "tokyo-finale": { name: "Tokyo finale", region: "Honshu", tagline: "Four calendar days: arrival, two full days, departure." },
};

// Each schedule is a planning target, not a published train or flight timetable.
const plans = {
  arrival: {
    stop: "kagoshima", title: "Land at 15:00. Take it easy.",
    description: "Your stated Kagoshima arrival is 15:00 on November 18. Do not book a temple visit or volcano excursion today; bags and the airport transfer take the remaining daylight.",
    departure: "Airport bus target 16:00-16:30",
    schedule: [["15:00", "Arrive at Kagoshima Airport (your supplied arrival time)."], ["16:00-16:30", "Target an airport bus after baggage collection; take a later one if needed."], ["17:00-17:30", "Reach the city and check in, allowing traffic and local transfer time."], ["18:30", "Easy Tenmonkan dinner; local black pork if you like."]],
    travel: "Airport bus to Kagoshima-Chuo: roughly 40-60 minutes on board, plus waiting and hotel access. Confirm the flight and bus service; the bus target is not a booked departure.",
  },
  volcano: {
    stop: "kagoshima", title: "Across to Sakurajima",
    description: "Use daylight for the ferry, waterfront and permitted viewpoints. Bring a windproof layer. This is a local outing, not a volcano summit hike.",
    departure: "Leave hotel 08:30",
    schedule: [["08:30", "Leave for the ferry terminal."], ["09:30", "Aim to reach Sakurajima; explore accessible waterfront sights."], ["14:30", "Start back toward the ferry before daylight runs short."], ["16:00", "Return to the city; keep the evening free."]],
    travel: "Ferry crossing: approximately 15 minutes. Check JMA volcanic warnings, local access restrictions, and weather that morning. Substitute Sengan-en and indoor city sightseeing if unsuitable.",
  },
  kagoshimaExtra: {
    stop: "kagoshima", title: "One more southern morning",
    description: "The slower route buys a proper Kagoshima day beyond the arrival afternoon. Keep this interchangeable with Sakurajima if the weather is better today.",
    departure: "Leave hotel 09:00",
    schedule: [["09:00", "Leave for Sengan-en, after checking opening hours."], ["12:30", "Lunch and a warm indoor break."], ["14:00", "City museum or waterfront, depending on weather."], ["16:30", "Return and pack for tomorrow."]],
    travel: "Local bus or taxi; allow 30-45 minutes each way for city access depending on hotel location. Entry and opening hours need checking.",
  },
  fukuokaArrival: {
    stop: "fukuoka", title: "North for a bowl of ramen",
    description: "Travel to Hakata, leave bags at the hotel if available, then spend the afternoon in Fukuoka. Hotel check-in may be later than your arrival.",
    departure: "Leave hotel 08:15",
    schedule: [["08:15", "Leave for Kagoshima-Chuo; allow station and luggage time."], ["09:00", "Target a shinkansen departure around this time."], ["10:30-11:00", "Reach Hakata, then store bags if available."], ["13:00", "Ohori Park; ramen or a yatai stall in the evening."]],
    travel: "Kagoshima-Chuo to Hakata: roughly 1 hour 20 minutes to 1 hour 45 minutes on board. Choose an actual service before finalizing the morning.",
  },
  fukuokaExtra: {
    stop: "fukuoka", title: "A slower Fukuoka day",
    description: "Stay put over the holiday weekend rather than adding another hotel change. Explore the city or choose Dazaifu, without trying to do both in depth.",
    departure: "Leave hotel 09:00",
    schedule: [["09:00", "Leave for a city walk or the train toward Dazaifu."], ["10:30", "Explore your chosen neighborhood or shrine area."], ["14:00", "Lunch and an indoor break; expect weekend crowds."], ["16:30", "Return to the hotel before another food-focused evening."]],
    travel: "Dazaifu generally needs around an hour each way from central Fukuoka, depending on connections. Check current shrine access and local transport.",
  },
  hiroshimaArrival: {
    stop: "hiroshima", title: "A moment to reflect",
    description: "Give the Peace Memorial Museum and park an unhurried afternoon. Check museum entry arrangements before travel.",
    departure: "Leave hotel 08:30",
    schedule: [["08:30", "Leave for Hakata Station."], ["09:15", "Target a shinkansen around this time."], ["10:30-11:30", "Reach Hiroshima, store bags, and have an early lunch."], ["12:30", "Peace Memorial Museum and park; okonomiyaki for dinner."]],
    travel: "Hakata to Hiroshima: approximately 1 hour on board, plus hotel transfers. November 21-23 is a holiday weekend: reserve the actual train and museum entry as needed.",
  },
  miyajima: {
    stop: "hiroshima", title: "An island beyond the city",
    description: "Prioritize Itsukushima Shrine, the waterfront and old-town streets. Mount Misen is optional only with safe weather, operating transport and ample daylight.",
    departure: "Leave hotel 07:45",
    schedule: [["07:45", "Leave for Miyajimaguchi by local transport."], ["09:00", "Aim to be on Miyajima; allow ferry queues."], ["14:30", "Start returning from viewpoints; check last ropeway descent if used."], ["15:30-16:30", "Ferry and train back toward Hiroshima."]],
    travel: "Allow roughly 60-90 minutes each way from a central Hiroshima hotel, including the ferry. Check tide times, seasonal hours and holiday queues.",
  },
  kyotoArrival: {
    stop: "kyoto", title: "Into the autumn capital",
    description: "Travel to Kyoto, then keep the eastern historic district walk compact. Foliage-season crowds remain likely; peak color is not guaranteed.",
    departure: "Leave hotel 08:00",
    schedule: [["08:00", "Leave for Hiroshima Station."], ["09:00", "Target a shinkansen around this time."], ["11:00-12:00", "Reach Kyoto, store bags if possible, and lunch."], ["13:30", "Higashiyama in daylight; Gion around dusk."]],
    travel: "Hiroshima to Kyoto: approximately 1 hour 40 minutes to 2 hours on board. On the balanced and rail routes this transfer is November 23, a national holiday: reserve seats now. Respect private lanes and photography rules.",
  },
  osaka: {
    stop: "kyoto", title: "A taste of Osaka",
    description: "Take a food-focused day trip rather than another hotel move. Osaka Castle grounds are optional; leave room for an unhurried dinner.",
    departure: "Leave hotel 09:00",
    schedule: [["09:00", "Leave for the train to Osaka."], ["10:00-10:30", "Market or neighborhood exploring; check shop hours."], ["17:00", "Dotonbori dinner and lights."], ["20:00", "Aim to start the journey back to Kyoto."]],
    travel: "Kyoto to Osaka Station: around 30 minutes by JR special rapid, plus local travel to the market and Dotonbori. Return to the same Kyoto hotel.",
  },
  nara: {
    stop: "kyoto", title: "Red gates & roaming deer",
    description: "Keep Fushimi Inari to a shorter lower-path visit, then prioritize Todai-ji and Nara Park before dusk. A full shrine summit hike would make this too rushed.",
    departure: "Leave hotel 07:00",
    schedule: [["07:00", "Leave for Fushimi Inari."], ["09:15", "Start the train journey onward to Nara."], ["11:00-14:30", "Todai-ji, lunch and Nara Park; check seasonal closing time."], ["15:30", "Begin returning to Kyoto."]],
    travel: "Allow around 1-1.5 hours from the Fushimi area to Nara with connections and walking, depending on route. If tired, choose just Nara or just southern Kyoto.",
  },
  arashiyama: {
    stop: "kyoto", title: "Bamboo & autumn river light",
    description: "An early weekday visit improves the pace, though foliage season is still busy. Use Tenryu-ji gardens and riverside walks as the main sights.",
    departure: "Leave hotel 07:15",
    schedule: [["07:15", "Leave for Arashiyama."], ["08:15", "Bamboo grove, then the gardens when open."], ["12:00", "Lunch and a warm break."], ["15:00", "Return or choose one additional nearby garden if daylight allows."]],
    travel: "Allow roughly 30-60 minutes each way from your Kyoto hotel. Check garden hours and any illumination tickets separately; no special event is assumed.",
  },
  kyotoExtra: {
    stop: "kyoto", title: "Kyoto without a checklist",
    description: "The slower route adds a fifth Kyoto night. Use this flexible day for a garden missed earlier, a rainy-day museum, or a late start.",
    departure: "Leave hotel 09:00",
    schedule: [["09:00", "Leave for one chosen garden or museum, checking hours."], ["12:00", "Lunch near the sight rather than crossing the city."], ["14:00", "A short neighborhood walk or cafe."], ["16:00", "Return, pack, and check tomorrow's flight."]],
    travel: "Local sightseeing only. Avoid adding a distant day trip before the longer Kyoto-to-Sapporo transfer.",
  },
  tokyoArrival: {
    stop: "tokyo", title: "A short first taste of Tokyo",
    description: "The balanced route retains two nights here. Explore near your hotel today and save major shopping for the finale.",
    departure: "Leave hotel 08:00",
    schedule: [["08:00", "Leave for Kyoto Station."], ["09:00", "Target a shinkansen to Tokyo."], ["11:30-12:30", "Reach the city and store bags if available."], ["14:00", "Explore Shinjuku or your hotel's neighborhood."]],
    travel: "Kyoto to Tokyo: approximately 2 hours 15 minutes to 2 hours 30 minutes on a fast shinkansen, plus local transfers.",
  },
  tokyoOld: {
    stop: "tokyo", title: "Tokyo, old & new",
    description: "Asakusa and Ueno fit into a single day; choose one museum rather than trying to collect them all. This is a Saturday, so expect crowds.",
    departure: "Leave hotel 08:00",
    schedule: [["08:00", "Leave for Asakusa."], ["09:00", "Senso-ji and traditional streets."], ["12:30", "Ueno lunch and one museum or park visit."], ["17:00", "Return or optional Akihabara; pack for tomorrow's flight."]],
    travel: "Use subway and local trains. Check your selected museum's hours and ticketing; confirm the next morning's airport transfer.",
  },
  hakodateFlight: {
    stop: "hakodate", title: "Fly north into early winter",
    description: "Prefer a morning flight so there is time to settle in before sunset around 4 pm. The suggested flight window is not a confirmed service or booking.",
    departure: "Leave Tokyo hotel 07:00",
    schedule: [["07:00", "Leave for Haneda; revise once the actual flight is booked."], ["08:00-08:30", "Target arrival at the terminal, at least 90 minutes before departure."], ["10:00-11:00", "Desired flight departure window to Hakodate."], ["13:00-14:00", "Target the city after landing and bus; waterfront or indoor browsing."]],
    travel: "Haneda-Hakodate: around 1 hour 20 minutes to 1 hour 30 minutes flying; airport-to-city bus around 20-30 minutes. Mount Hakodate is optional only if clear and operating; keep tomorrow as a second chance.",
  },
  hakodateLocal: {
    stop: "hakodate", title: "Seafood & harbor stories",
    description: "Use daylight for Goryokaku and Motomachi. Ice can make hills unsafe: substitute cafes or indoor exhibits instead of pushing through.",
    departure: "Leave hotel 08:00",
    schedule: [["08:00", "Market breakfast, checking individual opening hours."], ["09:30", "Tram or bus toward Goryokaku."], ["13:00", "Motomachi if paths are safe; otherwise an indoor alternative."], ["15:30", "Finish exposed walks; optional night view later if clear."]],
    travel: "Local tram, bus and walking. Wear grippy waterproof shoes, check attraction hours and ropeway status, and allow time for winter conditions.",
  },
  sapporoRail: {
    stop: "sapporo", title: "Onward to Sapporo",
    description: "A substantial rail day reaches the northernmost base. Leave early to preserve a little daylight; keep dinner plans flexible if services are delayed.",
    departure: "Leave Hakodate hotel 07:30",
    schedule: [["07:30", "Leave for Hakodate Station."], ["08:00-09:00", "Target a limited-express departure in this window."], ["12:00-13:30", "Target arrival in Sapporo, then luggage drop and lunch."], ["14:00", "Short central walk if conditions allow; warm ramen afterward."]],
    travel: "Hakodate-Sapporo: approximately 4 hours on the limited express, plus station transfers. Reserve seats and check JR Hokkaido service updates.",
  },
  sapporoFlight: {
    stop: "sapporo", title: "Kansai straight to Hokkaido",
    description: "The slower route skips both the initial Tokyo stay and Hakodate. Fly from Osaka Itami to New Chitose, subject to availability, rather than adding a long northbound rail day.",
    departure: "Leave Kyoto hotel 07:00",
    schedule: [["07:00", "Leave for Itami Airport; allow 75-105 minutes from the hotel."], ["09:00", "Target terminal arrival at least 90 minutes before the booked flight."], ["10:30-11:30", "Desired Itami-New Chitose flight departure window."], ["14:00-15:30", "Target Sapporo hotel area after landing, bags and train."]],
    travel: "Flight: roughly 2 hours; New Chitose-Sapporo rapid train: around 40 minutes. Expect about 7-8 hours hotel-to-hotel including buffers. If using Kansai Airport instead, rework the longer airport access and the whole morning.",
  },
  otaru: {
    stop: "sapporo", title: "A winter-minded Otaru detour",
    description: "Visit the canal in daylight, with glass shops and sushi as warm breaks. Swap with a Sapporo day if the forecast is poor.",
    departure: "Leave hotel 08:15",
    schedule: [["08:15", "Leave for Sapporo Station."], ["09:00", "Target a train toward Otaru."], ["10:00-14:30", "Canal, merchant streets, lunch and indoor browsing."], ["15:00", "Begin the return before it gets much darker."]],
    travel: "Sapporo-Otaru: approximately 30-50 minutes each way by train. Check service alerts and avoid icy waterside paths.",
  },
  sapporoExtra: {
    stop: "sapporo", title: "A little breathing room",
    description: "A flexible city day can absorb a weather-related sightseeing swap. It does not guarantee transport will recover or that ski areas will be open this early.",
    departure: "Leave hotel 09:30",
    schedule: [["09:30", "Check conditions, then leave for a local cafe or museum."], ["12:00", "Lunch and food browsing."], ["14:00", "Short park walk if safe, otherwise indoor shopping."], ["16:00", "Return or continue indoors; check onward transport."]],
    travel: "Local sightseeing only. Confirm museum hours and any event dates. Snow and winter illuminations are not assumed or guaranteed.",
  },
  sapporoExtraTwo: {
    stop: "sapporo", title: "An extra northern slow day",
    description: "The slower route has four Sapporo nights, giving Otaru an extra weather-swap opportunity. Do not fill every hour with bookings.",
    departure: "Leave hotel 09:30",
    schedule: [["09:30", "Leave for whichever local sight you deferred."], ["12:30", "A relaxed lunch."], ["14:00", "Indoor activity or a short safe walk."], ["16:00", "Pack and check tomorrow's flight status."]],
    travel: "Stay in Sapporo tonight. This is an extra sightseeing day, not permission to move tomorrow's flight without checking the booking.",
  },
  sendaiArrival: {
    stop: "sendai", title: "Through Tokyo, onward to Sendai",
    description: "The rail-focused route replaces the initial Tokyo stay with Tohoku. This is a longer transfer day, not a full sightseeing day in either city.",
    departure: "Leave Kyoto hotel 07:00",
    schedule: [["07:00", "Leave for Kyoto Station."], ["08:00", "Target a shinkansen toward Tokyo."], ["10:30-11:30", "Allow 30-60 minutes at Tokyo for the separately reserved onward train."], ["13:00-14:30", "Target Sendai arrival and check-in area; short central walk."]],
    travel: "Kyoto-Tokyo-Sendai: budget around 4.5-5.5 hours station-to-station with the connection, or 6-7.5 hours hotel-to-hotel. Reserve both legs, especially Hayabusa services with reserved seating.",
  },
  matsushima: {
    stop: "sendai", title: "Matsushima, without the rush",
    description: "A coastal day trip is the rail route's main extra sight. The bay can be cold and windy; keep a Sendai museum or city alternative for bad weather.",
    departure: "Leave Sendai hotel 08:00",
    schedule: [["08:00", "Leave for the local train."], ["09:30", "Aim for Matsushima-Kaigan and the temple area."], ["12:00", "Lunch; optional boat only if operating and conditions suit."], ["14:30", "Start back to Sendai before dusk."]],
    travel: "Sendai-Matsushima-Kaigan: roughly 40 minutes on the train, plus access and waiting. Confirm temple hours and boat operations; no cruise booking is assumed.",
  },
  hakodateRail: {
    stop: "hakodate", title: "Under the strait by rail",
    description: "Take the shinkansen through Tohoku and the Seikan Tunnel, then transfer to central Hakodate. This replaces the northbound flight.",
    departure: "Leave Sendai hotel 07:30",
    schedule: [["07:30", "Leave for Sendai Station."], ["08:00-09:00", "Target a reserved Hayabusa service toward Shin-Hakodate-Hokuto."], ["12:00-13:30", "Target central Hakodate after the relay train and hotel access."], ["14:00", "Short waterfront walk; night view only if weather and operations allow."]],
    travel: "Budget roughly 3.5-4.5 hours station-to-station with the relay connection, or 4.5-6 hours hotel-to-hotel. Check the actual service: not every Hayabusa continues to Hokkaido. Reserve seats.",
  },
  finaleArrival: {
    stop: "tokyo-finale", title: "Tokyo addendum: back to the city",
    description: "December 4 starts the four-day Tokyo finale on every route. Fly south and keep the afternoon easy. Arrival travel counts as one of the four calendar days.",
    departure: "Leave Sapporo hotel 07:00",
    schedule: [["07:00", "Leave for New Chitose Airport, allowing train access and waiting."], ["08:30", "Target terminal arrival at least 90 minutes before the flight."], ["10:00-11:00", "Desired New Chitose-Haneda departure window."], ["13:30-15:00", "Target the Tokyo hotel area; easy neighborhood dinner later."]],
    travel: "Train to New Chitose: around 40 minutes; flight to Haneda: roughly 1 hour 40 minutes. Allow winter disruption margin. Your international departure is three nights later, not a same-day connection.",
  },
  finaleSkyline: {
    stop: "tokyo-finale", title: "From forest to skyline",
    description: "Saturday is a full day for Meiji Shrine, Harajuku and Shibuya. Early-December color may linger but is not a guaranteed foliage peak.",
    departure: "Leave hotel 08:00",
    schedule: [["08:00", "Leave for Meiji Shrine; confirm opening hours."], ["11:00", "Harajuku and lunch nearby."], ["14:00", "Shibuya exploring and an optional prebooked observation deck."], ["18:00", "Dinner; keep indoor alternatives if wet."]],
    travel: "Local rail and walking. Reserve timed attractions now and choose a sunset slot from the actual sunset and ticket schedule, not a summer timetable.",
  },
  finaleFree: {
    stop: "tokyo-finale", title: "A Sunday to make your own",
    description: "Choose shopping, a prebooked art museum, or Asakusa if you skipped the first Tokyo stay. Kamakura is an alternative, not an addition to all of those.",
    departure: "Leave hotel 08:00",
    schedule: [["08:00", "Leave early for Kamakura or Asakusa; start later if choosing a museum with later opening."], ["10:00-15:00", "One main area or activity, with lunch and breaks."], ["16:00", "Return to Tokyo if on a day trip."], ["18:30", "Final dinner; collect souvenirs and pack."]],
    travel: "Kamakura is roughly an hour from many central Tokyo stations. Expect Sunday crowds, check temple hours, and keep major shopping here instead of carrying it through Hokkaido.",
  },
  departure: {
    stop: "tokyo-finale", title: "December 7: until next time",
    description: "The international flight time and airport are not supplied. Today's hotel departure must therefore be relative to your actual flight, not an invented fixed clock time.",
    departure: "Leave 4-5h before flight (HND); 5-6h (NRT)",
    schedule: [["Before leaving", "Check the actual flight time, terminal, baggage allowance and airport."], ["Flight minus 4-5h / 5-6h", "Suggested hotel departure buffer for Haneda / Narita from central Tokyo; allow more for distant hotels or disruption."], ["Flight minus 3h", "Target arrival at the international terminal, or earlier if your airline requires it."], ["Booked flight time", "Depart Tokyo. No overnight stay today."]],
    travel: "Haneda and Narita are different airports. Confirm the real door-to-terminal journey and airline cutoff; the hotel departure buffers assume roughly 1-2 hours of access and contingency. No distant day trip today.",
  },
};

const routes = [
  {
    id: "balanced", name: "A / Balanced classic", badge: "Recommended for variety",
    summary: "Keep the original mix: two Tokyo nights on the way north, Hakodate, then Sapporo.",
    gain: "Most familiar route; both Tokyo visits and two different Hokkaido cities.",
    tradeoff: "Eight hotel stays, including a one-night Fukuoka stop; more packing than route B.",
    flightCount: 2, longest: "About 6-7h hotel-to-hotel from Tokyo to Hakodate, including airport buffers",
    cost: "Mix of rail and two domestic flights; compare live fares before deciding.",
    booking: "Book Kyoto November 23-27, Haneda-Hakodate November 29, and New Chitose-Haneda December 4.",
    sequence: ["arrival", "volcano", "fukuokaArrival", "hiroshimaArrival", "miyajima", "kyotoArrival", "osaka", "nara", "arashiyama", "tokyoArrival", "tokyoOld", "hakodateFlight", "hakodateLocal", "sapporoRail", "otaru", "sapporoExtra", "finaleArrival", "finaleSkyline", "finaleFree", "departure"],
    edges: [
      ["rail", "M96 472 109 420 180 391 268 376 370 324"],
      ["flight", "M370 324 Q501 231 413 148"],
      ["rail", "M413 148 461 109"],
    ],
  },
  {
    id: "slow", name: "B / Fewer moves", badge: "Best for a gentler pace",
    summary: "Extra time in Kagoshima, Fukuoka and Kyoto; fly Kansai-Sapporo and save Tokyo for the end.",
    gain: "Six hotel stays, no one-night stop, and four nights in Sapporo for weather flexibility.",
    tradeoff: "Skip Hakodate and the first Tokyo stay. Kyoto-airport-Sapporo is still a long travel day.",
    flightCount: 2, longest: "About 7-8.5h hotel-to-hotel from Kyoto to Sapporo",
    cost: "Fewer rail legs and hotel moves; Kansai-Sapporo airfare can change the saving.",
    booking: "Book Kyoto November 25-30, Itami-New Chitose November 30, and New Chitose-Haneda December 4.",
    sequence: ["arrival", "volcano", "kagoshimaExtra", "fukuokaArrival", "fukuokaExtra", "hiroshimaArrival", "miyajima", "kyotoArrival", "arashiyama", "nara", "osaka", "kyotoExtra", "sapporoFlight", "otaru", "sapporoExtra", "sapporoExtraTwo", "finaleArrival", "finaleSkyline", "finaleFree", "departure"],
    edges: [
      ["rail", "M96 472 109 420 180 391 268 376"],
      ["flight", "M268 376 Q510 310 461 109"],
    ],
  },
  {
    id: "rail", name: "C / Tohoku by rail", badge: "Best for train travel",
    summary: "Trade the first Tokyo stay for Sendai and Matsushima; reach Hakodate by shinkansen.",
    gain: "Add Tohoku and the Seikan Tunnel; only one domestic flight after your Kagoshima arrival.",
    tradeoff: "A long Kyoto-Sendai day, more train reservations, and no first Tokyo sightseeing stay.",
    flightCount: 1, longest: "About 6-7.5h hotel-to-hotel from Kyoto to Sendai",
    cost: "Usually the strongest rail-cost commitment; price the extra shinkansen legs against airfares.",
    booking: "Book Kyoto November 23-27, Kyoto-Sendai November 27, Sendai-Hakodate November 29, and the December 4 return flight.",
    sequence: ["arrival", "volcano", "fukuokaArrival", "hiroshimaArrival", "miyajima", "kyotoArrival", "osaka", "nara", "arashiyama", "sendaiArrival", "matsushima", "hakodateRail", "hakodateLocal", "sapporoRail", "otaru", "sapporoExtra", "finaleArrival", "finaleSkyline", "finaleFree", "departure"],
    edges: [
      ["rail", "M96 472 109 420 180 391 268 376 370 324 399 255 413 148 461 109"],
    ],
  },
];

const dateFormat = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
const dateLabel = (day) => dateFormat.format(day.date);
let selectedRoute = routes[0];
let days = [];
let stops = [];
let selectedDay = 1;
let selectedRegion = "all";
const stopPicker = document.querySelector("#stop-picker");
const dayPicker = document.querySelector("#day-picker");
const timeline = document.querySelector("#timeline");

function routeDays(route) {
  return route.sequence.map((key, index) => ({
    ...plans[key], number: index + 1, date: new Date(Date.UTC(2026, 10, 18 + index)),
  }));
}

function routeStops(route) {
  const itinerary = routeDays(route);
  return [...new Set(itinerary.map((day) => day.stop))].map((id) => ({
    ...places[id], id,
    dayCount: itinerary.filter((day) => day.stop === id).length,
    nights: itinerary.filter((day) => day.stop === id && day.number < itinerary.length).length,
    checkIn: itinerary.find((day) => day.stop === id),
    checkOut: itinerary[itinerary.findLastIndex((day) => day.stop === id) + (id === "tokyo-finale" ? 0 : 1)],
  }));
}

function selectDay(number) {
  selectedDay = number;
  const day = days[number - 1];
  const stop = stops.find((item) => item.id === day.stop);
  const index = stops.indexOf(stop);
  const stopDays = days.filter((item) => item.stop === stop.id);
  document.querySelector("#stop-position").textContent = `${String(index + 1).padStart(2, "0")} / ${String(stops.length).padStart(2, "0")}`;
  document.querySelector("#stop-detail").innerHTML = `
    <span class="region-label">${stop.region.toUpperCase()}${stop.id === "tokyo-finale" ? " / TOKYO ADDENDUM" : ""}</span>
    <h2 class="stop-title">${stop.name}</h2><p class="stop-tagline">${stop.tagline}</p>
    <div class="stay-meta"><strong>${stop.dayCount} itinerary ${stop.dayCount === 1 ? "day" : "days"}</strong><strong>${stop.nights} ${stop.nights === 1 ? "night" : "nights"}</strong></div>
    <p class="stay-dates">Check in ${dateLabel(stop.checkIn)} / Check out ${dateLabel(stop.checkOut)}, 2026<br>Assigned days ${stopDays[0].number}${stopDays.length > 1 ? `-${stopDays.at(-1).number}` : ""}; arrival and travel may make days partial.</p>`;
  dayPicker.replaceChildren(...stopDays.map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Day ${item.number}`;
    button.setAttribute("aria-pressed", String(item.number === number));
    button.addEventListener("click", () => {
      selectDay(item.number);
      dayPicker.querySelector('[aria-pressed="true"]').focus();
    });
    return button;
  }));
  document.querySelector("#day-detail").innerHTML = `
    <span class="day-label">DAY ${String(day.number).padStart(2, "0")} / ${day.number === days.length ? "DEPARTURE" : stop.id === "tokyo-finale" ? "TOKYO ADDENDUM" : "THE PLAN"}</span>
    <time class="detail-date" datetime="${day.date.toISOString().slice(0, 10)}">${dateLabel(day)}, 2026</time>
    <h3>${day.title}</h3><p class="day-description">${day.description}</p>
    <p class="departure-callout">${day.departure}</p>
    <h4 class="schedule-heading">Suggested day timings / JST</h4>
    <p class="timing-note">Planning targets, not confirmed transport departures. Only the day 1 arrival time was supplied.</p>
    <ol class="daily-schedule">${day.schedule.map(([time, action]) => `<li><strong>${time}</strong><span>${action}</span></li>`).join("")}</ol>
    <div class="travel-box"><strong>GETTING AROUND</strong>${day.travel}</div>`;
  stopPicker.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.stop === stop.id)));
  document.querySelectorAll(".stay-tile").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.stay === stop.id)));
  document.querySelectorAll("[data-map-stop]").forEach((marker) => marker.classList.toggle("active", marker.dataset.mapStop === (stop.id === "tokyo-finale" ? "tokyo" : stop.id)));
  document.querySelector("#return-flight").classList.toggle("active-return", stop.id === "tokyo-finale");
  document.querySelector("#previous-stop").disabled = index === 0;
  document.querySelector("#next-stop").disabled = index === stops.length - 1;
  timeline.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.day) === number)));
}

function renderTimeline() {
  const visibleDays = days.filter((day) => selectedRegion === "all" || (selectedRegion === "addendum" ? day.stop === "tokyo-finale" : places[day.stop].region === selectedRegion));
  document.querySelector("#day-count").textContent = `${selectedRoute.name}: ${visibleDays.length} days${selectedRegion === "addendum" ? " in the Tokyo addendum (December 4-7)" : ""}. All times are Japan Standard Time. Select a day for its full schedule.`;
  timeline.replaceChildren(...visibleDays.map((day) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-card";
    button.dataset.day = day.number;
    button.setAttribute("aria-pressed", String(day.number === selectedDay));
    button.classList.toggle("addendum-card", day.stop === "tokyo-finale");
    button.innerHTML = `<span class="card-top"><strong>DAY ${String(day.number).padStart(2, "0")}</strong><span>${day.stop === "tokyo-finale" ? "Addendum" : places[day.stop].region}</span></span><time class="card-date" datetime="${day.date.toISOString().slice(0, 10)}">${dateLabel(day)}</time><span class="card-title">${day.title}</span><span class="card-departure">${day.departure}</span><span class="card-bottom">${day.number === days.length ? "Depart from Tokyo" : `Stay in ${day.stop === "tokyo-finale" ? "Tokyo" : places[day.stop].name}`} <span aria-hidden="true">&#8599;</span></span>`;
    button.addEventListener("click", () => {
      selectDay(day.number);
      document.querySelector(".explorer-card").scrollIntoView({ block: "start" });
      dayPicker.querySelector('[aria-pressed="true"]').focus({ preventScroll: true });
    });
    return button;
  }));
}

function selectRoute(route) {
  selectedRoute = route;
  days = routeDays(route);
  stops = routeStops(route);
  document.querySelectorAll("[data-route]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.route === route.id)));
  document.querySelector("#route-summary").innerHTML = `<strong>${route.name}</strong><p>${route.summary}</p><p><b>Book first:</b> ${route.booking}</p>`;
  document.querySelector("#stay-count").textContent = stops.length;
  document.querySelector("#route-lines").innerHTML = route.edges.map(([mode, path]) => `<path d="${path}" class="${mode === "rail" ? "rail-line" : "flight-line"}"/>`).join("");
  document.querySelector("#map-description").textContent = `${route.name}. ${stops.map((stop) => stop.name).join(" to ")}. ${route.flightCount} domestic flights after arrival in Kagoshima. ${route.summary}`;
  stopPicker.replaceChildren(...stops.map((stop) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.stop = stop.id;
    button.textContent = `${stop.name} / ${stop.dayCount}d ${stop.nights}n`;
    button.addEventListener("click", () => selectDay(days.find((day) => day.stop === stop.id).number));
    return button;
  }));
  document.querySelector("#stay-breakdown").replaceChildren(...stops.map((stop) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stay-tile";
    button.dataset.stay = stop.id;
    button.innerHTML = `<span class="stay-name">${stop.name}</span><strong>${stop.dayCount} ${stop.dayCount === 1 ? "day" : "days"} <span>/</span> ${stop.nights} ${stop.nights === 1 ? "night" : "nights"}</strong><span class="stay-tile-dates">In ${dateLabel(stop.checkIn)}<br>Out ${dateLabel(stop.checkOut)}</span>`;
    button.addEventListener("click", () => {
      selectDay(stop.checkIn.number);
      document.querySelector(".explorer-card").scrollIntoView({ block: "start" });
      dayPicker.querySelector('[aria-pressed="true"]').focus({ preventScroll: true });
    });
    return button;
  }));
  document.querySelectorAll("[data-map-stop]").forEach((marker) => {
    const id = marker.dataset.mapStop;
    const stop = stops.find((item) => item.id === id || (id === "tokyo" && item.id === "tokyo-finale"));
    marker.classList.toggle("unused-stop", !stop);
  });
  document.querySelectorAll(".map-hit").forEach((button) => {
    button.disabled = !stops.some((stop) => stop.id === button.dataset.place || (button.dataset.place === "tokyo" && stop.id === "tokyo-finale"));
  });
  renderTimeline();
  selectDay(selectedDay);
}

document.querySelector("#route-picker").replaceChildren(...routes.map((route) => {
  const routeStays = routeStops(route);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "route-option";
  button.dataset.route = route.id;
  button.innerHTML = `<span class="eyebrow">${route.badge}</span><strong>${route.name}</strong><span>${route.summary}</span><span class="route-metrics">${routeStays.length} stays / ${route.flightCount} internal flights</span>`;
  button.addEventListener("click", () => selectRoute(route));
  return button;
}));

document.querySelector("#comparison-body").innerHTML = routes.map((route) => {
  const routeStays = routeStops(route);
  return `<tr><th scope="row">${route.name}</th><td>${routeStays.map((stop) => `<span class="comparison-stay">${stop.name} <strong>${stop.dayCount}d / ${stop.nights}n</strong></span>`).join("")}</td><td>${route.gain}<br><b>Trade-off:</b> ${route.tradeoff}</td><td>${route.longest}<br><b>Cost:</b> ${route.cost}</td></tr>`;
}).join("");

// HTML targets overlay the schematic, preserving keyboard access to map stops.
const mapWrap = document.querySelector(".map-wrap");
document.querySelectorAll("[data-map-stop]").forEach((marker) => {
  const id = marker.dataset.mapStop;
  const circle = marker.querySelector("circle");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "map-hit";
  button.dataset.place = id;
  button.setAttribute("aria-label", `Explore ${places[id].name}`);
  button.style.left = `${Number(circle.getAttribute("cx")) / 600 * 100}%`;
  button.style.top = `${Number(circle.getAttribute("cy")) / 580 * 100}%`;
  button.addEventListener("click", () => {
    const stop = stops.find((item) => item.id === id || (id === "tokyo" && item.id === "tokyo-finale"));
    selectDay(days.find((day) => day.stop === stop.id).number);
  });
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
selectRoute(selectedRoute);
