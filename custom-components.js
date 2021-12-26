
Vue.component('carousel', {
    props: ['title', 'info', 'img', 'active'],
    template: `<div :class="'carousel-item' + (active ? ' active' : '')">
                    <img class="d-block w-100" v-bind:src="img" v-bind:alt="title">
                    <div class="carousel-caption">
                      <h3>{{ info }}</h3>
                      <p>{{ title }}</p>
                    </div>
                  </div>`
})
Vue.component('job-card', {
    props: [],
    template: `
        <div>
        
        </div>
    `
})
new Vue({el: '#c_showcase'});