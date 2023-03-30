const {createApp} = Vue;

createApp({
    data(){
        return{
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    class: 'slide active',
                    classPreview: 'preview selected',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    class: 'slide',
                    classPreview: 'preview',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    class: 'slide',
                    classPreview: 'preview',
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    class: 'slide',
                    classPreview: 'preview',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    class: 'slide',
                    classPreview: 'preview',
                    classImage: 'avengers'
                }
            ],
            autoPlay: null,
            index : 0,
        }
    },
    methods: {
        up() {
            console.log(this.index);
            console.log(this.images.length);
            if(this.index === 0){
                this.index = this.images.length - 1;
            } else {
                this.index--;
            }
        },
        down(){
            console.log(this.index);
            if(this.index === this.images.length - 1){
                console.log('ciao');
                this.index = 0;
            } else {
                this.index++;
            }
        },
        autoplay(){
            this.autoPlay = setInterval(this.up, 2000);
        },
        stopautoplay(){
            clearInterval(this.autoPlay);
        }
      }
}).mount('#app');