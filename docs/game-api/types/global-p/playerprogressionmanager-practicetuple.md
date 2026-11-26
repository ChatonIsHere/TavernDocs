---
title: "PlayerProgressionManager.PracticeTuple"
description: "Network argument saying a skill slot on a path was practised."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgressionManager.PracticeTuple

A **class** in `Root.Township`, no namespace.

Network argument saying a skill slot on a path was practised. The server sends it; clients mark the slot.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerProgressionManager`](/game-api/types/global-p/playerprogressionmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PracticeTuple()"}</code> | Creates a `PlayerProgressionManager.PracticeTuple` from `path` and `slotHash`. |
| <Link id="m-ctor-2" /><code>{"PracticeTuple("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, uint slotHash)"}</code> | Creates a `PlayerProgressionManager.PracticeTuple` from `path` and `slotHash`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pathindex" /><code>{"private int pathIndex"}</code> | Backing value for `Path`. |
| <Link id="m-slothash" /><code>{"private uint slotHash"}</code> | Backing field for `SlotHash`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> | The progression path. |
| <Link id="m-slothash-2" /><code>{"uint SlotHash { get; }"}</code> | Hash of the practised slot. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the path index (0 to 15) and slot hash. |

## Used in

Members of other types that take, return or hold a `PracticeTuple`:

[`PlayerProgressionManager.syncSlotPractice`](/game-api/types/global-p/playerprogressionmanager#m-syncslotpractice), [`PlayerProgressionManager.SyncSlotPracticed`](/game-api/types/global-p/playerprogressionmanager#m-syncslotpracticed).
