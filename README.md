# Northbound / Japan

A dependency-free, interactive overview of an 18-day Japan trip from Kagoshima
to Sapporo. Explore seven overnight bases on a schematic route map, select
individual days, and filter the full itinerary by island. Day 18 is departure;
the trip includes 17 nights. Transport guidance is approximate, not live.

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
