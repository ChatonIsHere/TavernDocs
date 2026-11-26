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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingHand("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler, "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> |

## Fields

<details>
<summary>31 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkframecount" /><code>{"private const int CheckFrameCount"}</code> | Frames a closed hand keeps trying to grab after a failed first try (5). |
| <Link id="m-checkframes" /><code>{"private int checkFrames"}</code> | Frames left to keep retrying a grab. |
| <Link id="m-climbable" /><code>{"private "}<Link to="/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{" climbable"}</code> | The climbable currently gripped. |
| <Link id="m-collider" /><code>{"private Collider collider"}</code> | The collider currently gripped. |
| <Link id="m-currentlygrabbingobjectlayer" /><code>{"private int currentlyGrabbingObjectLayer"}</code> | Original layer of the gripped object, synced to others. |
| <Link id="m-currentpressure" /><code>{"private Vector3 currentPressure"}</code> | Smoothed pressure the hand is applying this frame. |
| <Link id="m-currentpressuremagnitude" /><code>{"private float currentPressureMagnitude"}</code> | Size of `currentPressure`, exposed as `CurrentForce` while climbing. |
| <Link id="m-frameindex" /><code>{"private int frameIndex"}</code> | Index into `lastFrames`. |
| <Link id="m-getcolliderclimbable" /><code>{"private readonly "}<Link to="/game-api/types/global-m-o/memoizecomponentone-t">{"MemoizeComponentOne"}</Link>{"<"}<Link to="/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{"> getColliderClimbable"}</code> | Cached lookup of `IClimbable` on a collider. |
| <Link id="m-getrigidbodyclimbable" /><code>{"private readonly "}<Link to="/game-api/types/global-m-o/memoizecomponentone-t">{"MemoizeComponentOne"}</Link>{"<"}<Link to="/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{"> getRigidbodyClimbable"}</code> | Cached lookup of `IClimbable` on a collider's rigidbody. |
| <Link id="m-grabpositionoffset" /><code>{"private readonly Vector3 grabPositionOffset"}</code> | The controller's grip point offset from the hand. |
| <Link id="m-grabresults" /><code>{"private static readonly Collider[] grabResults"}</code> | Shared buffer for overlap results. |
| <Link id="m-gravityboost" /><code>{"private float gravityBoost"}</code> | How much of gravity skips the pressure cap, set from the climbable and surface normal. |
| <Link id="m-grip" /><code>{"private "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{"? grip"}</code> | Where the hand holds, relative to the gripped collider; null when not climbing. |
| <Link id="m-handler" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> | The climbing handler that owns this hand. |
| <Link id="m-incorrecthandstrengthmodifier" /><code>{"private float incorrectHandStrengthModifier"}</code> | Grip strength from 0 to 1 that drops when the hand pulls wrongly; the grip breaks at 0. |
| <Link id="m-ishandclosed" /><code>{"private bool isHandClosed"}</code> | Whether the interact input is held. |
| <Link id="m-ishanging" /><code>{"private bool isHanging"}</code> | Whether the arm is at full stretch this frame. |
| <Link id="m-lastarmdirection" /><code>{"private Vector3 lastArmDirection"}</code> | Direction from shoulder to grip, from the last check. |
| <Link id="m-lastarmlength" /><code>{"private float lastArmLength"}</code> | Distance from shoulder to grip, capped at the hang distance. |
| <Link id="m-lastframeprocessran" /><code>{"private int lastFrameProcessRan"}</code> | Declared but not used. |
| <Link id="m-lastframes" /><code>{"private readonly Vector3[] lastFrames"}</code> | Recent hand positions used for pressure; holds one frame. |
| <Link id="m-masterhand" /><code>{"private readonly Transform masterHand"}</code> | Root of the tracked hand. |
| <Link id="m-player" /><code>{"private readonly "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The network player who owns the hand, used to check sync permission. |
| <Link id="m-shoulder" /><code>{"private readonly Transform shoulder"}</code> | The arm's shoulder (or the head if there is no arm IK). |
| <Link id="m-shouldercache" /><code>{"private "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" shoulderCache"}</code> | Shoulder position relative to the gripped collider from the last frame. |
| <Link id="m-sphere" /><code>{"private static SphereCollider sphere"}</code> | Shared sphere collider used for penetration tests. |
| <Link id="m-sync" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for grip and release messages. |
| <Link id="m-syncimmediategrabfail" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/throttledmethodsync">{"ThrottledMethodSync"}</Link>{" syncImmediateGrabFail"}</code> | Throttled sync for failed grabs. |
| <Link id="m-syncvoluntarybreak" /><code>{"private bool syncVoluntaryBreak"}</code> | Whether the last release was voluntary, sent with the release so others skip the break effect. |
| <Link id="m-unlock" /><code>{"private readonly "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock"}</code> | Unlock required to climb, or null. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actualhandposition" /><code>{"Vector3 ActualHandPosition { get; set; }"}</code> | Where the real (tracked) hand is while gripping, corrected for body velocity. Used for stamina drain by distance. |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; }"}</code> | The hand's `Controller`. |
| <Link id="m-currentforce" /><code>{"float CurrentForce { get; }"}</code> | Size of the pressure this hand applied this frame. 0 when not climbing. |
| <Link id="m-currentgripposition" /><code>{"Vector3 CurrentGripPosition { get; }"}</code> | World position of the grip point. Zero when not climbing. |
| <Link id="m-currentgriprotation" /><code>{"Quaternion CurrentGripRotation { get; }"}</code> | World rotation of the grip point. Identity when not climbing. |
| <Link id="m-currentlygrabbingobjectlayer-2" /><code>{"int CurrentlyGrabbingObjectLayer { get; }"}</code> | Physics layer of the object last grabbed. Picks the stamina use multiplier. |
| <Link id="m-isclimbing" /><code>{"bool IsClimbing { get; }"}</code> | True while the hand holds a grip. |
| <Link id="m-ishanging-2" /><code>{"bool IsHanging { get; }"}</code> | True while climbing and the arm is stretched to the hang distance. |
| <Link id="m-lastarmdirection-2" /><code>{"Vector3 LastArmDirection { get; }"}</code> | Direction from shoulder to grip at the last hang check. |
| <Link id="m-oldgripposition" /><code>{"Vector3 OldGripPosition { get; private set; }"}</code> | Grip world position from before this frame's update. |
| <Link id="m-oldgriprotation" /><code>{"Quaternion OldGripRotation { get; private set; }"}</code> | Grip world rotation from before this frame's update. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-startedclimbing" /><code>{"event Action startedClimbing"}</code> | Raised when the hand takes a grip. |
| <Link id="m-stoppedclimbing" /><code>{"event Action stoppedClimbing"}</code> | Raised when the hand lets go. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-breakgrip-2" /><code>{"void BreakGrip(bool isVoluntary)"}</code> | Lets go: detaches the hand, plays the grab broken effect if not voluntary, syncs it and raises `stoppedClimbing`. |
| <Link id="m-handpressure" /><code>{"Vector3 HandPressure(float deltaTime, float gravity, ref float remainingPressure, out float pressureDirectionPower)"}</code> | Works out the push or pull this hand applies to the body from the hand's offset to the grip, limited by the pressure left. |
| <Link id="m-hang" /><code>{"bool Hang(Vector3 velocity, float deltaTime, float weight, out Vector3 shoulderPosition, out Vector3 neutralizeDirection, out float magnitude)"}</code> | Checks whether the body is hanging from this grip (arm stretched past the hang distance). Breaks the grip if the load is too great. |
| <Link id="m-process" /><code>{"void Process(bool hasStamina)"}</code> | Per frame: grabs a climbable when interact is held with no interactable in reach and stamina left, or lets go. |
| <Link id="m-resetpressure" /><code>{"void ResetPressure()"}</code> | Clears this hand's stored pressure. |
| <Link id="m-resistpressure" /><code>{"Vector3 ResistPressure(Vector3 pressure, float pressureDirectionPower)"}</code> | Applies extra pressure to the gripped climbable and adds it to this hand's total. Returns zero if the climbable refuses it. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-breakgrip" /><code>{"private void BreakGrip()"}</code> | Lets go: detaches the hand, plays the grab broken effect if not voluntary, syncs it and raises `stoppedClimbing`. |
| <Link id="m-checkgrab" /><code>{"private bool CheckGrab(float armReduce = 0)"}</code> | Looks for a climbable surface near the hand within arm reach and grips it if found. Retries once with a shorter reach. |
| <Link id="m-checkstreamreadpermission" /><code>{"private bool CheckStreamReadPermission("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | True when reading: on the server only from the owning player, always on clients. |
| <Link id="m-evaluatearmstrength" /><code>{"private Vector3 EvaluateArmStrength(Vector3 pressure, float pressureDirectionPower)"}</code> | Scales a pressure by how closely it lines up with the arm direction. |
| <Link id="m-evaluatebestgrip" /><code>{"private float EvaluateBestGrip(int overlap)"}</code> | Picks the overlapping climbable with the highest grip priority, falling back to the default climbable; returns that priority. |
| <Link id="m-getclosestpointtogrip" /><code>{"private Vector3 GetClosestPointToGrip(bool isRight, Quaternion handRotation, ref Vector3 handPosition)"}</code> | Finds the closest surface point to the palm, using penetration tests for terrain and concave meshes. |
| <Link id="m-getgrabassistblock" /><code>{"private void GetGrabAssistBlock(ref bool isBlocked)"}</code> | Blocks the interactor's grab assist while the player is climbing. |
| <Link id="m-isreleasingcurrentclimbableimmediately" /><code>{"private bool IsReleasingCurrentClimbableImmediately()"}</code> | True when the current climbable can't be held and releases at once. |
| <Link id="m-playreleaseimmediatelyeffects" /><code>{"private void PlayReleaseImmediatelyEffects()"}</code> | Plays the grab-broken effect and syncs the failed grab to others. |
| <Link id="m-processtightgrip" /><code>{"private void ProcessTightGrip(RaycastHit hit, bool isRight, Quaternion handRotation)"}</code> | Attaches the hand to the hit point facing the surface, plays grab effects and syncs the new grip. |
| <Link id="m-serialize" /><code>{"private void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs grip or release: climbable entity, position, rotation, layer and grip pose. The server only accepts it from the owner and relays it. |
| <Link id="m-serializeposition" /><code>{"private void SerializePosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 position)"}</code> | Syncs the grip position with the controller's chunk. |
| <Link id="m-shouldbreakcurrentgrip" /><code>{"private bool ShouldBreakCurrentGrip(bool hasStamina)"}</code> | True when out of stamina or the climbable releases immediately. |
| <Link id="m-syncimmediategrabfail-2" /><code>{"private void SyncImmediateGrabFail("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Plays the grab-broken effect for others; the server relays it. |

</details>

## Used in

Members of other types that take, return or hold a `ClimbingHand`:

[`ClimbingHandler.LeftHand`](/game-api/types/game-other-namespaces/climbinghandler#m-lefthand), [`ClimbingHandler.RightHand`](/game-api/types/game-other-namespaces/climbinghandler#m-righthand), [`ClimbingPressureCalculator.ClimbingPressureCalculator`](/game-api/types/game-other-namespaces/climbingpressurecalculator#m-ctor), [`ClimbingPressureCalculator.otherHand`](/game-api/types/game-other-namespaces/climbingpressurecalculator#m-otherhand), [`ClimbingPressureCalculator.thisHand`](/game-api/types/game-other-namespaces/climbingpressurecalculator#m-thishand), [`HandStaminaManager.hand`](/game-api/types/game-other-namespaces/handstaminamanager#m-hand), [`HandStaminaManager.HandStaminaManager`](/game-api/types/game-other-namespaces/handstaminamanager#m-ctor).
