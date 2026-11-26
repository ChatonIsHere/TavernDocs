---
title: "BowString"
description: "The grabbable string of a bow."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowString

A **class** in `Root.Township`, the global namespace.

The grabbable string of a bow. Pulling it moves the string within limits, drives the bow's draw animation and haptics, and an arrow docked in it is shot on release.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowString()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activecoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" activeCoroutine"}</code> | The running `SpringCoroutine`, stopped when the string is grabbed again. |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Animator with the "Draw" state that bends the bow. Only on while the string is used. |
| <Link id="m-arrowpullgesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" arrowPullGesture"}</code> | Hand gesture used while pulling the string. |
| <Link id="m-bottomstring" /><code>{"private LineRenderer bottomString"}</code> | Line renderer for the lower half of the string. |
| <Link id="m-bottomtarget" /><code>{"private Transform bottomTarget"}</code> | Point the lower string line runs to. |
| <Link id="m-bow" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bow">{"Bow"}</Link>{" bow"}</code> | Backing field for `Bow`, the bow this string belongs to. |
| <Link id="m-bowhandhaptic" /><code>{"private AnimationCurve bowHandHaptic"}</code> | Haptic curve played on the bow hand on release, scaled by strength. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform of the string. |
| <Link id="m-currentz" /><code>{"private float currentZ"}</code> | Current local pull depth of the string. |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | Backing field for `StringDock`, where the arrow is knocked. |
| <Link id="m-dropdistancesquared" /><code>{"private float dropDistanceSquared"}</code> | Squared distance between hand and string at which a local player drops the string. |
| <Link id="m-extraarrowupdater" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" extraArrowUpdater"}</code> | Backing field for `ExtraArrowUpdater`. |
| <Link id="m-haptic" /><code>{"private float haptic"}</code> | Haptic strength while pulling, scaled by draw strength (0.25 by default). |
| <Link id="m-interactorholdingbowstring" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactorHoldingBowString"}</code> | Interactor pulling the string, used for haptics and the drop distance check. |
| <Link id="m-isaimonlyhorizontal" /><code>{"private bool isAimOnlyHorizontal"}</code> | Passed to the bow's joints so aiming only turns horizontally. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger. Warns when the bow has no physical material. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`, the string's own pickup. |
| <Link id="m-pullbackspeed" /><code>{"private AnimationCurve pullbackSpeed"}</code> | Curve for how fast the string can be pulled back at each draw depth. |
| <Link id="m-shooter" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" shooter"}</code> | Shooter that fires the docked arrow. |
| <Link id="m-shootstrengthrtpc" /><code>{"private RTPC shootStrengthRTPC"}</code> | Wwise parameter set to the shot strength for the release sound. |
| <Link id="m-spring" /><code>{"private AnimationCurve spring"}</code> | Curve for the string springing back after release. Its last key sets the duration. |
| <Link id="m-strengthcurve" /><code>{"private AnimationCurve strengthCurve"}</code> | Curve from pull depth (rest to `zMin`) to shot strength. |
| <Link id="m-stringbtn" /><code>{"private bool stringBtn"}</code> | Inspector button that runs `UpdateStringRenderers`. |
| <Link id="m-syncshoot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-s/shootarguments">{"ShootArguments"}</Link>{"> syncShoot"}</code> | Method sync field. Never set or used in this build. |
| <Link id="m-tightnessmultiplier" /><code>{"private float tightnessMultiplier"}</code> | Backing field for `TightnessMultiplier`. -1 means not worked out yet. |
| <Link id="m-topstring" /><code>{"private LineRenderer topString"}</code> | Line renderer for the upper half of the string. |
| <Link id="m-toptarget" /><code>{"private Transform topTarget"}</code> | Point the upper string line runs to. |
| <Link id="m-zideal" /><code>{"private float zIdeal"}</code> | Local z position of the string at rest, read in `Awake`. |
| <Link id="m-zmax" /><code>{"private float zMax"}</code> | Closest local z the string can sit at. |
| <Link id="m-zmin" /><code>{"private float zMin"}</code> | Furthest local z the string can be pulled to (full draw). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bow-2" /><code><Link to="/mod/game-api/types/global-a-b/bow">{"Bow"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/bow">{"Bow"}</Link>{" { get; }"}</code> | The bow this string belongs to. |
| <Link id="m-extraarrowupdater-2" /><code><Link to="/mod/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" { get; }"}</code> | Component that handles extra arrows shot along with the main one. |
| <Link id="m-isignoringcollisiononshoot" /><code>{"bool IsIgnoringCollisionOnShoot { get; set; }"}</code> | If true, a shot arrow briefly ignores collisions with the bow and the shooter's body. |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The string's own pickup that the hand grabs. |
| <Link id="m-stringdock" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" StringDock { get; }"}</code> | The dock an arrow is knocked into. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tightnessmultiplier-2" /><code>{"private float TightnessMultiplier { get; }"}</code> | Bow tightness from its physical material (tightness times bow impact), or 1 if none. Cached after the first read. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onshootingentity" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", Vector3> OnShootingEntity"}</code> | Raised when an arrow entity is shot, with the string, the arrow and a vector from the shooter. |
| <Link id="m-onupdatedstringpull" /><code>{"event Action<float> OnUpdatedStringPull"}</code> | Raised with the draw strength each time the string moves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks grab, release, dock and bow pickup events. |

