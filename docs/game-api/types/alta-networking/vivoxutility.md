---
title: "VivoxUtility"
description: "static class VivoxUtility in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxUtility

A **static class** in `Root.Township`, `Alta.Voice`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Attributes** `Extension`
- **Documented in** [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positionalvoicesettings" /><code>{"static readonly Channel3DProperties PositionalVoiceSettings"}</code> |  |
| <Link id="m-config" /><code>{"private static "}<Link to="/game-api/types/alta-networking/vivoxconfiguration">{"VivoxConfiguration"}</Link>{" config"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-config-2" /><code>{"static "}<Link to="/game-api/types/alta-networking/vivoxconfiguration">{"VivoxConfiguration"}</Link>{" Config { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getservername" /><code>{"static string GetServerName(int serverId)"}</code> |  |
| <Link id="m-getusername" /><code>{"static string GetUsername(int userId)"}</code> |  |
| <Link id="m-makeasync" /><code>{"static async Task<bool> MakeAsync(Func<AsyncCallback, IAsyncResult> begin, Action<IAsyncResult> end)"}</code> |  |
| <Link id="m-makeasync-2" /><code>{"static async Task<bool> MakeAsync<T1>(Func<T1, AsyncCallback, IAsyncResult> begin, T1 arg1, Action<IAsyncResult> end)"}</code> |  |
| <Link id="m-makeasync-3" /><code>{"static async Task<bool> MakeAsync<T1, T2>(Func<T1, T2, AsyncCallback, IAsyncResult> begin, T1 arg1, T2 arg2, Action<IAsyncResult> end)"}</code> |  |
| <Link id="m-end" /><code>{"private static void End(Action<IAsyncResult> end, IAsyncResult result, TaskCompletionSource<bool> taskSource)"}</code> |  |
