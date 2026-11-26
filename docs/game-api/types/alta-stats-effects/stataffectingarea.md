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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatAffectingArea()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectedstats" /><code>{"private Dictionary<Rigidbody, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> affectedStats"}</code> | The stat being changed for each rigidbody inside. |
| <Link id="m-affectvaluepersecond" /><code>{"private float affectValuePerSecond"}</code> | Stat change per second. Negative drains. |
| <Link id="m-alreadychecked" /><code>{"private HashSet<Rigidbody> alreadyChecked"}</code> | Rigidbodies already seen, so several colliders on one body count once. |
| <Link id="m-isonlyaffectingiftargethasstat" /><code>{"private bool isOnlyAffectingIfTargetHasStat"}</code> | Only changes a stat whose base is above 0 (for example phantom heads only add nightmare to those who have some). |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/areafilter">{"AreaFilter"}</Link>{" target"}</code> | Filter for which kinds of target the area affects. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | The stat to change. |
| <Link id="m-toremove" /><code>{"private static List<Rigidbody> toRemove"}</code> | Shared scratch list of destroyed rigidbodies to drop. |
| <Link id="m-updatemanagers" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateManagers"}</code> | The registered `UpdateManagers` method. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared update module for all stat affecting areas. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys this component on clients, sets up the lookups on the server. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the update method. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Server: forgets everything inside and stops updating. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Adds a rigidbody's stat when its accessor passes the `target` filter and has the stat. Starts the update on the first one. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Removes the rigidbody and stops updating when none are left. |
| <Link id="m-updatemanagers-2" /><code>{"private void UpdateManagers()"}</code> | Adds `affectValuePerSecond` times delta time to each stat, and drops destroyed rigidbodies. |

</details>
