---
title: "ClimberActivator"
description: "Scene component that turns on smooth locomotion and the Climber for the local player, and blocks teleport locomotion while it exists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimberActivator

A **class** in `Root.Township`, the global namespace.

Scene component that turns on smooth locomotion and the `Climber` for the local player, and blocks teleport locomotion while it exists.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimberActivator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activateclimber" /><code>{"private void ActivateClimber("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">When the local player is set, enables its smooth locomotion and its `Climber`.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the local player event and starts blocking teleporting.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the event and stops blocking teleporting.</span> |

</details>
