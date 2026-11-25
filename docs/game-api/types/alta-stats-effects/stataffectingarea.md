---
title: "StatAffectingArea"
description: "An area that changes a stat by affectValuePerSecond on things inside it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatAffectingArea

A **class** in `Root.Township`, `Alta.StatSystem`.

An area that changes a stat by `affectValuePerSecond` on things inside it.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatAffectingArea()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstats" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> affectedStats"}</code> |  |
| <Link id="m-affectvaluepersecond" /><code>{"private float affectValuePerSecond"}</code> |  |
| <Link id="m-alreadychecked" /><code>{"private HashSet<Rigidbody> alreadyChecked"}</code> |  |
| <Link id="m-isonlyaffectingiftargethasstat" /><code>{"private bool isOnlyAffectingIfTargetHasStat"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/areafilter">{"AreaFilter"}</Link>{" target"}</code> |  |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> |  |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> |  |
| <Link id="m-updatemanagers" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateManagers"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
| <Link id="m-updatemanagers-2" /><code>{"private void UpdateManagers()"}</code> |  |
