---
title: "PlayerStatManager"
description: "The StatManager on players, with a list of stats meant to carry over through death."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerStatManager

A **class** in `Root.Township`, `Alta.StatSystem`.

The `StatManager` on players, with a list of stats meant to carry over through death.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatManager`](/mod/game-api/types/alta-stats-effects/statmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerStatManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definitionstokeepondeath" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] definitionsToKeepOnDeath"}</code> | <span className="api-desc">Stats meant to keep their values when the player dies.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"private void Load("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private and not called anywhere in this build. Writes the kept stats into a stream and disposes it.</span> |

</details>
