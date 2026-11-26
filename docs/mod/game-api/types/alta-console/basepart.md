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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Derived types** [`CommandPart`](/mod/game-api/types/alta-console/commandpart), [`Parameter`](/mod/game-api/types/alta-console/parameter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasePart(string name, string description)"}</code> | <span className="api-desc">Creates a `BasePart` from `name` and `description`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"List<"}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{"> Attributes { get; }"}</code> | <span className="api-desc">Attributes attached to this part.</span> |
| <Link id="m-description" /><code>{"string Description { get; private set; }"}</code> | <span className="api-desc">Help text.</span> |
| <Link id="m-fullname" /><code>{"virtual string FullName { get; }"}</code> | <span className="api-desc">Full name. Same as `Name` here; subclasses can add more.</span> |
| <Link id="m-name" /><code>{"string Name { get; private set; }"}</code> | <span className="api-desc">Short name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The name.</span> |

## Used in

Members of other types that take, return or hold a `BasePart`:

<div className="api-used-in">

[`BaseCommands.PrintPart`](/mod/game-api/types/alta-console/basecommands#m-printpart), [`BaseCommands.SearchResult.Part`](/mod/game-api/types/alta-console/basecommands-searchresult#m-part), [`BaseCommands.SearchResult.SearchResult`](/mod/game-api/types/alta-console/basecommands-searchresult#m-ctor).

</div>
