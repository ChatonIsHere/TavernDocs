---
title: "Book"
description: "A networked book item that holds pages (recipe books, journals) from a PageCollection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Book

A **class** in `Root.Township`, `Alta.Pages`.

A networked book item that holds pages (recipe books, journals) from a `PageCollection`. The server keeps the page list and turns pages; clients see the spawned page objects and the page count it sends.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<BookSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BookSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`BookSaveData`](/game-api/types/alta-items/booksavedata)
- **Nested types** [`FlairPositions`](/game-api/types/alta-items/book-flairpositions), [`LODRenderers`](/game-api/types/alta-items/book-lodrenderers)
- **Documented in** [Pages and books](/game-api/items/pages-and-books)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Book()"}</code> |

## Fields

<details>
<summary>68 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isfrommiddle" /><code>{"private static int _IsFromMiddle"}</code> | Animator hash for IsFromMiddle. |
| <Link id="m-isfront" /><code>{"private static int _IsFront"}</code> | Animator hash for IsFront. |
| <Link id="m-isinteracting" /><code>{"private static int _IsInteracting"}</code> | Animator hash for IsInteracting. |
| <Link id="m-isopen" /><code>{"private static int _IsOpen"}</code> | Animator hash for IsOpen. |
| <Link id="m-maintex" /><code>{"private static int _MainTex"}</code> | Shader property ID for _MainTex. |
| <Link id="m-open" /><code>{"private static int _Open"}</code> | Animator hash for Open. |
| <Link id="m-addhighlight" /><code>{"private GameObject addHighlight"}</code> | Object shown when a page can be dropped in. |
| <Link id="m-addpage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-items/newpagearguments">{"NewPageArguments"}</Link>{"> addPage"}</code> | Method sync for the add-page message. |
| <Link id="m-backcover" /><code>{"private Transform backCover"}</code> | Back cover transform. |
| <Link id="m-backobject" /><code>{"private GameObject backObject"}</code> | Back cover object. |
| <Link id="m-bookanimator" /><code>{"private Animator bookAnimator"}</code> | The book's animator. |
| <Link id="m-booklodgroup" /><code>{"private LODGroup bookLodGroup"}</code> | LOD group that flairs are added to. |
| <Link id="m-bookopenanimation" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" bookOpenAnimation"}</code> | Networked Open animator bool. |
| <Link id="m-bookpages" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> bookPages"}</code> | Server: the pages in the book, in order. |
| <Link id="m-btduplicate" /><code>{"private bool btDuplicate"}</code> | Editor button for `DuplicatePage`. |
| <Link id="m-btnclose" /><code>{"private bool btnClose"}</code> | Editor button for `Close`. |
| <Link id="m-btnfill" /><code>{"private bool btnFill"}</code> | Editor button for `Fill`. |
| <Link id="m-btnleft" /><code>{"private bool btnLeft"}</code> | Editor button for `TurnLeftDebug`. |
| <Link id="m-btnopen" /><code>{"private bool btnOpen"}</code> | Editor button for `Open`. |
| <Link id="m-btnright" /><code>{"private bool btnRight"}</code> | Editor button for `TurnRightDebug`. |
| <Link id="m-clientpagecount" /><code>{"private uint clientPageCount"}</code> | Page count as last synced; `PageCount` returns it on clients. |
| <Link id="m-closedcoverrotation" /><code>{"private float closedCoverRotation"}</code> | Cover rotation when closed, set to match the art. |
| <Link id="m-closeduration" /><code>{"private float closeDuration"}</code> | Seconds the close animation takes. |
| <Link id="m-closeupwardsdotlimit" /><code>{"private float closeUpwardsDotLimit"}</code> | The book closes when its forward vector's upward part drops below this. |
| <Link id="m-closevelocitylimit" /><code>{"private float closeVelocityLimit"}</code> | The book closes when moved faster than this. |
| <Link id="m-collection" /><code>{"private "}<Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection"}</code> | The `PageCollection` this book holds. It is the only thing the book saves. |
| <Link id="m-coverglyph" /><code>{"private Image coverGlyph"}</code> | Image for the cover glyph. |
| <Link id="m-displayedspawnindex" /><code>{"private int displayedSpawnIndex"}</code> | Which spawned page is the one shown, or -1. |
| <Link id="m-firstpageindex" /><code>{"private int firstPageIndex"}</code> | Index in `bookPages` of the first spawned page. |
| <Link id="m-flairpositions" /><code>{"private "}<Link to="/game-api/types/alta-items/book-flairpositions">{"Book.FlairPositions"}</Link>{" flairPositions"}</code> | Cover attach points for flairs, plus the book renderers and letter text. |
| <Link id="m-frontcover" /><code>{"private Transform frontCover"}</code> | Front cover transform. |
| <Link id="m-frontobject" /><code>{"private GameObject frontObject"}</code> | Front cover object. |
| <Link id="m-glyphandroidrenderer" /><code>{"private Renderer glyphAndroidRenderer"}</code> | Android glyph renderer, removed at build time. |
| <Link id="m-glyphcanvas" /><code>{"private Canvas glyphCanvas"}</code> | Canvas the cover glyph is drawn on. |
| <Link id="m-heldcoroutine" /><code>{"private Coroutine heldCoroutine"}</code> | Server: the running `Held` coroutine. |
| <Link id="m-hovering" /><code>{"private List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> hovering"}</code> | Loose pages in the drop area being watched. |
| <Link id="m-inserting" /><code>{"private Queue<"}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> inserting"}</code> | Pages waiting to be inserted while the book is open. |
| <Link id="m-lastopenedpage" /><code>{"private int lastOpenedPage"}</code> | Page the book was on when last closed; it reopens there. |
| <Link id="m-locationchange" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" locationChange"}</code> | Method sync for the page-location-changed message. |
| <Link id="m-lods" /><code>{"private LOD[] lods"}</code> | Cached LOD array of the book. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-openduration" /><code>{"private float openDuration"}</code> | Seconds the open animation takes. |
| <Link id="m-openupwardsdotlimit" /><code>{"private float openUpwardsDotLimit"}</code> | The book opens when its forward vector's upward part is above this. |
| <Link id="m-openvelocitylimit" /><code>{"private float openVelocityLimit"}</code> | The book only opens when moving slower than this. |
| <Link id="m-pageaxis" /><code>{"private Transform pageAxis"}</code> | Parent transform spawned pages hang from. |
| <Link id="m-pagecount" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pageCount"}</code> | Text showing pages found out of the total. |
| <Link id="m-pagelocationchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pageLocationChanged"}</code> | Event played when a newly added page opens the book somewhere else. |
| <Link id="m-pagenumber" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pageNumber"}</code> | Text showing the current page number. |
| <Link id="m-pageprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" pagePrefab"}</code> | Prefab spawned for each page shown in the book. |
| <Link id="m-pageturningsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" pageTurningSound"}</code> | Sound played on a page turn. |
| <Link id="m-paperprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" paperPrefab"}</code> | Prefab of a loose paper page, spawned by `DuplicatePage`. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The book's pickup. |
| <Link id="m-pickuparea" /><code>{"private "}<Link to="/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" pickupArea"}</code> | Area that detects loose pages to add. |
| <Link id="m-removepage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> removePage"}</code> | Method sync for the remove-page message. |
| <Link id="m-renderers" /><code>{"private "}<Link to="/game-api/types/alta-items/book-lodrenderers">{"Book.LODRenderers"}</Link>{"[] renderers"}</code> | Cached base renderers per LOD level, used when rebuilding flairs. |
| <Link id="m-serverflippage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> serverFlipPage"}</code> | Method sync for client turn-page requests. |
| <Link id="m-setdisplay" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-items/displayarguments">{"DisplayArguments"}</Link>{"> setDisplay"}</code> | Method sync for the page count and number text. |
| <Link id="m-sethighlight" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> setHighlight"}</code> | Method sync for the add-page highlight. |
| <Link id="m-setopen" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> setOpen"}</code> | Method sync for open and close. |
| <Link id="m-spawnedpages" /><code>{"private List<"}<Link to="/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{"> spawnedPages"}</code> | Page entities spawned in the open book, in order. |
| <Link id="m-spineobject" /><code>{"private GameObject spineObject"}</code> | Spine object. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the initial book sync. |
| <Link id="m-turndirection" /><code>{"private int turnDirection"}</code> | Direction of the turn in progress: -1, 0 or 1. |
| <Link id="m-turning" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{"> turning"}</code> | Pages in the middle of turning. |
| <Link id="m-turnpage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-items/turnpagearguments">{"TurnPageArguments"}</Link>{"> turnPage"}</code> | Method sync for page turns. |
| <Link id="m-turnrate" /><code>{"private float turnRate"}</code> | Seconds between repeated page turns while input is held. |
| <Link id="m-turnskipprogress" /><code>{"private float turnSkipProgress"}</code> | Where a skipped turn starts in its animation, 0 to 1. |
| <Link id="m-turntime" /><code>{"private float turnTime"}</code> | Seconds a page turn takes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collection-2" /><code><Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" Collection { get; }"}</code> | The `PageCollection` that defines which pages this book can hold and their order. A book spawned without one destroys itself. |
| <Link id="m-isatback" /><code>{"bool IsAtBack { get; private set; }"}</code> | True when the open book shows its last page. |
| <Link id="m-isatfront" /><code>{"bool IsAtFront { get; private set; }"}</code> | True when the open book shows its first page. |
| <Link id="m-ischangingopenstate" /><code>{"bool IsChangingOpenState { get; private set; }"}</code> | True while the open or close animation runs. Page turns are refused then. |
| <Link id="m-isinserting" /><code>{"bool IsInserting { get; }"}</code> | True while pages are queued to be animated into the open book. |
| <Link id="m-isopen-2" /><code>{"bool IsOpen { get; private set; }"}</code> | Whether the book is open. The server opens it while held facing up and slow, and closes it otherwise. |
| <Link id="m-pagecount-2" /><code>{"int PageCount { get; }"}</code> | Number of pages in the book. On clients this is the count last sent by the server. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The book's `Pickup`. Holding it blocks locomotion and lets the holder turn pages. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order for this renderer bakeable: 5. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addnewpage" /><code>{"bool AddNewPage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | Server: adds a page in collection order and animates it in if the book is open. False on clients or if the collection lacks the page. |
| <Link id="m-bookremovepage" /><code>{"void BookRemovePage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData)"}</code> | Removes a page from the book's list and refreshes the open spread and page display. Called when a page is pulled out. |
| <Link id="m-close" /><code>{"void Close()"}</code> | Closes the book if it is open and not already opening or closing. The server closes it when it is dropped or tilted away. |
| <Link id="m-duplicatepage" /><code><Link to="/game-api/types/alta-items/paperpageinstance">{"PaperPageInstance"}</Link>{" DuplicatePage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData, ref bool isDuplicate)"}</code> | Server: spawns a loose paper copy of a page at the book. Always a duplicate if the collection forbids removal. Null on clients. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network messages for sync, adding, removing and turning pages, opening, highlighting and flipping. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: destroys the book if it has no collection, otherwise adds every collection page already unlocked globally and listens for new ones. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player the book's state, its spawned pages, page display and open state. |
| <Link id="m-open-2" /><code>{"void Open()"}</code> | Opens the book if it is closed and not already changing state. |
| <Link id="m-setcollection" /><code>{"void SetCollection("}<Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection)"}</code> | Server: sets the page collection. Ignored on clients. |
| <Link id="m-turnleft" /><code>{"bool TurnLeft(bool isSkipping = false)"}</code> | Server: turns forward one page if the book is open and not at the back. Returns whether a turn started. |
| <Link id="m-turnright" /><code>{"bool TurnRight(bool isSkipping = false)"}</code> | Server: turns back one page if the book is open and not at the front. Returns whether a turn started. |

