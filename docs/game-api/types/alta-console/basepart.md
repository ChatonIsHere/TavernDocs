---
title: "BasePart"
description: "Base of console command pieces that have a name and description: CommandPart and Parameter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasePart

A **class** in `Root.Township`, `Alta.Console`.

Base of console command pieces that have a name and description: `CommandPart` and `Parameter`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Derived types** [`CommandPart`](/game-api/types/alta-console/commandpart), [`Parameter`](/game-api/types/alta-console/parameter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasePart(string name, string description)"}</code> | Creates a `BasePart` from `name` and `description`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"List<"}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{"> Attributes { get; }"}</code> | Attributes attached to this part. |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> | Help text. |
| <Link id="m-fullname" /><code>{"virtual string FullName { get; }"}</code> | Full name. Same as `Name` here; subclasses can add more. |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | Short name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The name. |

## Used in

Members of other types that take, return or hold a `BasePart`:

[`BaseCommands.PrintPart`](/game-api/types/alta-console/basecommands#m-printpart), [`BaseCommands.SearchResult.Part`](/game-api/types/alta-console/basecommands-searchresult#m-part), [`BaseCommands.SearchResult.SearchResult`](/game-api/types/alta-console/basecommands-searchresult#m-ctor).
