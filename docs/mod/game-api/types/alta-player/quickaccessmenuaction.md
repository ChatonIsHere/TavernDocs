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
| <Link id="m-ctor" /><code>{"protected QuickAccessMenuAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> | Backing field for `DisplayName`, the label shown for the action. |
| <Link id="m-isignoredon" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" isIgnoredOn"}</code> | Platforms where the action is hidden (`IsIgnored`), except for developers. |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | Icon prefab made by `GetPrefab`. A dynamic icon component on it is given this action. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname-2" /><code>{"string DisplayName { get; }"}</code> | Title shown when the bubble is selected. Falls back to the asset name if empty. |
| <Link id="m-haseffectonrun" /><code>{"virtual bool HasEffectOnRun { get; }"}</code> | Whether running the action counts as having done something (returned by the bubble's `Run`). True by default. |
| <Link id="m-ignoredefaultsfx" /><code>{"virtual bool IgnoreDefaultSfx { get; }"}</code> | When true, the bubble skips the default selection sound. |
| <Link id="m-isactive" /><code>{"abstract bool IsActive { get; }"}</code> | Whether the action's toggle is on. Dynamic icons show this state. |
| <Link id="m-isignored" /><code>{"virtual bool IsIgnored { get; }"}</code> | True on platforms in the asset's ignore list, unless the player has dev tools. Ignored actions are not shown. |
| <Link id="m-isvalid" /><code>{"abstract bool IsValid { get; }"}</code> | Whether the action can be used right now. Invalid bubbles show greyed out and do nothing. |
| <Link id="m-overrideselectedscale" /><code>{"virtual float OverrideSelectedScale { get; }"}</code> | Bubble scale when selected, or -1 to use the default. |
| <Link id="m-isdev" /><code>{"protected bool IsDev { get; private set; }"}</code> | Protected: whether the player has dev tools, set in `InitializeForPlayer`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedactive" /><code>{"event Action<bool> UpdatedActive"}</code> | Raised by `UpdateActive`; dynamic icons listen to it. |
| <Link id="m-updatedvalid" /><code>{"event Action<bool> UpdatedValid"}</code> | Raised by `UpdateValid`; the bubble listens to it to grey itself out. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"virtual void Close()"}</code> | Virtual hook called when the bubble showing this action is released. |
| <Link id="m-getprefab" /><code>{"GameObject GetPrefab(Transform parent)"}</code> | Spawns the action's icon prefab under a parent and links a dynamic icon to the action if it has one. |
| <Link id="m-initializeforplayer" /><code>{"virtual void InitializeForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isDev)"}</code> | Called by the menu controller for the player, with whether dev tools are on. |
| <Link id="m-markselected" /><code>{"virtual void MarkSelected("}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> | Virtual hook called when the bubble is selected while valid. |
| <Link id="m-open" /><code>{"virtual void Open()"}</code> | Virtual hook called when a bubble starts showing this action. |
| <Link id="m-run" /><code>{"virtual void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Virtual: does the action. The bubble calls it only when `IsValid`. |
| <Link id="m-updateactive" /><code>{"protected void UpdateActive()"}</code> | Protected: raises `UpdatedActive` with the current `IsActive`. |
| <Link id="m-updatevalid" /><code>{"protected void UpdateValid()"}</code> | Protected: raises `UpdatedValid` with the current `IsValid`. |

## Used in

Members of other types that take, return or hold a `QuickAccessMenuAction`:

[`QamOptionAsButtonCommand.action`](/mod/game-api/types/alta-menus/qamoptionasbuttoncommand#m-action), [`IQuickAccessDynamicIcon.SetupAction`](/mod/game-api/types/alta-player/iquickaccessdynamicicon#m-setupaction), [`MuteNonFriendsActionIcon.SetupAction`](/mod/game-api/types/alta-player/mutenonfriendsactionicon#m-setupaction), [`NestingMenuAction.nestedActions`](/mod/game-api/types/alta-player/nestingmenuaction#m-nestedactions), [`QuickAccessDynamicIcon.action`](/mod/game-api/types/alta-player/quickaccessdynamicicon#m-action), [`QuickAccessDynamicIcon.SetupAction`](/mod/game-api/types/alta-player/quickaccessdynamicicon#m-setupaction), [`QuickAccessMenuBubble.content`](/mod/game-api/types/alta-player/quickaccessmenububble#m-content), [`QuickAccessMenuBubble.UpdateContent`](/mod/game-api/types/alta-player/quickaccessmenububble#m-updatecontent), [`QuickAccessMenuController.devQuickAccessMenus`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-devquickaccessmenus), [`QuickAccessMenuController.quickAccessMenus`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-quickaccessmenus), [`QuickAccessMenuController.SpawnBubbles`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-spawnbubbles), [`FlyCamLocomotionController.micMuteAction`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-micmuteaction), [`FlyCamLocomotionController.modsMicMuteAction`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-modsmicmuteaction), [`FlyCamLocomotionController.showNamesAction`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-shownamesaction).
