---
title: "IPlatformFriendService"
description: "Platform (Oculus) friend list service, got from InterfaceResolver.IPlatformFriendService."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlatformFriendService

An **interface** in `Root.Township`, `Alta.Meta.Friends.Platform`.

Platform (Oculus) friend list service, got from `InterfaceResolver.IPlatformFriendService`. In this build the resolver returns null, so there is no implementation.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfriends" /><code>{"Task<List<"}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{">> GetFriends()"}</code> | Gets the player's platform friends. |
| <Link id="m-getlinkedfriends" /><code>{"Task<List<"}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{">> GetLinkedFriends()"}</code> | Gets platform friends who have linked an Alta account. |
| <Link id="m-getunlinkedfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/alta-menus/friend">{"Friend"}</Link>{">> GetUnlinkedFriends()"}</code> | Gets platform friends without a linked Alta account. Used by the group invite panel. |

## Used in

Members of other types that take, return or hold a `IPlatformFriendService`:

[`InterfaceResolver.CreatePlatformFriendService`](/game-api/types/game-other-namespaces/interfaceresolver#m-createplatformfriendservice), [`InterfaceResolver.iPlatformFriendService`](/game-api/types/game-other-namespaces/interfaceresolver#m-iplatformfriendservice), [`InterfaceResolver.IPlatformFriendService`](/game-api/types/game-other-namespaces/interfaceresolver#m-iplatformfriendservice-2).
