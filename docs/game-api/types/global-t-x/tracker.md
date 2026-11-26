---
title: "Tracker"
description: "Gives a network entity a saved name so it can be found again by that name, even after a restart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Tracker

A **class** in `Root.Township`, no namespace.

Gives a network entity a saved name so it can be found again by that name, even after a restart. Added by the `debug tracking` console commands (server owner only).

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<TrackerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TrackerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TrackerData`](/game-api/types/global-t-x/trackerdata)
- **Attributes** `SavingInfo`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Tracker()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger for tracker events. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removing" /><code>{"private static HashSet<string> removing"}</code> | Names whose removal was requested before the tracker had loaded. |
| <Link id="m-trackers" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/global-t-x/tracker">{"Tracker"}</Link>{"> trackers"}</code> | Lookup of tracked name to `Tracker`, for loaded entities only. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; private set; }"}</code> | The network entity this tracker is on. |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | The name this entity is tracked under. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-saving-isavablesavebase-name" /><code>{"private string Alta.Saving.ISavableSaveBase.name { get; }"}</code> | Save name for this savable, always `Tracker`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static void Create("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string name)"}</code> | Adds a `Tracker` component to the entity and registers it under the given name. |
| <Link id="m-get" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Get(string name)"}</code> | Returns the entity tracked under a name, or null if none is loaded. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/global-t-x/trackerdata">{"TrackerData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Restores the name from save and re-registers it. Removes it at once if a remove was queued while it was unloaded. |
| <Link id="m-remove" /><code>{"static void Remove(string name)"}</code> | Static: removes the named tracker, or queues the removal until it loads. Instance: unregisters it and its extra savable. |
| <Link id="m-save" /><code><Link to="/game-api/types/global-t-x/trackerdata">{"TrackerData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Saves the tracker's name. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the entity, hooks its scene destroy event and registers this tracker as an extra savable on it. |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Drops the tracker from the lookup when its entity is destroyed or unloaded. |
| <Link id="m-initialize" /><code>{"private void Initialize(string name)"}</code> | Sets the name and adds this tracker to the lookup. |
| <Link id="m-remove-2" /><code>{"private void Remove()"}</code> | Static: removes the named tracker, or queues the removal until it loads. Instance: unregisters it and its extra savable. |

</details>
