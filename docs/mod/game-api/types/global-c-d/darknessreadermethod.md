---
title: "DarknessReaderMethod"
description: "Base for a way of measuring how dark it is around the local player, which can ask for darkness creatures to spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessReaderMethod

An **abstract class** in `Root.Township`, the global namespace.

Base for a way of measuring how dark it is around the local player, which can ask for darkness creatures to spawn. Only runs for the local player on a client.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Derived types** [`ComputeShaderDarknessReader`](/mod/game-api/types/global-c-d/computeshaderdarknessreader), [`PlatformLightDarknessReader`](/mod/game-api/types/global-p/platformlightdarknessreader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessReaderMethod("}<Link to="/mod/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character, Action requestSpawn)"}</code> | <span className="api-desc">Creates a `DarknessReaderMethod` from `reader`, `character` and `requestSpawn`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"protected readonly "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character"}</code> | <span className="api-desc">The player being measured around.</span> |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">Shared logger.</span> |
| <Link id="m-reader" /><code>{"protected readonly "}<Link to="/mod/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader"}</code> | <span className="api-desc">The darkness reader that owns this method.</span> |
| <Link id="m-requestspawn" /><code>{"protected readonly Action requestSpawn"}</code> | <span className="api-desc">Call to ask for a darkness spawn.</span> |
| <Link id="m-settings" /><code>{"protected readonly "}<Link to="/mod/game-api/types/global-c-d/darknessspawnersettings">{"DarknessSpawnerSettings"}</Link>{" settings"}</code> | <span className="api-desc">`DarknessSpawnerSettings.Instance`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | <span className="api-desc">Whether the method is running.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Stops the method if it's running.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Starts the method. Logs a warning and does nothing on a headless server or for a remote player.</span> |
| <Link id="m-disableinternal" /><code>{"protected abstract void DisableInternal()"}</code> | <span className="api-desc">Subclasses stop measuring here.</span> |
| <Link id="m-enableinternal" /><code>{"protected abstract void EnableInternal()"}</code> | <span className="api-desc">Subclasses start measuring here.</span> |

## Used in

Members of other types that take, return or hold a `DarknessReaderMethod`:

<div className="api-used-in">

[`DarknessReader.readingMethod`](/mod/game-api/types/global-c-d/darknessreader#m-readingmethod).

</div>
