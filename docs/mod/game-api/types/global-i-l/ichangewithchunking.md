---
title: "IChangeWithChunking"
description: "Scene object that reacts to its chunk loading or being saved, such as BuildingAnimationWrapper."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChangeWithChunking

An **interface** in `Root.Township`, the global namespace.

Scene object that reacts to its chunk loading or being saved, such as `BuildingAnimationWrapper`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`ModifiableStaticObject`](/mod/game-api/types/alta-networking/modifiablestaticobject), [`BuildingAnimationWrapper`](/mod/game-api/types/global-a-b/buildinganimationwrapper)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beforesaving" /><code>{"void BeforeSaving()"}</code> | Called before the chunk is saved. |
| <Link id="m-loaded" /><code>{"void Loaded()"}</code> | Called after the chunk has loaded. |
