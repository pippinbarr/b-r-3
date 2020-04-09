# b r 2? b r 3! (Friday, 27 March 2020, 10:50AM)

## b r 2?

I spent some time thinking about the more obvious decision to make b r 2, because it's, you know, next. But I find it really tricky trying to understand how I'd go about. I've written about it before somewhere I think, but the concept of hiding one thing in another thing doesn't make tons of sense in Bitsy. Although that said, there is one obvious idea which is to put all the things in, and then simple paint over them in the editor. Then there's the question of what the things would actually be. Anyway, that's for another time.

## b r 3!

So instead I'm doing b r 3, because it's a bit clearer to me. I go out into the world of existing Bitsy games, find those that portray water in their little 8x8 tiles, and important the water into my own Bitsy game, which shows off the water along with attribution to the original creator.

In the current prototype I've mostly been trying to explore the hypothetical display of multiple waters. Given it's a demake I'd like to maintain the same 3x8 format of the building, but may only have one space given that it's all 3rd party water and there's no default water available, nor enough parameters to be able to show a whole lot of variations on a "single" water. Unless the joke is the lack of parameters.

In putting in the first water so I had something to work with (from [Everything Must Fall](https://halkon.itch.io/everything-must-fall) by [Halkon](https://halkon.itch.io/)) it became apparent you need more than one tile's worth of the water to actually understand it. Water is a continuous thing and it seems like when people draw it in a tile they do end up relying on the idea of repetition aesthetically (understandably).  So for instance this first water takes account of the idea of being tiled to create a more continuous animation. For now I'm displaying any given water in a 3x3 grid of tiles, and will also need some kind of didact to attribute. Right now I've got a little plinth thing that's inset into the grid of water which looks kind of nice somehow. It works.

Remaining questions revolve around the building structure itself, which I'd like to reference the original game. I'd like to start outside it and have the player walk in ideally, and thus to have a surrounding landscape. I'd like to create the sense of being inside when you're in it, too, but I'm not sure how plausible that is in terms of having walls/windows etc. I'd love to somehow project light from the windows over the floor, but that will almost certainly conflict really badly with the water itself.

Probably the immediate solution is to import a couple more waters for variety, then set up the building stuff, then get the result of the waters. By the standards of the original game I need 3x8 which is 24 which is... a ton. When I looked through [Lorenzo Pilia's list of games](https://itch.io/c/201121/bitsy-faves) as a place to start I only found two easily (just by looking at their icon). But we'll see. There's a ton of Bitsy games out there.

Onward and upward with the arts.

---

# Waters and Importing and Layouts and Palettes and Generation (Monday, 30 March 2020, 11:02AM)

## Waters

I've spent time going through the "bitsy" search keyword on [itch.io](itch.io), looking at any game that has water in its thumbnail or seems like it might have water. Very scientific.

That's allowed me to build up a reasonably large list of games that have confirmed water I could show in this museum, which is an important step. One question is attribution and permission. At the most involved end I could try to contact ever water-maker and try to get their permission to show their water in the museum, but that would obvious delay the project by a huge amount, maybe getting it stuck forever? The easy version is simple attribution, maybe even with a link to the game in question so people can see the water in situ, which would be nice - it would turn the museum into a weird browsing experience. That's a departure from v r 3 of course, but I think it perhaps better takes into account the community involved - it's not an asset store after all.

There's something fun and interesting about the diversity of waters available in 8x8 with two frames of animation - hardly surprising though I suppose. There are 2^(8*8) possible configurations of pixels in a single frame, and you can raise that to the two again, I suppose, to get the total number of two frame animations? Big numbers. Obviously the subset that resembles water is smaller, but you can increase it somewhat because of context (such as narrative, surrounding objects, and sound for those games that implement it).

## Importing

How to get the waters into the game is tough. Ideally I could access the files themselves and cut and paste the data, but that's (quite reasonably) blocked by itch.io. As such it may be a labour of love in which I have to laboriously copy each water like on of those art copiers in China? That sounds like a huge drag, but there's something kind of attractive about it as well? I'll need to develop some kind of more systematic approach so it doesn't kill me though.

A little bit of tinkering lets me see I can actually get to the source of the game past itch.io's hotlink detector by putting the URL directly into the view-source address type in the browser. This would be something of a life saver given it gives you the palettes and the tiles in particular, which would make working it all out much, much easier (especially if I want to use custom palettes per water as below).

So there's an ethics thing here I don't totally know how to resolve. If I ask people I can just ask for the source (or permission to access it since I can anyway), and thus know I have permission. If I don't ask, I can access it but it seems sketchy to the extent I'm bypassing something itch.io does to protect the games (although they're protecting from hotlinking which isn't what I'm doing at all). What to do? Ask Twitter?

## Layouts

Other than the obtaining and importing of water, the biggest challenge is probably the actual layout of rooms. I'd started with the assumption I'd represent a grid of waters, say 3x3 or so, or even something crazy like 3x8, and stick closely to the architecture of the Unity game. The biggest problem with any multi-water screen, though, is that you entirely lose the palette of the original water, and having looked at various waters, that seems like a tremendous shame as they're often beautifully curated and a major part of the water's appeal. It's also, simple, the author's voice and it should be maintained.

To maintain the water you can only have one per screen which throws the original architectural layout into a shambled. You could imagine being zoomed in on a single plinth, but then the avatar is really tiny? Unless we imagine the avatar as an eye you're moving around? Could be of interest and references the FPS controls idea? However that might make the space feel totally weird and exhausting to navigate and just confusing to understand that when you look at one plinth there are others to the sides and ahead, because you have no overall spatial context.

The other approach is "just" to reimagine the space altogether as being a linear series of rooms (say) that you see a large amount of water in.

ANOTHER option, now that I'm thinking about it, would be a kind of index room with 24 waters in it, but all locked to one palette of course, but each of which links you to the appropriate room containing more of the water as well as the correct palette? So you get a kind of teleporting system going. But then is it trending more towards UI than being a "proper" reference to the original game?

## Generation?

Still, maybe it's kind of neat? Also does this staaaaart to seem like something where I should generate the Bitsy data with code instead of doing all this crap manually? Given that it's just a kind of data thing at that point?! That would be bold. But kind of incredible...

---

# The Generation Game (Thursday, 2 April 2020, 11:47AM)

Well since Monday's query, I did sit down and write generation code for the game over the last three days and... it works. I honestly think this is the right thing to do given the repetitive nature of the task. Notably it means that even once I've made the whole game I can make cosmetic changes at low cost for instance.

So for now the generation code works only with a "middle room" (one with 3x6 plinths), and a data set of two, but it's sufficiently organized I'm not too worried about generalizing to the three rooms needed, nor to the addition of all the other waters.

The actual collection and placement of the waters is a whole other thing of course, and mildly terrifying, BUT it should be alright. Or at least, it's the only manual task generally speaking, and it's possible I can get the algorithm to do some or all of it for waters that only have a single tile type for instance.

So what's next?

- Build the other two rooms so that they can go in
- Solve the question of how you position waters across the different rooms (shouldn't be hard and should hopefully "just" involve including room information in the positions set according to how many slots each room has? Or just hard coding that element potentially).
- Collect waters and put them in the game
- Profit

I'm optimistic this won't take too too much longer to finish, but I can imagine still working on this through next week pending the collection of waters in particular.

---

# Water accumulation (Tuesday, 7 April 2020, 12:04PM)

We now have eight waters in place, meaning that the front room is full and we're into filling out the second room. Still 16 waters needed, but we're a third of the way there and I put in I think four or five waters today without much trouble in it.

The key observation for right now is that even with always placing the first tile in the gallery view and random placement into the plinth view, it really looks pretty neat and I think the project as a whole is totally justified by this experience of seeing these views.

Remaining is to place the next 16 waters and then to hand place the tiles in the plinth view at the view least (quite possible in the gallery view too). I suspect it will be wise, as I noted in one commit, to save the room data etc. into the generator so that I can re-generate the game with the hand-placed versions in place in case something comes up.

Lord knows not too many people are going to bother looking at this project, but I really think it's quite a lovely piece of work both in terms of its relationship to v r 3, to Unity versus Bitsy, and just to the general idea of a Bitsy community and practice. It's a winner.

---

# Water complete (Wednesday, 8 April 2020, 16:49PM)

Officially have all the water in the game now, which didn't take as long as I'd been concerned in might. It looks nice, just like before. Also added the linking thing so that every plinth includes a link to the game the water actually comes from.

Remaining is to curate the different waters, most obviously in the plinth view, but even in the gallery view, so that they match the way they appear in their respective games. I suppose that might be every so slightly boring, but it's also the kind of "good honest work" that I think can be an interesting component of this sort of project?

I'm trying to understand whether it makes sense to save them into the generator (I seem to write that over and over), just in case I need to be able to generate and make some other tweaks. I suspect it's the right thing to do, and it won't cost all that much effort to do so I don't think? So I can make a start on that. Game should therefore be finished tomorrow-ish? Release next week?

---

# Full draft (Thursday, 9 April 2020, 13:49PM)

I've sent the current state of the game to Jim and Mary for some thoughts and reactions, most obviously just to the usability of the experience. Particularly wonder whether people are able to find out that you can "zoom in" on the water with the eye and then leave that screen when desired... but it's pretty much just exploration? The sign probably helps though.

All told I think the game is... quite nice. It functions in just the same way as v r 3, but interrogates a different system and a different relationship to water and its implementation. You can still see trends and stylistic differences throughout the water which is neat. It's also nice to have the actual games as reference points, you can understand the water better through its actual narrative context, which isn't something I was able to do in v r 3. I suppose this game has more the sense of art where the previous maybe was more trade show?

So, now I wait for a bit of feedback and I release on Wednesday I think?

So probably time to think about what's next? I haven't written a "closing statement" for a game since the Bitsy punishment game? Which was six games ago (seven if you were to count mobile chogue). That's not very professional.

In fact, my whole documentation process has been pretty limited to process journals and to do lists and commit histories? Much less on the front of research questions and closing statements, which are just harder to do of course. But that doesn't mean they shouldn't be done. Perhaps, too, game making has just felt a bit harder to get through and this makes it harder to press on with more fiddly writing tasks at the same time?

That said, I did write those book chapters this year, so that counts for something!
