---
title: "StatTrigger"
description: "Fires events when a stat crosses a threshold into the active side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatTrigger

A **class** in `Root.Township`, `Alta.StatSystem`.

Fires events when a stat crosses a threshold into the active side. Server event on the server, visual event on non headless builds.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isabsolutevalue" /><code>{"private bool isAbsoluteValue"}</code> | <span className="api-desc">Compare the raw value instead of a fraction of the maximum.</span> |
| <Link id="m-ontriggered" /><code>{"private UnityEvent onTriggered"}</code> | <span className="api-desc">Server event when the threshold is crossed.</span> |
| <Link id="m-ontriggeredvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onTriggeredVisual"}</code> | <span className="api-desc">Visual event (given this transform) when the threshold is crossed. Not on headless builds.</span> |
| <Link id="m-targetmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" targetManager"}</code> | <span className="api-desc">The stat manager to watch.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | <span className="api-desc">The stat to watch.</span> |
| <Link id="m-thresholdvalue" /><code>{"private float thresholdValue"}</code> | <span className="api-desc">The threshold, as a fraction of the maximum unless `isAbsoluteValue` is on.</span> |
| <Link id="m-triggeronabovethethreshold" /><code>{"private bool triggerOnAboveTheThreshold"}</code> | <span className="api-desc">Active at or above the threshold when on, at or below when off.</span> |
| <Link id="m-wasactive" /><code>{"private bool wasActive"}</code> | <span className="api-desc">Whether the stat was active last time.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool IsActive("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat)"}</code> | <span className="api-desc">Whether the value (or value over maximum, unless `isAbsoluteValue`) is past the threshold on the chosen side.</span> |
| <Link id="m-onstatchanged" /><code>{"private void OnStatChanged("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat)"}</code> | <span className="api-desc">Fires the events when the stat goes from inactive to active. Going back does nothing.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Reads the starting state and watches the stat.</span> |

</details>
