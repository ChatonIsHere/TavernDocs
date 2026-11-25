---
title: "InfoBoard"
description: "class InfoBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InfoBoard

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<InfoBoardSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<InfoBoardSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`InfoBoardSaveData`](/game-api/types/alta-world/infoboardsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InfoBoard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-world/infoboardsavedata">{"InfoBoardSaveData"}</Link>{" data"}</code> |  |
| <Link id="m-renderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" renderer"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-value" /><code>{"private string value"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-refresh" /><code>{"private static event Action<string> Refresh"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerefresh" /><code>{"static void ForceRefresh(string identifier)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-checkrefresh" /><code>{"private void CheckRefresh(string identifier)"}</code> |  |
| <Link id="m-loadfromfile" /><code>{"private async void LoadFromFile()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
