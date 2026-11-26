---
title: "StabilizePickupJoint"
description: "Keeps a jointed pickup (such as a bag on a joint) stable: limits its distance and speed while held, and rebuilds the joint when the player teleports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StabilizePickupJoint

A **class** in `Root.Township`, `Alta.Inventory`.

Keeps a jointed pickup (such as a bag on a joint) stable: limits its distance and speed while held, and rebuilds the joint when the player teleports.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IPostboxPopped`](/mod/game-api/types/global-i-l/ipostboxpopped)
- **Derived types** [`StabilizeJointContainer`](/mod/game-api/types/alta-items/stabilizejointcontainer)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StabilizePickupJoint()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform of the pickup. |
| <Link id="m-centerofgravity" /><code>{"private Vector3 centerOfGravity"}</code> | Centre of mass set on the joint body. |
| <Link id="m-defaultjointbodylocal" /><code>{"private TransformSave defaultJointBodyLocal"}</code> | The joint body's default local pose. |
| <Link id="m-ismovingparent" /><code>{"private bool isMovingParent"}</code> | Whether the pickup is parented to the player during teleports. True unless it uses a velocity joint. |
| <Link id="m-isunchildingjoint" /><code>{"private bool isUnchildingJoint"}</code> | Whether the joint body is moved out of the pickup's hierarchy. |
| <Link id="m-joint" /><code>{"private ConfigurableJoint joint"}</code> | Backing field for `Joint`. |
| <Link id="m-jointbodylocal" /><code>{"private TransformSave jointBodyLocal"}</code> | Joint body pose saved before a teleport. |
| <Link id="m-jointlocalposition" /><code>{"private Vector3 jointLocalPosition"}</code> | Local position of the joint body when docked or undocked. |
| <Link id="m-jointlocalrotation" /><code>{"private Quaternion jointLocalRotation"}</code> | Local rotation of the joint body when docked or undocked. |
| <Link id="m-jointnetworkrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" jointNetworkRigidbody"}</code> | Network sync for the joint body, turned off while held or docked. |
| <Link id="m-jointrigidbody" /><code>{"private Rigidbody jointRigidbody"}</code> | The rigidbody hanging off the joint. |
| <Link id="m-jointrigidbodytransform" /><code>{"private Transform jointRigidbodyTransform"}</code> | Cached transform of the joint body. |
| <Link id="m-jointsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/jointsettings">{"JointSettings"}</Link>{" jointSettings"}</code> | Joint settings saved while the joint is removed. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-maxangularvelocity" /><code>{"private float maxAngularVelocity"}</code> | Spin limit for the joint body while held. |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> | Furthest the joint body may be from the grip point while held. |
| <Link id="m-maxdistanceonrepositionsquared" /><code>{"private float maxDistanceOnRepositionSquared"}</code> | Squared grip distance beyond which the whole pickup snaps to the grip. |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> | Speed limit for the joint body while held. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |
| <Link id="m-previousparent" /><code>{"private Transform previousParent"}</code> | Parent the joint body was unchilded to. |
| <Link id="m-recreatejointroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" recreateJointRoutine"}</code> | The running joint rebuild coroutine. |
| <Link id="m-updaterigidbodyposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateRigidbodyPosition"}</code> | The registered fixed update that clamps the body. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joint-2" /><code>{"ConfigurableJoint Joint { get; }"}</code> | The configurable joint. Null for a moment while it's being rebuilt after a teleport. |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup this stabilizes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydefaultchildposition" /><code>{"void ApplyDefaultChildPosition()"}</code> | Stops the joint body and puts it back to its saved default local pose. |
| <Link id="m-docked" /><code>{"protected virtual void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Places the joint body at its docked local pose and stops its network sync; kinematic unless the dock allows physical joints. |
| <Link id="m-starthandlingtopositionchanges" /><code>{"protected virtual void StartHandlingToPositionChanges("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When grabbed, clamps the body each fixed update, turns off its network sync and follows player teleports. |
| <Link id="m-stophandlingtopositionchanges" /><code>{"protected virtual void StopHandlingToPositionChanges("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When released, turns network sync back on (unless docked) and stops following teleports. |
| <Link id="m-undocked" /><code>{"protected virtual void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Makes the joint body physical again and turns network sync back on if not held. |

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches transforms, saves the default joint body pose and sets the centre of mass. |
| <Link id="m-handlepostpopped" /><code>{"private void IPostboxPopped.HandlePostPopped()"}</code> | When popped from a postbox, resets the joint body to its default pose. |
| <Link id="m-movewithplayer" /><code>{"private void MoveWithPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | After the move, restores the body pose and starts rebuilding the joint next fixed update. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the fixed update and the rebuild coroutine. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks the events and stops the fixed update. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the centre of gravity. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks the pickup's dock and interaction events. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills `jointRigidbody` from the child joint's connected body if empty. |
| <Link id="m-recordlocalpositionbeforemoving" /><code>{"private void RecordLocalPositionBeforeMoving("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Before a teleport, reposition or recovery, saves the body pose, removes the joint and parents to the player. |
| <Link id="m-recreatejoint" /><code>{"private void RecreateJoint()"}</code> | Recreates the joint from the saved settings. |
| <Link id="m-recreatejointinnextframe" /><code>{"private IEnumerator RecreateJointInNextFrame() (iterator)"}</code> | Coroutine that waits a fixed update, rebuilds the joint and makes the body physical again. |
| <Link id="m-setrigidbodiesposition" /><code>{"private void SetRigidbodiesPosition()"}</code> | Pulls the joint body back within `maxDistance` of the grip and clamps its speeds. |
| <Link id="m-setrigidbodiesposition-2" /><code>{"private void SetRigidbodiesPosition(Vector3 gripPointPosition)"}</code> | Pulls the joint body back within `maxDistance` of the grip and clamps its speeds. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Unparents the joint body if `isUnchildingJoint` is set. |
| <Link id="m-unchildjoint" /><code>{"private void UnchildJoint()"}</code> | Moves the joint body up to the pickup's parent, if `isUnchildingJoint` is set. |

</details>
