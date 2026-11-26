---
title: "ImpactDetectionLogic"
description: "Timer logic that switches on for a while each time an impact detector is hit, raising a bool event when it turns on and off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactDetectionLogic

A **class** in `Root.Township`, no namespace.

Timer logic that switches on for a while each time an impact detector is hit, raising a bool event when it turns on and off.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`TimerLogic`](/game-api/types/global-t-x/timerlogic)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactDetectionLogic()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | The detector to watch. |
| <Link id="m-onhitchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onHitChanged"}</code> | Event raised with true when hit and false when the timer runs out. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the detector's hits and forwards the timer toggle to `onHitChanged`. |
| <Link id="m-washit" /><code>{"private void WasHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Starts the active timer when the detector is hit. |

</details>
