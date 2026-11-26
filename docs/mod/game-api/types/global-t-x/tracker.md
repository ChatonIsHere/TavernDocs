---
title: "Tracker"
description: "Gives a network entity a saved name so it can be found again by that name, even after a restart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Tracker

A **class** in `Root.Township`, the global namespace.

Gives a network entity a saved name so it can be found again by that name, even after a restart. Added by the `debug tracking` console commands (server owner only).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<TrackerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TrackerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TrackerData`](/mod/game-api/types/global-t-x/trackerdata)
- **Attributes** `SavingInfo`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tracker()"}</code> | <span className="api-desc">Creates a `Tracker` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger for tracker events.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removing" /><code>{"private static HashSet<string> removing"}</code> | <span className="api-desc">Names whose removal was requested before the tracker had loaded.</span> |
| <Link id="m-trackers" /><code>{"private static Dictionary<string, "}<Link to="/mod/game-api/types/global-t-x/tracker">{"Tracker"}</Link>{"> trackers"}</code> | <span className="api-desc">Lookup of tracked name to `Tracker`, for loaded entities only.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; private set; }"}</code> | <span className="api-desc">The network entity this tracker is on.</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">The name this entity is tracked under.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-saving-isavablesavebase-name" /><code>{"private string Alta.Saving.ISavableSaveBase.name { get; }"}</code> | <span className="api-desc">Save name for this savable, always `Tracker`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static void Create("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string name)"}</code> | <span className="api-desc">Adds a `Tracker` component to the entity and registers it under the given name.</span> |
| <Link id="m-get" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Get(string name)"}</code> | <span className="api-desc">Returns the entity tracked under a name, or null if none is loaded.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/global-t-x/trackerdata">{"TrackerData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Restores the name from save and re-registers it. Removes it at once if a remove was queued while it was unloaded.</span> |
| <Link id="m-remove" /><code>{"static void Remove(string name)"}</code> | <span className="api-desc">Static: removes the named tracker, or queues the removal until it loads. Instance: unregisters it and its extra savable.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/global-t-x/trackerdata">{"TrackerData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves the tracker's name.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the entity, hooks its scene destroy event and registers this tracker as an extra savable on it.</span> |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Drops the tracker from the lookup when its entity is destroyed or unloaded.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize(string name)"}</code> | <span className="api-desc">Sets the name and adds this tracker to the lookup.</span> |
| <Link id="m-remove-2" /><code>{"private void Remove()"}</code> | <span className="api-desc">Static: removes the named tracker, or queues the removal until it loads. Instance: unregisters it and its extra savable.</span> |

</details>
