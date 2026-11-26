---
title: "IDistribution<T>"
description: "Something that can pick a random result of type T, optionally weighted by biome attributes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDistribution&lt;T&gt;

An **interface** in `Root.Township`, `Alta.Caves`.

Something that can pick a random result of type `T`, optionally weighted by biome attributes.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`Distribution<TThis, T, TItem, TFestivityGroup>`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpossibleresults" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/idistributionitem-outt">{"IDistributionItem"}</Link>{"<T>> GetPossibleResults()"}</code> | <span className="api-desc">Every entry that could be picked, including those in active festivity groups.</span> |
| <Link id="m-getrandom" /><code>{"T GetRandom(Func<double> randomValue, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | <span className="api-desc">Picks a weighted random result using the given random source and attributes; can return null.</span> |
