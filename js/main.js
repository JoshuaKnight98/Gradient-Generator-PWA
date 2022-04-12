const app = Vue.createApp({
    data : ()=>({
        title: 'Gradient Generator',
        color1: '#ff0000',
        color2: '#3700ff',
        orientation: 'right'
    }),
    computed:{
        setColor(){
            return `background: linear-gradient(to ${this.orientation}, ${this.color1}, ${this.color2});`
        }
    }
})