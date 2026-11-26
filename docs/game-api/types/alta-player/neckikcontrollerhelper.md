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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<NeckIKController>`](/game-api/types/alta-player/charactercomponenthelper-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NeckIKControllerHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isautofillingneckbones" /><code>{"private bool isAutoFillingNeckBones"}</code> | Inspector button that runs `FillNeckBonesFromRoot`. |
| <Link id="m-issettingupneckik" /><code>{"private bool isSettingUpNeckIK"}</code> | Inspector button that runs `SetupNeckIK`. |
| <Link id="m-neckbones" /><code>{"private List<"}<Link to="/game-api/types/alta-player/bonewithrotationlimit">{"BoneWithRotationLimit"}</Link>{"> neckBones"}</code> | The neck bones with their rotation limit settings. |
| <Link id="m-neckrootbone" /><code>{"private Transform neckRootBone"}</code> | Backing field for `NeckRootBone`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-neckrootbone-2" /><code>{"Transform NeckRootBone { set; }"}</code> | Sets the root bone used to fill in the neck bones. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fillneckbonesfromroot" /><code>{"void FillNeckBonesFromRoot()"}</code> | Sets the neck bone list to the root bone, its first child and that child's first child. |
| <Link id="m-setupneckik" /><code>{"void SetupNeckIK()"}</code> | Adds FABRIK, puts the neck bones in its chain and gives each a disabled angle rotation limit from its settings. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Runs the setup or auto-fill when their inspector buttons are pressed. |
