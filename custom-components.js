
Vue.component('carousel', {
    props: ['title', 'info', 'img', 'active'],
    template: `<div :class="'col-10 carousel-item' + (active ? ' active' : '')">
                    <img class="d-block w-100" v-bind:src="img" v-bind:alt="title">
                    <div class="carousel-caption">
                      <h3>{{ info }}</h3>
                      <p>{{ title }}</p>
                    </div>
                  </div>`
})
new Vue({el: '#c_showcase'});
new Vue({
    el: '#cards',
    data: {
        positions: [{name: "Writer", tag: "",
                    description: "We don't want to just change the visual style. Transferring something into " +
                        "minecraft needs more than that. What exactly does that mean? That's on you."},
                    {name: "Blockbuster Expert", tag: "",
                        description: "You'll decorate sets with extras and model blocks with the help of " +
                            "the blockbuster mod. With this great creative freedom comes great responsibility."},
                    {name: "Modeller", tag: "Blender/Blockbench",
                        description: "We don't want to just change the visual style. Transferring something into " +
                            "minecraft needs more than that. What exactly does that mean? That's on you."},
                    {name: "VFX Artist/Editor",
                        description: "Even though our builders and Blockbuster Experts try their best to build an immersive world" +
                            " we need to add even more in post to finish of a video."},
                    {name: "Builder", tag: "Java/PE",
                        description: "Our building department recreates entire worlds block-by-block. " +
                            "Show us your creativity and become a CinemaCraft Builder."},
                    {name: "Voice Actor",
                        description: "In order to transfer star wars into minecraft, we'll have to change up the script. " +
                            "You'll be the voice of this script."},
                    {name: "Developer",
                        description: "Not only do we need people to maintain our Website and Discord Bot, but also " +
                            "do we need - as a Film and FX Studio - some internal tools."}]
    }
})

const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
if(width > 900 && window.location.hash == '') window.scrollTo(0, 100)
