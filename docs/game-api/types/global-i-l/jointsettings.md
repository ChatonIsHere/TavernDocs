---
title: "JointSettings"
description: "Snapshot of a ConfigurableJoint's settings that can be put back later."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointSettings

A **class** in `Root.Township`, no namespace.

Snapshot of a `ConfigurableJoint`'s settings that can be put back later. Used by `StabilizePickupJoint` to rebuild a removed joint.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointSettings(ConfigurableJoint joint)"}</code> | Creates a `JointSettings` from `joint`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularxlimitspring" /><code>{"private SoftJointLimitSpring angularXLimitSpring"}</code> | Saved angular X limit spring. |
| <Link id="m-angularxmotion" /><code>{"private ConfigurableJointMotion angularXMotion"}</code> | Saved angular X motion. |
| <Link id="m-angularyzdrive" /><code>{"private JointDrive angularYZDrive"}</code> | Saved angular YZ drive. |
| <Link id="m-autoconfigureconnectedanchor" /><code>{"private bool autoConfigureConnectedAnchor"}</code> | Saved auto configure connected anchor flag. |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | Saved primary axis. |
| <Link id="m-connectedanchor" /><code>{"private Vector3 connectedAnchor"}</code> | Saved connected anchor. |
| <Link id="m-connectedbody" /><code>{"private Rigidbody connectedBody"}</code> | Saved connected rigidbody. |
| <Link id="m-highangularxlimit" /><code>{"private SoftJointLimit highAngularXLimit"}</code> | Saved high angular X limit. |
| <Link id="m-linearlimit" /><code>{"private SoftJointLimit linearLimit"}</code> | Saved linear limit. |
| <Link id="m-linearlimitspring" /><code>{"private SoftJointLimitSpring linearLimitSpring"}</code> | Saved linear limit spring. |
| <Link id="m-lowangularxlimit" /><code>{"private SoftJointLimit lowAngularXLimit"}</code> | Saved low angular X limit. |
| <Link id="m-secondaryaxis" /><code>{"private Vector3 secondaryAxis"}</code> | Saved secondary axis. |
| <Link id="m-targetobject" /><code>{"private GameObject targetObject"}</code> | Game object the joint was on, and gets put back on. |
| <Link id="m-xmotion" /><code>{"private ConfigurableJointMotion xMotion"}</code> | Saved X motion. |
| <Link id="m-ymotion" /><code>{"private ConfigurableJointMotion yMotion"}</code> | Saved Y motion. |
| <Link id="m-zmotion" /><code>{"private ConfigurableJointMotion zMotion"}</code> | Saved Z motion. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"ConfigurableJoint Apply()"}</code> | Adds or gets a `ConfigurableJoint` on the original object and copies the saved settings onto it. |

## Used in

Members of other types that take, return or hold a `JointSettings`:

[`StabilizePickupJoint.jointSettings`](/game-api/types/alta-items/stabilizepickupjoint#m-jointsettings).
