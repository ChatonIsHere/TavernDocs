---
title: "LocalPlayerHeadRenderer"
description: "Turns the local player's head renderers on while a hand camera renders, so selfies show your head, then restores them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayerHeadRenderer

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Turns the local player's head renderers on while a hand camera renders, so selfies show your head, then restores them. Client only.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocalPlayerHeadRenderer()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachefirstperson" /><code>{"private bool cacheFirstPerson"}</code> | Whether the dummy was in first person before the render. |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | The registered player character. |
| <Link id="m-characterdummy" /><code>{"private "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" characterDummy"}</code> | The character's dummy, whose clothes hold the head renderers. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character)"}</code> | Starts handling for a player character and hooks the hand camera render events. |
| <Link id="m-release" /><code>{"void Release()"}</code> | Unhooks the render and destroy events. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyrelease" /><code>{"private void DestroyRelease("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Calls `Release` when the character's entity is destroyed. |
| <Link id="m-onpostrender" /><code>{"private void OnPostRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Hides the head renderers again if the player was in first person. |
| <Link id="m-onprecull" /><code>{"private void OnPreCull("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Remembers first person state and turns the head renderers on before the camera renders. |

</details>

## Used in

Members of other types that take, return or hold a `LocalPlayerHeadRenderer`:

[`HandCamera.localPlayerHandler`](/game-api/types/alta-customization/handcamera#m-localplayerhandler).
