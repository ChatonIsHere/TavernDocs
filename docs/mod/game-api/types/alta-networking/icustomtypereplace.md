---
title: "ICustomTypeReplace"
description: "An IEntityReplaceHandler that names which component type to look for on the new entity when NetworkEntity.ReplaceWith runs, instead of its own type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomTypeReplace

An **interface** in `Root.Township`, `Alta.Networking`.

An `IEntityReplaceHandler` that names which component type to look for on the new entity when `NetworkEntity.ReplaceWith` runs, instead of its own type.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler)
- **Derived types** [`AssistGrabInteractable`](/mod/game-api/types/global-a-b/assistgrabinteractable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-replacetype" /><code>{"Type ReplaceType { get; }"}</code> | <span className="api-desc">Component type to find on the replacement entity (for `AssistGrabInteractable` this is `Interactable`).</span> |
