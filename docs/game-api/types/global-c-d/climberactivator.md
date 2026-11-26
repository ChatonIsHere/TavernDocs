---
title: "ClimberActivator"
description: "Scene component that turns on smooth locomotion and the Climber for the local player, and blocks teleport locomotion while it exists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimberActivator

A **class** in `Root.Township`, no namespace.

Scene component that turns on smooth locomotion and the `Climber` for the local player, and blocks teleport locomotion while it exists.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimberActivator()"}</code> |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activateclimber" /><code>{"private void ActivateClimber("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | When the local player is set, enables its smooth locomotion and its `Climber`. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the local player event and starts blocking teleporting. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the event and stops blocking teleporting. |

</details>
