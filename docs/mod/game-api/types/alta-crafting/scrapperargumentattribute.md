---
title: "ScrapperArgumentAttribute"
description: "Marks a scrapper behaviour with the component type and fields it sets, so the scrapper tool can find the behaviour for a given set of changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrapperArgumentAttribute

A **class** in `Root.Township`, `Alta.Scrapper`.

Marks a scrapper behaviour with the component type and fields it sets, so the scrapper tool can find the behaviour for a given set of changes. Can be used more than once per class.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScrapperArgumentAttribute(Type type, "}<Link to="/mod/game-api/types/alta-crafting/applicationtype">{"ApplicationType"}</Link>{" applicationType, params string[] fields)"}</code> | <span className="api-desc">Creates a `ScrapperArgumentAttribute` from `type`, `applicationType` and `fields`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-applicationtype" /><code><Link to="/mod/game-api/types/alta-crafting/applicationtype">{"ApplicationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/applicationtype">{"ApplicationType"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">How the values are applied, such as one target and value or many targets with one value.</span> |
| <Link id="m-fields" /><code>{"string[] Fields { get; private set; }"}</code> | <span className="api-desc">Names of the fields or properties on the component.</span> |
| <Link id="m-type" /><code>{"Type Type { get; private set; }"}</code> | <span className="api-desc">The component type the fields belong to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Equal if the type, application type and field list match.</span> |
| <Link id="m-find" /><code>{"static Type Find(ICollection<"}<Link to="/mod/game-api/types/alta-crafting/scrapperargumentattribute">{"ScrapperArgumentAttribute"}</Link>{"> desiredAttributes)"}</code> | <span className="api-desc">Returns the type in this assembly whose scrapper attributes match the given set exactly, or null.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash from the type and application type.</span> |
