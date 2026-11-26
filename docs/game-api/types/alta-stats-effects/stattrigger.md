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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isabsolutevalue" /><code>{"private bool isAbsoluteValue"}</code> | Compare the raw value instead of a fraction of the maximum. |
| <Link id="m-ontriggered" /><code>{"private UnityEvent onTriggered"}</code> | Server event when the threshold is crossed. |
| <Link id="m-ontriggeredvisual" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onTriggeredVisual"}</code> | Visual event (given this transform) when the threshold is crossed. Not on headless builds. |
| <Link id="m-targetmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" targetManager"}</code> | The stat manager to watch. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | The stat to watch. |
| <Link id="m-thresholdvalue" /><code>{"private float thresholdValue"}</code> | The threshold, as a fraction of the maximum unless `isAbsoluteValue` is on. |
| <Link id="m-triggeronabovethethreshold" /><code>{"private bool triggerOnAboveTheThreshold"}</code> | Active at or above the threshold when on, at or below when off. |
| <Link id="m-wasactive" /><code>{"private bool wasActive"}</code> | Whether the stat was active last time. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"private bool IsActive("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat)"}</code> | Whether the value (or value over maximum, unless `isAbsoluteValue`) is past the threshold on the chosen side. |
| <Link id="m-onstatchanged" /><code>{"private void OnStatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" trackedStat)"}</code> | Fires the events when the stat goes from inactive to active. Going back does nothing. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Reads the starting state and watches the stat. |

</details>
