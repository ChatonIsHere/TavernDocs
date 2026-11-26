---
title: "PickupJoints"
description: "Creates and removes the physics joints that tie a Pickup to each hand holding it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupJoints

A **class** in `Root.Township`, no namespace.

Creates and removes the physics joints that tie a `Pickup` to each hand holding it. The joint kind comes from the pickup's joint type.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupJoints("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isEnvironmentalJoint, "}<Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" jointType)"}</code> | Creates a `PickupJoints` from `pickup`, `isEnvironmentalJoint` and `jointType`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedjointupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedJointUpdate"}</code> | Handle for the late update used by regular-update fixed joints. |
| <Link id="m-isenvironmentaljoint" /><code>{"private bool isEnvironmentalJoint"}</code> | Whether the pickup is part of the environment; changes velocity joint drives. |
| <Link id="m-jointtype" /><code>{"private "}<Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" jointType"}</code> | Which kind of joint to create. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup these joints hold. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joints" /><code>{"Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Component> Joints { get; }"}</code> | Joint component per holding interactor. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createjoint" /><code>{"void CreateJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Adds the joint for this pickup's joint type to the hand and records the grab offset on the hand. Does nothing if one exists. |
| <Link id="m-destroyjoint" /><code>{"void DestroyJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Removes the hand's joint and unparents the pickup if it was the last hand and it isn't docked. |
| <Link id="m-handlefinishinteraction" /><code>{"void HandleFinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, gives the pickup the hand's velocity plus walking speed, compressed like the network. Skipped for spring joints and crafted children. |
| <Link id="m-isvalidfinishinteraction" /><code>{"bool IsValidFinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Whether the hand still has a live joint; drops destroyed ones. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createemptyjoint" /><code>{"private Component CreateEmptyJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Adds an `EmptyJoint` to the hand's interaction point. |
| <Link id="m-createvelocityjoint" /><code>{"private Component CreateVelocityJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Quaternion lastGrabRotation, out Joint unityJoint)"}</code> | Parents the pickup to the hand and adds a `VelocityJoint` set up from velocity pickup settings. The server uses fixed multipliers. |
| <Link id="m-fixedjointupdate-2" /><code>{"private void FixedJointUpdate()"}</code> | Late update for regular-update fixed joints: snaps the pickup to the grip point. |

</details>

## Used in

Members of other types that take, return or hold a `PickupJoints`:

[`Pickup.JointManager`](/game-api/types/global-p/pickup#m-jointmanager), [`Pickup.pickupJoints`](/game-api/types/global-p/pickup#m-pickupjoints).
