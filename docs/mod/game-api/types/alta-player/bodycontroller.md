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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Nested types** [`BodyControllerSettingsOverride`](/mod/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BodyController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activesettings" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride">{"BodyController.BodyControllerSettingsOverride"}</Link>{"> activeSettings"}</code> | <span className="api-desc">Stack of override settings; the newest still relevant one is used.</span> |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">The body transform being moved and turned.</span> |
| <Link id="m-bodytarget" /><code>{"private Transform bodyTarget"}</code> | <span className="api-desc">Target whose pitch follows the body's forward bend.</span> |
| <Link id="m-finalheadheading" /><code>{"private float finalHeadHeading"}</code> | <span className="api-desc">Head heading after its impact curve is applied.</span> |
| <Link id="m-finalheading" /><code>{"private float finalHeading"}</code> | <span className="api-desc">The body heading worked out this frame.</span> |
| <Link id="m-finallefthandheading" /><code>{"private float finalLeftHandHeading"}</code> | <span className="api-desc">Left hand heading after its impact curve is applied.</span> |
| <Link id="m-finalpitch" /><code>{"private float finalPitch"}</code> | <span className="api-desc">The body pitch worked out this frame.</span> |
| <Link id="m-finalrighthandheading" /><code>{"private float finalRightHandHeading"}</code> | <span className="api-desc">Right hand heading after its impact curve is applied.</span> |
| <Link id="m-head" /><code>{"private Transform head"}</code> | <span className="api-desc">Backing field for `Head`.</span> |
| <Link id="m-headheading" /><code>{"private float headHeading"}</code> | <span className="api-desc">Head yaw relative to the body.</span> |
| <Link id="m-headheadinginroom" /><code>{"private float headHeadingInRoom"}</code> | <span className="api-desc">Head heading used in the weighted heading sum.</span> |
| <Link id="m-headrotationmultiplier" /><code>{"private float headRotationMultiplier"}</code> | <span className="api-desc">How much the head's yaw turns the body, from the settings curve.</span> |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | <span className="api-desc">Head target, moved under the new head when `Head` changes.</span> |
| <Link id="m-lefthand" /><code>{"private Transform leftHand"}</code> | <span className="api-desc">The left hand transform.</span> |
| <Link id="m-lefthandheadingangle" /><code>{"private float leftHandHeadingAngle"}</code> | <span className="api-desc">Left hand angle around the body.</span> |
| <Link id="m-lefthandheadinginroom" /><code>{"private float leftHandHeadingInRoom"}</code> | <span className="api-desc">Left hand heading used in the weighted heading sum.</span> |
| <Link id="m-lefthandheadingmultiplier" /><code>{"private float leftHandHeadingMultiplier"}</code> | <span className="api-desc">How much the left hand turns the body, from the settings curve.</span> |
| <Link id="m-originalhead" /><code>{"private Transform originalHead"}</code> | <span className="api-desc">The tracked head, kept while tracking is disabled.</span> |
| <Link id="m-righthand" /><code>{"private Transform rightHand"}</code> | <span className="api-desc">The right hand transform.</span> |
| <Link id="m-righthandheadingangle" /><code>{"private float rightHandHeadingAngle"}</code> | <span className="api-desc">Right hand angle around the body.</span> |
| <Link id="m-righthandheadinginroom" /><code>{"private float rightHandHeadingInRoom"}</code> | <span className="api-desc">Right hand heading used in the weighted heading sum.</span> |
| <Link id="m-righthandheadingmultiplier" /><code>{"private float rightHandHeadingMultiplier"}</code> | <span className="api-desc">How much the right hand turns the body, from the settings curve.</span> |
| <Link id="m-room" /><code>{"private Transform room"}</code> | <span className="api-desc">The play space transform, used to get head height.</span> |
| <Link id="m-sidemovement" /><code>{"private float sideMovement"}</code> | <span className="api-desc">Declared but not used.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodytarget-2" /><code>{"Transform BodyTarget { get; }"}</code> | <span className="api-desc">Transform whose pitch is set for the body's forward bend.</span> |
| <Link id="m-bodytransform" /><code>{"Transform BodyTransform { get; }"}</code> | <span className="api-desc">The body transform it moves.</span> |
| <Link id="m-head-2" /><code>{"Transform Head { get; set; }"}</code> | <span className="api-desc">The head transform the body follows. Setting it reparents the head target.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The newest relevant override, or the default from `PlayerSettings`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addoverridesetting" /><code>{"void AddOverrideSetting("}<Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" overrideSettings, Func<bool> relevantCheck)"}</code> | <span className="api-desc">Adds override settings, used while the given check returns true. The newest relevant override wins.</span> |
| <Link id="m-disabletracking" /><code>{"void DisableTracking()"}</code> | <span className="api-desc">Swaps the head for a loose physics box at the same spot, so the body stops following the real head.</span> |
| <Link id="m-enabletracking" /><code>{"void EnableTracking()"}</code> | <span className="api-desc">Puts the real head back and destroys the stand-in.</span> |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | <span className="api-desc">Each frame moves the body towards the head and turns it from head heading, hand positions and head pitch.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-constrainangle" /><code>{"private float ConstrainAngle(float angle)"}</code> | <span className="api-desc">Wraps an angle to the -180 to 180 range.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BodyController`:

<div className="api-used-in">

[`CharacterLocalityController.bodyController`](/mod/game-api/types/alta-player/characterlocalitycontroller#m-bodycontroller), [`PlayerCharacter.bodyController`](/mod/game-api/types/alta-player/playercharacter#m-bodycontroller), [`PlayerCharacter.BodyController`](/mod/game-api/types/alta-player/playercharacter#m-bodycontroller-2), [`DeadState.AnimateBodyWithKillingBlow`](/mod/game-api/types/alta-player/deadstate#m-animatebodywithkillingblow), [`MovementBendController.bodyController`](/mod/game-api/types/global-m-o/movementbendcontroller#m-bodycontroller), [`PlayerController.BodyController`](/mod/game-api/types/global-p/playercontroller#m-bodycontroller).

</div>
