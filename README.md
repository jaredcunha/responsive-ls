# A Responsive LS prototype
This prototype is being to developed to determine if building a responsive site can be done in a way that will minimize disruption to an organization and the teams that build consumer facing products. 

## Running this site. 
You will need two processes to compile code for this site. [Gulp](http://gulpjs.com) and [Jekyll](http:jekyllrb.com). You mave several node modules to intstall. I'll document those later. Sorry.

The for the first time, you'll want to run `$ gulp images` to move images to their respective folders. 

You'll want two panes running simultaneously in your command line. One running the default task and one running Jekyll. 

```
$ gulp
```
```
$ bundle exec jekyll serve
```

You can view the site locally in your browser at `http://localhost:4000/responsive-ls`.

## Rules of engagement for the `_assets` folder
### CSS
1. Global Sass varibles and mixins will be placed in `./stylesheets/_modules`. 
2. CSS selectors are to placed in directories within the `./stylesheets/_partials` folder. Files are scoped to their respective components. It is acceptable to include local Sass variables within these files. 
3. Use [BEM](https://css-tricks.com/bem-101/) for nicely scoping selectors. Do not use ID or element selectors. Nesting using the `&` is recommended. Avoid unneccessary specificity creep by nesting selectors and use comment descriptors like so,:

```
// My Selector
//  - it does this thing
.my-selector {
    &__element {    
        }
    &--modifier {
        }
    }
}
```