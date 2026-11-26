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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerDiagnosticsDisplay()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | <span className="api-desc">"Server Diagnostics".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | <span className="api-desc">Only valid once the server has sent a non-empty diagnostics message.</span> |
| <Link id="m-runondisable" /><code>{"override void RunOnDisable()"}</code> | <span className="api-desc">Sends a `ServerDiagnostics` request asking the server to stop sending diagnostics.</span> |
| <Link id="m-runonenable" /><code>{"override void RunOnEnable()"}</code> | <span className="api-desc">Sends a `ServerDiagnostics` request asking the server to start sending diagnostics.</span> |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | <span className="api-desc">Returns `ServerDiagnosticsMessage.ServerMessage`.</span> |
