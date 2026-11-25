---
title: "QuickAccessMenuAction"
description: "Alta.QuickAccessActions.QuickAccessMenuAction, an abstract ScriptableObject. Each bubble is one of these assets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessMenuAction

An **abstract class** in `Root.Township`, `Alta.QuickAccessActions`.

`Alta.QuickAccessActions.QuickAccessMenuAction`, an abstract `ScriptableObject`. Each bubble is one of these assets.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`LandmarkDebugger`](/game-api/types/alta-world/landmarkdebugger), [`SceneWidgetsAction`](/game-api/types/alta-world/scenewidgetsaction), [`BoneWeightTestsMenuAction`](/game-api/types/alta-player/boneweighttestsmenuaction), [`DebugLightMenuAction`](/game-api/types/alta-player/debuglightmenuaction), [`DecreaseHeightMenuAction`](/game-api/types/alta-player/decreaseheightmenuaction), [`EmptyMenu`](/game-api/types/alta-player/emptymenu), [`EquipmentModeQuickAccess`](/game-api/types/alta-player/equipmentmodequickaccess), [`MemoryDumpMenuAction`](/game-api/types/alta-player/memorydumpmenuaction), [`MicMuteQuickAccessAction`](/game-api/types/alta-player/micmutequickaccessaction), [`MODSMicMuteQuickAccessAction`](/game-api/types/alta-player/modsmicmutequickaccessaction), [`MuteNonFriendsQuickAccessAction`](/game-api/types/alta-player/mutenonfriendsquickaccessaction), [`NestingMenuAction`](/game-api/types/alta-player/nestingmenuaction), [`PhysicsFPSMenuAction`](/game-api/types/alta-player/physicsfpsmenuaction), [`ReturnToMainMenuAction`](/game-api/types/alta-player/returntomainmenuaction), [`SettingsQuickAccessMenu`](/game-api/types/alta-player/settingsquickaccessmenu), [`ShowNames`](/game-api/types/alta-player/shownames), [`SummonActionItemQuickAccess`](/game-api/types/alta-player/summonactionitemquickaccess), [`ToggleAccessibleDockMenuAction`](/game-api/types/alta-player/toggleaccessibledockmenuaction), [`ToggleDebugMovementMenuAction`](/game-api/types/alta-player/toggledebugmovementmenuaction), [`ToggleEnemyHealthBars`](/game-api/types/alta-player/toggleenemyhealthbars), [`ToggleLiveDataDisplayMenuAction`](/game-api/types/alta-player/togglelivedatadisplaymenuaction), [`ToggleLocalSpeedMenuAction`](/game-api/types/alta-player/togglelocalspeedmenuaction), [`ToggleRuntimeConsole`](/game-api/types/alta-player/toggleruntimeconsole), [`TriggerDebugSetSpawnMenuAction`](/game-api/types/alta-player/triggerdebugsetspawnmenuaction), [`UpdateFarClipMenuAction`](/game-api/types/alta-player/updatefarclipmenuaction), [`UpdateHeightMenuAction`](/game-api/types/alta-player/updateheightmenuaction), [`VivoxConnectionQuickAccessAction`](/game-api/types/alta-player/vivoxconnectionquickaccessaction), [`SummonCameraQuickAccess`](/game-api/types/alta-customization/summoncameraquickaccess), [`UnityProfilerSessionQuickAccessAction`](/game-api/types/global-t-x/unityprofilersessionquickaccessaction), [`VisualChunkQuickAccessMenuAction`](/game-api/types/global-t-x/visualchunkquickaccessmenuaction)
- **Documented in** [Quick access menu](/game-api/items/quick-access-menu#quickaccessmenuaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected QuickAccessMenuAction()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"private string displayName"}</code> |  |
| <Link id="m-isignoredon" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" isIgnoredOn"}</code> |  |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname-2" /><code>{"string DisplayName { get; }"}</code> |  |
| <Link id="m-haseffectonrun" /><code>{"virtual bool HasEffectOnRun { get; }"}</code> |  |
| <Link id="m-ignoredefaultsfx" /><code>{"virtual bool IgnoreDefaultSfx { get; }"}</code> |  |
| <Link id="m-isactive" /><code>{"abstract bool IsActive { get; }"}</code> |  |
| <Link id="m-isignored" /><code>{"virtual bool IsIgnored { get; }"}</code> |  |
| <Link id="m-isvalid" /><code>{"abstract bool IsValid { get; }"}</code> |  |
| <Link id="m-overrideselectedscale" /><code>{"virtual float OverrideSelectedScale { get; }"}</code> |  |
| <Link id="m-isdev" /><code>{"protected bool IsDev { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedactive" /><code>{"event Action<bool> UpdatedActive"}</code> |  |
| <Link id="m-updatedvalid" /><code>{"event Action<bool> UpdatedValid"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"virtual void Close()"}</code> |  |
| <Link id="m-getprefab" /><code>{"GameObject GetPrefab(Transform parent)"}</code> |  |
| <Link id="m-initializeforplayer" /><code>{"virtual void InitializeForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isDev)"}</code> |  |
| <Link id="m-markselected" /><code>{"virtual void MarkSelected("}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> |  |
| <Link id="m-open" /><code>{"virtual void Open()"}</code> |  |
| <Link id="m-run" /><code>{"virtual void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |  |
| <Link id="m-updateactive" /><code>{"protected void UpdateActive()"}</code> |  |
| <Link id="m-updatevalid" /><code>{"protected void UpdateValid()"}</code> |  |

## Used in

Members of other types that take, return or hold a `QuickAccessMenuAction`:

[`QamOptionAsButtonCommand.action`](/game-api/types/alta-menus/qamoptionasbuttoncommand#m-action), [`IQuickAccessDynamicIcon.SetupAction`](/game-api/types/alta-player/iquickaccessdynamicicon#m-setupaction), [`MuteNonFriendsActionIcon.SetupAction`](/game-api/types/alta-player/mutenonfriendsactionicon#m-setupaction), [`NestingMenuAction.nestedActions`](/game-api/types/alta-player/nestingmenuaction#m-nestedactions), [`QuickAccessDynamicIcon.action`](/game-api/types/alta-player/quickaccessdynamicicon#m-action), [`QuickAccessDynamicIcon.SetupAction`](/game-api/types/alta-player/quickaccessdynamicicon#m-setupaction), [`QuickAccessMenuBubble.content`](/game-api/types/alta-player/quickaccessmenububble#m-content), [`QuickAccessMenuBubble.UpdateContent`](/game-api/types/alta-player/quickaccessmenububble#m-updatecontent), [`QuickAccessMenuController.devQuickAccessMenus`](/game-api/types/alta-player/quickaccessmenucontroller#m-devquickaccessmenus), [`QuickAccessMenuController.quickAccessMenus`](/game-api/types/alta-player/quickaccessmenucontroller#m-quickaccessmenus), [`QuickAccessMenuController.SpawnBubbles`](/game-api/types/alta-player/quickaccessmenucontroller#m-spawnbubbles), [`FlyCamLocomotionController.micMuteAction`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-micmuteaction), [`FlyCamLocomotionController.modsMicMuteAction`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-modsmicmuteaction), [`FlyCamLocomotionController.showNamesAction`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-shownamesaction).
