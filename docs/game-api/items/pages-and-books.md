---
title: Pages and books
description: Recipe and info pages, the books that collect them, and GlobalPagesManager, the server's list of pages the town has found.
sidebar_position: 16
---

# Pages and books

Recipe pages, food pages and the books they go in are in `Alta.Pages` in `Root.Township`, with the page providers at the top level (no namespace). The server owns which pages exist and which the town has found; books and pages sync from it.

## How pages work

A page isn't an asset of its own. It's a `PageData`: a **provider** (what kind of page) plus the thing it's about.

- `PageProvider` (abstract `MonoBehaviour`, no namespace) makes pages. `PageProvider.Providers` lists them by `Identifier`. Subclasses: `StaticPageProvider` (hand-made `Page` assets), `EdiblePageProvider` and `IngredientPageProvider` (pages for an `Item`), `StewRecipePageProvider`, `ChiselRecipePageProvider`, `GenericCraftingRecipePageProvider`. The generated ones derive from `GeneratedPageProvider<T>`.
- `IPageBasis` is anything a page can be about: `Item`, `Page` and the recipe types. It has `PageData CreatePage(int preferredProvider)`, `uint GetHash()` and `int GetProviderID(int preferredProvider)`.
- `Alta.Pages.PageData` has `Provider`, `ProviderData` (the `IPageBasis`), `Glyphs` and `GetPageComponent<T>()`. Pages are compared by value.
- `Alta.Pages.PageCollection` (a `HashedGeneralValue<PageCollection>` asset) is what a book holds: `PageBases`, `InitialPages`, `Size`, `PreferredProvider`, `CanRemovePagesFrom`.

A page is identified everywhere by the pair (provider id, page hash).

## GlobalPagesManager

`Alta.Pages.GlobalPagesManager`, a `NetworkEntityBehaviour` singleton (`GlobalPagesManager.Instance`). The list is built and kept on the server and saved with the world.

| Member | What it does | Notes |
| --- | --- | --- |
| `IEnumerable<(int, uint)> AddedPages { get; }` | Every page the town has found, as (provider id, hash). | Starts with each collection's `InitialPages`. |
| `void AddPage(PageData)` | Adds a page by its data. | Server only. |
| `void AddPage(int providerID, uint hash)` | Adds a page; raises `PageAdded` if it's new. | Server only. |
| `event Action<(int, uint)> PageAdded` | A new page was found. | Server. Every book listens and adds the page if its collection has it. |
| `static bool IsNew(int providerID, uint pageHash)` | Not found yet. | |
| `void DissolvePage(PaperPageInstance, Interactor)` | The effect of a loose page flying into the player. | Client. |

So adding a page to the town is one call on the server, and every book that can hold it picks it up. The console's progress commands do this (`ProgressCommandModule`).

## Books and loose pages

| Type | What it is |
| --- | --- |
| `Alta.Pages.Book` | A book pickup. `Pickup`, `Collection`, `IsOpen`, `Open()`, `Close()`, `TurnLeft(bool isSkipping = false)`, `TurnRight(...)`, `AddNewPage(PageData)` (server only), `DuplicatePage`, `BookRemovePage`. Fills itself from `AddedPages` when the server creates it. Holding one blocks the hand's stick from moving you. |
| `Alta.Pages.PageInstance` | A page inside a book or on paper: `Book`, `Data`, `Set(PageData)`, `event Action<PageInstance> OnChangedPage`. |
| `Alta.Pages.PaperPageInstance` | A loose page you find. On the server, an original page (not a duplicate) that's been grabbed refuses docks and further grabs, and when it's let go it's added to the town's list and destroyed; clients play the dissolve effect. `AutoAdd(PlayerController)` does the same from code. |
| `Alta.Pages.Pinboard` | A board that shows a set of pages. |
| `Alta.Pages.BookSpawner`, `BookRestrictor`, `PositionRestrictor`, `MouldRestrictor` | Spawning books and keeping them in place. |
| `Alta.Pages.Glyph`, `GlyphInstance` | The pictures on a page. `Item.Glyph` is an item's picture. |

## Hooking it

- `GlobalPagesManager.AddPage(int, uint)` sees every page the town finds, from loose pages, books and commands. CookingLib patches it (with an explicit parameter list in `AccessTools.Method`, since `AddPage` is overloaded) to add its own recipe pages.
- The providers' `GetRandom` methods choose which page a random loot page is. CookingLib patches `EdiblePageProvider.GetRandom` and `StewRecipePageProvider.GetRandom` to take part.
- `Book.AddNewPage` and the global list only change on the server. A client mod can read them but not add to them.

## See also

- [Items and materials](items-and-materials.md)
