---
title: "BuildingAnimationWrapper"
description: "Swaps an original object for a final object, playing a BuildingAnimation spawned from a prefab in between."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingAnimationWrapper

A **class** in `Root.Township`, the global namespace.

Swaps an original object for a final object, playing a `BuildingAnimation` spawned from a prefab in between. The spawned animation is created on load and removed before the chunk is saved.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IChangeWithChunking`](/mod/game-api/types/global-i-l/ichangewithchunking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildingAnimationWrapper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildinganimation">{"BuildingAnimation"}</Link>{" animationPrefab"}</code> | <span className="api-desc">`BuildingAnimation` prefab to spawn.</span> |
| <Link id="m-finalobject" /><code>{"private GameObject finalObject"}</code> | <span className="api-desc">Object shown once the animation finishes.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-originalobject" /><code>{"private GameObject originalObject"}</code> | <span className="api-desc">Object shown before the animation finishes.</span> |
| <Link id="m-spawned" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buildinganimation">{"BuildingAnimation"}</Link>{" spawned"}</code> | <span className="api-desc">The spawned animation instance.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-preinsertanimation" /><code>{"Func<"}<Link to="/mod/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{", float, bool, IEnumerator, IEnumerator> PreInsertAnimation { get; set; }"}</code> | <span className="api-desc">Passes through to the spawned animation's `PreInsertAnimation`, spawning it first.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play" /><code>{"void Play()"}</code> | <span className="api-desc">Spawns the animation if needed and plays it, switching to the final object when it finishes.</span> |
| <Link id="m-setfinal" /><code>{"void SetFinal(bool isFinal)"}</code> | <span className="api-desc">Shows the final object and hides the original, or the reverse.</span> |
| <Link id="m-setisskippinganimation" /><code>{"void SetIsSkippingAnimation(bool isSkipping)"}</code> | <span className="api-desc">Spawns the animation if needed and sets whether it skips to the end.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Stops the spawned animation.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts with the original object shown and the final one hidden.</span> |
| <Link id="m-beforesaving" /><code>{"private void IChangeWithChunking.BeforeSaving()"}</code> | <span className="api-desc">Destroys the spawned animation object so it isn't saved with the chunk.</span> |
| <Link id="m-ensurenoocluderchildren" /><code>{"private void EnsureNoOcluderChildren(Transform checking)"}</code> | <span className="api-desc">Editor validation hook on the final object. Empty in this build.</span> |
| <Link id="m-loaded" /><code>{"private void IChangeWithChunking.Loaded()"}</code> | <span className="api-desc">Spawns the animation when the chunk loads, if a prefab is set.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Runs `EnsureNoOcluderChildren` on the final object.</span> |
| <Link id="m-playinstant" /><code>{"private void PlayInstant()"}</code> | <span className="api-desc">Switches to the final object. Called when the animation finishes.</span> |
| <Link id="m-spawnifneeded" /><code>{"private void SpawnIfNeeded()"}</code> | <span className="api-desc">Instantiates the animation prefab under this object if it isn't there yet.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BuildingAnimationWrapper`:

<div className="api-used-in">

[`RepairBox.buildingAnimationWrapper`](/mod/game-api/types/global-q-r/repairbox#m-buildinganimationwrapper), [`RepairBox.BuildingAnimationWrapper`](/mod/game-api/types/global-q-r/repairbox#m-buildinganimationwrapper-2).

</div>
