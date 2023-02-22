import { posts } from "./database.js";
import { registerEvent } from "./register.js";
import { render, renderSugestionList } from "./render.js";


render(posts)
renderSugestionList(posts)
registerEvent(posts)