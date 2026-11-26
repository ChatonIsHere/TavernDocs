---
title: "SceneIndexPatches"
description: "Forces the scene a client joins from /tutorialScene or /questScene, with a postfix on the JoinedServerGameMode constructor."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneIndexPatches

A **class** in `TavernLib`, `TavernLib.Patches`.

Forces the scene a client joins from `/tutorialScene` or `/questScene`, with a postfix on the `JoinedServerGameMode` constructor. Client.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [SceneIndexPatches](/mod/tavernlib-api/types/patches/sceneindexpatches)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneIndexPatches()"}</code> | Created by TavernLib; mods don't make one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-overridesceneindex" /><code>{"static void OverrideSceneIndex("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" server)"}</code> | Postfix on the `JoinedServerGameMode` constructor that sets the server info's `SceneIndex` to the forced scene, if there is one. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcedsceneindex" /><code>{"internal static int? ForcedSceneIndex()"}</code> | Internal: 1 with `/tutorialScene`, 4 with `/questScene`, otherwise `null`. |

</details>
