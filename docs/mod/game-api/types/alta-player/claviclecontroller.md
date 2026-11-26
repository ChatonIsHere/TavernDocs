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
| <Link id="m-ctor" /><code>{"ClavicleController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Backing field for `Body`.</span> |
| <Link id="m-clavicle" /><code>{"private Transform clavicle"}</code> | <span className="api-desc">Backing field for `Clavicle`.</span> |
| <Link id="m-elbowtarget" /><code>{"private Transform elbowTarget"}</code> | <span className="api-desc">Backing field for `ElbowTarget`.</span> |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | <span className="api-desc">Backing field for `HandIndex`.</span> |
| <Link id="m-handtarget" /><code>{"private Transform handTarget"}</code> | <span className="api-desc">Backing field for `HandTarget`.</span> |
| <Link id="m-previouslocalrotation" /><code>{"private Quaternion previousLocalRotation"}</code> | <span className="api-desc">Clavicle rotation from the last fixed update, used to smooth the change.</span> |
| <Link id="m-startinglocalrotation" /><code>{"private Vector3 startingLocalRotation"}</code> | <span className="api-desc">Clavicle's local Euler rotation at `Start`, which the computed offsets are added to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; set; }"}</code> | <span className="api-desc">Body transform the hand and elbow targets are measured against.</span> |
| <Link id="m-clavicle-2" /><code>{"Transform Clavicle { get; set; }"}</code> | <span className="api-desc">The clavicle bone this controller rotates.</span> |
| <Link id="m-elbowtarget-2" /><code>{"Transform ElbowTarget { get; set; }"}</code> | <span className="api-desc">Elbow IK target, averaged with the hand for the Y rotation when the settings say so.</span> |
| <Link id="m-handindex-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which arm this is; the left side flips the Y rotation and the right side mirrors X.</span> |
| <Link id="m-handtarget-2" /><code>{"Transform HandTarget { get; set; }"}</code> | <span className="api-desc">Hand IK target the clavicle reacts to.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/claviclecontrollersettings">{"ClavicleControllerSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">Shortcut to `PlayerSettings.ClavicleControllerSettings` (curves, multipliers and clamps).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Works out Y and Z clavicle rotation from the hand position via the settings curves, clamps them and applies them to the bone.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Stores the clavicle's starting local rotation as the base for later offsets.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ClavicleController`:

<div className="api-used-in">

[`ArmIKController.clavicleController`](/mod/game-api/types/alta-player/armikcontroller#m-claviclecontroller), [`ArmIKController.ClavicleController`](/mod/game-api/types/alta-player/armikcontroller#m-claviclecontroller-2).

</div>
