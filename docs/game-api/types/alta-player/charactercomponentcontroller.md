---
title: "CharacterComponentController"
description: "Base for player character rig components (arm IK, elbows and so on) that an owning controller updates in a set order instead of through Unity's Update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterComponentController

An **abstract class** in `Root.Township`, `Alta.Character`.

Base for player character rig components (arm IK, elbows and so on) that an owning controller updates in a set order instead of through Unity's `Update`. Finds its `PlayerController` in a parent.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ArmController`](/game-api/types/alta-player/armcontroller), [`ArmIKController`](/game-api/types/alta-player/armikcontroller), [`BodyController`](/game-api/types/alta-player/bodycontroller), [`CharacterCollisionController`](/game-api/types/alta-player/charactercollisioncontroller), [`CharacterComponentControllerCollection`](/game-api/types/alta-player/charactercomponentcontrollercollection), [`ClavicleController`](/game-api/types/alta-player/claviclecontroller), [`DummyCharacterController`](/game-api/types/alta-player/dummycharactercontroller), [`ElbowController`](/game-api/types/alta-player/elbowcontroller), [`EyeFocusController`](/game-api/types/alta-player/eyefocuscontroller), [`GhostHandController`](/game-api/types/alta-player/ghosthandcontroller), [`Hand`](/game-api/types/alta-player/hand), [`IKSolverManagerWrapper`](/game-api/types/alta-player/iksolvermanagerwrapper), [`IKTwistRelaxerWrapper`](/game-api/types/alta-player/iktwistrelaxerwrapper), [`NeckIKController`](/game-api/types/alta-player/neckikcontroller), [`RotationLimitWrapper`](/game-api/types/alta-player/rotationlimitwrapper), [`ShoulderTwistController`](/game-api/types/alta-player/shouldertwistcontroller), [`SimpleIKController`](/game-api/types/alta-player/simpleikcontroller), [`TwistRelaxerController`](/game-api/types/alta-player/twistrelaxercontroller), [`NetworkedIKBody`](/game-api/types/global-m-o/networkedikbody)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected CharacterComponentController()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The `PlayerController` above this component, filled in from the parent. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocal" /><code>{"virtual bool IsLocal { get; set; }"}</code> | Whether this belongs to the local player. `PreComponentUpdate` only fires when true. |
| <Link id="m-playercontroller-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | The `PlayerController` found in the parents. |
| <Link id="m-playersettings" /><code><Link to="/game-api/types/alta-player/playercontrollersettings">{"PlayerControllerSettings"}</Link>{" PlayerSettings { get; }"}</code> | The player controller's settings, or null without a controller. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-postcomponentupdate" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostComponentUpdate"}</code> | Raised after each fixed update of the component. |
| <Link id="m-precomponentupdate" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PreComponentUpdate"}</code> | Raised by subclasses before they update, local player only. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"virtual void FixedUpdateCharacterComponent()"}</code> | Called each fixed step by the owner. The base version raises `PostComponentUpdate`. |
| <Link id="m-updatecharactercomponent" /><code>{"virtual void UpdateCharacterComponent()"}</code> | Called each frame by the owner. Empty in the base. |
| <Link id="m-onprecomponentupdate" /><code>{"protected void OnPreComponentUpdate()"}</code> | Raises `PreComponentUpdate`, but only for the local player. |

## Used in

Members of other types that take, return or hold a `CharacterComponentController`:

[`CharacterComponentControllerCollection.Controllers`](/game-api/types/alta-player/charactercomponentcontrollercollection#m-controllers), [`CharacterComponentControllerCollection.ownedControllers`](/game-api/types/alta-player/charactercomponentcontrollercollection#m-ownedcontrollers), [`CharacterComponentControllerCollection.unownedControllers`](/game-api/types/alta-player/charactercomponentcontrollercollection#m-unownedcontrollers), [`PlayerSpecialEffectsController.controllersToDisableOnDeath`](/game-api/types/global-p/playerspecialeffectscontroller#m-controllerstodisableondeath).
