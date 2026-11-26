---
title: "FakePlayerControllerMultiLockModel"
description: "Do-nothing IPlayerControllerMultiLockModel that is never locked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePlayerControllerMultiLockModel

A **class** in `Root.Township`, no namespace.

Do-nothing `IPlayerControllerMultiLockModel` that is never locked. `PlayerControllerLifetimeScope` binds it in some setups instead of the real lock model.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`IPlayerControllerMultiLockModel`](/game-api/types/global-i-l/iplayercontrollermultilockmodel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakePlayerControllerMultiLockModel()"}</code> | Creates a `FakePlayerControllerMultiLockModel` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocked" /><code>{"bool IsLocked { get; }"}</code> | Always false. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlock" /><code>{"void AddLock(object lockerObject)"}</code> | Does nothing. |
| <Link id="m-removelock" /><code>{"void RemoveLock(object lockerObject)"}</code> | Does nothing. |
