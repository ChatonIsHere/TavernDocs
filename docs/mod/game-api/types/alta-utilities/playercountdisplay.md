---
title: "PlayerCountDisplay"
description: "Live data display showing how many players are in Player.AllPlayers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerCountDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Live data display showing how many players are in `Player.AllPlayers`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerCountDisplay()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | "Player Count". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | Returns the player count as text. |
