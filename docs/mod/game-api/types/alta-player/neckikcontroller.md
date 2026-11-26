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
| <Link id="m-ctor" /><code>{"NeckIKController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | <span className="api-desc">Transform the neck reaches for and the head copies.</span> |
| <Link id="m-isapplyinrotationlimitonoverride" /><code>{"private bool isApplyinRotationLimitOnOverride"}</code> | <span className="api-desc">Whether to apply the head bone's rotation limit after overriding it.</span> |
| <Link id="m-isoverridingheadrotation" /><code>{"private bool isOverridingHeadRotation"}</code> | <span className="api-desc">Whether the head bone copies the target's rotation after the IK runs.</span> |
| <Link id="m-neckik" /><code>{"private FABRIK neckIK"}</code> | <span className="api-desc">Backing field for `NeckIK`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-neckik-2" /><code>{"FABRIK NeckIK { get; set; }"}</code> | <span className="api-desc">The FABRIK component for the neck.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Updates the neck IK, overrides the head rotation, then runs the base fixed update.</span> |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | <span className="api-desc">Turns the neck IK component on or off. Logs a warning if there is none.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">In the editor, sets the head target as the IK solver's target.</span> |
| <Link id="m-overrideheadrotation" /><code>{"private void OverrideHeadRotation()"}</code> | <span className="api-desc">If enabled, sets the third neck bone's rotation to the head target's and optionally applies its rotation limit.</span> |

</details>
