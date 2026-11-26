---
title: "UpdateHandler"
description: "A no-argument callback, used for the IK update events on CharacterIKController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateHandler

A **delegate** in `Root.Township`, no namespace.

A no-argument callback, used for the IK update events on `CharacterIKController`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke()"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `UpdateHandler`:

[`ArmIKController.PostIKUpdate`](/game-api/types/alta-player/armikcontroller#m-postikupdate), [`ArmIKController.PostPostIKUpdate`](/game-api/types/alta-player/armikcontroller#m-postpostikupdate), [`CharacterComponentController.PostComponentUpdate`](/game-api/types/alta-player/charactercomponentcontroller#m-postcomponentupdate), [`CharacterComponentController.PreComponentUpdate`](/game-api/types/alta-player/charactercomponentcontroller#m-precomponentupdate), [`HandGrip.PostLateUpdate`](/game-api/types/alta-player/handgrip#m-postlateupdate), [`CharacterIKController.IKUpdatesFinished`](/game-api/types/global-c-d/characterikcontroller#m-ikupdatesfinished), [`CharacterIKController.PreIKUpdates`](/game-api/types/global-c-d/characterikcontroller#m-preikupdates), [`CharacterIKController.PreRenderCallback`](/game-api/types/global-c-d/characterikcontroller#m-prerendercallback), [`PostRenderNotifier.RenderFinished`](/game-api/types/global-p/postrendernotifier#m-renderfinished).
