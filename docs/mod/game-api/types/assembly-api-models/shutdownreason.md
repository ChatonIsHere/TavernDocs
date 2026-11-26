---
title: "ShutdownReason"
description: "Why a game server shut down, as a message and whether the shutdown was expected."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShutdownReason

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Why a game server shut down, as a message and whether the shutdown was expected.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShutdownReason(string reason, bool isExpected)"}</code> | Creates a `ShutdownReason` with default values. |
| <Link id="m-ctor-2" /><code>{"ShutdownReason(string reason)"}</code> | Creates a `ShutdownReason` with default values. |
| <Link id="m-ctor-3" /><code>{"ShutdownReason()"}</code> | Creates a `ShutdownReason` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isexpected" /><code>{"bool IsExpected { get; set; }"}</code> | True for a planned shutdown, false for a crash or other surprise. |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> | Free-text reason for the shutdown. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the reason and the expected flag as one line. |

## Used in

Members of other types that take, return or hold a `ShutdownReason`:

[`IServerAccess.StopAsync`](/mod/game-api/types/assembly-api-client/iserveraccess#m-stopasync), [`LocalServerAccess.StopAsync`](/mod/game-api/types/assembly-api-client/localserveraccess#m-stopasync), [`ServerAccess.StopAsync`](/mod/game-api/types/assembly-api-client/serveraccess#m-stopasync), [`LowLevelApiClient.StopServerSession`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-stopserversession), [`ServerCommandModule.ShutdownPostMigration`](/mod/game-api/types/alta-console/servercommandmodule#m-shutdownpostmigration), [`ServerHandler.OnServerStopped`](/mod/game-api/types/alta-networking/serverhandler#m-onserverstopped), [`ServerHandler.StopAsync`](/mod/game-api/types/alta-networking/serverhandler#m-stopasync), [`ServerHandler.StopForMigration`](/mod/game-api/types/alta-networking/serverhandler#m-stopformigration), [`ApplicationManager.ExternalOnApplicationQuit`](/mod/game-api/types/global-a-b/applicationmanager#m-externalonapplicationquit), [`ApplicationManager.shutdownReason`](/mod/game-api/types/global-a-b/applicationmanager#m-shutdownreason).
