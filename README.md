# Dev Test

This is just to gage where your skills are at, don't stress to much about it. Just try to be clean with your code! Some recommendations I have are:

  - Comments! CSS/HTML/JS/PHP, Comments are always cool, like bowties.....(20pts if you get the reference.....)
    - They make life easier for the guy after you who has to figure out why you did what you did.
  - Keep it dry, try not to repeat yourself.
  - utilize your frameworks.
  - Learn & try something new.
     - We always try to use new tech or guidelines on projects to learn new skills or ways of structuring our code to keep things new and fresh so we don't get bored. 

### The Objective
What youll do is simple! Just take this design and recreate it. Don't worry about using the same images just find some replacment images. For the fonts, just try and match the best you can using google fonts or browser fonts.

I am just more or less going for your code and see what you can do. 

I have three requests I want done though. 

- Install Wordpress on a Local Machine
    - We use Scotchbox but you can use whatever you want.
    - Use the theme WP-Joints / The theme has great documentation btw / Zurb Foundation the framework we use has AMAZING documentation
    - You'll need to install compass and use compass / To compile sass you need to be in the assets/scss. type 'compass watch' (command line)
    - I don't care if you resort to the large-8 medium-4 class names but least give the CSS @includes for the grid a shot.  I can provide you for examples if you can't get it. 


- Use [GIT](https://github.com/) to track your progress. I'd like to be able to see what you do and how you build the project. 
    - A good way to do this is commit after everytime you finish something like, Menu sections, Header section, etc. You could also just commit every 15 minutes with what you've done. Make commit messages descriptful but not to long. 
    - Fork this repo
   		- Clone the Fork
        - Make your commits
        - Push your changes
        - Then make a merge request when finished to sumbit your work. 

    - Write some hand written JS to make a slideshow. Foundation gives a slideshow but I want to see some hand written JS Code. 
    
- Header
    - Menu 
        - Use a Wordpress Menu
        - Just get it to look like the comp on desktop, on mobile you can do what you need. You can use a jQuery plugin to mobilize it, use foundations menu system, or write a few jQuery lines Or even just style it to look good.
    - Big blue are
        - Lets throw a slideshow in here that will link to off sites. 
            - What you'll need to do is create a custom post type (pt_slideshow)
            - Then Add custom fields to that Post type
            - Add an Image field
            - Add a url field
            - Then make them display linked on the page.
- Front 
    - Ipsum Section
        - That lorem ipsum area, create a custom WYSIWYG field that will render to that spot on the front page
        - The icons 4 column deal
            - Decide the best way to do this on your own
            - I would use a custom fields possibly a repeater

    - Work
        - Create a post type called pt_work
        - using Advanced custom fields give it a image field, project link, use title field 
        - Make it look like comp.

    - Mountain image
        - Give the front page a custom field for uploading images to this section.
        - I dont want it to work like the slide show but I want to be able to upload images and select which one I want to show
        - However if one is not selected I want it to default a certain images

    - Our Team
        - Create a team post type
        - Make the fields use see fit
        - Get em to show

    - Footer
        - Give me a Social Media menu via wordpress
        - Give me a menu for the other links
        - Contact area
            - There are a lot of ways to do this
            - I condone using a plugin for this if you wish, I reccomend Contact form 7 or ninja forms. 



#### Tools we use that could be helpful 
Speaking of new things, we use these tools on almost every project, so you are more than welcome to use them and try something or use them if you know them!

- Git - https://github.com
    - Git is what we use for version control so it's good you use it. As above I have requested you least track your progress with it. 
    
- Sass (CSS the cool, fast, easier way) - http://sass-lang.com/
    - We write 99% of our projects ground up in SCSS (Sass) and about 50% of our client work we are handed uses Sass.
    - If you have never used it and wanna try, explore what Variabels are and Mixins! Really powerful stuff and helps keeps things D.R.Y!
- Compass Sass - http://compass-style.org/
    - I use Compass to compile my Sass for me, it always provides tons of useful Mixins.
- SMACSS  - https://smacss.com/
    - Our projects can have a lot of Code, specially CSS, we use SMACSS to help us keep our code structured. We don't follow this to the T. But we do try our best too. 
    - I am more than likely going to make you read this anyways.....
- Foundation Framework - http://foundation.zurb.com/
    - Foundation is my favorite framework in the world! Though I mainly use the grid from it and just the [grid](http://foundation.zurb.com/docs/components/grid.html).  The [grid](http://foundation.zurb.com/docs/components/grid.html) plays amazing with [SCSS](http://foundation.zurb.com/docs/components/grid.html). 
    - It also allows you to choose what you use so you dont have a million files floating around from them.
    - It installs SUPER EASY with Compass! http://foundation.zurb.com/docs/sass.html
    - But also works great with bower, grunt, gulp, etc.  
    



