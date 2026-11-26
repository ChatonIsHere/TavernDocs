---
title: "IfEvent"
description: "Raises one of two events depending on a bool, for wiring up in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IfEvent

A **class** in `Root.Township`, no namespace.

Raises one of two events depending on a bool, for wiring up in the inspector.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IfEvent()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iffalse" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ifFalse"}</code> | Event raised when `Invoke` gets false. |
| <Link id="m-iftrue" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ifTrue"}</code> | Event raised when `Invoke` gets true. |

</details>

## Methods

| Member |
| --- |
| <Link id="m-invoke" /><code>{"void Invoke(bool isTrue)"}</code> |
