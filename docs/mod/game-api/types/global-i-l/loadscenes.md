---
title: "LoadScenes"
description: "Loads a list of scenes (by default System Managers), additively unless set otherwise, skipping any already loaded or loaded before by any LoadScenes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoadScenes

A **class** in `Root.Township`, the global namespace.

Loads a list of scenes (by default `System Managers`), additively unless set otherwise, skipping any already loaded or loaded before by any `LoadScenes`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoadScenes()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allscenes" /><code>{"private static HashSet<string> allScenes"}</code> | Static set of scene names loaded or requested so far. |
| <Link id="m-delay" /><code>{"private float delay"}</code> | Seconds to wait before loading. 0 or less loads at once (default -1). |
| <Link id="m-isloadasync" /><code>{"private bool isLoadAsync"}</code> | Load with `LoadSceneAsync` instead of `LoadScene`. |
| <Link id="m-isloadingonawake" /><code>{"private bool isLoadingOnAwake"}</code> | Load automatically in `Awake` (default true). |
| <Link id="m-loadscenemode" /><code>{"private LoadSceneMode loadSceneMode"}</code> | Unity load mode (default additive). |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger, logs each scene loaded. |
| <Link id="m-scenestoload" /><code>{"private string[] scenesToLoad"}</code> | Names of the scenes to load. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load()"}</code> | Loads the scenes now, or after `delay` seconds if it is above 0. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Loads the scenes if `isLoadingOnAwake` is set. |
| <Link id="m-initializescenes" /><code>{"private void InitializeScenes()"}</code> | On first use, fills the shared set with the scenes already open. |
| <Link id="m-loadscenearray" /><code>{"private void LoadSceneArray(string[] scenes)"}</code> | Loads each scene not yet in the shared set, sync or async, and adds it to the set. |
| <Link id="m-scenedelay" /><code>{"private IEnumerator SceneDelay() (iterator)"}</code> | Coroutine: waits `delay` seconds, then loads the scenes. |

</details>

## Used in

Members of other types that take, return or hold a `LoadScenes`:

[`StartupLoader.sceneLoaders`](/mod/game-api/types/global-s/startuploader#m-sceneloaders).
