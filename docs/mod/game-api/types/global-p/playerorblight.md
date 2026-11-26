---
title: "PlayerOrbLight"
description: "Made by PlayerUnlockManager to set the player's light brightness from how many orbs they have."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerOrbLight

A **class** in `Root.Township`, the global namespace.

Made by `PlayerUnlockManager` to set the player's light brightness from how many orbs they have. Its checks are contradictory (it only hooks up on headless and only updates when not headless), so it never changes the light.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerOrbLight("}<Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager)"}</code> | <span className="api-desc">Creates a `PlayerOrbLight` from `unlockManager`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The player whose light is set.</span> |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | <span className="api-desc">The `PlayerUnlockManager` whose orbs are counted.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tryupdateplayerlightintensity" /><code>{"private void TryUpdatePlayerLightIntensity()"}</code> | <span className="api-desc">Calls `UpdatePlayerLightIntensity` if not headless and the player has a controller and light.</span> |
| <Link id="m-updateplayerlightintensity" /><code>{"private void UpdatePlayerLightIntensity()"}</code> | <span className="api-desc">Sets the player light's intensity for the current orb count.</span> |
| <Link id="m-updateplayerlightintensityonnewcontroller" /><code>{"private void UpdatePlayerLightIntensityOnNewController("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" playerCaller, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playercontroller)"}</code> | <span className="api-desc">Handles `PlayerControllerSet` by trying the update again.</span> |

</details>
