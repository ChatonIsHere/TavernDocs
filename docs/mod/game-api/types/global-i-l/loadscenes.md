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
| <Link id="m-ctor" /><code>{"LoadScenes()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allscenes" /><code>{"private static HashSet<string> allScenes"}</code> | <span className="api-desc">Static set of scene names loaded or requested so far.</span> |
| <Link id="m-delay" /><code>{"private float delay"}</code> | <span className="api-desc">Seconds to wait before loading. 0 or less loads at once (default -1).</span> |
| <Link id="m-isloadasync" /><code>{"private bool isLoadAsync"}</code> | <span className="api-desc">Load with `LoadSceneAsync` instead of `LoadScene`.</span> |
| <Link id="m-isloadingonawake" /><code>{"private bool isLoadingOnAwake"}</code> | <span className="api-desc">Load automatically in `Awake` (default true).</span> |
| <Link id="m-loadscenemode" /><code>{"private LoadSceneMode loadSceneMode"}</code> | <span className="api-desc">Unity load mode (default additive).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger, logs each scene loaded.</span> |
| <Link id="m-scenestoload" /><code>{"private string[] scenesToLoad"}</code> | <span className="api-desc">Names of the scenes to load.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"void Load()"}</code> | <span className="api-desc">Loads the scenes now, or after `delay` seconds if it is above 0.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Loads the scenes if `isLoadingOnAwake` is set.</span> |
| <Link id="m-initializescenes" /><code>{"private void InitializeScenes()"}</code> | <span className="api-desc">On first use, fills the shared set with the scenes already open.</span> |
| <Link id="m-loadscenearray" /><code>{"private void LoadSceneArray(string[] scenes)"}</code> | <span className="api-desc">Loads each scene not yet in the shared set, sync or async, and adds it to the set.</span> |
| <Link id="m-scenedelay" /><code>{"private IEnumerator SceneDelay() (iterator)"}</code> | <span className="api-desc">Coroutine: waits `delay` seconds, then loads the scenes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LoadScenes`:

<div className="api-used-in">

[`StartupLoader.sceneLoaders`](/mod/game-api/types/global-s/startuploader#m-sceneloaders).

</div>
