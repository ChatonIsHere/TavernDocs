---
title: "BasePart"
description: "class BasePart in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasePart

A **class** in `Root.Township`, `Alta.Console`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Derived types** [`CommandPart`](/game-api/types/alta-console/commandpart), [`Parameter`](/game-api/types/alta-console/parameter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasePart(string name, string description)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"List<"}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{"> Attributes { get; }"}</code> |  |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> |  |
| <Link id="m-fullname" /><code>{"virtual string FullName { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BasePart`:

[`BaseCommands.PrintPart`](/game-api/types/alta-console/basecommands#m-printpart), [`BaseCommands.SearchResult.Part`](/game-api/types/alta-console/basecommands-searchresult#m-part), [`BaseCommands.SearchResult.SearchResult`](/game-api/types/alta-console/basecommands-searchresult#m-ctor).
