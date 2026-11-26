---
title: "ClimbingHand"
description: "One hand's climbing state: grabbing a climbable surface, holding the grip and working out how hard the hand pulls the body."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingHand

A **class** in `Root.Township`, `Features.Climbing`.

One hand's climbing state: grabbing a climbable surface, holding the grip and working out how hard the hand pulls the body. Made per hand by `ClimbingHandler`; the grip is synced to other players.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingHand("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> | <span className="api-desc">Creates a `ClimbingHand` from `controller`, `handler` and `unlock`.</span> |

## Fields

<details className="api-private">
<summary>31 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkframecount" /><code>{"private const int CheckFrameCount"}</code> | <span className="api-desc">Frames a closed hand keeps trying to grab after a failed first try (5).</span> |
| <Link id="m-checkframes" /><code>{"private int checkFrames"}</code> | <span className="api-desc">Frames left to keep retrying a grab.</span> |
| <Link id="m-climbable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{" climbable"}</code> | <span className="api-desc">The climbable currently gripped.</span> |
| <Link id="m-collider" /><code>{"private Collider collider"}</code> | <span className="api-desc">The collider currently gripped.</span> |
| <Link id="m-currentlygrabbingobjectlayer" /><code>{"private int currentlyGrabbingObjectLayer"}</code> | <span className="api-desc">Original layer of the gripped object, synced to others.</span> |
| <Link id="m-currentpressure" /><code>{"private Vector3 currentPressure"}</code> | <span className="api-desc">Smoothed pressure the hand is applying this frame.</span> |
| <Link id="m-currentpressuremagnitude" /><code>{"private float currentPressureMagnitude"}</code> | <span className="api-desc">Size of `currentPressure`, exposed as `CurrentForce` while climbing.</span> |
| <Link id="m-frameindex" /><code>{"private int frameIndex"}</code> | <span className="api-desc">Index into `lastFrames`.</span> |
| <Link id="m-getcolliderclimbable" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-m-o/memoizecomponentone-t">{"MemoizeComponentOne"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{"> getColliderClimbable"}</code> | <span className="api-desc">Cached lookup of `IClimbable` on a collider.</span> |
| <Link id="m-getrigidbodyclimbable" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-m-o/memoizecomponentone-t">{"MemoizeComponentOne"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{"> getRigidbodyClimbable"}</code> | <span className="api-desc">Cached lookup of `IClimbable` on a collider's rigidbody.</span> |
| <Link id="m-grabpositionoffset" /><code>{"private readonly Vector3 grabPositionOffset"}</code> | <span className="api-desc">The controller's grip point offset from the hand.</span> |
| <Link id="m-grabresults" /><code>{"private static readonly Collider[] grabResults"}</code> | <span className="api-desc">Shared buffer for overlap results.</span> |
| <Link id="m-gravityboost" /><code>{"private float gravityBoost"}</code> | <span className="api-desc">How much of gravity skips the pressure cap, set from the climbable and surface normal.</span> |
| <Link id="m-grip" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{"? grip"}</code> | <span className="api-desc">Where the hand holds, relative to the gripped collider; null when not climbing.</span> |
| <Link id="m-handler" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> | <span className="api-desc">The climbing handler that owns this hand.</span> |
| <Link id="m-incorrecthandstrengthmodifier" /><code>{"private float incorrectHandStrengthModifier"}</code> | <span className="api-desc">Grip strength from 0 to 1 that drops when the hand pulls wrongly; the grip breaks at 0.</span> |
| <Link id="m-ishandclosed" /><code>{"private bool isHandClosed"}</code> | <span className="api-desc">Whether the interact input is held.</span> |
| <Link id="m-ishanging" /><code>{"private bool isHanging"}</code> | <span className="api-desc">Whether the arm is at full stretch this frame.</span> |
| <Link id="m-lastarmdirection" /><code>{"private Vector3 lastArmDirection"}</code> | <span className="api-desc">Direction from shoulder to grip, from the last check.</span> |
| <Link id="m-lastarmlength" /><code>{"private float lastArmLength"}</code> | <span className="api-desc">Distance from shoulder to grip, capped at the hang distance.</span> |
| <Link id="m-lastframeprocessran" /><code>{"private int lastFrameProcessRan"}</code> | <span className="api-desc">Declared but not used.</span> |
| <Link id="m-lastframes" /><code>{"private readonly Vector3[] lastFrames"}</code> | <span className="api-desc">Recent hand positions used for pressure; holds one frame.</span> |
| <Link id="m-masterhand" /><code>{"private readonly Transform masterHand"}</code> | <span className="api-desc">Root of the tracked hand.</span> |
| <Link id="m-player" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The network player who owns the hand, used to check sync permission.</span> |
| <Link id="m-shoulder" /><code>{"private readonly Transform shoulder"}</code> | <span className="api-desc">The arm's shoulder (or the head if there is no arm IK).</span> |
| <Link id="m-shouldercache" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" shoulderCache"}</code> | <span className="api-desc">Shoulder position relative to the gripped collider from the last frame.</span> |
| <Link id="m-sphere" /><code>{"private static SphereCollider sphere"}</code> | <span className="api-desc">Shared sphere collider used for penetration tests.</span> |
| <Link id="m-sync" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for grip and release messages.</span> |
| <Link id="m-syncimmediategrabfail" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/throttledmethodsync">{"ThrottledMethodSync"}</Link>{" syncImmediateGrabFail"}</code> | <span className="api-desc">Throttled sync for failed grabs.</span> |
| <Link id="m-syncvoluntarybreak" /><code>{"private bool syncVoluntaryBreak"}</code> | <span className="api-desc">Whether the last release was voluntary, sent with the release so others skip the break effect.</span> |
| <Link id="m-unlock" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock"}</code> | <span className="api-desc">Unlock required to climb, or null.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actualhandposition" /><code>{"Vector3 ActualHandPosition { get; set; }"}</code> | <span className="api-desc">Where the real (tracked) hand is while gripping, corrected for body velocity. Used for stamina drain by distance.</span> |
| <Link id="m-controller" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; }"}</code> | <span className="api-desc">The hand's `Controller`.</span> |
| <Link id="m-currentforce" /><code>{"float CurrentForce { get; }"}</code> | <span className="api-desc">Size of the pressure this hand applied this frame. 0 when not climbing.</span> |
| <Link id="m-currentgripposition" /><code>{"Vector3 CurrentGripPosition { get; }"}</code> | <span className="api-desc">World position of the grip point. Zero when not climbing.</span> |
| <Link id="m-currentgriprotation" /><code>{"Quaternion CurrentGripRotation { get; }"}</code> | <span className="api-desc">World rotation of the grip point. Identity when not climbing.</span> |
| <Link id="m-currentlygrabbingobjectlayer-2" /><code>{"int CurrentlyGrabbingObjectLayer { get; }"}</code> | <span className="api-desc">Physics layer of the object last grabbed. Picks the stamina use multiplier.</span> |
| <Link id="m-isclimbing" /><code>{"bool IsClimbing { get; }"}</code> | <span className="api-desc">True while the hand holds a grip.</span> |
| <Link id="m-ishanging-2" /><code>{"bool IsHanging { get; }"}</code> | <span className="api-desc">True while climbing and the arm is stretched to the hang distance.</span> |
| <Link id="m-lastarmdirection-2" /><code>{"Vector3 LastArmDirection { get; }"}</code> | <span className="api-desc">Direction from shoulder to grip at the last hang check.</span> |
| <Link id="m-oldgripposition" /><code>{"Vector3 OldGripPosition { get; private set; }"}</code> | <span className="api-desc">Grip world position from before this frame's update.</span> |
| <Link id="m-oldgriprotation" /><code>{"Quaternion OldGripRotation { get; private set; }"}</code> | <span className="api-desc">Grip world rotation from before this frame's update.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-startedclimbing" /><code>{"event Action startedClimbing"}</code> | <span className="api-desc">Raised when the hand takes a grip.</span> |
| <Link id="m-stoppedclimbing" /><code>{"event Action stoppedClimbing"}</code> | <span className="api-desc">Raised when the hand lets go.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-breakgrip-2" /><code>{"void BreakGrip(bool isVoluntary)"}</code> | <span className="api-desc">Lets go: detaches the hand, plays the grab broken effect if not voluntary, syncs it and raises `stoppedClimbing`.</span> |
| <Link id="m-handpressure" /><code>{"Vector3 HandPressure(float deltaTime, float gravity, ref float remainingPressure, out float pressureDirectionPower)"}</code> | <span className="api-desc">Works out the push or pull this hand applies to the body from the hand's offset to the grip, limited by the pressure left.</span> |
| <Link id="m-hang" /><code>{"bool Hang(Vector3 velocity, float deltaTime, float weight, out Vector3 shoulderPosition, out Vector3 neutralizeDirection, out float magnitude)"}</code> | <span className="api-desc">Checks whether the body is hanging from this grip (arm stretched past the hang distance). Breaks the grip if the load is too great.</span> |
| <Link id="m-process" /><code>{"void Process(bool hasStamina)"}</code> | <span className="api-desc">Per frame: grabs a climbable when interact is held with no interactable in reach and stamina left, or lets go.</span> |
| <Link id="m-resetpressure" /><code>{"void ResetPressure()"}</code> | <span className="api-desc">Clears this hand's stored pressure.</span> |
| <Link id="m-resistpressure" /><code>{"Vector3 ResistPressure(Vector3 pressure, float pressureDirectionPower)"}</code> | <span className="api-desc">Applies extra pressure to the gripped climbable and adds it to this hand's total. Returns zero if the climbable refuses it.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakgrip" /><code>{"private void BreakGrip()"}</code> | <span className="api-desc">Lets go: detaches the hand, plays the grab broken effect if not voluntary, syncs it and raises `stoppedClimbing`.</span> |
| <Link id="m-checkgrab" /><code>{"private bool CheckGrab(float armReduce = 0)"}</code> | <span className="api-desc">Looks for a climbable surface near the hand within arm reach and grips it if found. Retries once with a shorter reach.</span> |
| <Link id="m-checkstreamreadpermission" /><code>{"private bool CheckStreamReadPermission("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">True when reading: on the server only from the owning player, always on clients.</span> |
| <Link id="m-evaluatearmstrength" /><code>{"private Vector3 EvaluateArmStrength(Vector3 pressure, float pressureDirectionPower)"}</code> | <span className="api-desc">Scales a pressure by how closely it lines up with the arm direction.</span> |
| <Link id="m-evaluatebestgrip" /><code>{"private float EvaluateBestGrip(int overlap)"}</code> | <span className="api-desc">Picks the overlapping climbable with the highest grip priority, falling back to the default climbable; returns that priority.</span> |
| <Link id="m-getclosestpointtogrip" /><code>{"private Vector3 GetClosestPointToGrip(bool isRight, Quaternion handRotation, ref Vector3 handPosition)"}</code> | <span className="api-desc">Finds the closest surface point to the palm, using penetration tests for terrain and concave meshes.</span> |
| <Link id="m-getgrabassistblock" /><code>{"private void GetGrabAssistBlock(ref bool isBlocked)"}</code> | <span className="api-desc">Blocks the interactor's grab assist while the player is climbing.</span> |
| <Link id="m-isreleasingcurrentclimbableimmediately" /><code>{"private bool IsReleasingCurrentClimbableImmediately()"}</code> | <span className="api-desc">True when the current climbable can't be held and releases at once.</span> |
| <Link id="m-playreleaseimmediatelyeffects" /><code>{"private void PlayReleaseImmediatelyEffects()"}</code> | <span className="api-desc">Plays the grab-broken effect and syncs the failed grab to others.</span> |
| <Link id="m-processtightgrip" /><code>{"private void ProcessTightGrip(RaycastHit hit, bool isRight, Quaternion handRotation)"}</code> | <span className="api-desc">Attaches the hand to the hit point facing the surface, plays grab effects and syncs the new grip.</span> |
| <Link id="m-serialize" /><code>{"private void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs grip or release: climbable entity, position, rotation, layer and grip pose. The server only accepts it from the owner and relays it.</span> |
| <Link id="m-serializeposition" /><code>{"private void SerializePosition("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 position)"}</code> | <span className="api-desc">Syncs the grip position with the controller's chunk.</span> |
| <Link id="m-shouldbreakcurrentgrip" /><code>{"private bool ShouldBreakCurrentGrip(bool hasStamina)"}</code> | <span className="api-desc">True when out of stamina or the climbable releases immediately.</span> |
| <Link id="m-syncimmediategrabfail-2" /><code>{"private void SyncImmediateGrabFail("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Plays the grab-broken effect for others; the server relays it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ClimbingHand`:

<div className="api-used-in">

[`ClimbingHandler.LeftHand`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-lefthand), [`ClimbingHandler.RightHand`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-righthand), [`ClimbingPressureCalculator.ClimbingPressureCalculator`](/mod/game-api/types/game-other-namespaces/climbingpressurecalculator#m-ctor), [`ClimbingPressureCalculator.otherHand`](/mod/game-api/types/game-other-namespaces/climbingpressurecalculator#m-otherhand), [`ClimbingPressureCalculator.thisHand`](/mod/game-api/types/game-other-namespaces/climbingpressurecalculator#m-thishand), [`HandStaminaManager.hand`](/mod/game-api/types/game-other-namespaces/handstaminamanager#m-hand), [`HandStaminaManager.HandStaminaManager`](/mod/game-api/types/game-other-namespaces/handstaminamanager#m-ctor).

</div>
