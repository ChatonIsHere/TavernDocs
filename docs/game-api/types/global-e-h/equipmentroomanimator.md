---
title: "EquipmentRoomAnimator"
description: "class EquipmentRoomAnimator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentRoomAnimator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentRoomAnimator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boundaryanimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" boundaryAnimation"}</code> |  |
| <Link id="m-boundaryspawnanimationlength" /><code>{"private float boundarySpawnAnimationLength"}</code> |  |
| <Link id="m-boundarytransform" /><code>{"private Transform boundaryTransform"}</code> |  |
| <Link id="m-dummymaterializer" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" dummyMaterializer"}</code> |  |
| <Link id="m-dummyparticles" /><code>{"private GameObject dummyParticles"}</code> |  |
| <Link id="m-groundvisualsanimator" /><code>{"private Animator groundVisualsAnimator"}</code> |  |
| <Link id="m-pedestalanimator" /><code>{"private "}<Link to="/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" pedestalAnimator"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startappearanimation" /><code>{"void StartAppearAnimation(Transform boundaryTransform, float dummyMaterializationDuration)"}</code> |  |
| <Link id="m-startdissapearanimation" /><code>{"void StartDissapearAnimation(Action animationsFinishedCallback, float dummyMaterializationDuration)"}</code> |  |
| <Link id="m-animateboundaryspawn" /><code>{"private IEnumerator AnimateBoundarySpawn(float totalDuration, bool isAppearing) (iterator)"}</code> |  |
| <Link id="m-waitforanimationfinished" /><code>{"private IEnumerator WaitForAnimationFinished(Action animationsFinishedCallback) (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EquipmentRoomAnimator`:

[`EquipmentCustomizationRoom.roomAnimator`](/game-api/types/alta-customization/equipmentcustomizationroom#m-roomanimator).