<details>
<summary>22 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowknocked" /><code>{"private void ArrowKnocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When an arrow docks on the string, moves a local player's grab to the string and plays the knock sound if the bow is held. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores the rest position, sets the string pickup's parent and hooks the shooter's pre-shoot and shoot events. |
| <Link id="m-bowdocked" /><code>{"private void BowDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bowPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When the bow is docked, scales the string lines if needed and snaps the string back to rest. |
| <Link id="m-bowundocked" /><code>{"private void BowUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Resets the string line thickness when the bow leaves a dock. |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Releases the string properly if it's held when the entity is destroyed. |
| <Link id="m-forcedrop" /><code>{"private void ForceDrop("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Drops the string when the bow itself is let go. |
| <Link id="m-freezeanimator" /><code>{"private void FreezeAnimator()"}</code> | Sets the "Draw" animation to its start and turns the animator off. |
| <Link id="m-getstrength" /><code>{"private float GetStrength()"}</code> | Draw strength (0 to 1) from the strength curve for how far the string is pulled. |
| <Link id="m-getstrength-2" /><code>{"private float GetStrength(float z)"}</code> | Draw strength (0 to 1) from the strength curve for how far the string is pulled. |
| <Link id="m-heldupdate" /><code>{"private void HeldUpdate()"}</code> | Each IK update while held: moves the string toward the hand, slowed by bow tightness, then updates haptics, visuals and arrow aim. |
| <Link id="m-ignorearrowcollisions" /><code>{"private void IgnoreArrowCollisions("}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arrow)"}</code> | Before a shot, stops the arrow colliding with the bow and the shooting player for a while. |
| <Link id="m-ignorecollisionbetweenarrowandbow" /><code>{"private void IgnoreCollisionBetweenArrowAndBow("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player)"}</code> | Ignores collisions between the arrow and the bow plus player body colliders for a set time. |
| <Link id="m-interactfilter" /><code>{"private void InteractFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only allows grabbing the string or docking an arrow while someone holds the bow. |
| <Link id="m-onshoot" /><code>{"private void OnShoot("}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, Vector3 arg3)"}</code> | Raises `OnShootingEntity` with the arrow entity and its velocity. |
| <Link id="m-playerandbowcolliders" /><code>{"private IEnumerable<Collider> PlayerAndBowColliders("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player) (iterator)"}</code> | Yields the bow's colliders and the player's body colliders. |
| <Link id="m-prebowdocked" /><code>{"private void PreBowDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bowPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Before the bow docks, undocks any arrow, resets the string visuals and freezes the animator next frame. |
| <Link id="m-springcoroutine" /><code>{"private IEnumerator SpringCoroutine() (iterator)"}</code> | Animates the string springing back to rest after release, along the `spring` curve. |
| <Link id="m-stringgrabbed" /><code>{"private void StringGrabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab: turns the animator on, sets the pull gesture, starts `HeldUpdate` and points the bow joints at the pulling hand. |
| <Link id="m-stringreleased" /><code>{"private void StringReleased("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release: springs the string back, plays sound and haptics, and if the local player held it with an arrow, shoots. |
| <Link id="m-updatearrowrotation" /><code>{"private void UpdateArrowRotation()"}</code> | Points the docked arrow at the bow's hand rest for whichever hand holds the bow. |
| <Link id="m-updatelinerenderersthickness" /><code>{"private void UpdateLineRenderersThickness(float thickness)"}</code> | Sets the width of both string lines. |
| <Link id="m-updatestringrenderers" /><code>{"private void UpdateStringRenderers(bool preDock = false)"}</code> | Client: sets the draw animation to the current strength and stretches the string lines to their targets. |

</details>

## Used in

Members of other types that take, return or hold a `BowString`:

[`BowDrawSkill.bowStrings`](/mod/game-api/types/alta-player/bowdrawskill#m-bowstrings), [`BowDrawSkill.HandleInputChanged`](/mod/game-api/types/alta-player/bowdrawskill#m-handleinputchanged), [`BowDrawSkill.inputs`](/mod/game-api/types/alta-player/bowdrawskill#m-inputs), [`BowDrawSkill.OnArrowShot`](/mod/game-api/types/alta-player/bowdrawskill#m-onarrowshot), [`BowMultiArrowShot.bowStrings`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-bowstrings), [`BowMultiArrowShot.CreateExtraArrows`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-createextraarrows), [`BowMultiArrowShot.inputs`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-inputs), [`BowMultiArrowShot.OnArrowShot`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-onarrowshot), [`LightBeamSkill.DestroyShotArrow`](/mod/game-api/types/alta-player/lightbeamskill#m-destroyshotarrow), [`LightBeamSkill.HandleInputChanged`](/mod/game-api/types/alta-player/lightbeamskill#m-handleinputchanged), [`BowStringPullbackInputMethod.bowString`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-bowstring), [`ExtraArrowUpdater.bowString`](/mod/game-api/types/global-e-h/extraarrowupdater#m-bowstring), [`ExtraArrowUpdater.ShootExtraArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-shootextraarrows).
