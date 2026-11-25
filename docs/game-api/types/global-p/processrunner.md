---
title: "ProcessRunner"
description: "class ProcessRunner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProcessRunner

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProcessRunner(string processPrefix)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-handleprocesscompletion" /><code>{"private TaskCompletionSource<bool> handleProcessCompletion"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |  |
| <Link id="m-process" /><code>{"private Process process"}</code> |  |
| <Link id="m-processprefix" /><code>{"private readonly string processPrefix"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-startprocess" /><code>{"async Task StartProcess(string file, string arguments)"}</code> |  |
| <Link id="m-completedwithouterror" /><code>{"private bool CompletedWithoutError()"}</code> |  |
| <Link id="m-finalize" /><code>{"protected override void Finalize()"}</code> |  |
| <Link id="m-logoutput" /><code>{"private void LogOutput(object sender, DataReceivedEventArgs e)"}</code> |  |
| <Link id="m-onexit" /><code>{"private void OnExit(object sender, EventArgs e)"}</code> |  |
| <Link id="m-releaseunmanagedresources" /><code>{"private void ReleaseUnmanagedResources()"}</code> |  |
