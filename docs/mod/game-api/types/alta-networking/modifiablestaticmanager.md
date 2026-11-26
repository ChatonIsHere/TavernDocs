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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ModifiableStaticManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ModifiableStaticManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ModifiableStaticManagerSaveData`](/mod/game-api/types/alta-networking/modifiablestaticmanagersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableStaticManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gameobjects" /><code>{"static Dictionary<uint, GameObject> gameObjects"}</code> | <span className="api-desc">Scene objects by hash, filled by `ModifiableStaticObject`.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/modifiablestaticmanager">{"ModifiableStaticManager"}</Link>{" instance"}</code> | <span className="api-desc">The one manager in the scene. Extra copies destroy themselves.</span> |
| <Link id="m-objectmap" /><code>{"static Dictionary<uint, bool> objectMap"}</code> | <span className="api-desc">Modified state by object hash. Saved with the manager and cleared on game reload.</span> |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the full map, sent to each player on connect.</span> |
| <Link id="m-syncmodification" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-networking/modificationarguments">{"ModificationArguments"}</Link>{"> syncModification"}</code> | <span className="api-desc">Method sync for single changes, sent by the server to chunks.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-objectchanged" /><code>{"static event "}<Link to="/mod/game-api/types/alta-networking/staticchangeevent">{"StaticChangeEvent"}</Link>{" ObjectChanged"}</code> | <span className="api-desc">Raised with the hash and new state whenever an object's modified state changes, on either side.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changemodifications" /><code>{"static void ChangeModifications(uint objectHash, bool isModified)"}</code> | <span className="api-desc">Sets an object's modified state. If it changed, raises `ObjectChanged`, and the server syncs it to clients.</span> |
| <Link id="m-cleanobject" /><code>{"static void CleanObject(uint hash)"}</code> | <span className="api-desc">Forgets the scene object registered for a hash.</span> |
| <Link id="m-getobject" /><code>{"static bool GetObject(uint hash, out GameObject gameObject)"}</code> | <span className="api-desc">Finds the scene object registered for a hash.</span> |
| <Link id="m-getstate" /><code>{"static void GetState(uint objectHash, ref bool isModified)"}</code> | <span className="api-desc">Reads whether an object is modified. Leaves false for unknown hashes.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the full sync and the single-change sync.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the full modified map to a joining player.</span> |
| <Link id="m-setobject" /><code>{"static void SetObject(uint hash, GameObject gameObject)"}</code> | <span className="api-desc">Registers the scene object for a hash. Called by `ModifiableStaticObject`.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes this the single `instance` and clears state on game reload; destroys duplicates.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears the modified objects map.</span> |
| <Link id="m-reloadclean" /><code>{"private void ReloadClean()"}</code> | <span className="api-desc">Clears the modified objects map on game reload.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the whole modified objects map, or on clients reads it and raises `ObjectChanged` for each entry.</span> |
| <Link id="m-syncmodification-2" /><code>{"private void SyncModification("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-networking/modificationarguments">{"ModificationArguments"}</Link>{" args)"}</code> | <span className="api-desc">Sends or receives one object's modified flag; clients apply it through `ChangeModifications`.</span> |

</details>
