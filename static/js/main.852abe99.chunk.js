(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(26)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),i=a.n(c),r=a(1),s=a(2),o=a(4),d=a(3),h=a(5),m=(a(8),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"component-display"},l.a.createElement("div",null,this.props.value))}}]),t}(l.a.Component)),u=a(10),p=a.n(u),k=(a(19),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"0"==this.props.value?"component-green-display":"component-display"},l.a.createElement("div",null,this.props.value))}}]),t}(m));k.propTypes={value:p.a.string};a(20);var E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(){a.props.clickHandler(a.props.name)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=["component-button",this.props.orange?"orange":"",this.props.wide?"wide":""];return l.a.createElement("div",{className:e.join(" ").trim()},l.a.createElement("button",{onClick:this.handleClick},this.props.name))}}]),t}(l.a.Component),v=(a(21),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){a.props.clickHandler(e)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"component-button-panel"},l.a.createElement("div",null,l.a.createElement(E,{name:"AC",clickHandler:this.handleClick}),l.a.createElement(E,{name:"+/-",clickHandler:this.handleClick}),l.a.createElement(E,{name:"%",clickHandler:this.handleClick}),l.a.createElement(E,{name:"\xf7",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(E,{name:"7",clickHandler:this.handleClick}),l.a.createElement(E,{name:"8",clickHandler:this.handleClick}),l.a.createElement(E,{name:"9",clickHandler:this.handleClick}),l.a.createElement(E,{name:"x",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(E,{name:"4",clickHandler:this.handleClick}),l.a.createElement(E,{name:"5",clickHandler:this.handleClick}),l.a.createElement(E,{name:"6",clickHandler:this.handleClick}),l.a.createElement(E,{name:"-",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(E,{name:"1",clickHandler:this.handleClick}),l.a.createElement(E,{name:"2",clickHandler:this.handleClick}),l.a.createElement(E,{name:"3",clickHandler:this.handleClick}),l.a.createElement(E,{name:"+",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(E,{name:"0",clickHandler:this.handleClick,wide:!0}),l.a.createElement(E,{name:".",clickHandler:this.handleClick}),l.a.createElement(E,{name:"=",clickHandler:this.handleClick,orange:!0})))}}]),t}(l.a.Component));a(6);a(22),a(23);var f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={hidden:!1},a.flag=!1,a.handleClick=function(e){},a.setHidden4=function(){a.state.hidden=!0,a.setState({})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.hidden&&(this.state.hidden=this.props.hidden),0==this.state.hidden?l.a.createElement("div",{class:"alert"},l.a.createElement("div",{class:"alertBase"},l.a.createElement("div",{class:"inner"},l.a.createElement("div",{class:"title"},this.props.message),l.a.createElement("div",{class:"text"},"Try again, click AC.")),l.a.createElement("div",{class:"button",onClick:this.setHidden4},"OK"))):(this.state.hidden=!1,null)}}]),t}(l.a.Component),C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={total:null,next:null,operation:null,isDisplayingError:!1},a.handleClick=function(e){a.state.clicks=a.state.clicks?a.state.clicks+1:1,"AC"==e&&(a.state.clicks=0,a.state.mostRecentMessage=""),a.setState(function(e,t){if("AC"===t){var a=Math.floor(1e3*Math.random())%300;return{total:a,next:a,operation:null,seed:a}}if(/[0-9]+/.test(t))return"0"==e.total||"0"==e.next?{next:e.next,total:e.total,seed:e.seed,operation:e.operation}:"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?("0"===e.next||e.next,{next:""+(parseFloat(e.next)-parseFloat(t)+parseFloat(e.seed))%parseFloat(e.seed),total:e.total,seed:e.seed,operation:e.operation}):{next:t,total:null};return{next:e.next,total:e.total,seed:e.seed,operation:e.operation}}(a.state,e))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){0==this.state.next&&""==this.state.mostRecentMessage&&(this.state.isDisplayingError=!0,this.state.mostRecentMessage="Congrats on finishing in "+this.state.clicks+" clicks!");var e=this.state.isDisplayingError;return this.state.isDisplayingError=!1,l.a.createElement("div",{className:"component-app"},l.a.createElement(f,{message:this.state.mostRecentMessage,hidden:0==e}),l.a.createElement(k,{value:this.state.next||this.state.total||"0"}),l.a.createElement(v,{clickHandler:this.handleClick}))}}]),t}(l.a.Component);a(24),a(25);i.a.render(l.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.852abe99.chunk.js.map