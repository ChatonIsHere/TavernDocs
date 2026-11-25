---
title: "NeckIKController"
description: "class NeckIKController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NeckIKController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`NeckIKControllerHelper`](/game-api/types/alta-player/neckikcontrollerhelper)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NeckIKController()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> |
| <Link id="m-isapplyinrotationlimitonoverride" /><code>{"private bool isApplyinRotationLimitOnOverride"}</code> |
| <Link id="m-isoverridingheadrotation" /><code>{"private bool isOverridingHeadRotation"}</code> |
| <Link id="m-neckik" /><code>{"private FABRIK neckIK"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-neckik-2" /><code>{"FABRIK NeckIK { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-overrideheadrotation" /><code>{"private void OverrideHeadRotation()"}</code> |

</details>
