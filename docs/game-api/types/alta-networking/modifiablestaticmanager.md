---
title: "ModifiableStaticManager"
description: "class ModifiableStaticManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifiableStaticManager

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ModifiableStaticManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ModifiableStaticManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ModifiableStaticManagerSaveData`](/game-api/types/alta-networking/modifiablestaticmanagersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableStaticManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gameobjects" /><code>{"static Dictionary<uint, GameObject> gameObjects"}</code> |  |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-networking/modifiablestaticmanager">{"ModifiableStaticManager"}</Link>{" instance"}</code> |  |
| <Link id="m-objectmap" /><code>{"static Dictionary<uint, bool> objectMap"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-syncmodification" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-networking/modificationarguments">{"ModificationArguments"}</Link>{"> syncModification"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-objectchanged" /><code>{"static event "}<Link to="/game-api/types/alta-networking/staticchangeevent">{"StaticChangeEvent"}</Link>{" ObjectChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changemodifications" /><code>{"static void ChangeModifications(uint objectHash, bool isModified)"}</code> |  |
| <Link id="m-cleanobject" /><code>{"static void CleanObject(uint hash)"}</code> |  |
| <Link id="m-getobject" /><code>{"static bool GetObject(uint hash, out GameObject gameObject)"}</code> |  |
| <Link id="m-getstate" /><code>{"static void GetState(uint objectHash, ref bool isModified)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setobject" /><code>{"static void SetObject(uint hash, GameObject gameObject)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-reloadclean" /><code>{"private void ReloadClean()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncmodification-2" /><code>{"private void SyncModification("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/modificationarguments">{"ModificationArguments"}</Link>{" args)"}</code> |  |
