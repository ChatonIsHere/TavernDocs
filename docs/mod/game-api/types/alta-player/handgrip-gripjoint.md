---
title: "HandGrip.GripJoint"
description: "One finger joint of a hand grip."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGrip.GripJoint

A **class** in `Root.Township`, `Alta.Character`.

One finger joint of a hand grip. It curls in steps until it touches a grabbed object, and blends between open, splayed, closed and saved poses.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`HandGrip`](/mod/game-api/types/alta-player/handgrip)
- **Derived types** [`HandGrip.ThumbGripJoint`](/mod/game-api/types/alta-player/handgrip-thumbgripjoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GripJoint()"}</code> | Creates a `HandGrip.GripJoint` from `hand`, `joint`, `transform` and `rotations`. |
| <Link id="m-ctor-2" /><code>{"GripJoint("}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand, "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{" joint, Transform transform, "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" rotations)"}</code> | Creates a `HandGrip.GripJoint` from `hand`, `joint`, `transform` and `rotations`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-worldmatrix" /><code>{"Matrix4x4 worldMatrix"}</code> | The joint's world matrix, worked out while curling. |
| <Link id="m-curlprogress" /><code>{"protected float curlProgress"}</code> | How far the joint has curled, in degrees. |
| <Link id="m-hand" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand"}</code> | The hand grip this joint belongs to. |
| <Link id="m-joint" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{" joint"}</code> | The joint's configuration: length, radius, curl step and maximum curl. |
| <Link id="m-local" /><code>{"protected Matrix4x4 local"}</code> | The joint's default local matrix. |
| <Link id="m-modifiedlocal" /><code>{"protected Matrix4x4 modifiedLocal"}</code> | The local matrix after curling. |
| <Link id="m-transform" /><code>{"protected Transform transform"}</code> | The joint's bone transform. |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | Axis the joint curls around, from the current thumb configuration. |
| <Link id="m-closedrotation" /><code>{"private Quaternion closedRotation"}</code> | The joint's rotation in the closed hand pose. |
| <Link id="m-defaultrotation" /><code>{"private Quaternion defaultRotation"}</code> | The joint's local rotation when it was set up. |
| <Link id="m-ishit" /><code>{"private bool isHit"}</code> | True when the last collision check found something. Gizmos draw red when set. |
| <Link id="m-lastcurlmultiplier" /><code>{"private int lastCurlMultiplier"}</code> | The curl step the joint stopped at. This is what gets synced. |
| <Link id="m-layermask" /><code>{"private int layerMask"}</code> | Layer mask for the Active Tight Grip layer, used in the collision check. |
| <Link id="m-openrotation" /><code>{"private Quaternion openRotation"}</code> | The joint's rotation in the open hand pose. |
| <Link id="m-savedrotation" /><code>{"private Quaternion savedRotation"}</code> | The rotation saved as the grip pose, blended towards when gripping. |
| <Link id="m-sidemultiplier" /><code>{"private int sideMultiplier"}</code> | 1 for the left hand and -1 for the right, so the joint box points the right way. |
| <Link id="m-splaidrotation" /><code>{"private Quaternion splaidRotation"}</code> | The joint's rotation in the splayed hand pose. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcollision" /><code>{"bool CheckCollision()"}</code> | Checks whether the joint's box overlaps anything on the Active Tight Grip layer. |
| <Link id="m-curlin" /><code>{"bool CurlIn(int curl, Matrix4x4 parent, bool isBaseMost)"}</code> | Curls the joint one more step if it can, then checks for contact. Returns whether it's touching. |
| <Link id="m-lerptosave" /><code>{"void LerpToSave(float time, float skeleton, float splaid, bool isSkeletal, bool canGestureGripping)"}</code> | Blends the joint's rotation toward the saved grip pose, using the open and splayed poses when skeletal input is on. |
| <Link id="m-ondrawgizmos" /><code>{"void OnDrawGizmos(Matrix4x4 parent)"}</code> | Draws the joint's box, red when touching and green when not. |
| <Link id="m-preparecurl" /><code>{"virtual void PrepareCurl()"}</code> | Resets the joint to its default pose before curling. |
| <Link id="m-save" /><code>{"void Save()"}</code> | Stores the current curled rotation as the grip pose. |
| <Link id="m-serializegrip" /><code>{"void SerializeGrip("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes how many curl steps the joint took, and rebuilds the pose when reading. |

## Used in

Members of other types that take, return or hold a `GripJoint`:

[`HandGrip.GripFinger.joints`](/mod/game-api/types/alta-player/handgrip-gripfinger#m-joints).
