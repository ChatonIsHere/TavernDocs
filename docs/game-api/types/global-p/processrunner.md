---
title: "ProcessRunner"
description: "Runs an external program hidden, logs its output with a prefix, and lets the caller await its exit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessRunner

A **class** in `Root.Township`, no namespace.

Runs an external program hidden, logs its output with a prefix, and lets the caller await its exit.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProcessRunner(string processPrefix)"}</code> | Creates a `ProcessRunner` from `processPrefix`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleprocesscompletion" /><code>{"private TaskCompletionSource<bool> handleProcessCompletion"}</code> | Completes when the program exits. |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | NLog logger for the program's output. |
| <Link id="m-process" /><code>{"private Process process"}</code> | The running program. |
| <Link id="m-processprefix" /><code>{"private readonly string processPrefix"}</code> | Text put in front of every logged line. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes the process. |
| <Link id="m-startprocess" /><code>{"async Task StartProcess(string file, string arguments)"}</code> | Starts the program with arguments and waits until it exits. |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | Disposes the process if `Dispose` wasn't called. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completedwithouterror" /><code>{"private bool CompletedWithoutError()"}</code> | True if the exit code was 0. |
| <Link id="m-logoutput" /><code>{"private void LogOutput(object sender, DataReceivedEventArgs e)"}</code> | Logs each output line, as an error if it starts with `error` or `unable`, else as debug. |
| <Link id="m-onexit" /><code>{"private void OnExit(object sender, EventArgs e)"}</code> | Completes the await, unhooks output and throws if the exit code wasn't 0. The throw is on the exit event, not to the awaiter. |
| <Link id="m-releaseunmanagedresources" /><code>{"private void ReleaseUnmanagedResources()"}</code> | Disposes the process if there is one. |

</details>
