---
title: "BodyController"
description: "Moves and turns a player's body to follow the head and hands, using BodyControllerSettings that can be overridden."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BodyController

A **class** in `Root.Township`, `Alta.Character`.

Moves and turns a player's body to follow the head and hands, using `BodyControllerSettings` that can be overridden.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Nested types** [`BodyControllerSettingsOverride`](/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BodyController()"}</code> |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activesettings" /><code>{"private List<"}<Link to="/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride">{"BodyController.BodyControllerSettingsOverride"}</Link>{"> activeSettings"}</code> |
| <Link id="m-body" /><code>{"private Transform body"}</code> |
| <Link id="m-bodytarget" /><code>{"private Transform bodyTarget"}</code> |
| <Link id="m-finalheadheading" /><code>{"private float finalHeadHeading"}</code> |
| <Link id="m-finalheading" /><code>{"private float finalHeading"}</code> |
| <Link id="m-finallefthandheading" /><code>{"private float finalLeftHandHeading"}</code> |
| <Link id="m-finalpitch" /><code>{"private float finalPitch"}</code> |
| <Link id="m-finalrighthandheading" /><code>{"private float finalRightHandHeading"}</code> |
| <Link id="m-head" /><code>{"private Transform head"}</code> |
| <Link id="m-headheading" /><code>{"private float headHeading"}</code> |
| <Link id="m-headheadinginroom" /><code>{"private float headHeadingInRoom"}</code> |
| <Link id="m-headrotationmultiplier" /><code>{"private float headRotationMultiplier"}</code> |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> |
| <Link id="m-lefthand" /><code>{"private Transform leftHand"}</code> |
| <Link id="m-lefthandheadingangle" /><code>{"private float leftHandHeadingAngle"}</code> |
| <Link id="m-lefthandheadinginroom" /><code>{"private float leftHandHeadingInRoom"}</code> |
| <Link id="m-lefthandheadingmultiplier" /><code>{"private float leftHandHeadingMultiplier"}</code> |
| <Link id="m-originalhead" /><code>{"private Transform originalHead"}</code> |
| <Link id="m-righthand" /><code>{"private Transform rightHand"}</code> |
| <Link id="m-righthandheadingangle" /><code>{"private float rightHandHeadingAngle"}</code> |
| <Link id="m-righthandheadinginroom" /><code>{"private float rightHandHeadingInRoom"}</code> |
| <Link id="m-righthandheadingmultiplier" /><code>{"private float rightHandHeadingMultiplier"}</code> |
| <Link id="m-room" /><code>{"private Transform room"}</code> |
| <Link id="m-sidemovement" /><code>{"private float sideMovement"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodytarget-2" /><code>{"Transform BodyTarget { get; }"}</code> | Transform whose pitch is set for the body's forward bend. |
| <Link id="m-bodytransform" /><code>{"Transform BodyTransform { get; }"}</code> | The body transform it moves. |
| <Link id="m-head-2" /><code>{"Transform Head { get; set; }"}</code> | The head transform the body follows. Setting it reparents the head target. |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" Settings { get; }"}</code> | The newest relevant override, or the default from `PlayerSettings`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addoverridesetting" /><code>{"void AddOverrideSetting("}<Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" overrideSettings, Func<bool> relevantCheck)"}</code> | Adds override settings, used while the given check returns true. The newest relevant override wins. |
| <Link id="m-disabletracking" /><code>{"void DisableTracking()"}</code> | Swaps the head for a loose physics box at the same spot, so the body stops following the real head. |
| <Link id="m-enabletracking" /><code>{"void EnableTracking()"}</code> | Puts the real head back and destroys the stand-in. |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | Each frame moves the body towards the head and turns it from head heading, hand positions and head pitch. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-constrainangle" /><code>{"private float ConstrainAngle(float angle)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BodyController`:

[`CharacterLocalityController.bodyController`](/game-api/types/alta-player/characterlocalitycontroller#m-bodycontroller), [`PlayerCharacter.bodyController`](/game-api/types/alta-player/playercharacter#m-bodycontroller), [`PlayerCharacter.BodyController`](/game-api/types/alta-player/playercharacter#m-bodycontroller-2), [`DeadState.AnimateBodyWithKillingBlow`](/game-api/types/alta-player/deadstate#m-animatebodywithkillingblow), [`MovementBendController.bodyController`](/game-api/types/global-m-o/movementbendcontroller#m-bodycontroller), [`PlayerController.BodyController`](/game-api/types/global-p/playercontroller#m-bodycontroller).
