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
| <Link id="m-ctor" /><code>{"StabilizePickupJoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform of the pickup.</span> |
| <Link id="m-centerofgravity" /><code>{"private Vector3 centerOfGravity"}</code> | <span className="api-desc">Centre of mass set on the joint body.</span> |
| <Link id="m-defaultjointbodylocal" /><code>{"private TransformSave defaultJointBodyLocal"}</code> | <span className="api-desc">The joint body's default local pose.</span> |
| <Link id="m-ismovingparent" /><code>{"private bool isMovingParent"}</code> | <span className="api-desc">Whether the pickup is parented to the player during teleports. True unless it uses a velocity joint.</span> |
| <Link id="m-isunchildingjoint" /><code>{"private bool isUnchildingJoint"}</code> | <span className="api-desc">Whether the joint body is moved out of the pickup's hierarchy.</span> |
| <Link id="m-joint" /><code>{"private ConfigurableJoint joint"}</code> | <span className="api-desc">Backing field for `Joint`.</span> |
| <Link id="m-jointbodylocal" /><code>{"private TransformSave jointBodyLocal"}</code> | <span className="api-desc">Joint body pose saved before a teleport.</span> |
| <Link id="m-jointlocalposition" /><code>{"private Vector3 jointLocalPosition"}</code> | <span className="api-desc">Local position of the joint body when docked or undocked.</span> |
| <Link id="m-jointlocalrotation" /><code>{"private Quaternion jointLocalRotation"}</code> | <span className="api-desc">Local rotation of the joint body when docked or undocked.</span> |
| <Link id="m-jointnetworkrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" jointNetworkRigidbody"}</code> | <span className="api-desc">Network sync for the joint body, turned off while held or docked.</span> |
| <Link id="m-jointrigidbody" /><code>{"private Rigidbody jointRigidbody"}</code> | <span className="api-desc">The rigidbody hanging off the joint.</span> |
| <Link id="m-jointrigidbodytransform" /><code>{"private Transform jointRigidbodyTransform"}</code> | <span className="api-desc">Cached transform of the joint body.</span> |
| <Link id="m-jointsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/jointsettings">{"JointSettings"}</Link>{" jointSettings"}</code> | <span className="api-desc">Joint settings saved while the joint is removed.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-maxangularvelocity" /><code>{"private float maxAngularVelocity"}</code> | <span className="api-desc">Spin limit for the joint body while held.</span> |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> | <span className="api-desc">Furthest the joint body may be from the grip point while held.</span> |
| <Link id="m-maxdistanceonrepositionsquared" /><code>{"private float maxDistanceOnRepositionSquared"}</code> | <span className="api-desc">Squared grip distance beyond which the whole pickup snaps to the grip.</span> |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> | <span className="api-desc">Speed limit for the joint body while held.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`.</span> |
| <Link id="m-previousparent" /><code>{"private Transform previousParent"}</code> | <span className="api-desc">Parent the joint body was unchilded to.</span> |
| <Link id="m-recreatejointroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" recreateJointRoutine"}</code> | <span className="api-desc">The running joint rebuild coroutine.</span> |
| <Link id="m-updaterigidbodyposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateRigidbodyPosition"}</code> | <span className="api-desc">The registered fixed update that clamps the body.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joint-2" /><code>{"ConfigurableJoint Joint { get; }"}</code> | <span className="api-desc">The configurable joint. Null for a moment while it's being rebuilt after a teleport.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The pickup this stabilizes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydefaultchildposition" /><code>{"void ApplyDefaultChildPosition()"}</code> | <span className="api-desc">Stops the joint body and puts it back to its saved default local pose.</span> |
| <Link id="m-docked" /><code>{"protected virtual void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Places the joint body at its docked local pose and stops its network sync; kinematic unless the dock allows physical joints.</span> |
| <Link id="m-starthandlingtopositionchanges" /><code>{"protected virtual void StartHandlingToPositionChanges("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When grabbed, clamps the body each fixed update, turns off its network sync and follows player teleports.</span> |
| <Link id="m-stophandlingtopositionchanges" /><code>{"protected virtual void StopHandlingToPositionChanges("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When released, turns network sync back on (unless docked) and stops following teleports.</span> |
| <Link id="m-undocked" /><code>{"protected virtual void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Makes the joint body physical again and turns network sync back on if not held.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches transforms, saves the default joint body pose and sets the centre of mass.</span> |
| <Link id="m-handlepostpopped" /><code>{"private void IPostboxPopped.HandlePostPopped()"}</code> | <span className="api-desc">When popped from a postbox, resets the joint body to its default pose.</span> |
| <Link id="m-movewithplayer" /><code>{"private void MoveWithPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">After the move, restores the body pose and starts rebuilding the joint next fixed update.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the fixed update and the rebuild coroutine.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the events and stops the fixed update.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the centre of gravity.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the pickup's dock and interaction events.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: fills `jointRigidbody` from the child joint's connected body if empty.</span> |
| <Link id="m-recordlocalpositionbeforemoving" /><code>{"private void RecordLocalPositionBeforeMoving("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Before a teleport, reposition or recovery, saves the body pose, removes the joint and parents to the player.</span> |
| <Link id="m-recreatejoint" /><code>{"private void RecreateJoint()"}</code> | <span className="api-desc">Recreates the joint from the saved settings.</span> |
| <Link id="m-recreatejointinnextframe" /><code>{"private IEnumerator RecreateJointInNextFrame() (iterator)"}</code> | <span className="api-desc">Coroutine that waits a fixed update, rebuilds the joint and makes the body physical again.</span> |
| <Link id="m-setrigidbodiesposition" /><code>{"private void SetRigidbodiesPosition()"}</code> | <span className="api-desc">Pulls the joint body back within `maxDistance` of the grip and clamps its speeds.</span> |
| <Link id="m-setrigidbodiesposition-2" /><code>{"private void SetRigidbodiesPosition(Vector3 gripPointPosition)"}</code> | <span className="api-desc">Pulls the joint body back within `maxDistance` of the grip and clamps its speeds.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Unparents the joint body if `isUnchildingJoint` is set.</span> |
| <Link id="m-unchildjoint" /><code>{"private void UnchildJoint()"}</code> | <span className="api-desc">Moves the joint body up to the pickup's parent, if `isUnchildingJoint` is set.</span> |

</details>
