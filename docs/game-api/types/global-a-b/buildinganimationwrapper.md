---
title: "BuildingAnimationWrapper"
description: "class BuildingAnimationWrapper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingAnimationWrapper

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IChangeWithChunking`](/game-api/types/global-i-l/ichangewithchunking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BuildingAnimationWrapper()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animationprefab" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimation">{"BuildingAnimation"}</Link>{" animationPrefab"}</code> |
| <Link id="m-finalobject" /><code>{"private GameObject finalObject"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-originalobject" /><code>{"private GameObject originalObject"}</code> |
| <Link id="m-spawned" /><code>{"private "}<Link to="/game-api/types/global-a-b/buildinganimation">{"BuildingAnimation"}</Link>{" spawned"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-preinsertanimation" /><code>{"Func<"}<Link to="/game-api/types/global-a-b/animationpart">{"AnimationPart"}</Link>{", float, bool, IEnumerator, IEnumerator> PreInsertAnimation { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-play" /><code>{"void Play()"}</code> |
| <Link id="m-setfinal" /><code>{"void SetFinal(bool isFinal)"}</code> |
| <Link id="m-setisskippinganimation" /><code>{"void SetIsSkippingAnimation(bool isSkipping)"}</code> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-beforesaving" /><code>{"private void IChangeWithChunking.BeforeSaving()"}</code> |
| <Link id="m-ensurenoocluderchildren" /><code>{"private void EnsureNoOcluderChildren(Transform checking)"}</code> |
| <Link id="m-loaded" /><code>{"private void IChangeWithChunking.Loaded()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-playinstant" /><code>{"private void PlayInstant()"}</code> |
| <Link id="m-spawnifneeded" /><code>{"private void SpawnIfNeeded()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BuildingAnimationWrapper`:

[`RepairBox.buildingAnimationWrapper`](/game-api/types/global-q-r/repairbox#m-buildinganimationwrapper), [`RepairBox.BuildingAnimationWrapper`](/game-api/types/global-q-r/repairbox#m-buildinganimationwrapper-2).
