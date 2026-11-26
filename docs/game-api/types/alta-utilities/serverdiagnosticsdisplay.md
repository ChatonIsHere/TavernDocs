---
title: "ServerDiagnosticsDisplay"
description: "Client live data display showing the diagnostics text the server sends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerDiagnosticsDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Client live data display showing the diagnostics text the server sends. It asks the server to start and stop sending when shown and hidden.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerDiagnosticsDisplay()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | "Server Diagnostics". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | Only valid once the server has sent a non-empty diagnostics message. |
| <Link id="m-runondisable" /><code>{"override void RunOnDisable()"}</code> | Sends a `ServerDiagnostics` request asking the server to stop sending diagnostics. |
| <Link id="m-runonenable" /><code>{"override void RunOnEnable()"}</code> | Sends a `ServerDiagnostics` request asking the server to start sending diagnostics. |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | Returns `ServerDiagnosticsMessage.ServerMessage`. |
