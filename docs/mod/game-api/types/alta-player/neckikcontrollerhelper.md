---
title: "NeckIKControllerHelper"
description: "Editor helper for NeckIKController that fills in three neck bones from a root bone and builds the FABRIK chain with rotation limits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NeckIKControllerHelper

A **class** in `Root.Township`, `Alta.Character`.

Editor helper for `NeckIKController` that fills in three neck bones from a root bone and builds the FABRIK chain with rotation limits.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<NeckIKController>`](/mod/game-api/types/alta-player/charactercomponenthelper-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NeckIKControllerHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isautofillingneckbones" /><code>{"private bool isAutoFillingNeckBones"}</code> | <span className="api-desc">Inspector button that runs `FillNeckBonesFromRoot`.</span> |
| <Link id="m-issettingupneckik" /><code>{"private bool isSettingUpNeckIK"}</code> | <span className="api-desc">Inspector button that runs `SetupNeckIK`.</span> |
| <Link id="m-neckbones" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/bonewithrotationlimit">{"BoneWithRotationLimit"}</Link>{"> neckBones"}</code> | <span className="api-desc">The neck bones with their rotation limit settings.</span> |
| <Link id="m-neckrootbone" /><code>{"private Transform neckRootBone"}</code> | <span className="api-desc">Backing field for `NeckRootBone`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-neckrootbone-2" /><code>{"Transform NeckRootBone { set; }"}</code> | <span className="api-desc">Sets the root bone used to fill in the neck bones.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fillneckbonesfromroot" /><code>{"void FillNeckBonesFromRoot()"}</code> | <span className="api-desc">Sets the neck bone list to the root bone, its first child and that child's first child.</span> |
| <Link id="m-setupneckik" /><code>{"void SetupNeckIK()"}</code> | <span className="api-desc">Adds FABRIK, puts the neck bones in its chain and gives each a disabled angle rotation limit from its settings.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Runs the setup or auto-fill when their inspector buttons are pressed.</span> |
