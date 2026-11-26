---
title: "PlatformActionMapping"
description: "The input-to-action mappings for one platform within a controller action mode: which buttons trigger which ControllerActionType on each hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformActionMapping

A **class** in `Root.Township`, the global namespace.

The input-to-action mappings for one platform within a controller action mode: which buttons trigger which `ControllerActionType` on each hand.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformActionMapping()"}</code> | <span className="api-desc">Creates a `PlatformActionMapping` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputtoactionmappings" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/inputtoactionmapping">{"InputToActionMapping"}</Link>{"> inputToActionMappings"}</code> | <span className="api-desc">Backing list for `AllInputToActionMappings`, set in the inspector.</span> |
| <Link id="m-leftactiontoinputmappings" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> leftActionToInputMappings"}</code> | <span className="api-desc">Backing field for `LeftActionToInputMappings`.</span> |
| <Link id="m-platform" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform"}</code> | <span className="api-desc">Backing field for `Platform`, the player mode these mappings are for.</span> |
| <Link id="m-rightactiontoinputmappings" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> rightActionToInputMappings"}</code> | <span className="api-desc">Backing field for `RightActionToInputMappings`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allinputtoactionmappings" /><code>{"List<"}<Link to="/mod/game-api/types/global-i-l/inputtoactionmapping">{"InputToActionMapping"}</Link>{"> AllInputToActionMappings { get; }"}</code> | <span className="api-desc">Every input to action mapping in this set.</span> |
| <Link id="m-allplatformsmapping" /><code><Link to="/mod/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" AllPlatformsMapping { get; set; }"}</code> | <span className="api-desc">A shared mapping whose buttons are added to this one's results.</span> |
| <Link id="m-mappingscount" /><code>{"int MappingsCount { get; }"}</code> | <span className="api-desc">Number of mappings.</span> |
| <Link id="m-modename" /><code>{"string ModeName { get; private set; }"}</code> | <span className="api-desc">Name of the controller mode this belongs to, set by `SetupParent`.</span> |
| <Link id="m-platform-2" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Platform { get; set; }"}</code> | <span className="api-desc">The player mode (platform) these mappings are for.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" Type { get; private set; }"}</code> | <span className="api-desc">The controller mode type this belongs to, set by `SetupParent`.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-leftactiontoinputmappings-2" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> LeftActionToInputMappings { get; }"}</code> | <span className="api-desc">Left hand lookup from action to button sets, built on first use.</span> |
| <Link id="m-rightactiontoinputmappings-2" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> RightActionToInputMappings { get; }"}</code> | <span className="api-desc">Right hand lookup from action to button sets, built on first use.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addnewemptyinputmapping" /><code>{"void AddNewEmptyInputMapping()"}</code> | <span className="api-desc">Adds a blank mapping, probably for the editor.</span> |
| <Link id="m-getbuttons" /><code>{"List<object[]> GetButtons("}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" actionType, "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex)"}</code> | <span className="api-desc">The button sets bound to an action on one hand, including those from `AllPlatformsMapping`.</span> |
| <Link id="m-removebyidentifier" /><code>{"void RemoveByIdentifier(int id)"}</code> | <span className="api-desc">Removes the mapping with the given identifier.</span> |
| <Link id="m-setupparent" /><code>{"void SetupParent("}<Link to="/mod/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{" parent)"}</code> | <span className="api-desc">Copies the type and name from the owning controller action mode.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addmapping" /><code>{"private void AddMapping("}<Link to="/mod/game-api/types/global-i-l/inputtoactionmapping">{"InputToActionMapping"}</Link>{" mapping, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" overridePlatform = 0)"}</code> | <span className="api-desc">Adds a mapping to the list and files its buttons for the platform under the left, right or both hand lookups.</span> |
| <Link id="m-addtobuttonsarray" /><code>{"private void AddToButtonsArray(Dictionary<"}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> dictionary, "}<Link to="/mod/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" actionType, object[] newButtons)"}</code> | <span className="api-desc">Adds a button set to an action's list in a hand lookup, making the list if needed.</span> |
| <Link id="m-initializedictionaries" /><code>{"private void InitializeDictionaries()"}</code> | <span className="api-desc">Builds the left and right hand lookups from every input mapping.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlatformActionMapping`:

<div className="api-used-in">

[`ControllerAction.AddInputAndListeners`](/mod/game-api/types/global-c-d/controlleraction#m-addinputandlisteners), [`ControllerAction.RemoveInputsAndListeners`](/mod/game-api/types/global-c-d/controlleraction#m-removeinputsandlisteners), [`ControllerAction.SetInputAndListeners`](/mod/game-api/types/global-c-d/controlleraction#m-setinputandlisteners), [`ControllerActionMode.allPlatformsActionMapping`](/mod/game-api/types/global-c-d/controlleractionmode#m-allplatformsactionmapping), [`ControllerActionMode.AllPlatformsActionMapping`](/mod/game-api/types/global-c-d/controlleractionmode#m-allplatformsactionmapping-2), [`ControllerActionMode.GetMapping`](/mod/game-api/types/global-c-d/controlleractionmode#m-getmapping), [`ControllerActionMode.platformActionMappings`](/mod/game-api/types/global-c-d/controlleractionmode#m-platformactionmappings), [`ControllerActionMode.PlatformActionMappings`](/mod/game-api/types/global-c-d/controlleractionmode#m-platformactionmappings-2), [`ControllerActionMode.platformActionMappingsList`](/mod/game-api/types/global-c-d/controlleractionmode#m-platformactionmappingslist), [`ControllerActions.activeActionMappings`](/mod/game-api/types/global-c-d/controlleractions#m-activeactionmappings), [`ControllerActions.ActiveActionMappings`](/mod/game-api/types/global-c-d/controlleractions#m-activeactionmappings-2), [`ControllerActions.AddActionMapping`](/mod/game-api/types/global-c-d/controlleractions#m-addactionmapping), [`ControllerActions.RemoveActionMapping`](/mod/game-api/types/global-c-d/controlleractions#m-removeactionmapping), [`ControllerActions.SetActionMapping`](/mod/game-api/types/global-c-d/controlleractions#m-setactionmapping), [`InputSourcePair.parentMapping`](/mod/game-api/types/global-i-l/inputsourcepair#m-parentmapping).

</div>
