---
title: "JointSettings"
description: "Snapshot of a ConfigurableJoint's settings that can be put back later."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointSettings

A **class** in `Root.Township`, the global namespace.

Snapshot of a `ConfigurableJoint`'s settings that can be put back later. Used by `StabilizePickupJoint` to rebuild a removed joint.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointSettings(ConfigurableJoint joint)"}</code> | <span className="api-desc">Creates a `JointSettings` from `joint`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularxlimitspring" /><code>{"private SoftJointLimitSpring angularXLimitSpring"}</code> | <span className="api-desc">Saved angular X limit spring.</span> |
| <Link id="m-angularxmotion" /><code>{"private ConfigurableJointMotion angularXMotion"}</code> | <span className="api-desc">Saved angular X motion.</span> |
| <Link id="m-angularyzdrive" /><code>{"private JointDrive angularYZDrive"}</code> | <span className="api-desc">Saved angular YZ drive.</span> |
| <Link id="m-autoconfigureconnectedanchor" /><code>{"private bool autoConfigureConnectedAnchor"}</code> | <span className="api-desc">Saved auto configure connected anchor flag.</span> |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | <span className="api-desc">Saved primary axis.</span> |
| <Link id="m-connectedanchor" /><code>{"private Vector3 connectedAnchor"}</code> | <span className="api-desc">Saved connected anchor.</span> |
| <Link id="m-connectedbody" /><code>{"private Rigidbody connectedBody"}</code> | <span className="api-desc">Saved connected rigidbody.</span> |
| <Link id="m-highangularxlimit" /><code>{"private SoftJointLimit highAngularXLimit"}</code> | <span className="api-desc">Saved high angular X limit.</span> |
| <Link id="m-linearlimit" /><code>{"private SoftJointLimit linearLimit"}</code> | <span className="api-desc">Saved linear limit.</span> |
| <Link id="m-linearlimitspring" /><code>{"private SoftJointLimitSpring linearLimitSpring"}</code> | <span className="api-desc">Saved linear limit spring.</span> |
| <Link id="m-lowangularxlimit" /><code>{"private SoftJointLimit lowAngularXLimit"}</code> | <span className="api-desc">Saved low angular X limit.</span> |
| <Link id="m-secondaryaxis" /><code>{"private Vector3 secondaryAxis"}</code> | <span className="api-desc">Saved secondary axis.</span> |
| <Link id="m-targetobject" /><code>{"private GameObject targetObject"}</code> | <span className="api-desc">Game object the joint was on, and gets put back on.</span> |
| <Link id="m-xmotion" /><code>{"private ConfigurableJointMotion xMotion"}</code> | <span className="api-desc">Saved X motion.</span> |
| <Link id="m-ymotion" /><code>{"private ConfigurableJointMotion yMotion"}</code> | <span className="api-desc">Saved Y motion.</span> |
| <Link id="m-zmotion" /><code>{"private ConfigurableJointMotion zMotion"}</code> | <span className="api-desc">Saved Z motion.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"ConfigurableJoint Apply()"}</code> | <span className="api-desc">Adds or gets a `ConfigurableJoint` on the original object and copies the saved settings onto it.</span> |

## Used in

Members of other types that take, return or hold a `JointSettings`:

<div className="api-used-in">

[`StabilizePickupJoint.jointSettings`](/mod/game-api/types/alta-items/stabilizepickupjoint#m-jointsettings).

</div>
