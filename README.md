# Northbound / Japan

A dependency-free, interactive overview of a 20-day Japan trip dated
November 18-December 7, 2026, arriving at Kagoshima Airport at 15:00.
Compare three selectable routes: A (balanced, including two initial Tokyo
nights and Hakodate), B (fewer moves, flying Kansai-Sapporo), and C (Sendai
and Matsushima, reaching Hakodate by rail).
All finish with a four-calendar-day Tokyo addendum, December 4-7.
The addendum includes arrival, two full sightseeing days, and departure.
The map, stay breakdown, daily schedules, and filters update with the chosen
route. Stay tiles and the comparison highlight itinerary days, nights, and
check-in/check-out dates. Days are assigned to the overnight base, with day 20
assigned to Tokyo for departure; they are not full sightseeing-day counts.
Each route includes 19 nights. All daily departure targets are Japan Standard
Time and are suggestions, not checked transport timetables. Only the day 1
arrival time is supplied; the final hotel departure is relative to the
international flight because its airport and time have not been supplied.

The plan accounts for the November 21-23 holiday weekend, late-autumn foliage
opportunities, and early-winter Hokkaido with short daylight and indoor
alternatives. Dates and route are planning assumptions, not bookings.
Transport times and seasonal guidance are approximate, not live forecasts,
confirmed openings, or availability checks.

## Run locally

```sh
python3 -m http.server 8000 --directory site
```

Open http://localhost:8000. The HTML, CSS, and JavaScript live in `site/`; no
build step or package installation is required.

## Publish with GitHub Pages

In the repository's **Settings > Pages**, select **GitHub Actions** as the
source. The `Deploy Japan itinerary to Pages` workflow deploys only `site/`
on relevant pushes to `main`, or when manually run from the Actions tab.
Pages must be enabled by a repository administrator first. This dedicated
repository is public and contains only the itinerary app and publishing files.

The default project URL is https://unpragmatic.github.io/static-temp/ unless the
repository uses a custom domain. Treat the workflow's deployment URL as the
authoritative address after a successful deployment.
