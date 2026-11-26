---
title: "BuildingAnimationWrapper"
description: "Swaps an original object for a final object, playing a BuildingAnimation spawned from a prefab in between."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingAnimationWrapper

A **class** in `Root.Township`, no namespace.

Swaps an original object for a final object, playing a `BuildingAnimation` spawned from a prefab in between. The spawned animation is created on load and removed before the chunk is saved.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IChangeWithChunking`](/game-api/types/global-i-l/ichangewithchunking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildingAnimationWrapper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationprefab" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimation">{"BuildingAnimation"}</Link>{" animationPrefab"}</code> | `BuildingAnimation` prefab to spawn. |
| <Link id="m-finalobject" /><code>{"private GameObject finalObject"}</code> | Object shown once the animation finishes. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-originalobject" /><code>{"private GameObject originalObject"}</code> | Object shown before the animation finishes. |
| <Link id="m-spawned" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimation">{"BuildingAnimation"}</Link>{" spawned"}</code> | The spawned animation instance. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-preinsertanimation" /><code>{"Func<"}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{", float, bool, IEnumerator, IEnumerator> PreInsertAnimation { get; set; }"}</code> | Passes through to the spawned animation's `PreInsertAnimation`, spawning it first. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play" /><code>{"void Play()"}</code> | Spawns the animation if needed and plays it, switching to the final object when it finishes. |
| <Link id="m-setfinal" /><code>{"void SetFinal(bool isFinal)"}</code> | Shows the final object and hides the original, or the reverse. |
| <Link id="m-setisskippinganimation" /><code>{"void SetIsSkippingAnimation(bool isSkipping)"}</code> | Spawns the animation if needed and sets whether it skips to the end. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Stops the spawned animation. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts with the original object shown and the final one hidden. |
| <Link id="m-beforesaving" /><code>{"private void IChangeWithChunking.BeforeSaving()"}</code> | Destroys the spawned animation object so it isn't saved with the chunk. |
| <Link id="m-ensurenoocluderchildren" /><code>{"private void EnsureNoOcluderChildren(Transform checking)"}</code> | Editor validation hook on the final object. Empty in this build. |
| <Link id="m-loaded" /><code>{"private void IChangeWithChunking.Loaded()"}</code> | Spawns the animation when the chunk loads, if a prefab is set. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Runs `EnsureNoOcluderChildren` on the final object. |
| <Link id="m-playinstant" /><code>{"private void PlayInstant()"}</code> | Switches to the final object. Called when the animation finishes. |
| <Link id="m-spawnifneeded" /><code>{"private void SpawnIfNeeded()"}</code> | Instantiates the animation prefab under this object if it isn't there yet. |

</details>

## Used in

Members of other types that take, return or hold a `BuildingAnimationWrapper`:

[`RepairBox.buildingAnimationWrapper`](/game-api/types/global-q-r/repairbox#m-buildinganimationwrapper), [`RepairBox.BuildingAnimationWrapper`](/game-api/types/global-q-r/repairbox#m-buildinganimationwrapper-2).
