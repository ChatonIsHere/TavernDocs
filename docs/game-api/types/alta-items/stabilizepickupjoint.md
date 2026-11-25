---
title: "StabilizePickupJoint"
description: "class StabilizePickupJoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StabilizePickupJoint

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IPostboxPopped`](/game-api/types/global-i-l/ipostboxpopped)
- **Derived types** [`StabilizeJointContainer`](/game-api/types/alta-items/stabilizejointcontainer)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StabilizePickupJoint()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-centerofgravity" /><code>{"private Vector3 centerOfGravity"}</code> |  |
| <Link id="m-defaultjointbodylocal" /><code>{"private TransformSave defaultJointBodyLocal"}</code> |  |
| <Link id="m-ismovingparent" /><code>{"private bool isMovingParent"}</code> |  |
| <Link id="m-isunchildingjoint" /><code>{"private bool isUnchildingJoint"}</code> |  |
| <Link id="m-joint" /><code>{"private ConfigurableJoint joint"}</code> |  |
| <Link id="m-jointbodylocal" /><code>{"private TransformSave jointBodyLocal"}</code> |  |
| <Link id="m-jointlocalposition" /><code>{"private Vector3 jointLocalPosition"}</code> |  |
| <Link id="m-jointlocalrotation" /><code>{"private Quaternion jointLocalRotation"}</code> |  |
| <Link id="m-jointnetworkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" jointNetworkRigidbody"}</code> |  |
| <Link id="m-jointrigidbody" /><code>{"private Rigidbody jointRigidbody"}</code> |  |
| <Link id="m-jointrigidbodytransform" /><code>{"private Transform jointRigidbodyTransform"}</code> |  |
| <Link id="m-jointsettings" /><code>{"private "}<Link to="/game-api/types/global-i-l/jointsettings">{"JointSettings"}</Link>{" jointSettings"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxangularvelocity" /><code>{"private float maxAngularVelocity"}</code> |  |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> |  |
| <Link id="m-maxdistanceonrepositionsquared" /><code>{"private float maxDistanceOnRepositionSquared"}</code> |  |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-previousparent" /><code>{"private Transform previousParent"}</code> |  |
| <Link id="m-recreatejointroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" recreateJointRoutine"}</code> |  |
| <Link id="m-updaterigidbodyposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateRigidbodyPosition"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joint-2" /><code>{"ConfigurableJoint Joint { get; }"}</code> |  |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applydefaultchildposition" /><code>{"void ApplyDefaultChildPosition()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-docked" /><code>{"protected virtual void Docked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-handlepostpopped" /><code>{"private void IPostboxPopped.HandlePostPopped()"}</code> |  |
| <Link id="m-movewithplayer" /><code>{"private void MoveWithPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-recordlocalpositionbeforemoving" /><code>{"private void RecordLocalPositionBeforeMoving("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-recreatejoint" /><code>{"private void RecreateJoint()"}</code> |  |
| <Link id="m-recreatejointinnextframe" /><code>{"private IEnumerator RecreateJointInNextFrame() (iterator)"}</code> |  |
| <Link id="m-setrigidbodiesposition" /><code>{"private void SetRigidbodiesPosition()"}</code> |  |
| <Link id="m-setrigidbodiesposition-2" /><code>{"private void SetRigidbodiesPosition(Vector3 gripPointPosition)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-starthandlingtopositionchanges" /><code>{"protected virtual void StartHandlingToPositionChanges("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-stophandlingtopositionchanges" /><code>{"protected virtual void StopHandlingToPositionChanges("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-unchildjoint" /><code>{"private void UnchildJoint()"}</code> |  |
| <Link id="m-undocked" /><code>{"protected virtual void Undocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
