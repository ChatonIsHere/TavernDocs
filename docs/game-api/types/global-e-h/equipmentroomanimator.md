---
title: "EquipmentRoomAnimator"
description: "Plays the appear and disappear animations of the equipment customization room: boundary, dummy materialising, particles, ground and pedestal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentRoomAnimator

A **class** in `Root.Township`, no namespace.

Plays the appear and disappear animations of the equipment customization room: boundary, dummy materialising, particles, ground and pedestal.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EquipmentRoomAnimator()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boundaryanimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" boundaryAnimation"}</code> | Running boundary coroutine. |
| <Link id="m-boundaryspawnanimationlength" /><code>{"private float boundarySpawnAnimationLength"}</code> | Seconds for the boundary animation. Defaults to 2. |
| <Link id="m-boundarytransform" /><code>{"private Transform boundaryTransform"}</code> | The boundary being animated, given to `StartAppearAnimation`. |
| <Link id="m-dummymaterializer" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" dummyMaterializer"}</code> | Materialises and dematerialises the dummy's renderers. |
| <Link id="m-dummyparticles" /><code>{"private GameObject dummyParticles"}</code> | Particle prefab spawned on appear and disappear. |
| <Link id="m-groundvisualsanimator" /><code>{"private Animator groundVisualsAnimator"}</code> | Ground animator; gets the "Exit" trigger on disappear. |
| <Link id="m-pedestalanimator" /><code>{"private "}<Link to="/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" pedestalAnimator"}</code> | Pedestal scale animator, turned on and off. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startappearanimation" /><code>{"void StartAppearAnimation(Transform boundaryTransform, float dummyMaterializationDuration)"}</code> | Plays the appear animations and materialises the dummy over the given time. |
| <Link id="m-startdissapearanimation" /><code>{"void StartDissapearAnimation(Action animationsFinishedCallback, float dummyMaterializationDuration)"}</code> | Plays the disappear animations and calls back once the dummy is gone and the boundary has finished. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animateboundaryspawn" /><code>{"private IEnumerator AnimateBoundarySpawn(float totalDuration, bool isAppearing) (iterator)"}</code> | Coroutine that slides the boundary up from 1 unit below and scales it in, or the reverse. |
| <Link id="m-waitforanimationfinished" /><code>{"private IEnumerator WaitForAnimationFinished(Action animationsFinishedCallback) (iterator)"}</code> | Waits for the boundary animation to finish, then calls the callback. |

</details>

## Used in

Members of other types that take, return or hold a `EquipmentRoomAnimator`:

[`EquipmentCustomizationRoom.roomAnimator`](/game-api/types/alta-customization/equipmentcustomizationroom#m-roomanimator).
