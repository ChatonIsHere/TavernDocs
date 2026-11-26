---
title: "InteractableLastPlayerInteractorHandler"
description: "Keeps an interactable's LastPlayerInteractor when its entity is replaced by another, by copying it to the new entity's interactable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractableLastPlayerInteractorHandler

A **class** in `Root.Township`, no namespace.

Keeps an interactable's `LastPlayerInteractor` when its entity is replaced by another, by copying it to the new entity's interactable.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractableLastPlayerInteractorHandler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | The interactable whose last player is carried over. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> | Copies `LastPlayerInteractor` to the same component on the replacing entity. |

</details>
