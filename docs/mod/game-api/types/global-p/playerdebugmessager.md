---
title: "PlayerDebugMessager"
description: "Component with a method that shows a message on the local player's screen, for wiring up from inspector events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDebugMessager

A **class** in `Root.Township`, the global namespace.

Component with a method that shows a message on the local player's screen, for wiring up from inspector events.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDebugMessager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaytype" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/displaymessagetype">{"DisplayMessageType"}</Link>{" displayType"}</code> | <span className="api-desc">How the message replaces any current one.</span> |
| <Link id="m-messageduration" /><code>{"private float messageDuration"}</code> | <span className="api-desc">Seconds the message is shown (2 by default).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-displaymessage" /><code>{"void DisplayMessage(string message)"}</code> | <span className="api-desc">Client: shows the message on the local player's message display.</span> |
