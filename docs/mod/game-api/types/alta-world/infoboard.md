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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<InfoBoardSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<InfoBoardSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`InfoBoardSaveData`](/mod/game-api/types/alta-world/infoboardsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InfoBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/infoboardsavedata">{"InfoBoardSaveData"}</Link>{" data"}</code> | <span className="api-desc">The saved board data, mainly the identifier that names its text file.</span> |
| <Link id="m-renderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" renderer"}</code> | <span className="api-desc">The `TextRenderer` the text is shown on. Not touched on headless servers.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync used to send the text to players.</span> |
| <Link id="m-value" /><code>{"private string value"}</code> | <span className="api-desc">The current board text, or null before a file is loaded.</span> |

</details>

## Events

<details className="api-private">
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-refresh" /><code>{"private static event Action<string> Refresh"}</code> | <span className="api-desc">Static event raised by `ForceRefresh` with the identifier to reload.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcerefresh" /><code>{"static void ForceRefresh(string identifier)"}</code> | <span className="api-desc">Server: tells every board with this identifier to reload its file. Called by the `infoboard` console command after it writes new text.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the `sync` method sync on the `BookSync` message type.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: loads the text file and starts listening for `ForceRefresh`.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current text to a player who joins, if any text is loaded.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkrefresh" /><code>{"private void CheckRefresh(string identifier)"}</code> | <span className="api-desc">Reloads the text file if the refreshed identifier matches this board's.</span> |
| <Link id="m-loadfromfile" /><code>{"private async void LoadFromFile()"}</code> | <span className="api-desc">Server: reads `InfoBoard/<identifier>` from the save folder if it exists, stores the text and sends it to the chunk's players.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops listening for `ForceRefresh`.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the text on the server; on clients reads it and shows it on `renderer`.</span> |

</details>
