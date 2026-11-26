---
title: "TeleportPointElement"
description: "List entry with a button for one spawn area, used by the feature test gymnasium's teleport point page."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportPointElement

A **class** in `Root.Township`, no namespace.

List entry with a button for one spawn area, used by the feature test gymnasium's teleport point page.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ListElementWithButton`](/game-api/types/alta-menus/listelementwithbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportPointElement()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawnpoint" /><code>{"private "}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnPoint"}</code> | Backing field for `SpawnPoint`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawnpoint-2" /><code><Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" SpawnPoint { get; }"}</code> | The spawn area this entry teleports to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Forgets the spawn area and clears the label. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnPoint)"}</code> | Stores the spawn area and shows its identifier as the label. |

## Used in

Members of other types that take, return or hold a `TeleportPointElement`:

[`GymnasiumTeleportPointPage.ClearElement`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-clearelement), [`GymnasiumTeleportPointPage.SetupElement`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-setupelement), [`GymnasiumTeleportPointPage.teleportListElements`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-teleportlistelements).
