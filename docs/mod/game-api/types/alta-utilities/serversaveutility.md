---
title: "ServerSaveUtility"
description: "Paths to one game server's save folders (save, chunks, cache, logs and player saves)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSaveUtility

A **class** in `Root.Township`, `Alta.Utilities`.

Paths to one game server's save folders (save, chunks, cache, logs and player saves). The server makes one for itself; static helpers work from a `GameServerInfo`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSaveUtility("}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess)"}</code> | Creates a `ServerSaveUtility` from `server`. |
| <Link id="m-ctor-2" /><code>{"ServerSaveUtility("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Creates a `ServerSaveUtility` from `server`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-playersaveutility" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" playerSaveUtility"}</code> | Backing field for `PlayerSaveUtility`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachefolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" CacheFolder { get; }"}</code> | The `Save/Cache` folder. The server's web server serves it at `/cache`. |
| <Link id="m-chunksfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ChunksFolder { get; }"}</code> | The `Save/Chunks` folder where chunk saves go. |
| <Link id="m-logsfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" LogsFolder { get; }"}</code> | The server's `Logs` folder. |
| <Link id="m-logspath" /><code>{"string LogsPath { get; }"}</code> | Path of `LogsFolder`. |
| <Link id="m-playersaveutility-2" /><code><Link to="/mod/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" { get; }"}</code> | Player save helper for the `Save/Players` folder. |
| <Link id="m-savefolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" SaveFolder { get; }"}</code> | The server's `Save` folder. |
| <Link id="m-serverfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ServerFolder { get; }"}</code> | The server's root folder under the servers folder. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deletesave" /><code>{"static void DeleteSave("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Deletes a server's whole `Save` folder, if it exists. |
| <Link id="m-getconfig" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetConfig("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server, string name)"}</code> | Gets a JSON file with the given name from the server's folder. |
| <Link id="m-unload" /><code>{"void Unload()"}</code> | Unloads every cached file under the server folder. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getserversavesfolder" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetServerSavesFolder("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Finds the server's folder, using the old folder name if that one exists. |

</details>

## Used in

Members of other types that take, return or hold a `ServerSaveUtility`:

[`ServerHandler.SaveUtility`](/mod/game-api/types/alta-networking/serverhandler#m-saveutility).
