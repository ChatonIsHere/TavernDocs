---
title: "CollisionSoundEmitter"
description: "Plays the object collision sound at the contact point on a hit, with layer filtering and a short cooldown."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CollisionSoundEmitter

A **class** in `Root.Township`, the global namespace.

Plays the object collision sound at the contact point on a hit, with layer filtering and a short cooldown.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CollisionSoundEmitter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ignorelayers" /><code>{"private LayerMask ignoreLayers"}</code> | <span className="api-desc">Layers that never make a sound.</span> |
| <Link id="m-ignoremultiplehitswithin" /><code>{"private float ignoreMultipleHitsWithin"}</code> | <span className="api-desc">Seconds after a sound during which hits are silent.</span> |
| <Link id="m-lastcollisiontime" /><code>{"private float lastCollisionTime"}</code> | <span className="api-desc">Time of the last sound.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Plays `SoundEffect.ObjectCollision` at the contact unless the other layer is ignored or it's within the cooldown.</span> |

</details>
