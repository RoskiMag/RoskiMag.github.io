(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(63),s=a.n(l),r=a(10),o=a(11),c=a(13),m=a(12),u=a(14),h=a(138),d=a(139),p=a(137),b=(a(73),a(64)),f=a.n(b),g=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"nav-container"},i.a.createElement(p.a,{to:"/"},i.a.createElement("img",{src:f.a,alt:"logo",className:"logo"})),i.a.createElement(p.a,{to:"/submissions"},i.a.createElement("p",{className:"submissions-link"},"SUBMISSIONS")))}}]),t}(n.Component),k=(a(77),a(65)),C=a.n(k),y=function(){return i.a.createElement("div",{className:"home-container"},i.a.createElement("p",{className:"home-body"},"Roski Mag is a student run ",i.a.createElement("br",null),"publication at the University ",i.a.createElement("br",null),"of Southern California. We ",i.a.createElement("br",null),"showcase student art and ",i.a.createElement("br",null),"design work."),i.a.createElement("div",{className:"home-apply"},i.a.createElement("img",{src:C.a,alt:"blob",className:"home-vector1"}),i.a.createElement("a",{className:"home-apply-link",href:"https://roskimag.typeform.com/to/xc4TCO"},"apply here")))},E=a(20),v=(a(79),a(36));v.initializeApp({apiKey:"AIzaSyCqeVa44-qLO9HItGqqbxqE2EuhA0FlLr4",authDomain:"roskimag-a9ec0.firebaseapp.com",databaseURL:"https://roskimag-a9ec0.firebaseio.com",projectId:"roskimag-a9ec0",storageBucket:"roskimag-a9ec0.appspot.com",messagingSenderId:"153926047220"}),v.firestore().settings({timestampsInSnapshots:!0});var O=v,j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).ref=O.firestore().collection("submissions"),a.state={name:"",title:"",email:"",medium:"",year:"",dateCompleted:"",school:"",websiteLink:"",artistStatement:"",link:""},a.handleChange=a.handleChange.bind(Object(E.a)(Object(E.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,this.setState(t)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,i=a.title,l=a.email,s=a.medium,r=a.year,o=a.dateCompleted,c=a.school,m=a.websiteLink,u=a.artistStatement,h=a.link;this.ref.add({name:n,title:i,email:l,medium:s,year:r,dateCompleted:o,school:c,websiteLink:m,artistStatement:u,link:h}).then(function(e){t.setState({name:"",title:"",email:"",medium:"",year:"",dateCompleted:"",school:"",websiteLink:"",artistStatement:"",link:""})}).catch(function(e){console.error("Error adding document: ",e)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",name:"name",placeholder:"name",spellCheck:"false",value:this.state.name,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",name:"title",placeholder:"title",spellCheck:"false",value:this.state.title,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",name:"email",placeholder:"email",spellCheck:"false",value:this.state.email,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",name:"medium",placeholder:"medium",spellCheck:"false",value:this.state.medium,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",name:"year",placeholder:"year",spellCheck:"false",value:this.state.year,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",name:"dateCompleted",placeholder:"date completed (mm/dd/yy)",spellCheck:"false",value:this.state.dateCompleted,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",name:"school",placeholder:"school",spellCheck:"false",value:this.state.school,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",name:"websiteLink",placeholder:"website link",spellCheck:"false",value:this.state.websiteLink,onChange:this.handleChange,required:!0}),i.a.createElement("input",{type:"text",name:"link",placeholder:"link to hosted files (ensure permissions are public)",spellCheck:"false",value:this.state.link,onChange:this.handleChange,required:!0}),i.a.createElement("textarea",{name:"artistStatement",value:this.state.artistStatement,onChange:this.handleChange,placeholder:"artist statement",spellCheck:"false",required:!0}),i.a.createElement("input",{className:"submit",type:"submit",value:"submit"}),i.a.createElement("p",{className:"disclaimer"},"By checking this box you are agreeing to Roski Mag\u2019s terms and conditions. By submitting your work, you are agreeing to allow Roski Mag to potentially publish it on its online platform and printed magazine.")))}}]),t}(n.Component),S=(a(133),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onCollectionUpdate=function(e){var t=[];e.forEach(function(e){var a=e.data(),n=a.name,i=a.title,l=a.email,s=a.medium,r=a.year,o=a.dateCompleted,c=a.school,m=a.websiteLink,u=a.artistStatement,h=a.link;t.push({key:e.id,doc:e,name:n,title:i,email:l,medium:s,year:r,dateCompleted:o,school:c,websiteLink:m,artistStatement:u,link:h})}),a.setState({submissions:t})},a.ref=O.firestore().collection("submissions"),a.unsubscribe=null,a.state={submissions:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(n.Component)),w=function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement("div",null,i.a.createElement(g,null),i.a.createElement(d.a,{path:"/",component:y,exact:!0}),i.a.createElement(d.a,{path:"/submissions",component:j,exact:!0}),i.a.createElement(d.a,{path:"/view-submissions",component:S,exact:!0}))))}}]),t}(n.Component);s.a.render(i.a.createElement(w,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a.p+"static/media/RM_logo.be518403.png"},65:function(e,t,a){e.exports=a.p+"static/media/RM_blob.55968c57.png"},68:function(e,t,a){e.exports=a(136)},73:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){}},[[68,2,1]]]);
//# sourceMappingURL=main.1507d43e.chunk.js.map