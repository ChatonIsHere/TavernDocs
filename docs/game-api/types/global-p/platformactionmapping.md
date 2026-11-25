---
title: "PlatformActionMapping"
description: "class PlatformActionMapping in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformActionMapping

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformActionMapping()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inputtoactionmappings" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/inputtoactionmapping">{"InputToActionMapping"}</Link>{"> inputToActionMappings"}</code> |  |
| <Link id="m-leftactiontoinputmappings" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> leftActionToInputMappings"}</code> |  |
| <Link id="m-platform" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" platform"}</code> |  |
| <Link id="m-rightactiontoinputmappings" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> rightActionToInputMappings"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allinputtoactionmappings" /><code>{"List<"}<Link to="/game-api/types/global-i-l/inputtoactionmapping">{"InputToActionMapping"}</Link>{"> AllInputToActionMappings { get; }"}</code> |  |
| <Link id="m-allplatformsmapping" /><code><Link to="/game-api/types/global-p/platformactionmapping">{"PlatformActionMapping"}</Link>{" AllPlatformsMapping { get; set; }"}</code> |  |
| <Link id="m-mappingscount" /><code>{"int MappingsCount { get; }"}</code> |  |
| <Link id="m-modename" /><code>{"string ModeName { get; private set; }"}</code> |  |
| <Link id="m-platform-2" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Platform { get; set; }"}</code> |  |
| <Link id="m-type" /><code><Link to="/game-api/types/global-c-d/controllermodetype">{"ControllerModeType"}</Link>{" Type { get; private set; }"}</code> |  |
| <Link id="m-leftactiontoinputmappings-2" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> LeftActionToInputMappings { get; }"}</code> |  |
| <Link id="m-rightactiontoinputmappings-2" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> RightActionToInputMappings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addnewemptyinputmapping" /><code>{"void AddNewEmptyInputMapping()"}</code> |  |
| <Link id="m-getbuttons" /><code>{"List<object[]> GetButtons("}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" actionType, "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex)"}</code> |  |
| <Link id="m-removebyidentifier" /><code>{"void RemoveByIdentifier(int id)"}</code> |  |
| <Link id="m-setupparent" /><code>{"void SetupParent("}<Link to="/game-api/types/global-c-d/controlleractionmode">{"ControllerActionMode"}</Link>{" parent)"}</code> |  |
| <Link id="m-addmapping" /><code>{"private void AddMapping("}<Link to="/game-api/types/global-i-l/inputtoactionmapping">{"InputToActionMapping"}</Link>{" mapping, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" overridePlatform = 0)"}</code> |  |
| <Link id="m-addtobuttonsarray" /><code>{"private void AddToButtonsArray(Dictionary<"}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{", List<object[]>> dictionary, "}<Link to="/game-api/types/global-c-d/controlleractiontype">{"ControllerActionType"}</Link>{" actionType, object[] newButtons)"}</code> |  |
| <Link id="m-initializedictionaries" /><code>{"private void InitializeDictionaries()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlatformActionMapping`:

[`ControllerAction.AddInputAndListeners`](/game-api/types/global-c-d/controlleraction#m-addinputandlisteners), [`ControllerAction.RemoveInputsAndListeners`](/game-api/types/global-c-d/controlleraction#m-removeinputsandlisteners), [`ControllerAction.SetInputAndListeners`](/game-api/types/global-c-d/controlleraction#m-setinputandlisteners), [`ControllerActionMode.allPlatformsActionMapping`](/game-api/types/global-c-d/controlleractionmode#m-allplatformsactionmapping), [`ControllerActionMode.AllPlatformsActionMapping`](/game-api/types/global-c-d/controlleractionmode#m-allplatformsactionmapping-2), [`ControllerActionMode.GetMapping`](/game-api/types/global-c-d/controlleractionmode#m-getmapping), [`ControllerActionMode.platformActionMappings`](/game-api/types/global-c-d/controlleractionmode#m-platformactionmappings), [`ControllerActionMode.PlatformActionMappings`](/game-api/types/global-c-d/controlleractionmode#m-platformactionmappings-2), [`ControllerActionMode.platformActionMappingsList`](/game-api/types/global-c-d/controlleractionmode#m-platformactionmappingslist), [`ControllerActions.activeActionMappings`](/game-api/types/global-c-d/controlleractions#m-activeactionmappings), [`ControllerActions.ActiveActionMappings`](/game-api/types/global-c-d/controlleractions#m-activeactionmappings-2), [`ControllerActions.AddActionMapping`](/game-api/types/global-c-d/controlleractions#m-addactionmapping), [`ControllerActions.RemoveActionMapping`](/game-api/types/global-c-d/controlleractions#m-removeactionmapping), [`ControllerActions.SetActionMapping`](/game-api/types/global-c-d/controlleractions#m-setactionmapping), [`InputSourcePair.parentMapping`](/game-api/types/global-i-l/inputsourcepair#m-parentmapping).
