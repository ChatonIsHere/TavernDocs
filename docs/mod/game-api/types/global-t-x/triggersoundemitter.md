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
| <Link id="m-ctor" /><code>{"TriggerSoundEmitter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" sound"}</code> | <span className="api-desc">The sound effect to play.</span> |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> | <span className="api-desc">The trigger sphere, set up from `triggerRadius`.</span> |
| <Link id="m-triggerradius" /><code>{"private float triggerRadius"}</code> | <span className="api-desc">Radius copied onto the sphere collider in the editor.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> | <span className="api-desc">Client: if the sound is `ArrowWoosh` and an arrow enters near the local player, plays it on the arrow.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Makes the sphere collider a trigger with radius `triggerRadius`.</span> |

</details>
