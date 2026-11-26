---
title: "PlayerDebugMessager"
description: "Component with a method that shows a message on the local player's screen, for wiring up from inspector events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDebugMessager

A **class** in `Root.Township`, no namespace.

Component with a method that shows a message on the local player's screen, for wiring up from inspector events.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDebugMessager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displaytype" /><code>{"private "}<Link to="/game-api/types/global-c-d/displaymessagetype">{"DisplayMessageType"}</Link>{" displayType"}</code> | How the message replaces any current one. |
| <Link id="m-messageduration" /><code>{"private float messageDuration"}</code> | Seconds the message is shown (2 by default). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-displaymessage" /><code>{"void DisplayMessage(string message)"}</code> | Client: shows the message on the local player's message display. |
