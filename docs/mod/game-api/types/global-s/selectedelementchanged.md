---
title: "SelectedElementChanged"
description: "Callback for the selected server changing in the server list, with the old and new ServerElement."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SelectedElementChanged

A **delegate** in `Root.Township`, the global namespace.

Callback for the selected server changing in the server list, with the old and new `ServerElement`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SelectedElementChanged(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldElement, "}<Link to="/mod/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" newElement)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `SelectedElementChanged`:

<div className="api-used-in">

[`ServerBoard.SelectedChanged`](/mod/game-api/types/global-s/serverboard#m-selectedchanged), [`ServerSelectionDisplay.SelectedChanged`](/mod/game-api/types/global-s/serverselectiondisplay#m-selectedchanged), [`ServerSelectionMenu.SelectedChanged`](/mod/game-api/types/global-s/serverselectionmenu#m-selectedchanged).

</div>
