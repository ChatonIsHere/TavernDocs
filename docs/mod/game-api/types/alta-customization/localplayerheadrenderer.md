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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalPlayerHeadRenderer()"}</code> | <span className="api-desc">Creates a `LocalPlayerHeadRenderer` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachefirstperson" /><code>{"private bool cacheFirstPerson"}</code> | <span className="api-desc">Whether the dummy was in first person before the render.</span> |
| <Link id="m-character" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> | <span className="api-desc">The registered player character.</span> |
| <Link id="m-characterdummy" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" characterDummy"}</code> | <span className="api-desc">The character's dummy, whose clothes hold the head renderers.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character)"}</code> | <span className="api-desc">Starts handling for a player character and hooks the hand camera render events.</span> |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Unhooks the render and destroy events.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyrelease" /><code>{"private void DestroyRelease("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Calls `Release` when the character's entity is destroyed.</span> |
| <Link id="m-onpostrender" /><code>{"private void OnPostRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Hides the head renderers again if the player was in first person.</span> |
| <Link id="m-onprecull" /><code>{"private void OnPreCull("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Remembers first person state and turns the head renderers on before the camera renders.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LocalPlayerHeadRenderer`:

<div className="api-used-in">

[`HandCamera.localPlayerHandler`](/mod/game-api/types/alta-customization/handcamera#m-localplayerhandler).

</div>
