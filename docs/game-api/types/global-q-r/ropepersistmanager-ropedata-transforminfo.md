---
title: "RopePersistManager.RopeData.TransformInfo"
description: "Saved transform of one rope object, used by the Ultimate Rope editor asset to keep rope changes made in play mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopePersistManager.RopeData.TransformInfo

A **class** in `Root.Township`, no namespace.

Saved transform of one rope object, used by the Ultimate Rope editor asset to keep rope changes made in play mode. Nested in a private class, so mods can't reach it.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`RopePersistManager.RopeData`](/game-api/types/global-q-r/ropepersistmanager-ropedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformInfo()"}</code> | Creates a `RopePersistManager.RopeData.TransformInfo` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bextensiblekinematic" /><code>{"bool bExtensibleKinematic"}</code> | Whether the link was an extensible kinematic link. |
| <Link id="m-blinkmarkedkinematic" /><code>{"bool bLinkMarkedKinematic"}</code> | Whether the link's rigidbody was kinematic. |
| <Link id="m-goobject" /><code>{"GameObject goObject"}</code> | The object this info was taken from. |
| <Link id="m-qlocalorientation" /><code>{"Quaternion qLocalOrientation"}</code> | Rotation relative to `tfParent`, or world rotation if there is no parent. |
| <Link id="m-strobjectname" /><code>{"string strObjectName"}</code> | The object's name. |
| <Link id="m-tfparent" /><code>{"Transform tfParent"}</code> | The parent the position and rotation are relative to. |
| <Link id="m-v3localposition" /><code>{"Vector3 v3LocalPosition"}</code> | Position relative to `tfParent`, or world position if there is no parent. |
| <Link id="m-v3localscale" /><code>{"Vector3 v3LocalScale"}</code> | The object's local scale. |

## Used in

Members of other types that take, return or hold a `TransformInfo`:

[`RopePersistManager.ComputeTransformInfo`](/game-api/types/global-q-r/ropepersistmanager#m-computetransforminfo), [`RopePersistManager.SetTransformInfo`](/game-api/types/global-q-r/ropepersistmanager#m-settransforminfo), [`RopePersistManager.RopeData.m_aLinkTransformInfo`](/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-alinktransforminfo), [`RopePersistManager.RopeData.m_transformInfoRope`](/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-transforminforope), [`RopePersistManager.RopeData.m_transformInfoSegments`](/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-transforminfosegments), [`RopePersistManager.RopeData.m_transformInfoStart`](/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-transforminfostart).
