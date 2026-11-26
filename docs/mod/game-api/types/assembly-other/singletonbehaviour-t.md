---
title: "SingletonBehaviour<T>"
description: "Base for a component that should exist once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SingletonBehaviour&lt;T&gt;

A **class** in `Alta.Singletons`, `Alta.Utilities`.

Base for a component that should exist once. The first one to wake becomes `Instance`; any later copy destroys itself.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AchievementManager`](/mod/game-api/types/alta-player/achievementmanager), [`LandmarkManager`](/mod/game-api/types/alta-world/landmarkmanager), [`AltaCoroutineHandler`](/mod/game-api/types/assembly-other/altacoroutinehandler), [`NetworkingProfiler`](/mod/game-api/types/alta-utilities/networkingprofiler), [`VivoxManager`](/mod/game-api/types/alta-networking/vivoxmanager), [`AmbienceManager`](/mod/game-api/types/global-a-b/ambiencemanager), [`ApplicationManager`](/mod/game-api/types/global-a-b/applicationmanager), [`ChunkDisplayTool`](/mod/game-api/types/game-other-namespaces/chunkdisplaytool), [`AudioManager`](/mod/game-api/types/global-a-b/audiomanager), [`FallbackCamera`](/mod/game-api/types/global-e-h/fallbackcamera), [`ImpactSoundManager`](/mod/game-api/types/global-i-l/impactsoundmanager), [`LoginManager`](/mod/game-api/types/global-i-l/loginmanager), [`MainMenuLogger`](/mod/game-api/types/global-m-o/mainmenulogger), [`MainThreadJobHandler`](/mod/game-api/types/global-m-o/mainthreadjobhandler), [`PlatformDriver`](/mod/game-api/types/global-p/platformdriver), [`PopupManager`](/mod/game-api/types/global-p/popupmanager), [`ServerConsoleManager`](/mod/game-api/types/global-s/serverconsolemanager), [`TerrainInfo`](/mod/game-api/types/global-t-x/terraininfo), [`TerrainModificationRegister`](/mod/game-api/types/global-t-x/terrainmodificationregister), [`VrMainMenu`](/mod/game-api/types/global-t-x/vrmainmenu), [`WipeManager`](/mod/game-api/types/global-t-x/wipemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SingletonBehaviour()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instanceset" /><code>{"static Action<T> InstanceSet"}</code> | <span className="api-desc">Called with the instance when it is set.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static T Instance { get; protected set; }"}</code> | <span className="api-desc">The single instance, or null before one has woken.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Registers this as `Instance`, or destroys this component if one already exists. Call the base if you override it.</span> |
