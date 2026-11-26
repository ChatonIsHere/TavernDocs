---
title: "PlayerProgressionManager.PracticeTuple"
description: "Network argument saying a skill slot on a path was practised."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgressionManager.PracticeTuple

A **class** in `Root.Township`, the global namespace.

Network argument saying a skill slot on a path was practised. The server sends it; clients mark the slot.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerProgressionManager`](/mod/game-api/types/global-p/playerprogressionmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PracticeTuple()"}</code> | <span className="api-desc">Creates a `PlayerProgressionManager.PracticeTuple` from `path` and `slotHash`.</span> |
| <Link id="m-ctor-2" /><code>{"PracticeTuple("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, uint slotHash)"}</code> | <span className="api-desc">Creates a `PlayerProgressionManager.PracticeTuple` from `path` and `slotHash`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pathindex" /><code>{"private int pathIndex"}</code> | <span className="api-desc">Backing value for `Path`.</span> |
| <Link id="m-slothash" /><code>{"private uint slotHash"}</code> | <span className="api-desc">Backing field for `SlotHash`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; }"}</code> | <span className="api-desc">The progression path.</span> |
| <Link id="m-slothash-2" /><code>{"uint SlotHash { get; }"}</code> | <span className="api-desc">Hash of the practised slot.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the path index (0 to 15) and slot hash.</span> |

## Used in

Members of other types that take, return or hold a `PracticeTuple`:

<div className="api-used-in">

[`PlayerProgressionManager.syncSlotPractice`](/mod/game-api/types/global-p/playerprogressionmanager#m-syncslotpractice), [`PlayerProgressionManager.SyncSlotPracticed`](/mod/game-api/types/global-p/playerprogressionmanager#m-syncslotpracticed).

</div>
