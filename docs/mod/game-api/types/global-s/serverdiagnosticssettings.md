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
| <Link id="m-ctor" /><code>{"ServerDiagnosticsSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-diagnosticssendinterval" /><code>{"private float diagnosticsSendInterval"}</code> | Backing field for `DiagnosticsSendInterval`. Default 5. |
| <Link id="m-fpssendinterval" /><code>{"private float fpsSendInterval"}</code> | Backing field for `FpsSendInterval`. Default 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-diagnosticssendinterval-2" /><code>{"float DiagnosticsSendInterval { get; }"}</code> | Seconds between profiling data reports. |
| <Link id="m-fpssendinterval-2" /><code>{"float FpsSendInterval { get; }"}</code> | Seconds between server FPS messages to players. |
