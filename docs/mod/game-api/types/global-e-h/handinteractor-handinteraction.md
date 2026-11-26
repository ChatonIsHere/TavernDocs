---
title: "HandInteractor.HandInteraction"
description: "One hand to hand gesture: which hands it applies to, whether hands are open or closed, the motion direction needed, and its effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandInteractor.HandInteraction

A **class** in `Root.Township`, the global namespace.

One hand to hand gesture: which hands it applies to, whether hands are open or closed, the motion direction needed, and its effects.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`HandInteractor`](/mod/game-api/types/global-e-h/handinteractor)
- **Nested types** [`Type`](/mod/game-api/types/global-e-h/handinteractor-handinteraction-type)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandInteraction()"}</code> | Creates a `HandInteractor.HandInteraction` with default values. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dotlenience" /><code>{"private float dotLenience"}</code> | Minimum dot product between the move direction and each hand's valid direction. |
| <Link id="m-isopenhanded" /><code>{"private bool isOpenHanded"}</code> | True needs both hands open (grab at most 0.9), false needs both closed. |
| <Link id="m-mindistance" /><code>{"private float minDistance"}</code> | Minimum hand movement for the gesture to count. |
| <Link id="m-otherparticleeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" otherParticleEffect"}</code> | Particle spawned when the hands belong to different players. |
| <Link id="m-selfparticleeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" selfParticleEffect"}</code> | Particle spawned when both hands are the same player's. |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundEffect"}</code> | Sound played on a match. |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handinteractor-handinteraction-type">{"HandInteractor.HandInteraction.Type"}</Link>{" type"}</code> | Whether the gesture works with your own hands, other players' hands, or both. |
| <Link id="m-validdirection" /><code>{"private Vector3 validDirection"}</code> | Local direction each hand must move in. Flipped for the other hand when both are the same side. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"bool IsValid("}<Link to="/mod/game-api/types/global-e-h/handinteractor">{"HandInteractor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-e-h/handinteractor">{"HandInteractor"}</Link>{" otherInteractor, float distance)"}</code> | Checks both hands match this gesture and, if so, plays its particle and sound. Returns whether it matched. |

## Used in

Members of other types that take, return or hold a `HandInteraction`:

[`HandInteractor.possibleInteractions`](/mod/game-api/types/global-e-h/handinteractor#m-possibleinteractions).
