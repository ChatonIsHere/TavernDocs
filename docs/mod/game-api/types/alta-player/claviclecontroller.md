---
title: "ClavicleController"
description: "Character rig component that rotates a clavicle bone to follow where the hand (and optionally elbow) target is, using curves from..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClavicleController

A **class** in `Root.Township`, `Alta.Character`.

Character rig component that rotates a clavicle bone to follow where the hand (and optionally elbow) target is, using curves from `PlayerSettings.ClavicleControllerSettings`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClavicleController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | Backing field for `Body`. |
| <Link id="m-clavicle" /><code>{"private Transform clavicle"}</code> | Backing field for `Clavicle`. |
| <Link id="m-elbowtarget" /><code>{"private Transform elbowTarget"}</code> | Backing field for `ElbowTarget`. |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | Backing field for `HandIndex`. |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> | Backing field for `HandTarget`. |
| <Link id="m-previouslocalrotation" /><code>{"private Quaternion previousLocalRotation"}</code> | Clavicle rotation from the last fixed update, used to smooth the change. |
| <Link id="m-startinglocalrotation" /><code>{"private Vector3 startingLocalRotation"}</code> | Clavicle's local Euler rotation at `Start`, which the computed offsets are added to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; set; }"}</code> | Body transform the hand and elbow targets are measured against. |
| <Link id="m-clavicle-2" /><code>{"Transform Clavicle { get; set; }"}</code> | The clavicle bone this controller rotates. |
| <Link id="m-elbowtarget-2" /><code>{"Transform ElbowTarget { get; set; }"}</code> | Elbow IK target, averaged with the hand for the Y rotation when the settings say so. |
| <Link id="m-handindex-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> | Which arm this is; the left side flips the Y rotation and the right side mirrors X. |
| <Link id="m-handtarget-2" /><code>{"Transform HandTarget { get; set; }"}</code> | Hand IK target the clavicle reacts to. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/claviclecontrollersettings">{"ClavicleControllerSettings"}</Link>{" Settings { get; }"}</code> | Shortcut to `PlayerSettings.ClavicleControllerSettings` (curves, multipliers and clamps). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Works out Y and Z clavicle rotation from the hand position via the settings curves, clamps them and applies them to the bone. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Stores the clavicle's starting local rotation as the base for later offsets. |

</details>

## Used in

Members of other types that take, return or hold a `ClavicleController`:

[`ArmIKController.clavicleController`](/mod/game-api/types/alta-player/armikcontroller#m-claviclecontroller), [`ArmIKController.ClavicleController`](/mod/game-api/types/alta-player/armikcontroller#m-claviclecontroller-2).
