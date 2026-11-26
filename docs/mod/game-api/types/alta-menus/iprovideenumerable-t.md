---
title: "IProvideEnumerable<T>"
description: "Something that supplies a changing list of values to a menu, such as FriendSelector feeding a ScrollerSelector on the same object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IProvideEnumerable&lt;T&gt;

An **interface** in `Root.Township`, `Alta.Menu`.

Something that supplies a changing list of values to a menu, such as `FriendSelector` feeding a `ScrollerSelector` on the same object.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Derived types** [`FriendSelector`](/mod/game-api/types/global-e-h/friendselector)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-values" /><code>{"IEnumerable<T> Values { get; }"}</code> | <span className="api-desc">The current values to show.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedvalues" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/iprovideenumerable-t">{"IProvideEnumerable"}</Link>{"<T>> UpdatedValues"}</code> | <span className="api-desc">Raised when `Values` has changed.</span> |

## Used in

Members of other types that take, return or hold a `IProvideEnumerable&lt;T>`:

<div className="api-used-in">

[`ScrollerSelector.UpdateValues`](/mod/game-api/types/alta-menus/scrollerselector#m-updatevalues), [`FriendSelector.UpdatedValues`](/mod/game-api/types/global-e-h/friendselector#m-updatedvalues).

</div>
