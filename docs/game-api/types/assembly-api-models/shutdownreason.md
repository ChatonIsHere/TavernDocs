---
title: "ShutdownReason"
description: "class ShutdownReason in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShutdownReason

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShutdownReason(string reason, bool isExpected)"}</code> |
| <Link id="m-ctor-2" /><code>{"ShutdownReason(string reason)"}</code> |
| <Link id="m-ctor-3" /><code>{"ShutdownReason()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-isexpected" /><code>{"bool IsExpected { get; set; }"}</code> |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |

## Used in

Members of other types that take, return or hold a `ShutdownReason`:

[`IServerAccess.StopAsync`](/game-api/types/assembly-api-client/iserveraccess#m-stopasync), [`LocalServerAccess.StopAsync`](/game-api/types/assembly-api-client/localserveraccess#m-stopasync), [`ServerAccess.StopAsync`](/game-api/types/assembly-api-client/serveraccess#m-stopasync), [`LowLevelApiClient.StopServerSession`](/game-api/types/assembly-api-client/lowlevelapiclient#m-stopserversession), [`ServerCommandModule.ShutdownPostMigration`](/game-api/types/alta-console/servercommandmodule#m-shutdownpostmigration), [`ServerHandler.OnServerStopped`](/game-api/types/alta-networking/serverhandler#m-onserverstopped), [`ServerHandler.StopAsync`](/game-api/types/alta-networking/serverhandler#m-stopasync), [`ServerHandler.StopForMigration`](/game-api/types/alta-networking/serverhandler#m-stopformigration), [`ApplicationManager.ExternalOnApplicationQuit`](/game-api/types/global-a-b/applicationmanager#m-externalonapplicationquit), [`ApplicationManager.shutdownReason`](/game-api/types/global-a-b/applicationmanager#m-shutdownreason).
