---
title: "CharacterPoseSaver"
description: "Editor tool: on a controller button press, saves the body joint transforms as a numbered pose asset under Assets/."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterPoseSaver

A **class** in `Root.Township`, the global namespace.

Editor tool: on a controller button press, saves the body joint transforms as a numbered pose asset under `Assets/`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ControllerInputButtonPressed`](/mod/game-api/types/global-c-d/controllerinputbuttonpressed)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterPoseSaver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodyrootjoint" /><code>{"private Transform bodyRootJoint"}</code> | <span className="api-desc">Root joint whose hierarchy is saved.</span> |
| <Link id="m-posecount" /><code>{"private static int poseCount"}</code> | <span className="api-desc">Number for the next pose file. Starts at 1 and is shared by all instances.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-buttonpressed" /><code>{"protected override void ButtonPressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Saves the local transforms under `bodyRootJoint` to `Assets/PoseN (Transform Save).asset`.</span> |
