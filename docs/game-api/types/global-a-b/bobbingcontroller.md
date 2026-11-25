---
title: "BobbingController"
description: "class BobbingController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BobbingController

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-bobbingspeed" /><code>{"private float bobbingSpeed"}</code> |
| <Link id="m-bobbingstrength" /><code>{"private float bobbingStrength"}</code> |
| <Link id="m-issettingup" /><code>{"private bool isSettingUp"}</code> |
| <Link id="m-movementradius" /><code>{"private float movementRadius"}</code> |
| <Link id="m-objectstobob" /><code>{"private List<Transform> objectsToBob"}</code> |
| <Link id="m-randomoffsets" /><code>{"private List<float> randomOffsets"}</code> |
| <Link id="m-randomrotationaxis" /><code>{"private List<Vector3> randomRotationAxis"}</code> |
| <Link id="m-randomrotationsspeed" /><code>{"private List<float> randomRotationsSpeed"}</code> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-bobbingspeed-2" /><code>{"float BobbingSpeed { get; set; }"}</code> |
| <Link id="m-bobbingstrength-2" /><code>{"float BobbingStrength { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-addobjecttobob" /><code>{"void AddObjectToBob(Transform objectToBob)"}</code> |
| <Link id="m-clearobjects" /><code>{"void ClearObjects()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-createnewrandomoffsets" /><code>{"private void CreateNewRandomOffsets()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-setupoffsets" /><code>{"private void SetupOffsets()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BobbingController`:

[`LiquidChunkVisuals.bobbingController`](/game-api/types/alta-crafting/liquidchunkvisuals#m-bobbingcontroller).
