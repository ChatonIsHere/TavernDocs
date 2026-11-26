---
title: "StewManager"
description: "Runs the stew in a cooking pot: liquid base, ingredients, garnishes, matching a stew recipe, and swapping the stew entity as it cooks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewManager

A **class** in `Root.Township`, `Alta.Cooking`.

Runs the stew in a cooking pot: liquid base, ingredients, garnishes, matching a stew recipe, and swapping the stew entity as it cooks. Probably server driven; the stew entity and ingredient fades are synced to clients.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<StewManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<StewManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`StewManagerSaveData`](/mod/game-api/types/alta-crafting/stewmanagersavedata)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking#stewmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cookingplayers" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> cookingPlayers"}</code> | <span className="api-desc">Players who last held each added ingredient. Only filled and cleared in this build, probably meant for experience.</span> |
| <Link id="m-currentrecipe" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" currentRecipe"}</code> | <span className="api-desc">The stew recipe that matched, or null.</span> |
| <Link id="m-garnishes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> garnishes"}</code> | <span className="api-desc">Backing field for `Garnishes`. Saved.</span> |
| <Link id="m-garnishrejected" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" garnishRejected"}</code> | <span className="api-desc">Event fired when a garnish is added beyond the pot's garnish limit.</span> |
| <Link id="m-ingredients" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients"}</code> | <span className="api-desc">Backing field for `Ingredients`. Saved.</span> |
| <Link id="m-isrealrecipe" /><code>{"private bool isRealRecipe"}</code> | <span className="api-desc">True when the ingredients matched a real recipe. Only set and cleared in this build.</span> |
| <Link id="m-liquidsurfaceentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" liquidSurfaceEntity"}</code> | <span className="api-desc">Entity at the liquid surface that the stew entity is parented to.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-pot" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookingpot">{"CookingPot"}</Link>{" pot"}</code> | <span className="api-desc">The cooking pot on the same object.</span> |
| <Link id="m-stew" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew"}</code> | <span className="api-desc">The current stew component, or null.</span> |
| <Link id="m-stewliquidbase" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" stewLiquidBase"}</code> | <span className="api-desc">Backing field for `StewLiquidBase`. Saved.</span> |
| <Link id="m-syncfadeoutingredient" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncFadeOutIngredient"}</code> | <span className="api-desc">Method sync that fades out an added ingredient.</span> |
| <Link id="m-syncstewfromentity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStewFromEntity"}</code> | <span className="api-desc">Method sync that tells clients which entity is the stew.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-garnishes-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> Garnishes { get; }"}</code> | <span className="api-desc">Garnishes added so far.</span> |
| <Link id="m-ingredients-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Ingredients { get; }"}</code> | <span className="api-desc">Ingredients added so far.</span> |
| <Link id="m-stewliquidbase-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" StewLiquidBase { get; }"}</code> | <span className="api-desc">The liquid the stew is made from.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedingredient" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> AddedIngredient"}</code> | <span className="api-desc">Raised with the cookable item when an ingredient is added.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcookabletostew" /><code>{"void AddCookableToStew("}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookable)"}</code> | <span className="api-desc">Adds a cookable's item as an ingredient, fades it out and destroys it. Checks for a recipe once the pot's minimum ingredient count is reached.</span> |
| <Link id="m-addgarnishtostew" /><code>{"void AddGarnishToStew("}<Link to="/mod/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{" garnish)"}</code> | <span className="api-desc">Adds a garnish and fades it out, or raises `garnishRejected` if the pot already has its maximum garnishes.</span> |
| <Link id="m-createdefaultstew" /><code>{"void CreateDefaultStew()"}</code> | <span className="api-desc">Spawns the default stew from the cooking settings and sets it as this pot's stew.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the stew created and ingredient fade out sync messages.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: tells the joining player which entity is the current stew.</span> |
| <Link id="m-removeanystew" /><code>{"void RemoveAnyStew(bool isDestroyingStewEntity = true)"}</code> | <span className="api-desc">Clears the stew, ingredients, garnishes, liquid base and recipe, and by default destroys the stew entity.</span> |
| <Link id="m-setbaseliquid" /><code>{"void SetBaseLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" liquid)"}</code> | <span className="api-desc">Sets the stew's liquid base. Ignores null.</span> |
| <Link id="m-setstewfromentity" /><code>{"void SetStewFromEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" stewEntity, bool isUsingLiquidBaseTint = false)"}</code> | <span className="api-desc">Makes an entity the pot's stew: parents it to the liquid surface, updates the liquid, syncs it and follows its cooking stages.</span> |

