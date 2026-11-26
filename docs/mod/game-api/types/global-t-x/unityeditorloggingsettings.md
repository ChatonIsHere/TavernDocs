---
title: "UnityEditorLoggingSettings"
description: "Global settings asset for logging to the Unity editor console: on or off, and a level range."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityEditorLoggingSettings

A **class** in `Root.Township`, the global namespace.

Global settings asset for logging to the Unity editor console: on or off, and a level range.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`GlobalSettings<UnityEditorLoggingSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`UnityEditorLoggingSettings`](/mod/game-api/types/global-t-x/unityeditorloggingsettings), [`UnityEditorLoggingSettings.Create`](/mod/game-api/types/global-t-x/unityeditorloggingsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-t-x/unityeditorloggingsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnityEditorLoggingSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islogging" /><code>{"bool IsLogging"}</code> | <span className="api-desc">Whether logs go to the Unity console in the editor. Copied to `UnityConsoleLogTarget.IsLoggingInEditor`.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxlevel" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" maxLevel"}</code> | <span className="api-desc">Backing field for `MaxLevel`.</span> |
| <Link id="m-minlevel" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" minLevel"}</code> | <span className="api-desc">Backing field for `MinLevel`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxlevel-2" /><code><Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" MaxLevel { get; }"}</code> | <span className="api-desc">Highest log level shown.</span> |
| <Link id="m-minlevel-2" /><code><Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" MinLevel { get; }"}</code> | <span className="api-desc">Lowest log level shown.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Applies `IsLogging` to the Unity console log target when changed in the inspector.</span> |

</details>
