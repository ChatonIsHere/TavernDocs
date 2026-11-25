---
title: "DarknessReaderMethod"
description: "Base for a way of measuring how dark it is around the local player, which can ask for darkness creatures to spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessReaderMethod

An **abstract class** in `Root.Township`, no namespace.

Base for a way of measuring how dark it is around the local player, which can ask for darkness creatures to spawn. Only runs for the local player on a client.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Derived types** [`ComputeShaderDarknessReader`](/game-api/types/global-c-d/computeshaderdarknessreader), [`PlatformLightDarknessReader`](/game-api/types/global-p/platformlightdarknessreader)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DarknessReaderMethod("}<Link to="/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character, Action requestSpawn)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"protected readonly "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character"}</code> | The player being measured around. |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | Shared logger. |
| <Link id="m-reader" /><code>{"protected readonly "}<Link to="/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader"}</code> | The darkness reader that owns this method. |
| <Link id="m-requestspawn" /><code>{"protected readonly Action requestSpawn"}</code> | Call to ask for a darkness spawn. |
| <Link id="m-settings" /><code>{"protected readonly "}<Link to="/game-api/types/global-c-d/darknessspawnersettings">{"DarknessSpawnerSettings"}</Link>{" settings"}</code> | `DarknessSpawnerSettings.Instance`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | Whether the method is running. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Stops the method if it's running. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Starts the method. Logs a warning and does nothing on a headless server or for a remote player. |
| <Link id="m-disableinternal" /><code>{"protected abstract void DisableInternal()"}</code> | Subclasses stop measuring here. |
| <Link id="m-enableinternal" /><code>{"protected abstract void EnableInternal()"}</code> | Subclasses start measuring here. |

## Used in

Members of other types that take, return or hold a `DarknessReaderMethod`:

[`DarknessReader.readingMethod`](/game-api/types/global-c-d/darknessreader#m-readingmethod).
