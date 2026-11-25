---
title: "AutoCamPlayer"
description: "Player controller for the auto camera mode: a camera that orbits and frames nearby players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCamPlayer

A **class** in `Root.Township`, no namespace.

Player controller for the auto camera mode: a camera that orbits and frames nearby players. `AutoCamLocomotionController` moves it, with keys to switch focus and change framing.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`PlayerController`](/game-api/types/global-p/playercontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AutoCamPlayer()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cameratilt" /><code>{"private float cameraTilt"}</code> |
| <Link id="m-gameobjecttoenableonlocal" /><code>{"private GameObject gameObjectToEnableOnLocal"}</code> |
| <Link id="m-heightbuffer" /><code>{"private float heightBuffer"}</code> |
| <Link id="m-lerprotation" /><code>{"private float lerpRotation"}</code> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |
| <Link id="m-maximumdistance" /><code>{"private float maximumDistance"}</code> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |
| <Link id="m-topic" /><code>{"private Camera topic"}</code> |
| <Link id="m-widthbuffer" /><code>{"private float widthBuffer"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cameratilt-2" /><code>{"float CameraTilt { get; }"}</code> | Camera tilt angle in degrees. |
| <Link id="m-head" /><code>{"override Transform Head { get; }"}</code> | The controller's own transform. |
| <Link id="m-headfollow" /><code>{"override Transform HeadFollow { get; }"}</code> | The controller's own transform. |
| <Link id="m-heightbuffer-2" /><code>{"float HeightBuffer { get; set; }"}</code> | Extra height kept around framed players. Page Up and Page Down scale it. |
| <Link id="m-lerprotation-2" /><code>{"float LerpRotation { get; }"}</code> | Rotation lerp speed. |
| <Link id="m-lerpspeed-2" /><code>{"float LerpSpeed { get; }"}</code> | Position lerp speed. |
| <Link id="m-maximumdistance-2" /><code>{"float MaximumDistance { get; }"}</code> | Players within this distance of the focused one are framed too. |
| <Link id="m-rotationspeed-2" /><code>{"float RotationSpeed { get; set; }"}</code> | Orbit speed. Home and End change it. |
| <Link id="m-topic-2" /><code>{"Camera Topic { get; }"}</code> | The camera, used for field of view and aspect. |
| <Link id="m-widthbuffer-2" /><code>{"float WidthBuffer { get; set; }"}</code> | Extra width kept around framed players. Page Up and Page Down scale it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Enables the local-only object once linked to the local player. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToPlayer()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `AutoCamPlayer`:

[`PlayerControllerPrefabs.autoCamPlayer`](/game-api/types/game-other-namespaces/playercontrollerprefabs#m-autocamplayer), [`AutoCamLocomotionController.PlayerController`](/game-api/types/global-a-b/autocamlocomotioncontroller#m-playercontroller).
