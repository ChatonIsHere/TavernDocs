---
title: "DebugQASetManager"
description: "Server debug helper that spawns preset QA item sets for a player from StreamingAssets/DebugQASets.txt, four spawn commands per set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugQASetManager

A **static class** in `Root.Township`, the global namespace.

Server debug helper that spawns preset QA item sets for a player from `StreamingAssets/DebugQASets.txt`, four spawn commands per set. Used by a debugging console command.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasfile" /><code>{"private static bool? hasFile"}</code> | <span className="api-desc">Cached result of the file check.</span> |
| <Link id="m-maxindex" /><code>{"private static int maxIndex"}</code> | <span className="api-desc">Number of sets in the file.</span> |
| <Link id="m-userinfoindex" /><code>{"private static Dictionary<int, int> userInfoIndex"}</code> | <span className="api-desc">Next set to give each user ID.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filepath" /><code>{"private static string FilePath { get; }"}</code> | <span className="api-desc">Path to `DebugQASets.txt` in streaming assets.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnforuser" /><code>{"static int SpawnForUser("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, int overrideIndex)"}</code> | <span className="api-desc">Spawns the given set, or the player's next one in turn, and moves them on to the next. Returns -1 without the file.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforfile" /><code>{"private static bool CheckForFile()"}</code> | <span className="api-desc">Checks once whether the file exists and counts how many four-line sets it has.</span> |
| <Link id="m-spawnforplayer" /><code>{"private static async void SpawnForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, int index)"}</code> | <span className="api-desc">Runs `spawn` plus the player's name with each of the set's four lines, half a second apart.</span> |

</details>
