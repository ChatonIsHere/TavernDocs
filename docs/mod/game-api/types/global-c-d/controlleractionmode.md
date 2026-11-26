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
| <Link id="m-ctor" /><code>{"ControllerActionMode()"}</code> | <span className="api-desc">Creates a `ControllerActionMode` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allplatformsactionmapping" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" allPlatformsActionMapping"}</code> | <span className="api-desc">Mapping shared by every platform; each platform mapping links back to it.</span> |
| <Link id="m-modename" /><code>{"private string modeName"}</code> | <span className="api-desc">Display name of the mode. Exposed as `ModeName`.</span> |
| <Link id="m-platformactionmappings" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{", "}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> platformActionMappings"}</code> | <span className="api-desc">Lazy lookup of mappings by player mode, behind `PlatformActionMappings`.</span> |
| <Link id="m-platformactionmappingslist" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> platformActionMappingsList"}</code> | <span className="api-desc">Serialized per-platform mappings for Oculus, OpenVR, Fly and AutoCam.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" type"}</code> | <span className="api-desc">The controller mode this is. Exposed as `Type`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allplatformsactionmapping-2" /><code><Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" AllPlatformsActionMapping { get; }"}</code> | <span className="api-desc">Mapping that applies on every player mode.</span> |
| <Link id="m-modename-2" /><code>{"string ModeName { get; set; }"}</code> | <span className="api-desc">Name of the mode.</span> |
| <Link id="m-platformactionmappings-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{", "}<Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{"> PlatformActionMappings { get; }"}</code> | <span className="api-desc">Mappings by player mode, built on first use.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The `ControllerModeType`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmapping" /><code><Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" GetMapping("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform)"}</code> | <span className="api-desc">The mapping for a player mode, or null.</span> |
| <Link id="m-setupplatformactionmappingslist" /><code>{"void SetupPlatformActionMappingsList()"}</code> | <span className="api-desc">Links each platform mapping to this mode and to the all-platform mapping.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializedictionary" /><code>{"private void InitializeDictionary()"}</code> | <span className="api-desc">Builds `platformActionMappings` from the serialized list on first access.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ControllerActionMode`:

<div className="api-used-in">

[`ControllerModeSettings.GetMode`](/mod/game-api/types/global-c-d/controllermodesettings#m-getmode), [`ControllerModeSettings.GetModeAt`](/mod/game-api/types/global-c-d/controllermodesettings#m-getmodeat), [`ControllerModeSettings.modes`](/mod/game-api/types/global-c-d/controllermodesettings#m-modes), [`ControllerModeSettings.Modes`](/mod/game-api/types/global-c-d/controllermodesettings#m-modes-2), [`ControllerModeSettings.modesMap`](/mod/game-api/types/global-c-d/controllermodesettings#m-modesmap), [`ControllerModeSettings.ModesMap`](/mod/game-api/types/global-c-d/controllermodesettings#m-modesmap-2), [`PlatformActionMapping.SetupParent`](/mod/game-api/types/global-p/platformactionmapping#m-setupparent).

</div>
