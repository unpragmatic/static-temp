# Northbound / Japan

A dependency-free, interactive overview of a 20-day Japan trip dated
November 17-December 6, 2026. Travel from Kagoshima to Sapporo, with a short
two-day Tokyo stay northbound and a four-calendar-day Tokyo addendum at the end.
The addendum includes arrival, two full sightseeing days, and departure.
Explore seven cities across eight stays on a schematic route map, select
dated individual days, and filter by island or Tokyo addendum. Day 20 is
departure from Tokyo; the trip includes 19 nights.

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
