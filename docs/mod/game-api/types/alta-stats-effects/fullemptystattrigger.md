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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`SerializedFullEmptyStatTrigger`](/mod/game-api/types/alta-stats-effects/serializedfullemptystattrigger)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FullEmptyStatTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-wasfull" /><code>{"protected bool wasFull"}</code> | <span className="api-desc">Whether the stat was last full, so each event fires once per swing.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onempty" /><code>{"private UnityEvent onEmpty"}</code> | <span className="api-desc">Server event when the stat empties.</span> |
| <Link id="m-onemptyeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onEmptyEffect"}</code> | <span className="api-desc">Effect event (given this transform) when the stat empties. Not on headless builds.</span> |
| <Link id="m-onfull" /><code>{"private UnityEvent onFull"}</code> | <span className="api-desc">Server event when the stat fills.</span> |
| <Link id="m-onfulleffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onFullEffect"}</code> | <span className="api-desc">Effect event (given this transform) when the stat fills. Not on headless builds.</span> |
| <Link id="m-targetmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" targetManager"}</code> | <span className="api-desc">The stat manager to watch.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | <span className="api-desc">The stat to watch.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onstatchanged" /><code>{"private void OnStatChanged("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat)"}</code> | <span className="api-desc">Fires the empty events when the value reaches the minimum after being full, and the full events when it reaches the maximum.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Sets the starting state from whether the value is past half, and watches the stat.</span> |

</details>
