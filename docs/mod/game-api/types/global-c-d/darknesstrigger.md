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

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isdarktarget" /><code>{"private static bool isDarkTarget"}</code> | Last requested state. |
| <Link id="m-isupdating" /><code>{"private static bool isUpdating"}</code> | True while an update is queued. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isdark" /><code>{"static bool IsDark { get; private set; }"}</code> | Whether the player is currently in a dark area. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code>{"static event Action<bool> OnChanged"}</code> | Raised with the new value when `IsDark` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setisdark" /><code>{"static void SetIsDark(bool isDark)"}</code> | Requests a new darkness state, applied on a delayed call. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatedark" /><code>{"private static void UpdateDark()"}</code> | Applies the requested state and raises `OnChanged` if it changed. |

</details>
