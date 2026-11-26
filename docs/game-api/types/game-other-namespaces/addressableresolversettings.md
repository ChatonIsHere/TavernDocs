---
title: "AddressableResolverSettings"
description: "Obsolete global settings asset holding Addressables references for things not yet wired through dependency injection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddressableResolverSettings

A **class** in `Root.Township`, `Features.Meta.Resolvers`.

Obsolete global settings asset holding Addressables references for things not yet wired through dependency injection.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<AddressableResolverSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`AddressableResolverSettings`](/game-api/types/game-other-namespaces/addressableresolversettings)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AddressableResolverSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-questerbackerpopup" /><code>{"AssetReference QuesterBackerPopup"}</code> | Addressables reference to the Quester backer popup prefab. |
