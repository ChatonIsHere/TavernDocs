---
title: "LocalPlayerHeadRenderer"
description: "class LocalPlayerHeadRenderer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayerHeadRenderer

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocalPlayerHeadRenderer()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cachefirstperson" /><code>{"private bool cacheFirstPerson"}</code> |
| <Link id="m-character" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character"}</code> |
| <Link id="m-characterdummy" /><code>{"private "}<Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" characterDummy"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character)"}</code> |
| <Link id="m-release" /><code>{"void Release()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-destroyrelease" /><code>{"private void DestroyRelease("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-onpostrender" /><code>{"private void OnPostRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |
| <Link id="m-onprecull" /><code>{"private void OnPreCull("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `LocalPlayerHeadRenderer`:

[`HandCamera.localPlayerHandler`](/game-api/types/alta-customization/handcamera#m-localplayerhandler).
