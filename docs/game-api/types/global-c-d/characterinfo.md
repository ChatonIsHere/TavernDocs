---
title: "CharacterInfo"
description: "Shortcuts to a player's controller, head, hands and interactors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterInfo

A **class** in `Root.Township`, no namespace.

Shortcuts to a player's controller, head, hands and interactors. Each `PlayerController` makes one as `Info`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterInfo("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Creates a `CharacterInfo` from `controller`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Controller { get; }"}</code> | The player controller this describes. |
| <Link id="m-head" /><code>{"Transform Head { get; }"}</code> | The head transform. |
| <Link id="m-islocal" /><code>{"bool IsLocal { get; }"}</code> | True for the local player. |
| <Link id="m-leftcontroller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" LeftController { get; private set; }"}</code> | The left hand controller. Set by `Initialize`. |
| <Link id="m-leftinteractor" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" LeftInteractor { get; private set; }"}</code> | The left hand interactor. Set by `Initialize`. |
| <Link id="m-player" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | The network player. |
| <Link id="m-rightcontroller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" RightController { get; private set; }"}</code> | The right hand controller. Set by `Initialize`. |
| <Link id="m-rightinteractor" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" RightInteractor { get; private set; }"}</code> | The right hand interactor. Set by `Initialize`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Caches the left and right controllers and interactors. |

## Used in

Members of other types that take, return or hold a `CharacterInfo`:

[`Controller.CharacterInfo`](/game-api/types/global-c-d/controller#m-characterinfo), [`ControllerExtension.CharacterInfo`](/game-api/types/global-c-d/controllerextension#m-characterinfo), [`PlayerController.Info`](/game-api/types/global-p/playercontroller#m-info).
