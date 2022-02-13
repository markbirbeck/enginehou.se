# Hello World

This is both a blog and a blog generator.

Like most programmers, I've tried many types of blogging software and I've also rolled my own. Often I'll find a blog engine I'm happy with, and stick with it for years. Perhaps my favourite from the past was Octopress, which was a version of Jekyll with lots of plugins already curated. For a tech blogger it was great.

But then something went wrong and the builds failed in some new environment or other, the project went stale, and I opted for Jekyll instead.

Then I thought, why not take Gulp and use it to create a blogging engine? Gulp already had a great ecosystem of plugins, so if you built a blogging workflow around Gulp you would also be able to use those plugins 'for free'.

But again, things didn't quite square. There was always something I was having to hack to make it work, and so my blog kind of ossified.

Then came the newer generators like NextJS and Gatsby. Effectively you have a bit of code that grabs a bunch of input files, and formats them as required, like we always did with server-side code. Except instead of being limited to rendering these pages on the server, the same mechanism is now used to generate static files for deployment--just like Jekyll.

But great as these technologies are, for me they don't sit right. In particular, the way that different layers of abstraction are happily merged feels uncomfortable and would tend to make it difficult to move around in the future; I don't want to use React to generate a simple site, I don't want my blog posts to be stored with my blogging engine...and so on.

So as I usually do every few years, I decided to write a blogging engine.

It will be different this time, I told myself, just like I told myself before.

But this time, it _really is_ different. Because this time there is `unified`.

## Unified

Even if you haven't heard of Unified, you will probably have used it, since it's core to tools like Gatsby and NextJS. It's a set of small modules that handle moving between formats like Markdown and HTML. It can validate, augment, transform, and more besides.

And if I can't write a blogging engine with Unified, then I...well, let's just say it will be a bad day.

## The Blog That Builds Itself

So as I said at the top, this is a blog that for now will also contain the steps to create the generator. As I need more features I'll add a ticket, add the feature, and then possibly blog about how it was built and the decisions behind it. This blog will cover much more than the blogging engine, of course, but it might be interesting to comment on the steps as I add to the blog, and so add to the generator.

Eventually the generator will be separate, because I want to be able to _see_ my markdown files in a simple folder (no MDX, thanks), and I want them to be completely independent of any engine that might be used to generate their HTML--mine included.

## License

MIT