<details>
<summary>46 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addflair" /><code>{"private void AddFlair("}<Link to="/game-api/types/alta-items/bookflair">{"BookFlair"}</Link>{" baseFlair, "}<Link to="/game-api/types/alta-items/bookflair">{"BookFlair"}</Link>{" overrideFlair, Transform parent, Material material, List<Renderer>[] renderers)"}</code> | Adds the override flair, or the base one if none, at a cover position with the flair material. |
| <Link id="m-addpage-2" /><code>{"private void AddPage("}<Link to="/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" newPage, int spawnedIndex, bool isFromMiddle = false)"}</code> | Puts a spawned page into the book at a slot and sets its animator; overload is the add-page message handler on clients. |
| <Link id="m-addpage-3" /><code>{"private void AddPage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/newpagearguments">{"NewPageArguments"}</Link>{" newPage)"}</code> | Puts a spawned page into the book at a slot and sets its animator; overload is the add-page message handler on clients. |
| <Link id="m-applyflairs" /><code>{"private void ApplyFlairs()"}</code> | Rebuilds the cover decoration (emblem, glyph or letter, spine and edge flairs, book material) from the collection's flair settings. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks pickup grab, drop and interaction filter, and hides the page drop area. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build step that removes the Android glyph renderer. |
| <Link id="m-cachelods" /><code>{"private bool CacheLods()"}</code> | Editor setup that caches the renderers of each LOD level, so flairs can be added later. |
| <Link id="m-changeopen" /><code>{"private IEnumerator ChangeOpen(bool isOpening) (iterator)"}</code> | Coroutine that opens or closes the book, spawning pages at the last opened page on open and removing them on close. |
| <Link id="m-checkglobalpage" /><code>{"private void CheckGlobalPage(ValueTuple<int, uint> data)"}</code> | Server: when a page is unlocked globally, adds it to this book if it belongs to the collection. |
| <Link id="m-checkinsert" /><code>{"private void CheckInsert("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When a loose page is let go over the book, adds it, records it globally and destroys the loose page. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Build clean step; does nothing. |
| <Link id="m-clientmoveleft" /><code>{"private void ClientMoveLeft("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | Client: asks the server to turn left when the move-left action starts. |
| <Link id="m-clientmoveright" /><code>{"private void ClientMoveRight("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | Client: asks the server to turn right when the move-right action starts. |
| <Link id="m-clientswiped" /><code>{"private void ClientSwiped("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Client: asks the server to turn a page from a left or right swipe. |
| <Link id="m-delaytointeract" /><code>{"private IEnumerator DelayToInteract("}<Link to="/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" newPage, bool isFromMiddle) (iterator)"}</code> | Keeps a new page non-interactable for the open duration. |
| <Link id="m-destroypage" /><code>{"private void DestroyPage(int spawnedIndex)"}</code> | Removes a spawned page from the open book; on the server it also destroys the entity and tells clients. |
| <Link id="m-dropped" /><code>{"private void Dropped("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Unblocks locomotion, stops the held check and closes the book when nobody holds it. |
| <Link id="m-fill" /><code>{"private void Fill()"}</code> | Debug: on an empty server book, adds every page of the collection and unlocks them globally. |
| <Link id="m-finishturning" /><code>{"private IEnumerator FinishTurning("}<Link to="/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" page, int direction, bool isSkipping) (iterator)"}</code> | Coroutine that finishes a page turn, then on the server removes pages that went out of view. |
| <Link id="m-getcurrentpage" /><code>{"private int GetCurrentPage()"}</code> | Index in `bookPages` of the page shown, or -1. |
| <Link id="m-getpagenumber" /><code>{"private int GetPageNumber()"}</code> | Page number to display: the shown page's index in the collection, or -1. |
| <Link id="m-held" /><code>{"private IEnumerator Held("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Server coroutine while held: opens the book when it faces up and is still, closes it otherwise, and turns pages from input. |
| <Link id="m-insertpage" /><code>{"private IEnumerator InsertPage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page) (iterator)"}</code> | Coroutine that waits for turns to stop, then reopens the book at a newly added page. |
| <Link id="m-interactionfilter" /><code>{"private void InteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Stops a player grabbing the book with a second hand while already holding it. |
| <Link id="m-listenforpagedrop" /><code>{"private void ListenForPageDrop("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | When a loose page from this collection enters the drop area, shows the highlight and waits for it to be let go. |
| <Link id="m-locationchange-2" /><code>{"private void LocationChange("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client handler that plays the page-location-changed event. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the global page-added event. |
| <Link id="m-pickedup" /><code>{"private void PickedUp("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Blocks locomotion for the holder, starts the server held check and hooks the local player's page-turn input. |
| <Link id="m-removepage-2" /><code>{"private void RemovePage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int oldPage)"}</code> | Client handler for the remove-page message. |
| <Link id="m-serializebook" /><code>{"private void SerializeBook("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isIncludingPages)"}</code> | Writes or reads the collection and page count (and the pages themselves, if asked). |
| <Link id="m-serverflippage-2" /><code>{"private void ServerFlipPage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool flipRight)"}</code> | Server handler for a client's turn-page request. |
| <Link id="m-setdisplay-2" /><code>{"private void SetDisplay("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/displayarguments">{"DisplayArguments"}</Link>{" arguments)"}</code> | Message handler that updates the page count and page number text. |
| <Link id="m-sethighlight-2" /><code>{"private void SetHighlight("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isHighlighted)"}</code> | Client handler that shows or hides the add-page highlight. |
| <Link id="m-setopen-2" /><code>{"private void SetOpen("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isOpen)"}</code> | Client handler that opens or closes the book. |
| <Link id="m-showhighlight" /><code>{"private void ShowHighlight(bool isShowing)"}</code> | Shows or hides the add-page highlight; the server also sends it to clients. |
| <Link id="m-spawnpage" /><code>{"private "}<Link to="/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" SpawnPage(int index, int spawnedIndex, bool isFromMiddle = false)"}</code> | Server: spawns a page entity for a book page and adds it at a slot on every side. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Gets the networked Open animator bool and starts closed. |
| <Link id="m-startlisteningfordrops" /><code>{"private void StartListeningForDrops()"}</code> | Turns on the drop area for adding loose pages. |
| <Link id="m-stoplistenforpagedrop" /><code>{"private void StopListenForPageDrop("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Stops watching a loose page that left the drop area. |
| <Link id="m-stoplisteningfordrops" /><code>{"private void StopListeningForDrops()"}</code> | Turns off the drop area and stops watching every hovering page. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Initial sync handler: sends the collection and page count, and clients apply the flairs. |
| <Link id="m-turnleftdebug" /><code>{"private void TurnLeftDebug()"}</code> | Editor button for `TurnLeft`. |
| <Link id="m-turnpage-2" /><code>{"private void TurnPage(int spawnedIndex, int direction, bool isSkipping)"}</code> | Plays a page turn locally; overload is the client handler for the turn message. |
| <Link id="m-turnpage-3" /><code>{"private void TurnPage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-items/turnpagearguments">{"TurnPageArguments"}</Link>{" turnPage)"}</code> | Plays a page turn locally; overload is the client handler for the turn message. |
| <Link id="m-turnpageasserver" /><code>{"private void TurnPageAsServer(int spawnedIndex, int direction, bool isSkipping)"}</code> | Server: turns a spawned page, tells clients and spawns the next page in that direction. |
| <Link id="m-turnrightdebug" /><code>{"private void TurnRightDebug()"}</code> | Editor button for `TurnRight`. |

</details>

## Used in

Members of other types that take, return or hold a `Book`:

[`BookRestrictor.bookOnServer`](/game-api/types/alta-items/bookrestrictor#m-bookonserver), [`BookRestrictor.bookPrefab`](/game-api/types/alta-items/bookrestrictor#m-bookprefab), [`BookSpawner.bookPrefab`](/game-api/types/alta-items/bookspawner#m-bookprefab), [`PageInstance.Book`](/game-api/types/alta-items/pageinstance#m-book), [`PageInstance.SetInBook`](/game-api/types/alta-items/pageinstance#m-setinbook).
