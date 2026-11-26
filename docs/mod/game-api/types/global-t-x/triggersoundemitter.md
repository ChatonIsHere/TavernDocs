---
title: "TriggerSoundEmitter"
description: "A sphere trigger that plays a sound when something enters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerSoundEmitter

A **class** in `Root.Township`, the global namespace.

A sphere trigger that plays a sound when something enters. Only the arrow woosh is handled: it plays when an arrow passes near the local player.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerSoundEmitter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" sound"}</code> | The sound effect to play. |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> | The trigger sphere, set up from `triggerRadius`. |
| <Link id="m-triggerradius" /><code>{"private float triggerRadius"}</code> | Radius copied onto the sphere collider in the editor. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> | Client: if the sound is `ArrowWoosh` and an arrow enters near the local player, plays it on the arrow. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Makes the sphere collider a trigger with radius `triggerRadius`. |

</details>
