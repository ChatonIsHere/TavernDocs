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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatManager`](/game-api/types/alta-stats-effects/statmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerStatManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definitionstokeepondeath" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{"[] definitionsToKeepOnDeath"}</code> | Stats meant to keep their values when the player dies. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"private void Load("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private and not called anywhere in this build. Writes the kept stats into a stream and disposes it. |

</details>
