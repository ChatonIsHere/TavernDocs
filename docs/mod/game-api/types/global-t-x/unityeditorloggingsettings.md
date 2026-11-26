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
| <Link id="m-ctor" /><code>{"UnityEditorLoggingSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islogging" /><code>{"bool IsLogging"}</code> | Whether logs go to the Unity console in the editor. Copied to `UnityConsoleLogTarget.IsLoggingInEditor`. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxlevel" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" maxLevel"}</code> | Backing field for `MaxLevel`. |
| <Link id="m-minlevel" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" minLevel"}</code> | Backing field for `MinLevel`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxlevel-2" /><code><Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" MaxLevel { get; }"}</code> | Highest log level shown. |
| <Link id="m-minlevel-2" /><code><Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" MinLevel { get; }"}</code> | Lowest log level shown. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Applies `IsLogging` to the Unity console log target when changed in the inspector. |

</details>
