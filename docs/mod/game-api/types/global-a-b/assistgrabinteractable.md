---
title: "AssistGrabInteractable"
description: "An Interactable that grab assist can pull toward the hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AssistGrabInteractable

A **class** in `Root.Township`, the global namespace.

An `Interactable` that grab assist can pull toward the hand. `GrabAssistController` scores these as assist targets; it saves as a plain `Interactable`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`Interactable`](/mod/game-api/types/global-i-l/interactable), [`ICustomTypeReplace`](/mod/game-api/types/alta-networking/icustomtypereplace), [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AssistGrabInteractable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-icustomtypereplace-replacetype" /><code>{"private Type Alta.Networking.ICustomTypeReplace.ReplaceType { get; }"}</code> | <span className="api-desc">Returns `typeof(Interactable)`, so entity replacement treats this as a plain `Interactable`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AssistGrabInteractable`:

<div className="api-used-in">

[`GrabAssistController.GetAssistGrabTargetScore`](/mod/game-api/types/global-e-h/grabassistcontroller#m-getassistgrabtargetscore).

</div>
