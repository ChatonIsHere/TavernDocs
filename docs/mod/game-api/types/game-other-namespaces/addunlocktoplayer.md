---
title: "AddUnlockToPlayer"
description: "Networked behaviour that gives a player a permanent PlayerUnlock, usually wired to an interaction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddUnlockToPlayer

A **class** in `Root.Township`, `Features.Gameplay`.

Networked behaviour that gives a player a permanent `PlayerUnlock`, usually wired to an interaction. The unlock is saved with the object.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<AddUnlockToPlayerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<AddUnlockToPlayerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`AddUnlockToPlayerSaveData`](/mod/game-api/types/game-other-namespaces/addunlocktoplayersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AddUnlockToPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playerunlock" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" playerUnlock"}</code> | <span className="api-desc">Backing field for `PlayerUnlock`; also saved and loaded.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-playerunlock-2" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" { get; }"}</code> | <span className="api-desc">The unlock this object hands out.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addunlock" /><code>{"void AddUnlock("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: gives the player (or the interactable's last interactor) the permanent unlock. Does nothing if none is set.</span> |
| <Link id="m-addunlock-2" /><code>{"void AddUnlock("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Server: gives the player (or the interactable's last interactor) the permanent unlock. Does nothing if none is set.</span> |

## Used in

Members of other types that take, return or hold a `AddUnlockToPlayer`:

<div className="api-used-in">

[`OrbBasinVfxController.addUnlockToPlayer`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-addunlocktoplayer).

</div>
