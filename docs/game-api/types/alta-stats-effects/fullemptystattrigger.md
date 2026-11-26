---
title: "FullEmptyStatTrigger"
description: "Fires events when a stat on a StatManager hits its maximum or its minimum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FullEmptyStatTrigger

A **class** in `Root.Township`, `Alta.StatSystem`.

Fires events when a stat on a `StatManager` hits its maximum or its minimum. Server events run on the server only, effect events on non headless builds.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`SerializedFullEmptyStatTrigger`](/game-api/types/alta-stats-effects/serializedfullemptystattrigger)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FullEmptyStatTrigger()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-wasfull" /><code>{"protected bool wasFull"}</code> | Whether the stat was last full, so each event fires once per swing. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onempty" /><code>{"private UnityEvent onEmpty"}</code> | Server event when the stat empties. |
| <Link id="m-onemptyeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onEmptyEffect"}</code> | Effect event (given this transform) when the stat empties. Not on headless builds. |
| <Link id="m-onfull" /><code>{"private UnityEvent onFull"}</code> | Server event when the stat fills. |
| <Link id="m-onfulleffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onFullEffect"}</code> | Effect event (given this transform) when the stat fills. Not on headless builds. |
| <Link id="m-targetmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" targetManager"}</code> | The stat manager to watch. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | The stat to watch. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onstatchanged" /><code>{"private void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat)"}</code> | Fires the empty events when the value reaches the minimum after being full, and the full events when it reaches the maximum. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Sets the starting state from whether the value is past half, and watches the stat. |

</details>
