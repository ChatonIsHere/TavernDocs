---
title: "CollisionSoundEmitter"
description: "Plays the object collision sound at the contact point on a hit, with layer filtering and a short cooldown."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CollisionSoundEmitter

A **class** in `Root.Township`, no namespace.

Plays the object collision sound at the contact point on a hit, with layer filtering and a short cooldown.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CollisionSoundEmitter()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ignorelayers" /><code>{"private LayerMask ignoreLayers"}</code> | Layers that never make a sound. |
| <Link id="m-ignoremultiplehitswithin" /><code>{"private float ignoreMultipleHitsWithin"}</code> | Seconds after a sound during which hits are silent. |
| <Link id="m-lastcollisiontime" /><code>{"private float lastCollisionTime"}</code> | Time of the last sound. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | Plays `SoundEffect.ObjectCollision` at the contact unless the other layer is ignored or it's within the cooldown. |

</details>
