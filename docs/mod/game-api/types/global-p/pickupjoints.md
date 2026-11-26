---
title: "PickupJoints"
description: "Creates and removes the physics joints that tie a Pickup to each hand holding it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupJoints

A **class** in `Root.Township`, the global namespace.

Creates and removes the physics joints that tie a `Pickup` to each hand holding it. The joint kind comes from the pickup's joint type.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupJoints("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isEnvironmentalJoint, "}<Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" jointType)"}</code> | <span className="api-desc">Creates a `PickupJoints` from `pickup`, `isEnvironmentalJoint` and `jointType`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedjointupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedJointUpdate"}</code> | <span className="api-desc">Handle for the late update used by regular-update fixed joints.</span> |
| <Link id="m-isenvironmentaljoint" /><code>{"private bool isEnvironmentalJoint"}</code> | <span className="api-desc">Whether the pickup is part of the environment; changes velocity joint drives.</span> |
| <Link id="m-jointtype" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" jointType"}</code> | <span className="api-desc">Which kind of joint to create.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup these joints hold.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joints" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Component> Joints { get; }"}</code> | <span className="api-desc">Joint component per holding interactor.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createjoint" /><code>{"void CreateJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Adds the joint for this pickup's joint type to the hand and records the grab offset on the hand. Does nothing if one exists.</span> |
| <Link id="m-destroyjoint" /><code>{"void DestroyJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Removes the hand's joint and unparents the pickup if it was the last hand and it isn't docked.</span> |
| <Link id="m-handlefinishinteraction" /><code>{"void HandleFinishInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, gives the pickup the hand's velocity plus walking speed, compressed like the network. Skipped for spring joints and crafted children.</span> |
| <Link id="m-isvalidfinishinteraction" /><code>{"bool IsValidFinishInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Whether the hand still has a live joint; drops destroyed ones.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createemptyjoint" /><code>{"private Component CreateEmptyJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Adds an `EmptyJoint` to the hand's interaction point.</span> |
| <Link id="m-createvelocityjoint" /><code>{"private Component CreateVelocityJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Quaternion lastGrabRotation, out Joint unityJoint)"}</code> | <span className="api-desc">Parents the pickup to the hand and adds a `VelocityJoint` set up from velocity pickup settings. The server uses fixed multipliers.</span> |
| <Link id="m-fixedjointupdate-2" /><code>{"private void FixedJointUpdate()"}</code> | <span className="api-desc">Late update for regular-update fixed joints: snaps the pickup to the grip point.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupJoints`:

<div className="api-used-in">

[`Pickup.JointManager`](/mod/game-api/types/global-p/pickup#m-jointmanager), [`Pickup.pickupJoints`](/mod/game-api/types/global-p/pickup#m-pickupjoints).

</div>
