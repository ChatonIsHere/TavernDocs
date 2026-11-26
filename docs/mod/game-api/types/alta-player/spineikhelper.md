---
title: "SpineIKHelper"
description: "Editor helper that fills in three spine bones from a root bone and builds a FABRIK chain with rotation limits aimed at a spine target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpineIKHelper

A **class** in `Root.Township`, `Alta.Character`.

Editor helper that fills in three spine bones from a root bone and builds a FABRIK chain with rotation limits aimed at a spine target.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ScriptHelper`](/mod/game-api/types/alta-utilities/scripthelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpineIKHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isautofillingspinebones" /><code>{"private bool isAutoFillingSpineBones"}</code> | Inspector button that runs `FillReferencesFromRoot`. |
| <Link id="m-issettingupik" /><code>{"private bool isSettingUpIK"}</code> | Inspector button that runs `SetupIKBones`. |
| <Link id="m-spineboneroot" /><code>{"private Transform spineBoneRoot"}</code> | Backing field for `SpineBoneRoot`. |
| <Link id="m-spinebones" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/bonewithrotationlimit">{"BoneWithRotationLimit"}</Link>{"> spineBones"}</code> | The spine bones with their rotation limit settings. |
| <Link id="m-spineik" /><code>{"private FABRIK spineIK"}</code> | The FABRIK component made by `SetupIKBones`. |
| <Link id="m-spinetarget" /><code>{"private Transform spineTarget"}</code> | Transform the spine IK reaches for. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spineboneroot-2" /><code>{"Transform SpineBoneRoot { set; }"}</code> | Sets the root bone used to fill in the spine bones. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fillreferencesfromroot" /><code>{"void FillReferencesFromRoot()"}</code> | Sets the spine bone list to the root bone, its first child and that child's first child. |
| <Link id="m-setupikbones" /><code>{"void SetupIKBones()"}</code> | Adds FABRIK, puts the spine bones in its chain with disabled angle limits and sets the spine target. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Runs the setup or auto-fill when their inspector buttons are pressed. |

</details>
