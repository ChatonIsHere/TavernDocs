---
title: "VivoxUtility"
description: "Static helpers for Vivox voice chat: the account configuration, user and channel naming, and a wrapper that turns Vivox begin and end calls into tasks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxUtility

A **static class** in `Root.Township`, `Alta.Voice`.

Static helpers for Vivox voice chat: the account configuration, user and channel naming, and a wrapper that turns Vivox begin and end calls into tasks.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Attributes** `Extension`
- **Documented in** [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positionalvoicesettings" /><code>{"static readonly Channel3DProperties PositionalVoiceSettings"}</code> | 3D channel settings: audible up to 50, conversational distance 1, linear fade by distance. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-config" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/vivoxconfiguration">{"VivoxConfiguration"}</Link>{" config"}</code> | Backing field for `Config`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-config-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/vivoxconfiguration">{"VivoxConfiguration"}</Link>{" Config { get; }"}</code> | The Vivox configuration. Uses the `alta-att-dev` sandbox when started with `/vivox_sandbox`, otherwise the live `alta-att` account. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getservername" /><code>{"static string GetServerName(int serverId)"}</code> | The Vivox channel name for a server: its id as a string. |
| <Link id="m-getusername" /><code>{"static string GetUsername(int userId)"}</code> | The Vivox account name for a user: their id as a string. |
| <Link id="m-makeasync" /><code>{"static async Task<bool> MakeAsync(Func<AsyncCallback, IAsyncResult> begin, Action<IAsyncResult> end)"}</code> | Extension that runs a Vivox begin and end pair and returns a task that is true when the end call succeeded. |
| <Link id="m-makeasync-2" /><code>{"static async Task<bool> MakeAsync<T1>(Func<T1, AsyncCallback, IAsyncResult> begin, T1 arg1, Action<IAsyncResult> end)"}</code> | Extension that runs a Vivox begin and end pair and returns a task that is true when the end call succeeded. |
| <Link id="m-makeasync-3" /><code>{"static async Task<bool> MakeAsync<T1, T2>(Func<T1, T2, AsyncCallback, IAsyncResult> begin, T1 arg1, T2 arg2, Action<IAsyncResult> end)"}</code> | Extension that runs a Vivox begin and end pair and returns a task that is true when the end call succeeded. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private static void End(Action<IAsyncResult> end, IAsyncResult result, TaskCompletionSource<bool> taskSource)"}</code> | Runs the end call and completes the task with true, or false if it threw. |

</details>
