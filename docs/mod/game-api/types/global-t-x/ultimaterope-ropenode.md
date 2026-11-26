---
title: "UltimateRope.RopeNode"
description: "One node of a rope in the third-party Ultimate Rope physics component: a target GameObject and the chain of linked segments and joints running to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UltimateRope.RopeNode

A **class** in `Root.Township`, the global namespace.

One node of a rope in the third-party Ultimate Rope physics component: a target GameObject and the chain of linked segments and joints running to it.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`UltimateRope`](/mod/game-api/types/global-t-x/ultimaterope)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeNode()"}</code> | Creates an `UltimateRope.RopeNode` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bfold" /><code>{"bool bFold"}</code> | Inspector option, true by default. Not read anywhere in this build. |
| <Link id="m-binitialorientationinitialized" /><code>{"bool bInitialOrientationInitialized"}</code> | True once the node's starting local position, rotation and scale have been recorded. |
| <Link id="m-biscoil" /><code>{"bool bIsCoil"}</code> | True if this node is the coil (spool) end. Coil links are skipped when checking joint breaks. |
| <Link id="m-bsegmentbroken" /><code>{"bool bSegmentBroken"}</code> | True once a joint in this segment has broken. |
| <Link id="m-ecollidertype" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-ecollidertype">{"UltimateRope.EColliderType"}</Link>{" eColliderType"}</code> | Collider shape for the links (capsule by default). |
| <Link id="m-flength" /><code>{"float fLength"}</code> | Length of this segment in world units (5 by default). |
| <Link id="m-ftotallength" /><code>{"float fTotalLength"}</code> | This segment's length including any extensible length added to the last node. |
| <Link id="m-gonode" /><code>{"GameObject goNode"}</code> | The GameObject this node is attached to. |
| <Link id="m-linkjointbreaksprocessed" /><code>{"bool[] linkJointBreaksProcessed"}</code> | Per joint, whether its break has already been handled. |
| <Link id="m-linkjoints" /><code>{"ConfigurableJoint[] linkJoints"}</code> | The joints between the links of this segment. A null entry means that joint broke. |
| <Link id="m-m-bextensioninitialized" /><code>{"bool m_bExtensionInitialized"}</code> | Whether the extensible part of the last segment has been set up. |
| <Link id="m-m-fextensionremainderin" /><code>{"float m_fExtensionRemainderIn"}</code> | Leftover extension length on the inward side, used while extending the rope. |
| <Link id="m-m-fextensionremainderout" /><code>{"float m_fExtensionRemainderOut"}</code> | Leftover extension length on the outward side, used while extending the rope. |
| <Link id="m-m-fextensionremaininglength" /><code>{"float m_fExtensionRemainingLength"}</code> | Extensible length not yet let out. |
| <Link id="m-m-nextensionlinkin" /><code>{"int m_nExtensionLinkIn"}</code> | Index of the first extension link currently in use. |
| <Link id="m-m-nextensionlinkout" /><code>{"int m_nExtensionLinkOut"}</code> | Index of the last extension link still held back. |
| <Link id="m-m-v3localdirectionforward" /><code>{"Vector3 m_v3LocalDirectionForward"}</code> | Direction from this node toward the next, in the rope's local space. |
| <Link id="m-m-v3localdirectionup" /><code>{"Vector3 m_v3LocalDirectionUp"}</code> | Up direction for the node in the rope's local space. |
| <Link id="m-ncolliderskip" /><code>{"int nColliderSkip"}</code> | How many links to skip between colliders (1 by default, so every other link). |
| <Link id="m-nnumlinks" /><code>{"int nNumLinks"}</code> | Number of links in this segment (20 by default). |
| <Link id="m-ntotallinks" /><code>{"int nTotalLinks"}</code> | Number of links including the extra ones made for an extensible rope. |
| <Link id="m-qinitiallocalrot" /><code>{"Quaternion qInitialLocalRot"}</code> | Local rotation recorded at start, restored on reset. |
| <Link id="m-segmentlinks" /><code>{"GameObject[] segmentLinks"}</code> | The link GameObjects in this segment. |
| <Link id="m-v3initiallocalpos" /><code>{"Vector3 v3InitialLocalPos"}</code> | Local position recorded at start, restored on reset. |
| <Link id="m-v3initiallocalscale" /><code>{"Vector3 v3InitialLocalScale"}</code> | Local scale recorded at start. |

## Used in

Members of other types that take, return or hold a `RopeNode`:

[`UltimateRope.RopeNodes`](/mod/game-api/types/global-t-x/ultimaterope#m-ropenodes).
