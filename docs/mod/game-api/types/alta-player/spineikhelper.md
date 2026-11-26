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
| <Link id="m-ctor" /><code>{"SpineIKHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isautofillingspinebones" /><code>{"private bool isAutoFillingSpineBones"}</code> | <span className="api-desc">Inspector button that runs `FillReferencesFromRoot`.</span> |
| <Link id="m-issettingupik" /><code>{"private bool isSettingUpIK"}</code> | <span className="api-desc">Inspector button that runs `SetupIKBones`.</span> |
| <Link id="m-spineboneroot" /><code>{"private Transform spineBoneRoot"}</code> | <span className="api-desc">Backing field for `SpineBoneRoot`.</span> |
| <Link id="m-spinebones" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/bonewithrotationlimit">{"BoneWithRotationLimit"}</Link>{"> spineBones"}</code> | <span className="api-desc">The spine bones with their rotation limit settings.</span> |
| <Link id="m-spineik" /><code>{"private FABRIK spineIK"}</code> | <span className="api-desc">The FABRIK component made by `SetupIKBones`.</span> |
| <Link id="m-spinetarget" /><code>{"private Transform spineTarget"}</code> | <span className="api-desc">Transform the spine IK reaches for.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spineboneroot-2" /><code>{"Transform SpineBoneRoot { set; }"}</code> | <span className="api-desc">Sets the root bone used to fill in the spine bones.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fillreferencesfromroot" /><code>{"void FillReferencesFromRoot()"}</code> | <span className="api-desc">Sets the spine bone list to the root bone, its first child and that child's first child.</span> |
| <Link id="m-setupikbones" /><code>{"void SetupIKBones()"}</code> | <span className="api-desc">Adds FABRIK, puts the spine bones in its chain with disabled angle limits and sets the spine target.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Runs the setup or auto-fill when their inspector buttons are pressed.</span> |

</details>
