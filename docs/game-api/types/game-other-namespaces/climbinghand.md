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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingHand("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler, "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkframecount" /><code>{"private const int CheckFrameCount"}</code> |  |
| <Link id="m-checkframes" /><code>{"private int checkFrames"}</code> |  |
| <Link id="m-climbable" /><code>{"private "}<Link to="/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{" climbable"}</code> |  |
| <Link id="m-collider" /><code>{"private Collider collider"}</code> |  |
| <Link id="m-currentlygrabbingobjectlayer" /><code>{"private int currentlyGrabbingObjectLayer"}</code> |  |
| <Link id="m-currentpressure" /><code>{"private Vector3 currentPressure"}</code> |  |
| <Link id="m-currentpressuremagnitude" /><code>{"private float currentPressureMagnitude"}</code> |  |
| <Link id="m-frameindex" /><code>{"private int frameIndex"}</code> |  |
| <Link id="m-getcolliderclimbable" /><code>{"private readonly "}<Link to="/game-api/types/global-m-o/memoizecomponentone-t">{"MemoizeComponentOne"}</Link>{"<"}<Link to="/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{"> getColliderClimbable"}</code> |  |
| <Link id="m-getrigidbodyclimbable" /><code>{"private readonly "}<Link to="/game-api/types/global-m-o/memoizecomponentone-t">{"MemoizeComponentOne"}</Link>{"<"}<Link to="/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{"> getRigidbodyClimbable"}</code> |  |
| <Link id="m-grabpositionoffset" /><code>{"private readonly Vector3 grabPositionOffset"}</code> |  |
| <Link id="m-grabresults" /><code>{"private static readonly Collider[] grabResults"}</code> |  |
| <Link id="m-gravityboost" /><code>{"private float gravityBoost"}</code> |  |
| <Link id="m-grip" /><code>{"private "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{"? grip"}</code> |  |
| <Link id="m-handler" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" handler"}</code> |  |
| <Link id="m-incorrecthandstrengthmodifier" /><code>{"private float incorrectHandStrengthModifier"}</code> |  |
| <Link id="m-ishandclosed" /><code>{"private bool isHandClosed"}</code> |  |
| <Link id="m-ishanging" /><code>{"private bool isHanging"}</code> |  |
| <Link id="m-lastarmdirection" /><code>{"private Vector3 lastArmDirection"}</code> |  |
| <Link id="m-lastarmlength" /><code>{"private float lastArmLength"}</code> |  |
| <Link id="m-lastframeprocessran" /><code>{"private int lastFrameProcessRan"}</code> |  |
| <Link id="m-lastframes" /><code>{"private readonly Vector3[] lastFrames"}</code> |  |
| <Link id="m-masterhand" /><code>{"private readonly Transform masterHand"}</code> |  |
| <Link id="m-player" /><code>{"private readonly "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |  |
| <Link id="m-shoulder" /><code>{"private readonly Transform shoulder"}</code> |  |
| <Link id="m-shouldercache" /><code>{"private "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" shoulderCache"}</code> |  |
| <Link id="m-sphere" /><code>{"private static SphereCollider sphere"}</code> |  |
| <Link id="m-sync" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-syncimmediategrabfail" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/throttledmethodsync">{"ThrottledMethodSync"}</Link>{" syncImmediateGrabFail"}</code> |  |
| <Link id="m-syncvoluntarybreak" /><code>{"private bool syncVoluntaryBreak"}</code> |  |
| <Link id="m-unlock" /><code>{"private readonly "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock"}</code> |  |

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
| <Link id="m-breakgrip" /><code>{"private void BreakGrip()"}</code> | Lets go: detaches the hand, plays the grab broken effect if not voluntary, syncs it and raises `stoppedClimbing`. |
| <Link id="m-checkgrab" /><code>{"private bool CheckGrab(float armReduce = 0)"}</code> |  |
| <Link id="m-checkstreamreadpermission" /><code>{"private bool CheckStreamReadPermission("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-evaluatearmstrength" /><code>{"private Vector3 EvaluateArmStrength(Vector3 pressure, float pressureDirectionPower)"}</code> |  |
| <Link id="m-evaluatebestgrip" /><code>{"private float EvaluateBestGrip(int overlap)"}</code> |  |
| <Link id="m-getclosestpointtogrip" /><code>{"private Vector3 GetClosestPointToGrip(bool isRight, Quaternion handRotation, ref Vector3 handPosition)"}</code> |  |
| <Link id="m-getgrabassistblock" /><code>{"private void GetGrabAssistBlock(ref bool isBlocked)"}</code> |  |
| <Link id="m-isreleasingcurrentclimbableimmediately" /><code>{"private bool IsReleasingCurrentClimbableImmediately()"}</code> |  |
| <Link id="m-playreleaseimmediatelyeffects" /><code>{"private void PlayReleaseImmediatelyEffects()"}</code> |  |
| <Link id="m-processtightgrip" /><code>{"private void ProcessTightGrip(RaycastHit hit, bool isRight, Quaternion handRotation)"}</code> |  |
| <Link id="m-serialize" /><code>{"private void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializeposition" /><code>{"private void SerializePosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 position)"}</code> |  |
| <Link id="m-shouldbreakcurrentgrip" /><code>{"private bool ShouldBreakCurrentGrip(bool hasStamina)"}</code> |  |
| <Link id="m-syncimmediategrabfail-2" /><code>{"private void SyncImmediateGrabFail("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ClimbingHand`:

[`ClimbingHandler.LeftHand`](/game-api/types/game-other-namespaces/climbinghandler#m-lefthand), [`ClimbingHandler.RightHand`](/game-api/types/game-other-namespaces/climbinghandler#m-righthand), [`ClimbingPressureCalculator.ClimbingPressureCalculator`](/game-api/types/game-other-namespaces/climbingpressurecalculator#m-ctor), [`ClimbingPressureCalculator.otherHand`](/game-api/types/game-other-namespaces/climbingpressurecalculator#m-otherhand), [`ClimbingPressureCalculator.thisHand`](/game-api/types/game-other-namespaces/climbingpressurecalculator#m-thishand), [`HandStaminaManager.hand`](/game-api/types/game-other-namespaces/handstaminamanager#m-hand), [`HandStaminaManager.HandStaminaManager`](/game-api/types/game-other-namespaces/handstaminamanager#m-ctor).
