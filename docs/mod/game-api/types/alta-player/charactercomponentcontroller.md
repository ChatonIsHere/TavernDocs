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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ArmController`](/mod/game-api/types/alta-player/armcontroller), [`ArmIKController`](/mod/game-api/types/alta-player/armikcontroller), [`BodyController`](/mod/game-api/types/alta-player/bodycontroller), [`CharacterCollisionController`](/mod/game-api/types/alta-player/charactercollisioncontroller), [`CharacterComponentControllerCollection`](/mod/game-api/types/alta-player/charactercomponentcontrollercollection), [`ClavicleController`](/mod/game-api/types/alta-player/claviclecontroller), [`DummyCharacterController`](/mod/game-api/types/alta-player/dummycharactercontroller), [`ElbowController`](/mod/game-api/types/alta-player/elbowcontroller), [`EyeFocusController`](/mod/game-api/types/alta-player/eyefocuscontroller), [`GhostHandController`](/mod/game-api/types/alta-player/ghosthandcontroller), [`Hand`](/mod/game-api/types/alta-player/hand), [`IKSolverManagerWrapper`](/mod/game-api/types/alta-player/iksolvermanagerwrapper), [`IKTwistRelaxerWrapper`](/mod/game-api/types/alta-player/iktwistrelaxerwrapper), [`NeckIKController`](/mod/game-api/types/alta-player/neckikcontroller), [`RotationLimitWrapper`](/mod/game-api/types/alta-player/rotationlimitwrapper), [`ShoulderTwistController`](/mod/game-api/types/alta-player/shouldertwistcontroller), [`SimpleIKController`](/mod/game-api/types/alta-player/simpleikcontroller), [`TwistRelaxerController`](/mod/game-api/types/alta-player/twistrelaxercontroller), [`NetworkedIKBody`](/mod/game-api/types/global-m-o/networkedikbody)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CharacterComponentController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The `PlayerController` above this component, filled in from the parent.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocal" /><code>{"virtual bool IsLocal { get; set; }"}</code> | <span className="api-desc">Whether this belongs to the local player. `PreComponentUpdate` only fires when true.</span> |
| <Link id="m-playercontroller-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | <span className="api-desc">The `PlayerController` found in the parents.</span> |
| <Link id="m-playersettings" /><code><Link to="/mod/game-api/types/alta-player/playercontrollersettings">{"PlayerControllerSettings"}</Link>{" PlayerSettings { get; }"}</code> | <span className="api-desc">The player controller's settings, or null without a controller.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-postcomponentupdate" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PostComponentUpdate"}</code> | <span className="api-desc">Raised after each fixed update of the component.</span> |
| <Link id="m-precomponentupdate" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PreComponentUpdate"}</code> | <span className="api-desc">Raised by subclasses before they update, local player only.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"virtual void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Called each fixed step by the owner. The base version raises `PostComponentUpdate`.</span> |
| <Link id="m-updatecharactercomponent" /><code>{"virtual void UpdateCharacterComponent()"}</code> | <span className="api-desc">Called each frame by the owner. Empty in the base.</span> |
| <Link id="m-onprecomponentupdate" /><code>{"protected void OnPreComponentUpdate()"}</code> | <span className="api-desc">Raises `PreComponentUpdate`, but only for the local player.</span> |

## Used in

Members of other types that take, return or hold a `CharacterComponentController`:

<div className="api-used-in">

[`CharacterComponentControllerCollection.Controllers`](/mod/game-api/types/alta-player/charactercomponentcontrollercollection#m-controllers), [`CharacterComponentControllerCollection.ownedControllers`](/mod/game-api/types/alta-player/charactercomponentcontrollercollection#m-ownedcontrollers), [`CharacterComponentControllerCollection.unownedControllers`](/mod/game-api/types/alta-player/charactercomponentcontrollercollection#m-unownedcontrollers), [`PlayerSpecialEffectsController.controllersToDisableOnDeath`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-controllerstodisableondeath).

</div>
