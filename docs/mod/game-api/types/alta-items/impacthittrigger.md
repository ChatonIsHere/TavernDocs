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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactHitTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-detector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | <span className="api-desc">The impact detector listened to.</span> |
| <Link id="m-impacttypefilter" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttypefilter">{"ImpactTypeFilter"}</Link>{" impactTypeFilter"}</code> | <span className="api-desc">Which impact types count.</span> |
| <Link id="m-mindamagetodetect" /><code>{"private float minDamageToDetect"}</code> | <span className="api-desc">Lowest health damage that counts.</span> |
| <Link id="m-trigger" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" trigger"}</code> | <span className="api-desc">Event invoked on a valid hit.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforvalidhit" /><code>{"private void CheckForValidHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Invokes `trigger` if the hit's damage and impact type pass.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the detector's `Hit` event.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the detector's `Hit` event.</span> |

</details>
