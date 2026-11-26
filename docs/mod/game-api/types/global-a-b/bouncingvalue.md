---
title: "BouncingValue"
description: "Server component that moves a value back and forth between 0 and 1 and reports it through an event every fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BouncingValue

A **class** in `Root.Township`, the global namespace.

Server component that moves a value back and forth between 0 and 1 and reports it through an event every fixed update.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BouncingValue()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincreasing" /><code>{"private bool isIncreasing"}</code> | <span className="api-desc">Current direction.</span> |
| <Link id="m-onewayduration" /><code>{"private float oneWayDuration"}</code> | <span className="api-desc">Seconds to go from 0 to 1 (5 by default).</span> |
| <Link id="m-updatevalue" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateValue"}</code> | <span className="api-desc">Handle for the registered update.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Current value, 0 to 1.</span> |
| <Link id="m-valueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" valueUpdated"}</code> | <span className="api-desc">Event fired with the value each step.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Deregisters the update.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Server: registers `UpdateValue` on the fixed update module.</span> |
| <Link id="m-updatevalue-2" /><code>{"private void UpdateValue()"}</code> | <span className="api-desc">Steps the value up or down, reverses at 0 and 1, and invokes `valueUpdated`.</span> |

</details>
