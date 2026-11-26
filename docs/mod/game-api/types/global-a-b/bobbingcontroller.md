---
title: "BobbingController"
description: "Makes a list of child objects bob back and forth and slowly spin, each with its own random offset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BobbingController

A **class** in `Root.Township`, the global namespace.

Makes a list of child objects bob back and forth and slowly spin, each with its own random offset. Runs in edit mode too.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BobbingController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bobbingspeed" /><code>{"private float bobbingSpeed"}</code> | <span className="api-desc">Backing field for `BobbingSpeed`.</span> |
| <Link id="m-bobbingstrength" /><code>{"private float bobbingStrength"}</code> | <span className="api-desc">Backing field for `BobbingStrength`.</span> |
| <Link id="m-issettingup" /><code>{"private bool isSettingUp"}</code> | <span className="api-desc">Inspector Setup button.</span> |
| <Link id="m-movementradius" /><code>{"private float movementRadius"}</code> | <span className="api-desc">Radius objects are scattered in by `AddObjectToBob`.</span> |
| <Link id="m-objectstobob" /><code>{"private List<Transform> objectsToBob"}</code> | <span className="api-desc">Transforms being bobbed.</span> |
| <Link id="m-randomoffsets" /><code>{"private List<float> randomOffsets"}</code> | <span className="api-desc">Sine phase per object.</span> |
| <Link id="m-randomrotationaxis" /><code>{"private List<Vector3> randomRotationAxis"}</code> | <span className="api-desc">Spin axis per object.</span> |
| <Link id="m-randomrotationsspeed" /><code>{"private List<float> randomRotationsSpeed"}</code> | <span className="api-desc">Spin speed per object, 0.1 to 1.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Overall spin speed multiplier.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bobbingspeed-2" /><code>{"float BobbingSpeed { get; set; }"}</code> | <span className="api-desc">How fast objects bob. Read and write.</span> |
| <Link id="m-bobbingstrength-2" /><code>{"float BobbingStrength { get; set; }"}</code> | <span className="api-desc">How far objects bob along local Z. Read and write.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addobjecttobob" /><code>{"void AddObjectToBob(Transform objectToBob)"}</code> | <span className="api-desc">Adds an object, puts it at a random spot within `movementRadius` with a random rotation, and turns bobbing on.</span> |
| <Link id="m-clearobjects" /><code>{"void ClearObjects()"}</code> | <span className="api-desc">Removes all objects and offsets and turns the component off.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Turns itself off if there is nothing to bob and sets up the random offsets.</span> |
| <Link id="m-createnewrandomoffsets" /><code>{"private void CreateNewRandomOffsets()"}</code> | <span className="api-desc">Adds a random phase, spin axis and spin speed for one object.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws `movementRadius` as a wire sphere.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: rebuilds offsets when the Setup button is pressed.</span> |
| <Link id="m-setupoffsets" /><code>{"private void SetupOffsets()"}</code> | <span className="api-desc">Rebuilds the random offsets for every object in the list.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Moves each object's local Z on a sine wave and spins it. Drops destroyed objects and turns off when empty.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BobbingController`:

<div className="api-used-in">

[`LiquidChunkVisuals.bobbingController`](/mod/game-api/types/alta-crafting/liquidchunkvisuals#m-bobbingcontroller).

</div>
