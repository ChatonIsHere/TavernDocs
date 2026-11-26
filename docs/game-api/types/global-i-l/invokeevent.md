---
title: "InvokeEvent"
description: "Holds a list of Unity events and invokes one by index, unless turned off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InvokeEvent

A **class** in `Root.Township`, no namespace.

Holds a list of Unity events and invokes one by index, unless turned off.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InvokeEvent()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-events" /><code>{"private UnityEvent[] events"}</code> | The events to pick from. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | When false, `Invoke` does nothing. |

## Methods

| Member |
| --- |
| <Link id="m-invoke" /><code>{"void Invoke(int index)"}</code> |
