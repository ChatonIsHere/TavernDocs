---
title: "InfoBoard"
description: "A board that shows server-set text."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InfoBoard

A **class** in `Root.Township`, `Alta.Map`.

A board that shows server-set text. The server reads the text from a file named by the board's identifier in the save's `InfoBoard` folder and syncs it to players.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<InfoBoardSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<InfoBoardSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`InfoBoardSaveData`](/game-api/types/alta-world/infoboardsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InfoBoard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-world/infoboardsavedata">{"InfoBoardSaveData"}</Link>{" data"}</code> | The saved board data, mainly the identifier that names its text file. |
| <Link id="m-renderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" renderer"}</code> | The `TextRenderer` the text is shown on. Not touched on headless servers. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync used to send the text to players. |
| <Link id="m-value" /><code>{"private string value"}</code> | The current board text, or null before a file is loaded. |

</details>

## Events

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-refresh" /><code>{"private static event Action<string> Refresh"}</code> | Static event raised by `ForceRefresh` with the identifier to reload. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerefresh" /><code>{"static void ForceRefresh(string identifier)"}</code> | Server: tells every board with this identifier to reload its file. Called by the `infoboard` console command after it writes new text. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the `sync` method sync on the `BookSync` message type. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: loads the text file and starts listening for `ForceRefresh`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current text to a player who joins, if any text is loaded. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkrefresh" /><code>{"private void CheckRefresh(string identifier)"}</code> | Reloads the text file if the refreshed identifier matches this board's. |
| <Link id="m-loadfromfile" /><code>{"private async void LoadFromFile()"}</code> | Server: reads `InfoBoard/<identifier>` from the save folder if it exists, stores the text and sends it to the chunk's players. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops listening for `ForceRefresh`. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the text on the server; on clients reads it and shows it on `renderer`. |

</details>
