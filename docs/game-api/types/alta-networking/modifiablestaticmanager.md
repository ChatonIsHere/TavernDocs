---
title: "ModifiableStaticManager"
description: "Tracks which static (baked) scene objects have been modified, such as buildings finished by a RepairBox, by hash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifiableStaticManager

A **class** in `Root.Township`, `Alta.Networking`.

Tracks which static (baked) scene objects have been modified, such as buildings finished by a `RepairBox`, by hash. A single instance on the server saves and syncs the map to every client.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ModifiableStaticManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ModifiableStaticManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ModifiableStaticManagerSaveData`](/game-api/types/alta-networking/modifiablestaticmanagersavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModifiableStaticManager()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gameobjects" /><code>{"static Dictionary<uint, GameObject> gameObjects"}</code> | Scene objects by hash, filled by `ModifiableStaticObject`. |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-networking/modifiablestaticmanager">{"ModifiableStaticManager"}</Link>{" instance"}</code> | The one manager in the scene. Extra copies destroy themselves. |
| <Link id="m-objectmap" /><code>{"static Dictionary<uint, bool> objectMap"}</code> | Modified state by object hash. Saved with the manager and cleared on game reload. |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger for this class. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the full map, sent to each player on connect. |
| <Link id="m-syncmodification" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-networking/modificationarguments">{"ModificationArguments"}</Link>{"> syncModification"}</code> | Method sync for single changes, sent by the server to chunks. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-objectchanged" /><code>{"static event "}<Link to="/game-api/types/alta-networking/staticchangeevent">{"StaticChangeEvent"}</Link>{" ObjectChanged"}</code> | Raised with the hash and new state whenever an object's modified state changes, on either side. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changemodifications" /><code>{"static void ChangeModifications(uint objectHash, bool isModified)"}</code> | Sets an object's modified state. If it changed, raises `ObjectChanged`, and the server syncs it to clients. |
| <Link id="m-cleanobject" /><code>{"static void CleanObject(uint hash)"}</code> | Forgets the scene object registered for a hash. |
| <Link id="m-getobject" /><code>{"static bool GetObject(uint hash, out GameObject gameObject)"}</code> | Finds the scene object registered for a hash. |
| <Link id="m-getstate" /><code>{"static void GetState(uint objectHash, ref bool isModified)"}</code> | Reads whether an object is modified. Leaves false for unknown hashes. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the full sync and the single-change sync. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the full modified map to a joining player. |
| <Link id="m-setobject" /><code>{"static void SetObject(uint hash, GameObject gameObject)"}</code> | Registers the scene object for a hash. Called by `ModifiableStaticObject`. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes this the single `instance` and clears state on game reload; destroys duplicates. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Clears the modified objects map. |
| <Link id="m-reloadclean" /><code>{"private void ReloadClean()"}</code> | Clears the modified objects map on game reload. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the whole modified objects map, or on clients reads it and raises `ObjectChanged` for each entry. |
| <Link id="m-syncmodification-2" /><code>{"private void SyncModification("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/modificationarguments">{"ModificationArguments"}</Link>{" args)"}</code> | Sends or receives one object's modified flag; clients apply it through `ChangeModifications`. |

</details>
