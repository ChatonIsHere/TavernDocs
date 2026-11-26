---
title: "LeaderboardComparer"
description: "Compares leaderboard definitions by their hash, so they work as dictionary keys in LeaderboardManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardComparer

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Compares leaderboard definitions by their hash, so they work as dictionary keys in `LeaderboardManager`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `IEqualityComparer<LeaderboardDefinitionData>`

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private LeaderboardComparer()"}</code> | <span className="api-desc">Creates a `LeaderboardComparer` with default values.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/leaderboardcomparer">{"LeaderboardComparer"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The shared comparer.</span> |
