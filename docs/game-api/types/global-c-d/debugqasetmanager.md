---
title: "DebugQASetManager"
description: "Server debug helper that spawns preset QA item sets for a player from StreamingAssets/DebugQASets.txt, four spawn commands per set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugQASetManager

A **static class** in `Root.Township`, no namespace.

Server debug helper that spawns preset QA item sets for a player from `StreamingAssets/DebugQASets.txt`, four spawn commands per set. Used by a debugging console command.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasfile" /><code>{"private static bool? hasFile"}</code> | Cached result of the file check. |
| <Link id="m-maxindex" /><code>{"private static int maxIndex"}</code> | Number of sets in the file. |
| <Link id="m-userinfoindex" /><code>{"private static Dictionary<int, int> userInfoIndex"}</code> | Next set to give each user ID. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filepath" /><code>{"private static string FilePath { get; }"}</code> | Path to `DebugQASets.txt` in streaming assets. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawnforuser" /><code>{"static int SpawnForUser("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int overrideIndex)"}</code> | Spawns the given set, or the player's next one in turn, and moves them on to the next. Returns -1 without the file. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforfile" /><code>{"private static bool CheckForFile()"}</code> | Checks once whether the file exists and counts how many four-line sets it has. |
| <Link id="m-spawnforplayer" /><code>{"private static async void SpawnForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int index)"}</code> | Runs `spawn` plus the player's name with each of the set's four lines, half a second apart. |

</details>
