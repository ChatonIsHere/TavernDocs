---
title: "NeckIKController"
description: "Character component that runs a FABRIK neck IK toward the head target and can force the head bone to the target's rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NeckIKController

A **class** in `Root.Township`, `Alta.Character`.

Character component that runs a FABRIK neck IK toward the head target and can force the head bone to the target's rotation.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`NeckIKControllerHelper`](/mod/game-api/types/alta-player/neckikcontrollerhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NeckIKController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | Transform the neck reaches for and the head copies. |
| <Link id="m-isapplyinrotationlimitonoverride" /><code>{"private bool isApplyinRotationLimitOnOverride"}</code> | Whether to apply the head bone's rotation limit after overriding it. |
| <Link id="m-isoverridingheadrotation" /><code>{"private bool isOverridingHeadRotation"}</code> | Whether the head bone copies the target's rotation after the IK runs. |
| <Link id="m-neckik" /><code>{"private FABRIK neckIK"}</code> | Backing field for `NeckIK`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-neckik-2" /><code>{"FABRIK NeckIK { get; set; }"}</code> | The FABRIK component for the neck. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Updates the neck IK, overrides the head rotation, then runs the base fixed update. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Turns the neck IK component on or off. Logs a warning if there is none. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | In the editor, sets the head target as the IK solver's target. |
| <Link id="m-overrideheadrotation" /><code>{"private void OverrideHeadRotation()"}</code> | If enabled, sets the third neck bone's rotation to the head target's and optionally applies its rotation limit. |

</details>
