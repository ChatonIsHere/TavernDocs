---
title: "StatAffectingArea"
description: "Server trigger area that changes a stat by a fixed amount per second on every rigidbody inside it that has a matching StatAffectAccessor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatAffectingArea

A **class** in `Root.Township`, `Alta.StatSystem`.

Server trigger area that changes a stat by a fixed amount per second on every rigidbody inside it that has a matching `StatAffectAccessor`. Removes itself on clients.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatAffectingArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstats" /><code>{"private Dictionary<Rigidbody, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> affectedStats"}</code> | <span className="api-desc">The stat being changed for each rigidbody inside.</span> |
| <Link id="m-affectvaluepersecond" /><code>{"private float affectValuePerSecond"}</code> | <span className="api-desc">Stat change per second. Negative drains.</span> |
| <Link id="m-alreadychecked" /><code>{"private HashSet<Rigidbody> alreadyChecked"}</code> | <span className="api-desc">Rigidbodies already seen, so several colliders on one body count once.</span> |
| <Link id="m-isonlyaffectingiftargethasstat" /><code>{"private bool isOnlyAffectingIfTargetHasStat"}</code> | <span className="api-desc">Only changes a stat whose base is above 0 (for example phantom heads only add nightmare to those who have some).</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/areafilter">{"AreaFilter"}</Link>{" target"}</code> | <span className="api-desc">Filter for which kinds of target the area affects.</span> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | <span className="api-desc">The stat to change.</span> |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> | <span className="api-desc">Shared scratch list of destroyed rigidbodies to drop.</span> |
| <Link id="m-updatemanagers" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateManagers"}</code> | <span className="api-desc">The registered `UpdateManagers` method.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared update module for all stat affecting areas.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys this component on clients, sets up the lookups on the server.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the update method.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Server: forgets everything inside and stops updating.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Adds a rigidbody's stat when its accessor passes the `target` filter and has the stat. Starts the update on the first one.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Removes the rigidbody and stops updating when none are left.</span> |
| <Link id="m-updatemanagers-2" /><code>{"private void UpdateManagers()"}</code> | <span className="api-desc">Adds `affectValuePerSecond` times delta time to each stat, and drops destroyed rigidbodies.</span> |

</details>
