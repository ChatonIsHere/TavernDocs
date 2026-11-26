---
title: "ImpactHitTrigger"
description: "Fires an AltaEvent when an ImpactDetector takes a hit with enough damage and of an allowed impact type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactHitTrigger

A **class** in `Root.Township`, `Alta.Impact`.

Fires an `AltaEvent` when an `ImpactDetector` takes a hit with enough damage and of an allowed impact type.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactHitTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-detector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | The impact detector listened to. |
| <Link id="m-impacttypefilter" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttypefilter">{"ImpactTypeFilter"}</Link>{" impactTypeFilter"}</code> | Which impact types count. |
| <Link id="m-mindamagetodetect" /><code>{"private float minDamageToDetect"}</code> | Lowest health damage that counts. |
| <Link id="m-trigger" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" trigger"}</code> | Event invoked on a valid hit. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforvalidhit" /><code>{"private void CheckForValidHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Invokes `trigger` if the hit's damage and impact type pass. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the detector's `Hit` event. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the detector's `Hit` event. |

</details>
