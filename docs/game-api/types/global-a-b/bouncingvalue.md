---
title: "BouncingValue"
description: "Server component that moves a value back and forth between 0 and 1 and reports it through an event every fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BouncingValue

A **class** in `Root.Township`, no namespace.

Server component that moves a value back and forth between 0 and 1 and reports it through an event every fixed update.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BouncingValue()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincreasing" /><code>{"private bool isIncreasing"}</code> | Current direction. |
| <Link id="m-onewayduration" /><code>{"private float oneWayDuration"}</code> | Seconds to go from 0 to 1 (5 by default). |
| <Link id="m-updatevalue" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateValue"}</code> | Handle for the registered update. |
| <Link id="m-value" /><code>{"private float value"}</code> | Current value, 0 to 1. |
| <Link id="m-valueupdated" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" valueUpdated"}</code> | Event fired with the value each step. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Deregisters the update. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Server: registers `UpdateValue` on the fixed update module. |
| <Link id="m-updatevalue-2" /><code>{"private void UpdateValue()"}</code> | Steps the value up or down, reverses at 0 and 1, and invokes `valueUpdated`. |

</details>
