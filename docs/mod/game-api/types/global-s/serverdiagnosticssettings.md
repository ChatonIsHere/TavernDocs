---
title: "ServerDiagnosticsSettings"
description: "Global settings for ServerDiagnosticsManager's send intervals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerDiagnosticsSettings

A **class** in `Root.Township`, the global namespace.

Global settings for `ServerDiagnosticsManager`'s send intervals.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GlobalSettings<ServerDiagnosticsSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ServerDiagnosticsSettings`](/mod/game-api/types/global-s/serverdiagnosticssettings)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerDiagnosticsSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-diagnosticssendinterval" /><code>{"private float diagnosticsSendInterval"}</code> | <span className="api-desc">Backing field for `DiagnosticsSendInterval`. Default 5.</span> |
| <Link id="m-fpssendinterval" /><code>{"private float fpsSendInterval"}</code> | <span className="api-desc">Backing field for `FpsSendInterval`. Default 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-diagnosticssendinterval-2" /><code>{"float DiagnosticsSendInterval { get; }"}</code> | <span className="api-desc">Seconds between profiling data reports.</span> |
| <Link id="m-fpssendinterval-2" /><code>{"float FpsSendInterval { get; }"}</code> | <span className="api-desc">Seconds between server FPS messages to players.</span> |
