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
| <Link id="m-ctor" /><code>{"GripJoint()"}</code> | <span className="api-desc">Creates a `HandGrip.GripJoint` from `hand`, `joint`, `transform` and `rotations`.</span> |
| <Link id="m-ctor-2" /><code>{"GripJoint("}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand, "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{" joint, Transform transform, "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" rotations)"}</code> | <span className="api-desc">Creates a `HandGrip.GripJoint` from `hand`, `joint`, `transform` and `rotations`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-worldmatrix" /><code>{"Matrix4x4 worldMatrix"}</code> | <span className="api-desc">The joint's world matrix, worked out while curling.</span> |
| <Link id="m-curlprogress" /><code>{"protected float curlProgress"}</code> | <span className="api-desc">How far the joint has curled, in degrees.</span> |
| <Link id="m-hand" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand"}</code> | <span className="api-desc">The hand grip this joint belongs to.</span> |
| <Link id="m-joint" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/handgripconfiguration-finger-joint">{"HandGripConfiguration.Finger.Joint"}</Link>{" joint"}</code> | <span className="api-desc">The joint's configuration: length, radius, curl step and maximum curl.</span> |
| <Link id="m-local" /><code>{"protected Matrix4x4 local"}</code> | <span className="api-desc">The joint's default local matrix.</span> |
| <Link id="m-modifiedlocal" /><code>{"protected Matrix4x4 modifiedLocal"}</code> | <span className="api-desc">The local matrix after curling.</span> |
| <Link id="m-transform" /><code>{"protected Transform transform"}</code> | <span className="api-desc">The joint's bone transform.</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | <span className="api-desc">Axis the joint curls around, from the current thumb configuration.</span> |
| <Link id="m-closedrotation" /><code>{"private Quaternion closedRotation"}</code> | <span className="api-desc">The joint's rotation in the closed hand pose.</span> |
| <Link id="m-defaultrotation" /><code>{"private Quaternion defaultRotation"}</code> | <span className="api-desc">The joint's local rotation when it was set up.</span> |
| <Link id="m-ishit" /><code>{"private bool isHit"}</code> | <span className="api-desc">True when the last collision check found something. Gizmos draw red when set.</span> |
| <Link id="m-lastcurlmultiplier" /><code>{"private int lastCurlMultiplier"}</code> | <span className="api-desc">The curl step the joint stopped at. This is what gets synced.</span> |
| <Link id="m-layermask" /><code>{"private int layerMask"}</code> | <span className="api-desc">Layer mask for the Active Tight Grip layer, used in the collision check.</span> |
| <Link id="m-openrotation" /><code>{"private Quaternion openRotation"}</code> | <span className="api-desc">The joint's rotation in the open hand pose.</span> |
| <Link id="m-savedrotation" /><code>{"private Quaternion savedRotation"}</code> | <span className="api-desc">The rotation saved as the grip pose, blended towards when gripping.</span> |
| <Link id="m-sidemultiplier" /><code>{"private int sideMultiplier"}</code> | <span className="api-desc">1 for the left hand and -1 for the right, so the joint box points the right way.</span> |
| <Link id="m-splaidrotation" /><code>{"private Quaternion splaidRotation"}</code> | <span className="api-desc">The joint's rotation in the splayed hand pose.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcollision" /><code>{"bool CheckCollision()"}</code> | <span className="api-desc">Checks whether the joint's box overlaps anything on the Active Tight Grip layer.</span> |
| <Link id="m-curlin" /><code>{"bool CurlIn(int curl, Matrix4x4 parent, bool isBaseMost)"}</code> | <span className="api-desc">Curls the joint one more step if it can, then checks for contact. Returns whether it's touching.</span> |
| <Link id="m-lerptosave" /><code>{"void LerpToSave(float time, float skeleton, float splaid, bool isSkeletal, bool canGestureGripping)"}</code> | <span className="api-desc">Blends the joint's rotation toward the saved grip pose, using the open and splayed poses when skeletal input is on.</span> |
| <Link id="m-ondrawgizmos" /><code>{"void OnDrawGizmos(Matrix4x4 parent)"}</code> | <span className="api-desc">Draws the joint's box, red when touching and green when not.</span> |
| <Link id="m-preparecurl" /><code>{"virtual void PrepareCurl()"}</code> | <span className="api-desc">Resets the joint to its default pose before curling.</span> |
| <Link id="m-save" /><code>{"void Save()"}</code> | <span className="api-desc">Stores the current curled rotation as the grip pose.</span> |
| <Link id="m-serializegrip" /><code>{"void SerializeGrip("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes how many curl steps the joint took, and rebuilds the pose when reading.</span> |

## Used in

Members of other types that take, return or hold a `GripJoint`:

<div className="api-used-in">

[`HandGrip.GripFinger.joints`](/mod/game-api/types/alta-player/handgrip-gripfinger#m-joints).

</div>
