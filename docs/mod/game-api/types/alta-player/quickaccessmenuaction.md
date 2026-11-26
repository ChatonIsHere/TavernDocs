---
title: "QuickAccessMenuAction"
description: "A ScriptableObject for one option in the wrist quick access menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessMenuAction

An **abstract class** in `Root.Township`, `Alta.QuickAccessActions`.

A ScriptableObject for one option in the wrist quick access menu. The menu controller sets it up per player and a bubble shows it, runs it and tracks its state. Client side.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`LandmarkDebugger`](/mod/game-api/types/alta-world/landmarkdebugger), [`SceneWidgetsAction`](/mod/game-api/types/alta-world/scenewidgetsaction), [`BoneWeightTestsMenuAction`](/mod/game-api/types/alta-player/boneweighttestsmenuaction), [`DebugLightMenuAction`](/mod/game-api/types/alta-player/debuglightmenuaction), [`DecreaseHeightMenuAction`](/mod/game-api/types/alta-player/decreaseheightmenuaction), [`EmptyMenu`](/mod/game-api/types/alta-player/emptymenu), [`EquipmentModeQuickAccess`](/mod/game-api/types/alta-player/equipmentmodequickaccess), [`MemoryDumpMenuAction`](/mod/game-api/types/alta-player/memorydumpmenuaction), [`MicMuteQuickAccessAction`](/mod/game-api/types/alta-player/micmutequickaccessaction), [`MODSMicMuteQuickAccessAction`](/mod/game-api/types/alta-player/modsmicmutequickaccessaction), [`MuteNonFriendsQuickAccessAction`](/mod/game-api/types/alta-player/mutenonfriendsquickaccessaction), [`NestingMenuAction`](/mod/game-api/types/alta-player/nestingmenuaction), [`PhysicsFPSMenuAction`](/mod/game-api/types/alta-player/physicsfpsmenuaction), [`ReturnToMainMenuAction`](/mod/game-api/types/alta-player/returntomainmenuaction), [`SettingsQuickAccessMenu`](/mod/game-api/types/alta-player/settingsquickaccessmenu), [`ShowNames`](/mod/game-api/types/alta-player/shownames), [`SummonActionItemQuickAccess`](/mod/game-api/types/alta-player/summonactionitemquickaccess), [`ToggleAccessibleDockMenuAction`](/mod/game-api/types/alta-player/toggleaccessibledockmenuaction), [`ToggleDebugMovementMenuAction`](/mod/game-api/types/alta-player/toggledebugmovementmenuaction), [`ToggleEnemyHealthBars`](/mod/game-api/types/alta-player/toggleenemyhealthbars), [`ToggleLiveDataDisplayMenuAction`](/mod/game-api/types/alta-player/togglelivedatadisplaymenuaction), [`ToggleLocalSpeedMenuAction`](/mod/game-api/types/alta-player/togglelocalspeedmenuaction), [`ToggleRuntimeConsole`](/mod/game-api/types/alta-player/toggleruntimeconsole), [`TriggerDebugSetSpawnMenuAction`](/mod/game-api/types/alta-player/triggerdebugsetspawnmenuaction), [`UpdateFarClipMenuAction`](/mod/game-api/types/alta-player/updatefarclipmenuaction), [`UpdateHeightMenuAction`](/mod/game-api/types/alta-player/updateheightmenuaction), [`VivoxConnectionQuickAccessAction`](/mod/game-api/types/alta-player/vivoxconnectionquickaccessaction), [`SummonCameraQuickAccess`](/mod/game-api/types/alta-customization/summoncameraquickaccess), [`UnityProfilerSessionQuickAccessAction`](/mod/game-api/types/global-t-x/unityprofilersessionquickaccessaction), [`VisualChunkQuickAccessMenuAction`](/mod/game-api/types/global-t-x/visualchunkquickaccessmenuaction)
- **Documented in** [Quick access menu](/mod/game-api/items/quick-access-menu#quickaccessmenuaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected QuickAccessMenuAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> | <span className="api-desc">Backing field for `DisplayName`, the label shown for the action.</span> |
| <Link id="m-isignoredon" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" isIgnoredOn"}</code> | <span className="api-desc">Platforms where the action is hidden (`IsIgnored`), except for developers.</span> |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">Icon prefab made by `GetPrefab`. A dynamic icon component on it is given this action.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname-2" /><code>{"string DisplayName { get; }"}</code> | <span className="api-desc">Title shown when the bubble is selected. Falls back to the asset name if empty.</span> |
| <Link id="m-haseffectonrun" /><code>{"virtual bool HasEffectOnRun { get; }"}</code> | <span className="api-desc">Whether running the action counts as having done something (returned by the bubble's `Run`). True by default.</span> |
| <Link id="m-ignoredefaultsfx" /><code>{"virtual bool IgnoreDefaultSfx { get; }"}</code> | <span className="api-desc">When true, the bubble skips the default selection sound.</span> |
| <Link id="m-isactive" /><code>{"abstract bool IsActive { get; }"}</code> | <span className="api-desc">Whether the action's toggle is on. Dynamic icons show this state.</span> |
| <Link id="m-isignored" /><code>{"virtual bool IsIgnored { get; }"}</code> | <span className="api-desc">True on platforms in the asset's ignore list, unless the player has dev tools. Ignored actions are not shown.</span> |
| <Link id="m-isvalid" /><code>{"abstract bool IsValid { get; }"}</code> | <span className="api-desc">Whether the action can be used right now. Invalid bubbles show greyed out and do nothing.</span> |
| <Link id="m-overrideselectedscale" /><code>{"virtual float OverrideSelectedScale { get; }"}</code> | <span className="api-desc">Bubble scale when selected, or -1 to use the default.</span> |
| <Link id="m-isdev" /><code>{"protected bool IsDev { get; private set; }"}</code> | <span className="api-desc">Protected: whether the player has dev tools, set in `InitializeForPlayer`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedactive" /><code>{"event Action<bool> UpdatedActive"}</code> | <span className="api-desc">Raised by `UpdateActive`; dynamic icons listen to it.</span> |
| <Link id="m-updatedvalid" /><code>{"event Action<bool> UpdatedValid"}</code> | <span className="api-desc">Raised by `UpdateValid`; the bubble listens to it to grey itself out.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"virtual void Close()"}</code> | <span className="api-desc">Virtual hook called when the bubble showing this action is released.</span> |
| <Link id="m-getprefab" /><code>{"GameObject GetPrefab(Transform parent)"}</code> | <span className="api-desc">Spawns the action's icon prefab under a parent and links a dynamic icon to the action if it has one.</span> |
| <Link id="m-initializeforplayer" /><code>{"virtual void InitializeForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isDev)"}</code> | <span className="api-desc">Called by the menu controller for the player, with whether dev tools are on.</span> |
| <Link id="m-markselected" /><code>{"virtual void MarkSelected("}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> | <span className="api-desc">Virtual hook called when the bubble is selected while valid.</span> |
| <Link id="m-open" /><code>{"virtual void Open()"}</code> | <span className="api-desc">Virtual hook called when a bubble starts showing this action.</span> |
| <Link id="m-run" /><code>{"virtual void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Virtual: does the action. The bubble calls it only when `IsValid`.</span> |
| <Link id="m-updateactive" /><code>{"protected void UpdateActive()"}</code> | <span className="api-desc">Protected: raises `UpdatedActive` with the current `IsActive`.</span> |
| <Link id="m-updatevalid" /><code>{"protected void UpdateValid()"}</code> | <span className="api-desc">Protected: raises `UpdatedValid` with the current `IsValid`.</span> |

## Used in

Members of other types that take, return or hold a `QuickAccessMenuAction`:

<div className="api-used-in">

[`QamOptionAsButtonCommand.action`](/mod/game-api/types/alta-menus/qamoptionasbuttoncommand#m-action), [`IQuickAccessDynamicIcon.SetupAction`](/mod/game-api/types/alta-player/iquickaccessdynamicicon#m-setupaction), [`MuteNonFriendsActionIcon.SetupAction`](/mod/game-api/types/alta-player/mutenonfriendsactionicon#m-setupaction), [`NestingMenuAction.nestedActions`](/mod/game-api/types/alta-player/nestingmenuaction#m-nestedactions), [`QuickAccessDynamicIcon.action`](/mod/game-api/types/alta-player/quickaccessdynamicicon#m-action), [`QuickAccessDynamicIcon.SetupAction`](/mod/game-api/types/alta-player/quickaccessdynamicicon#m-setupaction), [`QuickAccessMenuBubble.content`](/mod/game-api/types/alta-player/quickaccessmenububble#m-content), [`QuickAccessMenuBubble.UpdateContent`](/mod/game-api/types/alta-player/quickaccessmenububble#m-updatecontent), [`QuickAccessMenuController.devQuickAccessMenus`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-devquickaccessmenus), [`QuickAccessMenuController.quickAccessMenus`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-quickaccessmenus), [`QuickAccessMenuController.SpawnBubbles`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-spawnbubbles), [`FlyCamLocomotionController.micMuteAction`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-micmuteaction), [`FlyCamLocomotionController.modsMicMuteAction`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-modsmicmuteaction), [`FlyCamLocomotionController.showNamesAction`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-shownamesaction).

</div>
