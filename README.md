# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Typeahead

### Description

Typeahead or autocomplete is a common feature that people come across on websites. For example, when you are searching on Google, you will notice a word populates before you finish typing.

### Config

Its necessary to create a `.env` file and assign `VITE_API_KEY` to work with the `movies api`.

### Requirements

**Must have**

- Whenever the user focuses the text field and the value changes, it should show the list of suggestions.

- Whenever the text input looses focus (either because of clicking away or becasue of pressing Tab for example) the suggestions should disappear, so they don't keep covering the rest of the app.

- When the user writes something in the text field, it should continuously fetch and show suggestions for anything written, updating it live, without the need to click a button or press the ENTER key or anything else

- We don't want to blow up our API by sending so many unnecessary requests, so whenever the text field is changed, instead of immediately sending a request, it should wait for 250 ms of no new changes before actually sending a request to the API.

- Once the suggestions appear, hovering the mouse pointer on any specific suggestion should highlight it.

**Nice to have**

- Add a cache layer for the data

- Have another list which will have selected movies from your search list.

<hr />