---
title: "ControllerActionMode"
description: "One controller input mode (for example a held item's mode) with action mappings per player mode (Oculus, OpenVR, fly cam, auto cam) plus a shared..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionMode

A **class** in `Root.Township`, the global namespace.

One controller input mode (for example a held item's mode) with action mappings per player mode (Oculus, OpenVR, fly cam, auto cam) plus a shared all-platform mapping.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionMode()"}</code> | Creates a `ControllerActionMode` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allplatformsactionmapping" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" allPlatformsActionMapping"}</code> | Mapping shared by every platform; each platform mapping links back to it. |
| <Link id="m-modename" /><code>{"private string modeName"}</code> | Display name of the mode. Exposed as `ModeName`. |
| <Link id="m-platformactionmappings" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{", "}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> platformActionMappings"}</code> | Lazy lookup of mappings by player mode, behind `PlatformActionMappings`. |
| <Link id="m-platformactionmappingslist" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> platformActionMappingsList"}</code> | Serialized per-platform mappings for Oculus, OpenVR, Fly and AutoCam. |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" type"}</code> | The controller mode this is. Exposed as `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allplatformsactionmapping-2" /><code><Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" AllPlatformsActionMapping { get; }"}</code> | Mapping that applies on every player mode. |
| <Link id="m-modename-2" /><code>{"string ModeName { get; set; }"}</code> | Name of the mode. |
| <Link id="m-platformactionmappings-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{", "}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> PlatformActionMappings { get; }"}</code> | Mappings by player mode, built on first use. |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" Type { get; }"}</code> | The `ControllerModeType`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmapping" /><code><Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" GetMapping("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform)"}</code> | The mapping for a player mode, or null. |
| <Link id="m-setupplatformactionmappingslist" /><code>{"void SetupPlatformActionMappingsList()"}</code> | Links each platform mapping to this mode and to the all-platform mapping. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializedictionary" /><code>{"private void InitializeDictionary()"}</code> | Builds `platformActionMappings` from the serialized list on first access. |

</details>

## Used in

Members of other types that take, return or hold a `ControllerActionMode`:

[`ControllerModeSettings.GetMode`](/mod/game-api/types/global-c-d/controllermodesettings#m-getmode), [`ControllerModeSettings.GetModeAt`](/mod/game-api/types/global-c-d/controllermodesettings#m-getmodeat), [`ControllerModeSettings.modes`](/mod/game-api/types/global-c-d/controllermodesettings#m-modes), [`ControllerModeSettings.Modes`](/mod/game-api/types/global-c-d/controllermodesettings#m-modes-2), [`ControllerModeSettings.modesMap`](/mod/game-api/types/global-c-d/controllermodesettings#m-modesmap), [`ControllerModeSettings.ModesMap`](/mod/game-api/types/global-c-d/controllermodesettings#m-modesmap-2), [`PlatformActionMapping.SetupParent`](/mod/game-api/types/global-p/platformactionmapping#m-setupparent).
