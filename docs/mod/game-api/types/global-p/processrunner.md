---
title: "ProcessRunner"
description: "Runs an external program hidden, logs its output with a prefix, and lets the caller await its exit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessRunner

A **class** in `Root.Township`, the global namespace.

Runs an external program hidden, logs its output with a prefix, and lets the caller await its exit.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProcessRunner(string processPrefix)"}</code> | <span className="api-desc">Creates a `ProcessRunner` from `processPrefix`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleprocesscompletion" /><code>{"private TaskCompletionSource<bool> handleProcessCompletion"}</code> | <span className="api-desc">Completes when the program exits.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | <span className="api-desc">NLog logger for the program's output.</span> |
| <Link id="m-process" /><code>{"private Process process"}</code> | <span className="api-desc">The running program.</span> |
| <Link id="m-processprefix" /><code>{"private readonly string processPrefix"}</code> | <span className="api-desc">Text put in front of every logged line.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes the process.</span> |
| <Link id="m-startprocess" /><code>{"async Task StartProcess(string file, string arguments)"}</code> | <span className="api-desc">Starts the program with arguments and waits until it exits.</span> |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> | <span className="api-desc">Disposes the process if `Dispose` wasn't called.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completedwithouterror" /><code>{"private bool CompletedWithoutError()"}</code> | <span className="api-desc">True if the exit code was 0.</span> |
| <Link id="m-logoutput" /><code>{"private void LogOutput(object sender, DataReceivedEventArgs e)"}</code> | <span className="api-desc">Logs each output line, as an error if it starts with `error` or `unable`, else as debug.</span> |
| <Link id="m-onexit" /><code>{"private void OnExit(object sender, EventArgs e)"}</code> | <span className="api-desc">Completes the await, unhooks output and throws if the exit code wasn't 0. The throw is on the exit event, not to the awaiter.</span> |
| <Link id="m-releaseunmanagedresources" /><code>{"private void ReleaseUnmanagedResources()"}</code> | <span className="api-desc">Disposes the process if there is one.</span> |

</details>
