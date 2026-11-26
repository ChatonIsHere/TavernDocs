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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BodyController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activesettings" /><code>{"private List<"}<Link to="/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride">{"BodyController.BodyControllerSettingsOverride"}</Link>{"> activeSettings"}</code> | Stack of override settings; the newest still relevant one is used. |
| <Link id="m-body" /><code>{"private Transform body"}</code> | The body transform being moved and turned. |
| <Link id="m-bodytarget" /><code>{"private Transform bodyTarget"}</code> | Target whose pitch follows the body's forward bend. |
| <Link id="m-finalheadheading" /><code>{"private float finalHeadHeading"}</code> | Head heading after its impact curve is applied. |
| <Link id="m-finalheading" /><code>{"private float finalHeading"}</code> | The body heading worked out this frame. |
| <Link id="m-finallefthandheading" /><code>{"private float finalLeftHandHeading"}</code> | Left hand heading after its impact curve is applied. |
| <Link id="m-finalpitch" /><code>{"private float finalPitch"}</code> | The body pitch worked out this frame. |
| <Link id="m-finalrighthandheading" /><code>{"private float finalRightHandHeading"}</code> | Right hand heading after its impact curve is applied. |
| <Link id="m-head" /><code>{"private Transform head"}</code> | Backing field for `Head`. |
| <Link id="m-headheading" /><code>{"private float headHeading"}</code> | Head yaw relative to the body. |
| <Link id="m-headheadinginroom" /><code>{"private float headHeadingInRoom"}</code> | Head heading used in the weighted heading sum. |
| <Link id="m-headrotationmultiplier" /><code>{"private float headRotationMultiplier"}</code> | How much the head's yaw turns the body, from the settings curve. |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | Head target, moved under the new head when `Head` changes. |
| <Link id="m-lefthand" /><code>{"private Transform leftHand"}</code> | The left hand transform. |
| <Link id="m-lefthandheadingangle" /><code>{"private float leftHandHeadingAngle"}</code> | Left hand angle around the body. |
| <Link id="m-lefthandheadinginroom" /><code>{"private float leftHandHeadingInRoom"}</code> | Left hand heading used in the weighted heading sum. |
| <Link id="m-lefthandheadingmultiplier" /><code>{"private float leftHandHeadingMultiplier"}</code> | How much the left hand turns the body, from the settings curve. |
| <Link id="m-originalhead" /><code>{"private Transform originalHead"}</code> | The tracked head, kept while tracking is disabled. |
| <Link id="m-righthand" /><code>{"private Transform rightHand"}</code> | The right hand transform. |
| <Link id="m-righthandheadingangle" /><code>{"private float rightHandHeadingAngle"}</code> | Right hand angle around the body. |
| <Link id="m-righthandheadinginroom" /><code>{"private float rightHandHeadingInRoom"}</code> | Right hand heading used in the weighted heading sum. |
| <Link id="m-righthandheadingmultiplier" /><code>{"private float rightHandHeadingMultiplier"}</code> | How much the right hand turns the body, from the settings curve. |
| <Link id="m-room" /><code>{"private Transform room"}</code> | The play space transform, used to get head height. |
| <Link id="m-sidemovement" /><code>{"private float sideMovement"}</code> | Declared but not used. |

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

| Member | What it is |
| --- | --- |
| <Link id="m-constrainangle" /><code>{"private float ConstrainAngle(float angle)"}</code> | Wraps an angle to the -180 to 180 range. |

</details>

## Used in

Members of other types that take, return or hold a `BodyController`:

[`CharacterLocalityController.bodyController`](/game-api/types/alta-player/characterlocalitycontroller#m-bodycontroller), [`PlayerCharacter.bodyController`](/game-api/types/alta-player/playercharacter#m-bodycontroller), [`PlayerCharacter.BodyController`](/game-api/types/alta-player/playercharacter#m-bodycontroller-2), [`DeadState.AnimateBodyWithKillingBlow`](/game-api/types/alta-player/deadstate#m-animatebodywithkillingblow), [`MovementBendController.bodyController`](/game-api/types/global-m-o/movementbendcontroller#m-bodycontroller), [`PlayerController.BodyController`](/game-api/types/global-p/playercontroller#m-bodycontroller).
