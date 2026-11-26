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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerText()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | <span className="api-desc">The player this text belongs to.</span> |
| <Link id="m-text" /><code>{"private Text text"}</code> | <span className="api-desc">The UI Text component.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-text-2" /><code>{"string Text { get; set; }"}</code> | <span className="api-desc">The shown text. Setting null or empty hides it.</span> |

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deleteiflocalplayer" /><code>{"private void DeleteIfLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Destroys the text if the given player is the one it belongs to. Nothing in this class subscribes it.</span> |
| <Link id="m-facesceneviewcamera" /><code>{"private void FaceSceneViewCamera()"}</code> | <span className="api-desc">In the editor, turns to face the current camera.</span> |
| <Link id="m-facetransform" /><code>{"private void FaceTransform(Transform transform)"}</code> | <span className="api-desc">Turns to look at the given transform.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Finds the `PlayerCharacter` it belongs to.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">While shown, moves over the player's body and faces the local player's head.</span> |

</details>
