---
title: "AutoCamPlayer"
description: "Player controller for the auto camera mode: a camera that orbits and frames nearby players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCamPlayer

A **class** in `Root.Township`, the global namespace.

Player controller for the auto camera mode: a camera that orbits and frames nearby players. `AutoCamLocomotionController` moves it, with keys to switch focus and change framing.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`PlayerController`](/mod/game-api/types/global-p/playercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoCamPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameratilt" /><code>{"private float cameraTilt"}</code> | <span className="api-desc">Backing field for `CameraTilt`, in degrees.</span> |
| <Link id="m-gameobjecttoenableonlocal" /><code>{"private GameObject gameObjectToEnableOnLocal"}</code> | <span className="api-desc">Object turned on only for the local player.</span> |
| <Link id="m-heightbuffer" /><code>{"private float heightBuffer"}</code> | <span className="api-desc">Backing field for `HeightBuffer`.</span> |
| <Link id="m-lerprotation" /><code>{"private float lerpRotation"}</code> | <span className="api-desc">Backing field for `LerpRotation`.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Backing field for `LerpSpeed`.</span> |
| <Link id="m-maximumdistance" /><code>{"private float maximumDistance"}</code> | <span className="api-desc">Backing field for `MaximumDistance`. Defaults to 30.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Backing field for `RotationSpeed`.</span> |
| <Link id="m-topic" /><code>{"private Camera topic"}</code> | <span className="api-desc">Backing field for `Topic`, the camera this player drives.</span> |
| <Link id="m-widthbuffer" /><code>{"private float widthBuffer"}</code> | <span className="api-desc">Backing field for `WidthBuffer`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cameratilt-2" /><code>{"float CameraTilt { get; }"}</code> | <span className="api-desc">Camera tilt angle in degrees.</span> |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | <span className="api-desc">The controller's own transform.</span> |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | <span className="api-desc">The controller's own transform.</span> |
| <Link id="m-heightbuffer-2" /><code>{"float HeightBuffer { get; set; }"}</code> | <span className="api-desc">Extra height kept around framed players. Page Up and Page Down scale it.</span> |
| <Link id="m-lerprotation-2" /><code>{"float LerpRotation { get; }"}</code> | <span className="api-desc">Rotation lerp speed.</span> |
| <Link id="m-lerpspeed-2" /><code>{"float LerpSpeed { get; }"}</code> | <span className="api-desc">Position lerp speed.</span> |
| <Link id="m-maximumdistance-2" /><code>{"float MaximumDistance { get; }"}</code> | <span className="api-desc">Players within this distance of the focused one are framed too.</span> |
| <Link id="m-rotationspeed-2" /><code>{"float RotationSpeed { get; set; }"}</code> | <span className="api-desc">Orbit speed. Home and End change it.</span> |
| <Link id="m-topic-2" /><code>{"Camera Topic { get; }"}</code> | <span className="api-desc">The camera, used for field of view and aspect.</span> |
| <Link id="m-widthbuffer-2" /><code>{"float WidthBuffer { get; set; }"}</code> | <span className="api-desc">Extra width kept around framed players. Page Up and Page Down scale it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Enables the local-only object once linked to the local player.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToPlayer()"}</code> | <span className="api-desc">When linked to the local player, enables `gameObjectToEnableOnLocal`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AutoCamPlayer`:

<div className="api-used-in">

[`PlayerControllerPrefabs.autoCamPlayer`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs#m-autocamplayer), [`AutoCamLocomotionController.PlayerController`](/mod/game-api/types/global-a-b/autocamlocomotioncontroller#m-playercontroller).

</div>
