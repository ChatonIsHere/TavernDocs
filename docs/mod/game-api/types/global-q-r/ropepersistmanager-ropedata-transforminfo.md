---
title: "RopePersistManager.RopeData.TransformInfo"
description: "Saved transform of one rope object, used by the Ultimate Rope editor asset to keep rope changes made in play mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePersistManager.RopeData.TransformInfo

A **class** in `Root.Township`, the global namespace.

Saved transform of one rope object, used by the Ultimate Rope editor asset to keep rope changes made in play mode. Nested in a private class, so mods can't reach it.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RopePersistManager.RopeData`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformInfo()"}</code> | <span className="api-desc">Creates a `RopePersistManager.RopeData.TransformInfo` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bextensiblekinematic" /><code>{"bool bExtensibleKinematic"}</code> | <span className="api-desc">Whether the link was an extensible kinematic link.</span> |
| <Link id="m-blinkmarkedkinematic" /><code>{"bool bLinkMarkedKinematic"}</code> | <span className="api-desc">Whether the link's rigidbody was kinematic.</span> |
| <Link id="m-goobject" /><code>{"GameObject goObject"}</code> | <span className="api-desc">The object this info was taken from.</span> |
| <Link id="m-qlocalorientation" /><code>{"Quaternion qLocalOrientation"}</code> | <span className="api-desc">Rotation relative to `tfParent`, or world rotation if there is no parent.</span> |
| <Link id="m-strobjectname" /><code>{"string strObjectName"}</code> | <span className="api-desc">The object's name.</span> |
| <Link id="m-tfparent" /><code>{"Transform tfParent"}</code> | <span className="api-desc">The parent the position and rotation are relative to.</span> |
| <Link id="m-v3localposition" /><code>{"Vector3 v3LocalPosition"}</code> | <span className="api-desc">Position relative to `tfParent`, or world position if there is no parent.</span> |
| <Link id="m-v3localscale" /><code>{"Vector3 v3LocalScale"}</code> | <span className="api-desc">The object's local scale.</span> |

## Used in

Members of other types that take, return or hold a `TransformInfo`:

<div className="api-used-in">

[`RopePersistManager.ComputeTransformInfo`](/mod/game-api/types/global-q-r/ropepersistmanager#m-computetransforminfo), [`RopePersistManager.SetTransformInfo`](/mod/game-api/types/global-q-r/ropepersistmanager#m-settransforminfo), [`RopePersistManager.RopeData.m_aLinkTransformInfo`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-alinktransforminfo), [`RopePersistManager.RopeData.m_transformInfoRope`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-transforminforope), [`RopePersistManager.RopeData.m_transformInfoSegments`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-transforminfosegments), [`RopePersistManager.RopeData.m_transformInfoStart`](/mod/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-transforminfostart).

</div>
