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
| <Link id="m-ctor" /><code>{"BowString()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activecoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" activeCoroutine"}</code> | <span className="api-desc">The running `SpringCoroutine`, stopped when the string is grabbed again.</span> |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Animator with the "Draw" state that bends the bow. Only on while the string is used.</span> |
| <Link id="m-arrowpullgesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" arrowPullGesture"}</code> | <span className="api-desc">Hand gesture used while pulling the string.</span> |
| <Link id="m-bottomstring" /><code>{"private LineRenderer bottomString"}</code> | <span className="api-desc">Line renderer for the lower half of the string.</span> |
| <Link id="m-bottomtarget" /><code>{"private Transform bottomTarget"}</code> | <span className="api-desc">Point the lower string line runs to.</span> |
| <Link id="m-bow" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bow">{"Bow"}</Link>{" bow"}</code> | <span className="api-desc">Backing field for `Bow`, the bow this string belongs to.</span> |
| <Link id="m-bowhandhaptic" /><code>{"private AnimationCurve bowHandHaptic"}</code> | <span className="api-desc">Haptic curve played on the bow hand on release, scaled by strength.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform of the string.</span> |
| <Link id="m-currentz" /><code>{"private float currentZ"}</code> | <span className="api-desc">Current local pull depth of the string.</span> |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">Backing field for `StringDock`, where the arrow is knocked.</span> |
| <Link id="m-dropdistancesquared" /><code>{"private float dropDistanceSquared"}</code> | <span className="api-desc">Squared distance between hand and string at which a local player drops the string.</span> |
| <Link id="m-extraarrowupdater" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" extraArrowUpdater"}</code> | <span className="api-desc">Backing field for `ExtraArrowUpdater`.</span> |
| <Link id="m-haptic" /><code>{"private float haptic"}</code> | <span className="api-desc">Haptic strength while pulling, scaled by draw strength (0.25 by default).</span> |
| <Link id="m-interactorholdingbowstring" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactorHoldingBowString"}</code> | <span className="api-desc">Interactor pulling the string, used for haptics and the drop distance check.</span> |
| <Link id="m-isaimonlyhorizontal" /><code>{"private bool isAimOnlyHorizontal"}</code> | <span className="api-desc">Passed to the bow's joints so aiming only turns horizontally.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger. Warns when the bow has no physical material.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`, the string's own pickup.</span> |
| <Link id="m-pullbackspeed" /><code>{"private AnimationCurve pullbackSpeed"}</code> | <span className="api-desc">Curve for how fast the string can be pulled back at each draw depth.</span> |
| <Link id="m-shooter" /><code>{"private "}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" shooter"}</code> | <span className="api-desc">Shooter that fires the docked arrow.</span> |
| <Link id="m-shootstrengthrtpc" /><code>{"private RTPC shootStrengthRTPC"}</code> | <span className="api-desc">Wwise parameter set to the shot strength for the release sound.</span> |
| <Link id="m-spring" /><code>{"private AnimationCurve spring"}</code> | <span className="api-desc">Curve for the string springing back after release. Its last key sets the duration.</span> |
| <Link id="m-strengthcurve" /><code>{"private AnimationCurve strengthCurve"}</code> | <span className="api-desc">Curve from pull depth (rest to `zMin`) to shot strength.</span> |
| <Link id="m-stringbtn" /><code>{"private bool stringBtn"}</code> | <span className="api-desc">Inspector button that runs `UpdateStringRenderers`.</span> |
| <Link id="m-syncshoot" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-s/shootarguments">{"ShootArguments"}</Link>{"> syncShoot"}</code> | <span className="api-desc">Method sync field. Never set or used in this build.</span> |
| <Link id="m-tightnessmultiplier" /><code>{"private float tightnessMultiplier"}</code> | <span className="api-desc">Backing field for `TightnessMultiplier`. -1 means not worked out yet.</span> |
| <Link id="m-topstring" /><code>{"private LineRenderer topString"}</code> | <span className="api-desc">Line renderer for the upper half of the string.</span> |
| <Link id="m-toptarget" /><code>{"private Transform topTarget"}</code> | <span className="api-desc">Point the upper string line runs to.</span> |
| <Link id="m-zideal" /><code>{"private float zIdeal"}</code> | <span className="api-desc">Local z position of the string at rest, read in `Awake`.</span> |
| <Link id="m-zmax" /><code>{"private float zMax"}</code> | <span className="api-desc">Closest local z the string can sit at.</span> |
| <Link id="m-zmin" /><code>{"private float zMin"}</code> | <span className="api-desc">Furthest local z the string can be pulled to (full draw).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bow-2" /><code><Link to="/mod/game-api/types/global-a-b/bow">{"Bow"}</Link>{" "}<Link to="/mod/game-api/types/global-a-b/bow">{"Bow"}</Link>{" { get; }"}</code> | <span className="api-desc">The bow this string belongs to.</span> |
| <Link id="m-extraarrowupdater-2" /><code><Link to="/mod/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/extraarrowupdater">{"ExtraArrowUpdater"}</Link>{" { get; }"}</code> | <span className="api-desc">Component that handles extra arrows shot along with the main one.</span> |
| <Link id="m-isignoringcollisiononshoot" /><code>{"bool IsIgnoringCollisionOnShoot { get; set; }"}</code> | <span className="api-desc">If true, a shot arrow briefly ignores collisions with the bow and the shooter's body.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The string's own pickup that the hand grabs.</span> |
| <Link id="m-stringdock" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" StringDock { get; }"}</code> | <span className="api-desc">The dock an arrow is knocked into.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tightnessmultiplier-2" /><code>{"private float TightnessMultiplier { get; }"}</code> | <span className="api-desc">Bow tightness from its physical material (tightness times bow impact), or 1 if none. Cached after the first read.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onshootingentity" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-a-b/bowstring">{"BowString"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", Vector3> OnShootingEntity"}</code> | <span className="api-desc">Raised when an arrow entity is shot, with the string, the arrow and a vector from the shooter.</span> |
| <Link id="m-onupdatedstringpull" /><code>{"event Action<float> OnUpdatedStringPull"}</code> | <span className="api-desc">Raised with the draw strength each time the string moves.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks grab, release, dock and bow pickup events.</span> |

