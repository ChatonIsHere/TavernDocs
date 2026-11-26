---
title: "BobbingController"
description: "Makes a list of child objects bob back and forth and slowly spin, each with its own random offset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BobbingController

A **class** in `Root.Township`, no namespace.

Makes a list of child objects bob back and forth and slowly spin, each with its own random offset. Runs in edit mode too.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BobbingController()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bobbingspeed" /><code>{"private float bobbingSpeed"}</code> | Backing field for `BobbingSpeed`. |
| <Link id="m-bobbingstrength" /><code>{"private float bobbingStrength"}</code> | Backing field for `BobbingStrength`. |
| <Link id="m-issettingup" /><code>{"private bool isSettingUp"}</code> | Inspector Setup button. |
| <Link id="m-movementradius" /><code>{"private float movementRadius"}</code> | Radius objects are scattered in by `AddObjectToBob`. |
| <Link id="m-objectstobob" /><code>{"private List<Transform> objectsToBob"}</code> | Transforms being bobbed. |
| <Link id="m-randomoffsets" /><code>{"private List<float> randomOffsets"}</code> | Sine phase per object. |
| <Link id="m-randomrotationaxis" /><code>{"private List<Vector3> randomRotationAxis"}</code> | Spin axis per object. |
| <Link id="m-randomrotationsspeed" /><code>{"private List<float> randomRotationsSpeed"}</code> | Spin speed per object, 0.1 to 1. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Overall spin speed multiplier. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bobbingspeed-2" /><code>{"float BobbingSpeed { get; set; }"}</code> | How fast objects bob. Read and write. |
| <Link id="m-bobbingstrength-2" /><code>{"float BobbingStrength { get; set; }"}</code> | How far objects bob along local Z. Read and write. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addobjecttobob" /><code>{"void AddObjectToBob(Transform objectToBob)"}</code> | Adds an object, puts it at a random spot within `movementRadius` with a random rotation, and turns bobbing on. |
| <Link id="m-clearobjects" /><code>{"void ClearObjects()"}</code> | Removes all objects and offsets and turns the component off. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Turns itself off if there is nothing to bob and sets up the random offsets. |
| <Link id="m-createnewrandomoffsets" /><code>{"private void CreateNewRandomOffsets()"}</code> | Adds a random phase, spin axis and spin speed for one object. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws `movementRadius` as a wire sphere. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: rebuilds offsets when the Setup button is pressed. |
| <Link id="m-setupoffsets" /><code>{"private void SetupOffsets()"}</code> | Rebuilds the random offsets for every object in the list. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Moves each object's local Z on a sine wave and spins it. Drops destroyed objects and turns off when empty. |

</details>

## Used in

Members of other types that take, return or hold a `BobbingController`:

[`LiquidChunkVisuals.bobbingController`](/game-api/types/alta-crafting/liquidchunkvisuals#m-bobbingcontroller).
