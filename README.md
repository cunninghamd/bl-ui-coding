# BEN UI Test

Welcome to the BEN take-home test!

To help you get started, we've provided a starter kit based on [create-react-app](https://create-react-app.dev) and [Storybook](https://storybook.js.org). If you have another starter kit or boilerplate that you prefer, feel free to use that.

We've preserved the original `create-react-app` README in [README.create-react-app.md](README.create-react-app.md).

## What the test is about

We'd like you to create a simple application that consumes a GraphQL API. The application should, ideally, use reusable and testable components that also live in Storybook.

We will be using exogen's [GraphBrainz](https://github.com/exogen/graphbrainz) API that allows searching the [MusicBrainz](https://musicbrainz.org) database.

We have loaded this API into Apollo Studio, allowing you to inspect the schema and make test queries easier. You can access it here: https://studio.apollographql.com/public/BENBrainz/variant/current.

## Requirements

### Functional requirements:

* The user should be able to perform a search and see a list of matching artists.
* Clicking on a search result should show a details page with the following information:

    * The name of the artist.
    * The image of the artist.
    * Any aliases they have (if any).
    * The country of the artist.
    * Five top tracks with the associated play count.
    * Five similar artists.

* Clicking on a similar artist should show the details page of that artist.
* The artist detail page should have its own URL.

For a visual representation of the requirements, see this [Figma design](https://www.figma.com/file/HMq9aSTlriseEj6Mi5R6zA/BEN-UI-Test?node-id=0%3A1).

### Optional requirements

* Use reusable components.
* Add one of the components to Storybook.
* Implement a simple unit test for said component.
* Implement as much as you can of the [Figma design](https://www.figma.com/file/HMq9aSTlriseEj6Mi5R6zA/BEN-UI-Test?node-id=0%3A1).

### Tips

* Use the `search { artists {}}` query to find artists.
* Use the `lookup { artist() {}}` query to find information about an artist.
* Artists have both an `id` and a `mbid` (MusicBrainz ID). You'll want to use the `mbid` to be able to perform the `lookup` query.
* You'll have to use the `lastFM` field for top tracks, and similar artists.
* You'll have to use the `discogs` field for images.

### Useful commands

* `npm start` - Starts the development server.
* `npm run storybook` - Starts Storybook.
* `npm test` - Starts the testing server.

## GraphQL

At BEN, we use [Apollo GraphQL Client](https://www.apollographql.com/docs/react/why-apollo/), but you don't have to. Please use any framework you like.

If you're new to GraphQL, [How to GraphQL](https://www.howtographql.com) is a great resource to get up to speed.

## Notes

* You can use any 3rd party library or starter kit you want. What we've provided here is only for your convenience.
* This is not a CSS test, so you don't need to make the application look nice. Implementing the [Figma design](https://www.figma.com/file/HMq9aSTlriseEj6Mi5R6zA/BEN-UI-Test?node-id=0%3A1) is an optional requirement.
* GraphQL libraries typically offer multiple ways of performing the GraphQL calls (components, function calls), and we don't have a preference.