<details className="api-private">
<summary>22 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrowknocked" /><code>{"private void ArrowKnocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">When an arrow docks on the string, moves a local player's grab to the string and plays the knock sound if the bow is held.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores the rest position, sets the string pickup's parent and hooks the shooter's pre-shoot and shoot events.</span> |
| <Link id="m-bowdocked" /><code>{"private void BowDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bowPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">When the bow is docked, scales the string lines if needed and snaps the string back to rest.</span> |
| <Link id="m-bowundocked" /><code>{"private void BowUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Resets the string line thickness when the bow leaves a dock.</span> |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Releases the string properly if it's held when the entity is destroyed.</span> |
| <Link id="m-forcedrop" /><code>{"private void ForceDrop("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Drops the string when the bow itself is let go.</span> |
| <Link id="m-freezeanimator" /><code>{"private void FreezeAnimator()"}</code> | <span className="api-desc">Sets the "Draw" animation to its start and turns the animator off.</span> |
| <Link id="m-getstrength" /><code>{"private float GetStrength()"}</code> | <span className="api-desc">Draw strength (0 to 1) from the strength curve for how far the string is pulled.</span> |
| <Link id="m-getstrength-2" /><code>{"private float GetStrength(float z)"}</code> | <span className="api-desc">Draw strength (0 to 1) from the strength curve for how far the string is pulled.</span> |
| <Link id="m-heldupdate" /><code>{"private void HeldUpdate()"}</code> | <span className="api-desc">Each IK update while held: moves the string toward the hand, slowed by bow tightness, then updates haptics, visuals and arrow aim.</span> |
| <Link id="m-ignorearrowcollisions" /><code>{"private void IgnoreArrowCollisions("}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arrow)"}</code> | <span className="api-desc">Before a shot, stops the arrow colliding with the bow and the shooting player for a while.</span> |
| <Link id="m-ignorecollisionbetweenarrowandbow" /><code>{"private void IgnoreCollisionBetweenArrowAndBow("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player)"}</code> | <span className="api-desc">Ignores collisions between the arrow and the bow plus player body colliders for a set time.</span> |
| <Link id="m-interactfilter" /><code>{"private void InteractFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only allows grabbing the string or docking an arrow while someone holds the bow.</span> |
| <Link id="m-onshoot" /><code>{"private void OnShoot("}<Link to="/mod/game-api/types/global-s/shooter">{"Shooter"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, Vector3 arg3)"}</code> | <span className="api-desc">Raises `OnShootingEntity` with the arrow entity and its velocity.</span> |
| <Link id="m-playerandbowcolliders" /><code>{"private IEnumerable<Collider> PlayerAndBowColliders("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player) (iterator)"}</code> | <span className="api-desc">Yields the bow's colliders and the player's body colliders.</span> |
| <Link id="m-prebowdocked" /><code>{"private void PreBowDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bowPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Before the bow docks, undocks any arrow, resets the string visuals and freezes the animator next frame.</span> |
| <Link id="m-springcoroutine" /><code>{"private IEnumerator SpringCoroutine() (iterator)"}</code> | <span className="api-desc">Animates the string springing back to rest after release, along the `spring` curve.</span> |
| <Link id="m-stringgrabbed" /><code>{"private void StringGrabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab: turns the animator on, sets the pull gesture, starts `HeldUpdate` and points the bow joints at the pulling hand.</span> |
| <Link id="m-stringreleased" /><code>{"private void StringReleased("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release: springs the string back, plays sound and haptics, and if the local player held it with an arrow, shoots.</span> |
| <Link id="m-updatearrowrotation" /><code>{"private void UpdateArrowRotation()"}</code> | <span className="api-desc">Points the docked arrow at the bow's hand rest for whichever hand holds the bow.</span> |
| <Link id="m-updatelinerenderersthickness" /><code>{"private void UpdateLineRenderersThickness(float thickness)"}</code> | <span className="api-desc">Sets the width of both string lines.</span> |
| <Link id="m-updatestringrenderers" /><code>{"private void UpdateStringRenderers(bool preDock = false)"}</code> | <span className="api-desc">Client: sets the draw animation to the current strength and stretches the string lines to their targets.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BowString`:

<div className="api-used-in">

[`BowDrawSkill.bowStrings`](/mod/game-api/types/alta-player/bowdrawskill#m-bowstrings), [`BowDrawSkill.HandleInputChanged`](/mod/game-api/types/alta-player/bowdrawskill#m-handleinputchanged), [`BowDrawSkill.inputs`](/mod/game-api/types/alta-player/bowdrawskill#m-inputs), [`BowDrawSkill.OnArrowShot`](/mod/game-api/types/alta-player/bowdrawskill#m-onarrowshot), [`BowMultiArrowShot.bowStrings`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-bowstrings), [`BowMultiArrowShot.CreateExtraArrows`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-createextraarrows), [`BowMultiArrowShot.inputs`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-inputs), [`BowMultiArrowShot.OnArrowShot`](/mod/game-api/types/alta-player/bowmultiarrowshot#m-onarrowshot), [`LightBeamSkill.DestroyShotArrow`](/mod/game-api/types/alta-player/lightbeamskill#m-destroyshotarrow), [`LightBeamSkill.HandleInputChanged`](/mod/game-api/types/alta-player/lightbeamskill#m-handleinputchanged), [`BowStringPullbackInputMethod.bowString`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-bowstring), [`ExtraArrowUpdater.bowString`](/mod/game-api/types/global-e-h/extraarrowupdater#m-bowstring), [`ExtraArrowUpdater.ShootExtraArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-shootextraarrows).

</div>
