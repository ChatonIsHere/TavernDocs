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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AchievementManager`](/game-api/types/alta-player/achievementmanager), [`LandmarkManager`](/game-api/types/alta-world/landmarkmanager), [`AltaCoroutineHandler`](/game-api/types/assembly-other/altacoroutinehandler), [`NetworkingProfiler`](/game-api/types/alta-utilities/networkingprofiler), [`VivoxManager`](/game-api/types/alta-networking/vivoxmanager), [`AmbienceManager`](/game-api/types/global-a-b/ambiencemanager), [`ApplicationManager`](/game-api/types/global-a-b/applicationmanager), [`ChunkDisplayTool`](/game-api/types/game-other-namespaces/chunkdisplaytool), [`AudioManager`](/game-api/types/global-a-b/audiomanager), [`FallbackCamera`](/game-api/types/global-e-h/fallbackcamera), [`ImpactSoundManager`](/game-api/types/global-i-l/impactsoundmanager), [`LoginManager`](/game-api/types/global-i-l/loginmanager), [`MainMenuLogger`](/game-api/types/global-m-o/mainmenulogger), [`MainThreadJobHandler`](/game-api/types/global-m-o/mainthreadjobhandler), [`PlatformDriver`](/game-api/types/global-p/platformdriver), [`PopupManager`](/game-api/types/global-p/popupmanager), [`ServerConsoleManager`](/game-api/types/global-s/serverconsolemanager), [`TerrainInfo`](/game-api/types/global-t-x/terraininfo), [`TerrainModificationRegister`](/game-api/types/global-t-x/terrainmodificationregister), [`VrMainMenu`](/game-api/types/global-t-x/vrmainmenu), [`WipeManager`](/game-api/types/global-t-x/wipemanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SingletonBehaviour()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instanceset" /><code>{"static Action<T> InstanceSet"}</code> | Called with the instance when it is set. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static T Instance { get; protected set; }"}</code> | The single instance, or null before one has woken. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Registers this as `Instance`, or destroys this component if one already exists. Call the base if you override it. |
