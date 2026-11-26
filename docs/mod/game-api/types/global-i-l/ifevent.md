---
title: "IfEvent"
description: "Raises one of two events depending on a bool, for wiring up in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IfEvent

A **class** in `Root.Township`, the global namespace.

Raises one of two events depending on a bool, for wiring up in the inspector.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IfEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iffalse" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ifFalse"}</code> | <span className="api-desc">Event raised when `Invoke` gets false.</span> |
| <Link id="m-iftrue" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ifTrue"}</code> | <span className="api-desc">Event raised when `Invoke` gets true.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke(bool isTrue)"}</code> | <span className="api-desc">Fires `ifTrue` or `ifFalse` depending on the value.</span> |
