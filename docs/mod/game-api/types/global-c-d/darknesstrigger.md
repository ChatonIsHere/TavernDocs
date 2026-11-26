---
title: "DarknessTrigger"
description: "Global darkness flag for the local client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessTrigger

A **static class** in `Root.Township`, the global namespace.

Global darkness flag for the local client. Requests are batched to the next delayed call so only the final state per frame raises `OnChanged`; `DarknessReader` listens to it.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdarktarget" /><code>{"private static bool isDarkTarget"}</code> | <span className="api-desc">Last requested state.</span> |
| <Link id="m-isupdating" /><code>{"private static bool isUpdating"}</code> | <span className="api-desc">True while an update is queued.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdark" /><code>{"static bool IsDark { get; private set; }"}</code> | <span className="api-desc">Whether the player is currently in a dark area.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code>{"static event Action<bool> OnChanged"}</code> | <span className="api-desc">Raised with the new value when `IsDark` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setisdark" /><code>{"static void SetIsDark(bool isDark)"}</code> | <span className="api-desc">Requests a new darkness state, applied on a delayed call.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatedark" /><code>{"private static void UpdateDark()"}</code> | <span className="api-desc">Applies the requested state and raises `OnChanged` if it changed.</span> |

</details>
