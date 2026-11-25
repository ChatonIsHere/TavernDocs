---
title: "DownedStateDebuffManager"
description: "class DownedStateDebuffManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownedStateDebuffManager

A **class** in `Root.Township`, `ATT.PlayerStates`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DownedStateDebuffManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-playerstatmodifiers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/timedstatmodifier">{"TimedStatModifier"}</Link>{"> playerStatModifiers"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-applydebufftoplayer" /><code>{"void ApplyDebuffToPlayer("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/statmodifier">{"StatModifier"}</Link>{"> debuffs, float duration)"}</code> |
| <Link id="m-clearalldebuffs" /><code>{"void ClearAllDebuffs()"}</code> |
| <Link id="m-removedebuffsforplayer" /><code>{"void RemoveDebuffsForPlayer("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter)"}</code> |

## Used in

Members of other types that take, return or hold a `DownedStateDebuffManager`:

[`DownedState.debuffManager`](/game-api/types/alta-player/downedstate#m-debuffmanager), [`DownedState.DownedState`](/game-api/types/alta-player/downedstate#m-ctor), [`PlayerStateFactory.debuffManager`](/game-api/types/alta-player/playerstatefactory#m-debuffmanager).
