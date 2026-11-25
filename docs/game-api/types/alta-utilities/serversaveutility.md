---
title: "ServerSaveUtility"
description: "class ServerSaveUtility in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSaveUtility

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSaveUtility("}<Link to="/game-api/types/assembly-api-client/iserveraccess">{"IServerAccess"}</Link>{" serverAccess)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"ServerSaveUtility("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-playersaveutility" /><code>{"private "}<Link to="/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" playerSaveUtility"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cachefolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" CacheFolder { get; }"}</code> |  |
| <Link id="m-chunksfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ChunksFolder { get; }"}</code> |  |
| <Link id="m-logsfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" LogsFolder { get; }"}</code> |  |
| <Link id="m-logspath" /><code>{"string LogsPath { get; }"}</code> |  |
| <Link id="m-playersaveutility-2" /><code><Link to="/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" "}<Link to="/game-api/types/alta-utilities/playersaveutility">{"PlayerSaveUtility"}</Link>{" { get; }"}</code> |  |
| <Link id="m-savefolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" SaveFolder { get; }"}</code> |  |
| <Link id="m-serverfolder" /><code><Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" ServerFolder { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deletesave" /><code>{"static void DeleteSave("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |
| <Link id="m-getconfig" /><code>{"static "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" GetConfig("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server, string name)"}</code> |  |
| <Link id="m-unload" /><code>{"void Unload()"}</code> |  |
| <Link id="m-getserversavesfolder" /><code>{"private static "}<Link to="/game-api/types/assembly-other/ialtafolder">{"IAltaFolder"}</Link>{" GetServerSavesFolder("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerSaveUtility`:

[`ServerHandler.SaveUtility`](/game-api/types/alta-networking/serverhandler#m-saveutility).
