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
| <Link id="m-ctor" /><code>{"RopeNode()"}</code> | <span className="api-desc">Creates an `UltimateRope.RopeNode` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bfold" /><code>{"bool bFold"}</code> | <span className="api-desc">Inspector option, true by default. Not read anywhere in this build.</span> |
| <Link id="m-binitialorientationinitialized" /><code>{"bool bInitialOrientationInitialized"}</code> | <span className="api-desc">True once the node's starting local position, rotation and scale have been recorded.</span> |
| <Link id="m-biscoil" /><code>{"bool bIsCoil"}</code> | <span className="api-desc">True if this node is the coil (spool) end. Coil links are skipped when checking joint breaks.</span> |
| <Link id="m-bsegmentbroken" /><code>{"bool bSegmentBroken"}</code> | <span className="api-desc">True once a joint in this segment has broken.</span> |
| <Link id="m-ecollidertype" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope-ecollidertype">{"UltimateRope.EColliderType"}</Link>{" eColliderType"}</code> | <span className="api-desc">Collider shape for the links (capsule by default).</span> |
| <Link id="m-flength" /><code>{"float fLength"}</code> | <span className="api-desc">Length of this segment in world units (5 by default).</span> |
| <Link id="m-ftotallength" /><code>{"float fTotalLength"}</code> | <span className="api-desc">This segment's length including any extensible length added to the last node.</span> |
| <Link id="m-gonode" /><code>{"GameObject goNode"}</code> | <span className="api-desc">The GameObject this node is attached to.</span> |
| <Link id="m-linkjointbreaksprocessed" /><code>{"bool[] linkJointBreaksProcessed"}</code> | <span className="api-desc">Per joint, whether its break has already been handled.</span> |
| <Link id="m-linkjoints" /><code>{"ConfigurableJoint[] linkJoints"}</code> | <span className="api-desc">The joints between the links of this segment. A null entry means that joint broke.</span> |
| <Link id="m-m-bextensioninitialized" /><code>{"bool m_bExtensionInitialized"}</code> | <span className="api-desc">Whether the extensible part of the last segment has been set up.</span> |
| <Link id="m-m-fextensionremainderin" /><code>{"float m_fExtensionRemainderIn"}</code> | <span className="api-desc">Leftover extension length on the inward side, used while extending the rope.</span> |
| <Link id="m-m-fextensionremainderout" /><code>{"float m_fExtensionRemainderOut"}</code> | <span className="api-desc">Leftover extension length on the outward side, used while extending the rope.</span> |
| <Link id="m-m-fextensionremaininglength" /><code>{"float m_fExtensionRemainingLength"}</code> | <span className="api-desc">Extensible length not yet let out.</span> |
| <Link id="m-m-nextensionlinkin" /><code>{"int m_nExtensionLinkIn"}</code> | <span className="api-desc">Index of the first extension link currently in use.</span> |
| <Link id="m-m-nextensionlinkout" /><code>{"int m_nExtensionLinkOut"}</code> | <span className="api-desc">Index of the last extension link still held back.</span> |
| <Link id="m-m-v3localdirectionforward" /><code>{"Vector3 m_v3LocalDirectionForward"}</code> | <span className="api-desc">Direction from this node toward the next, in the rope's local space.</span> |
| <Link id="m-m-v3localdirectionup" /><code>{"Vector3 m_v3LocalDirectionUp"}</code> | <span className="api-desc">Up direction for the node in the rope's local space.</span> |
| <Link id="m-ncolliderskip" /><code>{"int nColliderSkip"}</code> | <span className="api-desc">How many links to skip between colliders (1 by default, so every other link).</span> |
| <Link id="m-nnumlinks" /><code>{"int nNumLinks"}</code> | <span className="api-desc">Number of links in this segment (20 by default).</span> |
| <Link id="m-ntotallinks" /><code>{"int nTotalLinks"}</code> | <span className="api-desc">Number of links including the extra ones made for an extensible rope.</span> |
| <Link id="m-qinitiallocalrot" /><code>{"Quaternion qInitialLocalRot"}</code> | <span className="api-desc">Local rotation recorded at start, restored on reset.</span> |
| <Link id="m-segmentlinks" /><code>{"GameObject[] segmentLinks"}</code> | <span className="api-desc">The link GameObjects in this segment.</span> |
| <Link id="m-v3initiallocalpos" /><code>{"Vector3 v3InitialLocalPos"}</code> | <span className="api-desc">Local position recorded at start, restored on reset.</span> |
| <Link id="m-v3initiallocalscale" /><code>{"Vector3 v3InitialLocalScale"}</code> | <span className="api-desc">Local scale recorded at start.</span> |

## Used in

Members of other types that take, return or hold a `RopeNode`:

<div className="api-used-in">

[`UltimateRope.RopeNodes`](/mod/game-api/types/global-t-x/ultimaterope#m-ropenodes).

</div>
