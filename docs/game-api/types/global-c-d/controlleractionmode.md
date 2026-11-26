---
title: "ControllerActionMode"
description: "One controller input mode (for example a held item's mode) with action mappings per player mode (Oculus, OpenVR, fly cam, auto cam) plus a shared..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionMode

A **class** in `Root.Township`, no namespace.

One controller input mode (for example a held item's mode) with action mappings per player mode (Oculus, OpenVR, fly cam, auto cam) plus a shared all-platform mapping.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControllerActionMode()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allplatformsactionmapping" /><code>{"private "}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" allPlatformsActionMapping"}</code> | Mapping shared by every platform; each platform mapping links back to it. |
| <Link id="m-modename" /><code>{"private string modeName"}</code> | Display name of the mode. Exposed as `ModeName`. |
| <Link id="m-platformactionmappings" /><code>{"private Dictionary<"}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{", "}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> platformActionMappings"}</code> | Lazy lookup of mappings by player mode, behind `PlatformActionMappings`. |
| <Link id="m-platformactionmappingslist" /><code>{"private List<"}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> platformActionMappingsList"}</code> | Serialized per-platform mappings for Oculus, OpenVR, Fly and AutoCam. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" type"}</code> | The controller mode this is. Exposed as `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allplatformsactionmapping-2" /><code><Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" AllPlatformsActionMapping { get; }"}</code> | Mapping that applies on every player mode. |
| <Link id="m-modename-2" /><code>{"string ModeName { get; set; }"}</code> | Name of the mode. |
| <Link id="m-platformactionmappings-2" /><code>{"Dictionary<"}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{", "}<Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> PlatformActionMappings { get; }"}</code> | Mappings by player mode, built on first use. |
| <Link id="m-type-2" /><code><Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" Type { get; }"}</code> | The `ControllerModeType`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmapping" /><code><Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" GetMapping("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform)"}</code> | The mapping for a player mode, or null. |
| <Link id="m-setupplatformactionmappingslist" /><code>{"void SetupPlatformActionMappingsList()"}</code> | Links each platform mapping to this mode and to the all-platform mapping. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializedictionary" /><code>{"private void InitializeDictionary()"}</code> | Builds `platformActionMappings` from the serialized list on first access. |

</details>

## Used in

Members of other types that take, return or hold a `ControllerActionMode`:

[`ControllerModeSettings.GetMode`](/game-api/types/global-c-d/controllermodesettings#m-getmode), [`ControllerModeSettings.GetModeAt`](/game-api/types/global-c-d/controllermodesettings#m-getmodeat), [`ControllerModeSettings.modes`](/game-api/types/global-c-d/controllermodesettings#m-modes), [`ControllerModeSettings.Modes`](/game-api/types/global-c-d/controllermodesettings#m-modes-2), [`ControllerModeSettings.modesMap`](/game-api/types/global-c-d/controllermodesettings#m-modesmap), [`ControllerModeSettings.ModesMap`](/game-api/types/global-c-d/controllermodesettings#m-modesmap-2), [`PlatformActionMapping.SetupParent`](/game-api/types/global-p/platformactionmapping#m-setupparent).
