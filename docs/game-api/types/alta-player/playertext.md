---
title: "PlayerText"
description: "A UI text above a player that follows their body and turns to face the local player's head (or the scene camera in the editor)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerText

A **class** in `Root.Township`, `Alta.Character`.

A UI text above a player that follows their body and turns to face the local player's head (or the scene camera in the editor).

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerText()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | The player this text belongs to. |
| <Link id="m-text" /><code>{"private Text text"}</code> | The UI Text component. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-text-2" /><code>{"string Text { get; set; }"}</code> | The shown text. Setting null or empty hides it. |

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deleteiflocalplayer" /><code>{"private void DeleteIfLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Destroys the text if the given player is the one it belongs to. Nothing in this class subscribes it. |
| <Link id="m-facesceneviewcamera" /><code>{"private void FaceSceneViewCamera()"}</code> | In the editor, turns to face the current camera. |
| <Link id="m-facetransform" /><code>{"private void FaceTransform(Transform transform)"}</code> | Turns to look at the given transform. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Finds the `PlayerCharacter` it belongs to. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | While shown, moves over the player's body and faces the local player's head. |

</details>
