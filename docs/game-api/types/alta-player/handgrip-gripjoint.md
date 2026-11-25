---
title: "HandGrip.GripJoint"
description: "One finger joint of a hand grip. It curls in steps until it touches a grabbed object, and blends between open, splayed, closed and saved poses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGrip.GripJoint

A **class** in `Root.Township`, `Alta.Character`.

One finger joint of a hand grip. It curls in steps until it touches a grabbed object, and blends between open, splayed, closed and saved poses.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`HandGrip`](/game-api/types/alta-player/handgrip)
- **Derived types** [`HandGrip.ThumbGripJoint`](/game-api/types/alta-player/handgrip-thumbgripjoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GripJoint()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"GripJoint("}<Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand, "}<Link to="/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{" joint, Transform transform, "}<Link to="/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" rotations)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-worldmatrix" /><code>{"Matrix4x4 worldMatrix"}</code> | The joint's world matrix, worked out while curling. |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> |  |
| <Link id="m-closedrotation" /><code>{"private Quaternion closedRotation"}</code> |  |
| <Link id="m-curlprogress" /><code>{"protected float curlProgress"}</code> | How far the joint has curled, in degrees. |
| <Link id="m-defaultrotation" /><code>{"private Quaternion defaultRotation"}</code> |  |
| <Link id="m-hand" /><code>{"protected "}<Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand"}</code> | The hand grip this joint belongs to. |
| <Link id="m-ishit" /><code>{"private bool isHit"}</code> |  |
| <Link id="m-joint" /><code>{"protected "}<Link to="/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{" joint"}</code> | The joint's configuration: length, radius, curl step and maximum curl. |
| <Link id="m-lastcurlmultiplier" /><code>{"private int lastCurlMultiplier"}</code> |  |
| <Link id="m-layermask" /><code>{"private int layerMask"}</code> |  |
| <Link id="m-local" /><code>{"protected Matrix4x4 local"}</code> | The joint's default local matrix. |
| <Link id="m-modifiedlocal" /><code>{"protected Matrix4x4 modifiedLocal"}</code> | The local matrix after curling. |
| <Link id="m-openrotation" /><code>{"private Quaternion openRotation"}</code> |  |
| <Link id="m-savedrotation" /><code>{"private Quaternion savedRotation"}</code> |  |
| <Link id="m-sidemultiplier" /><code>{"private int sideMultiplier"}</code> |  |
| <Link id="m-splaidrotation" /><code>{"private Quaternion splaidRotation"}</code> |  |
| <Link id="m-transform" /><code>{"protected Transform transform"}</code> | The joint's bone transform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcollision" /><code>{"bool CheckCollision()"}</code> | Checks whether the joint's box overlaps anything on the Active Tight Grip layer. |
| <Link id="m-curlin" /><code>{"bool CurlIn(int curl, Matrix4x4 parent, bool isBaseMost)"}</code> | Curls the joint one more step if it can, then checks for contact. Returns whether it's touching. |
| <Link id="m-lerptosave" /><code>{"void LerpToSave(float time, float skeleton, float splaid, bool isSkeletal, bool canGestureGripping)"}</code> | Blends the joint's rotation toward the saved grip pose, using the open and splayed poses when skeletal input is on. |
| <Link id="m-ondrawgizmos" /><code>{"void OnDrawGizmos(Matrix4x4 parent)"}</code> | Draws the joint's box, red when touching and green when not. |
| <Link id="m-preparecurl" /><code>{"virtual void PrepareCurl()"}</code> | Resets the joint to its default pose before curling. |
| <Link id="m-save" /><code>{"void Save()"}</code> | Stores the current curled rotation as the grip pose. |
| <Link id="m-serializegrip" /><code>{"void SerializeGrip("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes how many curl steps the joint took, and rebuilds the pose when reading. |

## Used in

Members of other types that take, return or hold a `GripJoint`:

[`HandGrip.GripFinger.joints`](/game-api/types/alta-player/handgrip-gripfinger#m-joints).
