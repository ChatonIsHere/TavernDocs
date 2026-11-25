---
title: "PickupJoints"
description: "class PickupJoints in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupJoints

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupJoints("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isEnvironmentalJoint, "}<Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" jointType)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fixedjointupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" fixedJointUpdate"}</code> |  |
| <Link id="m-isenvironmentaljoint" /><code>{"private bool isEnvironmentalJoint"}</code> |  |
| <Link id="m-jointtype" /><code>{"private "}<Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" jointType"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joints" /><code>{"Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Component> Joints { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createjoint" /><code>{"void CreateJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-destroyjoint" /><code>{"void DestroyJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-handlefinishinteraction" /><code>{"void HandleFinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-isvalidfinishinteraction" /><code>{"bool IsValidFinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-createemptyjoint" /><code>{"private Component CreateEmptyJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-createvelocityjoint" /><code>{"private Component CreateVelocityJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Quaternion lastGrabRotation, out Joint unityJoint)"}</code> |  |
| <Link id="m-fixedjointupdate-2" /><code>{"private void FixedJointUpdate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupJoints`:

[`Pickup.JointManager`](/game-api/types/global-p/pickup#m-jointmanager), [`Pickup.pickupJoints`](/game-api/types/global-p/pickup#m-pickupjoints).
