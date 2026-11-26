---
title: "PlayerOrbLight"
description: "Made by PlayerUnlockManager to set the player's light brightness from how many orbs they have."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerOrbLight

A **class** in `Root.Township`, no namespace.

Made by `PlayerUnlockManager` to set the player's light brightness from how many orbs they have. Its checks are contradictory (it only hooks up on headless and only updates when not headless), so it never changes the light.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerOrbLight("}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The player whose light is set. |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | The `PlayerUnlockManager` whose orbs are counted. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tryupdateplayerlightintensity" /><code>{"private void TryUpdatePlayerLightIntensity()"}</code> | Calls `UpdatePlayerLightIntensity` if not headless and the player has a controller and light. |
| <Link id="m-updateplayerlightintensity" /><code>{"private void UpdatePlayerLightIntensity()"}</code> | Sets the player light's intensity for the current orb count. |
| <Link id="m-updateplayerlightintensityonnewcontroller" /><code>{"private void UpdatePlayerLightIntensityOnNewController("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" playerCaller, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playercontroller)"}</code> | Handles `PlayerControllerSet` by trying the update again. |

</details>
