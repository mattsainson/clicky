(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,name:"bananas",image:"./assets/images/bananas-4138784__340.jpg"},{id:2,name:"bread",image:"./assets/images/bread-4170338__340.jpg"},{id:3,name:"cake",image:"./assets/images/cake-4167209__340.jpg"},{id:4,name:"tomatoes",image:"./assets/images/tomato-4163959__340.jpg"},{id:5,name:"coffee",image:"./assets/images/coffee-4164445__340.jpg"},{id:6,name:"candy",image:"./assets/images/candy-4090697__340.jpg"},{id:7,name:"chocolate",image:"./assets/images/chocolate-4144993__340.jpg"},{id:8,name:"steak",image:"./assets/images/sideburn-4163932__340.jpg"},{id:9,name:"onions",image:"./assets/images/farmers-market-onions-4165546__340.jpg"},{id:10,name:"pretzels",image:"./assets/images/farmers-market-pretzels-4167346__340.jpg"},{id:11,name:"peppers",image:"./assets/images/red-4093848__340.jpg"},{id:12,name:"strawberries",image:"./assets/images/strawberries-4159028__340.jpg"}]},,function(e,a,t){e.exports=t(23)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(7),c=t.n(i),r=(t(16),t(9)),m=t(1),o=t(2),l=t(4),u=t(3),g=t(5),d=(t(17),t(18),function(e){return s.a.createElement("div",{className:"Nav"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},s.a.createElement("a",{className:"navbar-brand myNav",href:"/"},"Clicky Game"),s.a.createElement("ul",{className:"navbar-nav mr-auto"}),s.a.createElement("span",{className:"navbar-text"},"Score: ",e.score," High: ",e.highScore)))}),h=(t(19),function(e){function a(){return Object(m.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"jumbotron jumbotron-fluid myHeader"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"display-4"},"Clicky Game!"),s.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!")))}}]),a}(n.Component)),f=(t(20),function(e){function a(){return Object(m.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(e){return s.a.createElement("div",{className:"main"},this.props.children)}}]),a}(n.Component)),p=(t(21),function(e){return s.a.createElement("div",null,s.a.createElement("img",{key:e.key,src:e.image,className:"myImg rounded float-left",alt:e.name,onClick:e.onClick}))}),b=(t(22),function(e){function a(){return Object(m.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer mt-auto py-3"},s.a.createElement("div",{className:"container"},s.a.createElement("span",{className:"footerText"},"Made by ma++")))}}]),a}(n.Component)),k=t(8),j=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={images:k,totalClicks:0,clickedImages:[],highScore:0},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"endGame",value:function(){this.state.totalClicks>this.state.highScore&&this.setState({highScore:this.state.totalClicks}),this.setState({images:this.state.images.sort(function(){return Math.random()-.5}),totalClicks:0,clickedImages:[]})}},{key:"handleShuffle",value:function(e){this.state.clickedImages.includes(e)?this.endGame():(this.setState({totalClicks:this.state.totalClicks+1,clickedImages:[].concat(Object(r.a)(this.state.clickedImages),[e])}),12===this.state.totalClicks?this.endGame():this.setState({images:this.state.images.sort(function(){return Math.random()-.5})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(d,{score:this.state.totalClicks,highScore:this.state.highScore}),s.a.createElement(h,null),s.a.createElement(f,null,this.state.images.map(function(a){return s.a.createElement(p,{key:a.id,name:a.name,image:a.image,onClick:function(){return e.handleShuffle(a.id)}})})),s.a.createElement(b,null))}}]),a}(n.Component);c.a.render(s.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.be54392a.chunk.js.map