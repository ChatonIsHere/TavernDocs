---
title: "BowString"
description: "The grabbable string of a bow."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowString

A **class** in `Root.Township`, no namespace.

The grabbable string of a bow. Pulling it moves the string within limits, drives the bow's draw animation and haptics, and an arrow docked in it is shot on release.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BowString()"}</code> |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activecoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" activeCoroutine"}</code> |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> |
| <Link id="m-arrowpullgesture" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" arrowPullGesture"}</code> |
| <Link id="m-bottomstring" /><code>{"private LineRenderer bottomString"}</code> |
| <Link id="m-bottomtarget" /><code>{"private Transform bottomTarget"}</code> |
| <Link id="m-bow" /><code>{"private "}<Link to="/game-api/types/global-a-b/bow">{"Bow"}</Link>{" bow"}</code> |
| <Link id="m-bowhandhaptic" /><code>{"private AnimationCurve bowHandHaptic"}</code> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |
| <Link id="m-currentz" /><code>{"private float currentZ"}</code> |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |
| <Link id="m-dropdistancesquared" /><code>{"private float dropDistanceSquared"}</code> |
| <Link id="m-extraarrowupdater" /><code>{"private "}<Link to="/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" extraArrowUpdater"}</code> |
| <Link id="m-haptic" /><code>{"private float haptic"}</code> |
| <Link id="m-interactorholdingbowstring" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactorHoldingBowString"}</code> |
| <Link id="m-isaimonlyhorizontal" /><code>{"private bool isAimOnlyHorizontal"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-pullbackspeed" /><code>{"private AnimationCurve pullbackSpeed"}</code> |
| <Link id="m-shooter" /><code>{"private "}<Link to="/game-api/types/global-s/shooter">{"Shooter"}</Link>{" shooter"}</code> |
| <Link id="m-shootstrengthrtpc" /><code>{"private RTPC shootStrengthRTPC"}</code> |
| <Link id="m-spring" /><code>{"private AnimationCurve spring"}</code> |
| <Link id="m-strengthcurve" /><code>{"private AnimationCurve strengthCurve"}</code> |
| <Link id="m-stringbtn" /><code>{"private bool stringBtn"}</code> |
| <Link id="m-syncshoot" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-s/shootarguments">{"ShootArguments"}</Link>{"> syncShoot"}</code> |
| <Link id="m-tightnessmultiplier" /><code>{"private float tightnessMultiplier"}</code> |
| <Link id="m-topstring" /><code>{"private LineRenderer topString"}</code> |
| <Link id="m-toptarget" /><code>{"private Transform topTarget"}</code> |
| <Link id="m-zideal" /><code>{"private float zIdeal"}</code> |
| <Link id="m-zmax" /><code>{"private float zMax"}</code> |
| <Link id="m-zmin" /><code>{"private float zMin"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bow-2" /><code><Link to="/game-api/types/global-a-b/bow">{"Bow"}</Link>{" "}<Link to="/game-api/types/global-a-b/bow">{"Bow"}</Link>{" { get; }"}</code> | The bow this string belongs to. |
| <Link id="m-extraarrowupdater-2" /><code><Link to="/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" "}<Link to="/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" { get; }"}</code> | Component that handles extra arrows shot along with the main one. |
| <Link id="m-isignoringcollisiononshoot" /><code>{"bool IsIgnoringCollisionOnShoot { get; set; }"}</code> | If true, a shot arrow briefly ignores collisions with the bow and the shooter's body. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The string's own pickup that the hand grabs. |
| <Link id="m-stringdock" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" StringDock { get; }"}</code> | The dock an arrow is knocked into. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-tightnessmultiplier-2" /><code>{"private float TightnessMultiplier { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onshootingentity" /><code>{"event Action<"}<Link to="/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{", "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", Vector3> OnShootingEntity"}</code> | Raised when an arrow entity is shot, with the string, the arrow and a vector from the shooter. |
| <Link id="m-onupdatedstringpull" /><code>{"event Action<float> OnUpdatedStringPull"}</code> | Raised with the draw strength each time the string moves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks grab, release, dock and bow pickup events. |

<details>
<summary>22 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-arrowknocked" /><code>{"private void ArrowKnocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-bowdocked" /><code>{"private void BowDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bowPickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-bowundocked" /><code>{"private void BowUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-forcedrop" /><code>{"private void ForceDrop("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |
| <Link id="m-freezeanimator" /><code>{"private void FreezeAnimator()"}</code> |
| <Link id="m-getstrength" /><code>{"private float GetStrength()"}</code> |
| <Link id="m-getstrength-2" /><code>{"private float GetStrength(float z)"}</code> |
| <Link id="m-heldupdate" /><code>{"private void HeldUpdate()"}</code> |
| <Link id="m-ignorearrowcollisions" /><code>{"private void IgnoreArrowCollisions("}<Link to="/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arrow)"}</code> |
| <Link id="m-ignorecollisionbetweenarrowandbow" /><code>{"private void IgnoreCollisionBetweenArrowAndBow("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player)"}</code> |
| <Link id="m-interactfilter" /><code>{"private void InteractFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-onshoot" /><code>{"private void OnShoot("}<Link to="/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, Vector3 arg3)"}</code> |
| <Link id="m-playerandbowcolliders" /><code>{"private IEnumerable<Collider> PlayerAndBowColliders("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player) (iterator)"}</code> |
| <Link id="m-prebowdocked" /><code>{"private void PreBowDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bowPickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-springcoroutine" /><code>{"private IEnumerator SpringCoroutine() (iterator)"}</code> |
| <Link id="m-stringgrabbed" /><code>{"private void StringGrabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-stringreleased" /><code>{"private void StringReleased("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-updatearrowrotation" /><code>{"private void UpdateArrowRotation()"}</code> |
| <Link id="m-updatelinerenderersthickness" /><code>{"private void UpdateLineRenderersThickness(float thickness)"}</code> |
| <Link id="m-updatestringrenderers" /><code>{"private void UpdateStringRenderers(bool preDock = false)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BowString`:

[`BowDrawSkill.bowStrings`](/game-api/types/alta-player/bowdrawskill#m-bowstrings), [`BowDrawSkill.HandleInputChanged`](/game-api/types/alta-player/bowdrawskill#m-handleinputchanged), [`BowDrawSkill.inputs`](/game-api/types/alta-player/bowdrawskill#m-inputs), [`BowDrawSkill.OnArrowShot`](/game-api/types/alta-player/bowdrawskill#m-onarrowshot), [`BowMultiArrowShot.bowStrings`](/game-api/types/alta-player/bowmultiarrowshot#m-bowstrings), [`BowMultiArrowShot.CreateExtraArrows`](/game-api/types/alta-player/bowmultiarrowshot#m-createextraarrows), [`BowMultiArrowShot.inputs`](/game-api/types/alta-player/bowmultiarrowshot#m-inputs), [`BowMultiArrowShot.OnArrowShot`](/game-api/types/alta-player/bowmultiarrowshot#m-onarrowshot), [`LightBeamSkill.DestroyShotArrow`](/game-api/types/alta-player/lightbeamskill#m-destroyshotarrow), [`LightBeamSkill.HandleInputChanged`](/game-api/types/alta-player/lightbeamskill#m-handleinputchanged), [`BowStringPullbackInputMethod.bowString`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-bowstring), [`ExtraArrowUpdater.bowString`](/game-api/types/global-e-h/extraarrowupdater#m-bowstring), [`ExtraArrowUpdater.ShootExtraArrows`](/game-api/types/global-e-h/extraarrowupdater#m-shootextraarrows).