<details className="api-private">
<summary>22 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addgarnish" /><code>{"private void AddGarnish("}<Link to="/mod/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{" garnishItem)"}</code> | <span className="api-desc">Adds a garnish item to the stew's list and updates the liquid.</span> |
| <Link id="m-addingredient" /><code>{"private void AddIngredient("}<Link to="/mod/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookable)"}</code> | <span className="api-desc">Adds an ingredient to the stew, resets the stew's cooking progress and checks for a recipe once enough are in.</span> |
| <Link id="m-checkforrecipe" /><code>{"private bool CheckForRecipe()"}</code> | <span className="api-desc">Once the pot has its minimum number of ingredients, checks for a recipe and returns true.</span> |
| <Link id="m-checkforvalidrecipe" /><code>{"private void CheckForValidRecipe()"}</code> | <span className="api-desc">Swaps the stew to the matching recipe stew, or to the non-recipe stew, then locks the pot.</span> |
| <Link id="m-cleanexperiencecalculation" /><code>{"private void CleanExperienceCalculation()"}</code> | <span className="api-desc">Clears `cookingPlayers` and `isRealRecipe`.</span> |
| <Link id="m-createcontentwithtint" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" CreateContentWithTint(Color colorTint)"}</code> | <span className="api-desc">Builds custom stew liquid content from the stew's visuals and effects, the ingredients, chunk visuals and a tint.</span> |
| <Link id="m-delaydestroyentity" /><code>{"private IEnumerator DelayDestroyEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entityToDestroy, float waitDuration) (iterator)"}</code> | <span className="api-desc">Coroutine that destroys an added ingredient's root after the fade-out time.</span> |
| <Link id="m-fadeoutaddedingredient" /><code>{"private void FadeOutAddedIngredient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint addedIngredientEntityIdentifier)"}</code> | <span className="api-desc">Method sync handler: freezes an added ingredient's pickup and, on reading, dissolves its renderers.</span> |
| <Link id="m-fadeoutentity" /><code>{"private void FadeOutEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Syncs the fade-out of an added ingredient or garnish and destroys it after the fade.</span> |
| <Link id="m-getchunkvisuals" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"> GetChunkVisuals() (iterator)"}</code> | <span className="api-desc">Lists the chunk visuals of the base liquid, the ingredients and the garnishes.</span> |
| <Link id="m-getcookableitems" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] GetCookableItems()"}</code> | <span className="api-desc">Returns the ingredients as an array.</span> |
| <Link id="m-getsteweffects" /><code>{"private IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> GetStewEffects("}<Link to="/mod/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew)"}</code> | <span className="api-desc">Gets the stew's effects from `StewRecipe.GetStewEffects` for the current recipe, base liquid, ingredients and garnishes.</span> |
| <Link id="m-handlenewstewstage" /><code>{"private void HandleNewStewStage("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newStewEntity)"}</code> | <span className="api-desc">When the stew cooks to its next stage, takes the new stew entity; if it burnt away, empties the pot.</span> |
| <Link id="m-playstewcreatedeffect" /><code>{"private void PlayStewCreatedEffect()"}</code> | <span className="api-desc">Plays the stew's created effect at the liquid surface.</span> |
| <Link id="m-playvisualeffectforstew" /><code>{"private void PlayVisualEffectForStew()"}</code> | <span className="api-desc">Plays the stew created effect.</span> |
| <Link id="m-serializegarnisheslist" /><code>{"private void SerializeGarnishesList("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the garnish list as item hashes. Not called in this build.</span> |
| <Link id="m-serializeingredientslist" /><code>{"private void SerializeIngredientsList("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the ingredient list as item hashes. Not called in this build.</span> |
| <Link id="m-stewingredientsfilled" /><code>{"private void StewIngredientsFilled()"}</code> | <span className="api-desc">Plays the ingredients-filled effect at the liquid surface.</span> |
| <Link id="m-swapstewtorecipe" /><code>{"private void SwapStewToRecipe("}<Link to="/mod/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" recipe)"}</code> | <span className="api-desc">Replaces the stew with the recipe's base version.</span> |
| <Link id="m-swapstewtorecipebaseversion" /><code>{"private void SwapStewToRecipeBaseVersion(uint recipeBaseVersionHash)"}</code> | <span className="api-desc">Replaces the stew entity with the one for the given prefab hash and uses it.</span> |
| <Link id="m-syncstewcreated" /><code>{"private void SyncStewCreated("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler that sends the stew entity; remote clients store it and play the created effect.</span> |
| <Link id="m-updateliquidcontainer" /><code>{"private void UpdateLiquidContainer(bool isUsingLiquidBaseTint = false)"}</code> | <span className="api-desc">Turns the pot's liquid into stew liquid with the current visuals and effects.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StewManager`:

<div className="api-used-in">

[`CookingPot.stewManager`](/mod/game-api/types/alta-crafting/cookingpot#m-stewmanager).

</div>
