---
title: "ServerFpsDisplay"
description: "Client live data display showing the server frame rate reported in ServerDiagnosticsMessage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerFpsDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Client live data display showing the server frame rate reported in `ServerDiagnosticsMessage`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerFpsDisplay()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | <span className="api-desc">"Server FPS".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | <span className="api-desc">Returns `ServerDiagnosticsMessage.ServerFPS` as text.</span> |
