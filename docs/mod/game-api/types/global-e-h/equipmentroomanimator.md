---
title: "EquipmentRoomAnimator"
description: "Plays the appear and disappear animations of the equipment customization room: boundary, dummy materialising, particles, ground and pedestal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentRoomAnimator

A **class** in `Root.Township`, the global namespace.

Plays the appear and disappear animations of the equipment customization room: boundary, dummy materialising, particles, ground and pedestal.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentRoomAnimator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boundaryanimation" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" boundaryAnimation"}</code> | <span className="api-desc">Running boundary coroutine.</span> |
| <Link id="m-boundaryspawnanimationlength" /><code>{"private float boundarySpawnAnimationLength"}</code> | <span className="api-desc">Seconds for the boundary animation. Defaults to 2.</span> |
| <Link id="m-boundarytransform" /><code>{"private Transform boundaryTransform"}</code> | <span className="api-desc">The boundary being animated, given to `StartAppearAnimation`.</span> |
| <Link id="m-dummymaterializer" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" dummyMaterializer"}</code> | <span className="api-desc">Materialises and dematerialises the dummy's renderers.</span> |
| <Link id="m-dummyparticles" /><code>{"private GameObject dummyParticles"}</code> | <span className="api-desc">Particle prefab spawned on appear and disappear.</span> |
| <Link id="m-groundvisualsanimator" /><code>{"private Animator groundVisualsAnimator"}</code> | <span className="api-desc">Ground animator; gets the "Exit" trigger on disappear.</span> |
| <Link id="m-pedestalanimator" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" pedestalAnimator"}</code> | <span className="api-desc">Pedestal scale animator, turned on and off.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startappearanimation" /><code>{"void StartAppearAnimation(Transform boundaryTransform, float dummyMaterializationDuration)"}</code> | <span className="api-desc">Plays the appear animations and materialises the dummy over the given time.</span> |
| <Link id="m-startdissapearanimation" /><code>{"void StartDissapearAnimation(Action animationsFinishedCallback, float dummyMaterializationDuration)"}</code> | <span className="api-desc">Plays the disappear animations and calls back once the dummy is gone and the boundary has finished.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animateboundaryspawn" /><code>{"private IEnumerator AnimateBoundarySpawn(float totalDuration, bool isAppearing) (iterator)"}</code> | <span className="api-desc">Coroutine that slides the boundary up from 1 unit below and scales it in, or the reverse.</span> |
| <Link id="m-waitforanimationfinished" /><code>{"private IEnumerator WaitForAnimationFinished(Action animationsFinishedCallback) (iterator)"}</code> | <span className="api-desc">Waits for the boundary animation to finish, then calls the callback.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EquipmentRoomAnimator`:

<div className="api-used-in">

[`EquipmentCustomizationRoom.roomAnimator`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-roomanimator).

</div>
