If you are unfamiliar with git it is recommended you use the [GitHub Desktop](https://desktop.github.com/) app to clone the repo.

The url for the live site is [https://third.goldcomparts.show](https://third.goldcomparts.show/)

## Getting Started

#### Running The Site Locally

Before you start editing the site a good place to start is getting the site to run locally to do this you'll need to ensure you have Node 12.6.0 installed, if you don't have Node installed I recommend using [nvm](https://github.com/nvm-sh/nvm), once you have nvm installed you should be able to run nvm commands from inside your terminal.

In your terminal access the location of the repo on your local device. Type the `cd` command and then drag and drop the folder to save on typing.

Once you're inside the directory within terminal you'll then need to install the node modules (library files) for this project by using `npm install`. Once node has finished installing the required modules you are ready to run the site locally.

```
npm run dev
```

This will load the project into a localhost that you can access from a web browser, it will tell you in the terminal what the URL for this local host is. Once the site is running locally, any changes that you make to the code (and save) in your IDE of choice will automatically update your local host preview.

#### Choosing Your IDE

Now that you can run the site locally you'll want to edit the site using an IDE. As the site is built using Sapper (we'll get into that later) a lot of the files you'll be editing are in the format .svelte this means it's a good idea to figure out what IDE you want to use and get setup before trying to do any editing/development.

There's a few options available but if you've not got a strong preference stick to [Visual Studio Code](https://code.visualstudio.com/) as it has an [extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) for working with Sapper or, [Sublime Text](https://www.sublimetext.com/) which is a lightweight code editor which [can be setup](https://svelte.dev/blog/setting-up-your-editor) to read .svelte documents as HTML.

## Editing The Site

Once you've chosen your IDE and you've opened up the github repo you'll probably be wondering where's the index.html and what are all these files. The site is using a component framework called [Sapper](https://sapper.svelte.dev/docs) it's a bit like [Redux](https://react-redux.js.org/) or [Nuxt](https://nuxtjs.org/) for [React](https://reactjs.org/) and [Vue](https://vuejs.org/). But if that doesn't mean anything to you it just means it's a way to build a website that is quicker to load and cheaper to run.

To get started the two folders you'll probably care about the most for now are:

##### **static** - Where any media for the site lives.

It's pretty self explanatory the **img** folder is for the images & the **css** folder is for the global CSS. Inside the **img** folder you'll also find an **artworks** and **bios** folders where the images for artists and artworks need to end up.

##### **src** - Where the code is kept.

Inside the **src** folder you'll find a folder called **routes** this is where the pages of the site are kept and you should notice a file called **index.svelte** this is the homepage for the site and what will be loaded when a user visits the domain.

You'll also notice some pages like **about.svelte** which aren't currently being used. If you wanted to add this page back in or create an entirely new one you need to add the page in the **sitemap.xml** file for it to be reachable. If you wanted this page to appear in the navigation bar you would also need to go into the **components** folder within **src** where you should see **Nav.svelte** and edit the array called `menuItems`.

The **components** folder is where you'll find elements of a site that can be reused throughout the site like the top navigation bar **Nav.svelte** any changes to these files will happen site wide.

##### Svelte

The content of these .svelte files is mostly the same as what you'd expect from a HTML file the main difference is the use of [Svelte](https://svelte.dev/) this lets you do some things which may look odd if you have only ever used HTML and Javascript it is **highly recommended** you go through through the [tutorials](https://svelte.dev/tutorial/basics) on the svelte website to understand how to use it as it will generally make your life easier and is really easy to pick up. If you ever find yourself needing to write to Javascript for an interaction etc it's worth seeing if there is a way to do it in Svelte rather than vanilla JS as it will often be easier.

##### Bulma

The site also uses the CSS framework [Bulma](https://bulma.io/) this saves writing as much CSS in a similar way to how Svelte saves you from writing Javascript. It is worth becoming familiar with if you want to add in any functionality as you will probably find you won't have to do as much work yourself.

##### Changing The Basics

If you just want to make simple changes to colour schemes or fonts the easiest way to figure out what you need to change is by using the inspector within google chromes development tools. For any element you hover over you will see something like `div#gradient.svelte-gx22xr` to find that within the code you just ignore everything before the **#** and everything after **.svelte** leaving you with **gradient** which can just use the find tool in your IDE to see where that code is within the page you're editing.

The first place to look is always the **.svelte** of the page you're editing for any styling, if you can't find what you're looking for it will be in the global CSS file found in the static folder``static/css/global.css` . You should always do it in this order as you may find someone has overwritten the global CSS within the **.svelte** file.

## Deployment

To publish any changes you've made to your local copy of the site you should follow this check list.

1. Save any changes to your local files.
2. Check that your changes work locally using `npm run dev`.
3. Push your changes to the GitHub repo.
4. Let the other people know within your team that you are about to deploy to the live site as it will break temporarily.
5. Use `npm run deploy` to push your local copy of the site to the live public site.
6. Check it works on the live site (you might have to wait a couple minutes).

This will export the site to `public` and then commit it to the `gh-pages` and push to Github

