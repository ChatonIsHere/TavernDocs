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
| <Link id="m-ctor" /><code>{"ServerSaveUtility("}<Link to="/mod/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess)"}</code> | <span className="api-desc">Creates a `ServerSaveUtility` from `server`.</span> |
| <Link id="m-ctor-2" /><code>{"ServerSaveUtility("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | <span className="api-desc">Creates a `ServerSaveUtility` from `server`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-playersaveutility" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" playerSaveUtility"}</code> | <span className="api-desc">Backing field for `PlayerSaveUtility`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachefolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" CacheFolder { get; }"}</code> | <span className="api-desc">The `Save/Cache` folder. The server's web server serves it at `/cache`.</span> |
| <Link id="m-chunksfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ChunksFolder { get; }"}</code> | <span className="api-desc">The `Save/Chunks` folder where chunk saves go.</span> |
| <Link id="m-logsfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" LogsFolder { get; }"}</code> | <span className="api-desc">The server's `Logs` folder.</span> |
| <Link id="m-logspath" /><code>{"string LogsPath { get; }"}</code> | <span className="api-desc">Path of `LogsFolder`.</span> |
| <Link id="m-playersaveutility-2" /><code><Link to="/mod/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" { get; }"}</code> | <span className="api-desc">Player save helper for the `Save/Players` folder.</span> |
| <Link id="m-savefolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" SaveFolder { get; }"}</code> | <span className="api-desc">The server's `Save` folder.</span> |
| <Link id="m-serverfolder" /><code><Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ServerFolder { get; }"}</code> | <span className="api-desc">The server's root folder under the servers folder.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deletesave" /><code>{"static void DeleteSave("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | <span className="api-desc">Deletes a server's whole `Save` folder, if it exists.</span> |
| <Link id="m-getconfig" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetConfig("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server, string name)"}</code> | <span className="api-desc">Gets a JSON file with the given name from the server's folder.</span> |
| <Link id="m-unload" /><code>{"void Unload()"}</code> | <span className="api-desc">Unloads every cached file under the server folder.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getserversavesfolder" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetServerSavesFolder("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | <span className="api-desc">Finds the server's folder, using the old folder name if that one exists.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerSaveUtility`:

<div className="api-used-in">

[`ServerHandler.SaveUtility`](/mod/game-api/types/alta-networking/serverhandler#m-saveutility).

</div>
