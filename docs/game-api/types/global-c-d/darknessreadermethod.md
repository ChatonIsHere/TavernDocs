---
title: "DarknessReaderMethod"
description: "abstract class DarknessReaderMethod in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DarknessReaderMethod

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Derived types** [`ComputeShaderDarknessReader`](/game-api/types/global-c-d/computeshaderdarknessreader), [`PlatformLightDarknessReader`](/game-api/types/global-p/platformlightdarknessreader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DarknessReaderMethod("}<Link to="/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character, Action requestSpawn)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code>{"protected readonly "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" character"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-reader" /><code>{"protected readonly "}<Link to="/game-api/types/global-c-d/darknessreader">{"DarknessReader"}</Link>{" reader"}</code> |  |
| <Link id="m-requestspawn" /><code>{"protected readonly Action requestSpawn"}</code> |  |
| <Link id="m-settings" /><code>{"protected readonly "}<Link to="/game-api/types/global-c-d/darknessspawnersettings">{"DarknessSpawnerSettings"}</Link>{" settings"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> |  |
| <Link id="m-enable" /><code>{"void Enable()"}</code> |  |
| <Link id="m-disableinternal" /><code>{"protected abstract void DisableInternal()"}</code> |  |
| <Link id="m-enableinternal" /><code>{"protected abstract void EnableInternal()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DarknessReaderMethod`:

[`DarknessReader.readingMethod`](/game-api/types/global-c-d/darknessreader#m-readingmethod).
